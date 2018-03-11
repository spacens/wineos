import {Injectable} from '@angular/core';
import {ContentService} from '../content.service';
import {Observable} from 'rxjs/Observable';
import {forkJoin} from 'rxjs/observable/forkJoin';

export class BlogPost {
  id = '';
  title = '';
  category = '';
  description = '';
  image = '';
  date: Date;

  get link(): string[] {
    return ['/blog', this.category, this.id];
  }

  fillFromBlogResponse(item: any): BlogPost {
    this.id = item.nid;
    this.title = item.title;
    this.category = item.field_blog_tags;
    this.description = item.field_page_content.field_text_content;
    this.image = item.field_page_content.field_image;
    this.date = new Date();
    return this;
  }

}
@Injectable()
export class BlogService {

  constructor(private contentService: ContentService) {
  }

  getBlogPost(id: string): Observable<BlogPost> {
    return this.contentService.getPage(`/views/blog/${id}`).map(posts => {
      posts.forEach(post => {
        post.field_page_content = this.parseFieldContent(post.field_page_content);
      });
      return posts.length ? posts[0] : {};
    }).map(post => (new BlogPost()).fillFromBlogResponse(post));
  }

  getCategoryList(): Observable<string[]> {
    return this.getAllPosts().map(posts => {
      const tags = [];
      for (const post of posts) {
        if (tags.indexOf(post.field_blog_tags) === -1 && post.field_blog_tags) {
          tags.push(post.field_blog_tags);
        }
      }
      return tags;
    });
  }

  getPostsByCategory(): Observable<any> {
    return forkJoin(
      this.getCategoryList(),
      this.getAllPosts()
    ).map(([categories, posts]) => {
      return categories.map(category => {
        return {
          category,
          items: posts.filter(post => post.field_blog_tags.toLowerCase() === category.toLowerCase())
        };
      });
    });
  }

  getPostsFromCategory(category: string): Observable<any> {
    category = category.toLowerCase();
    return this.getAllPosts().map(posts => {
      return posts.filter(post => category === 'all' || post.field_blog_tags.toLowerCase() === category);
    });
  }


  getAllPosts(): Observable<any> {
    return this.contentService.getPage('/views/blog/all')
      .map(posts => {
        posts.forEach(post => {
          post.field_page_content = this.parseFieldContent(post.field_page_content);
        });
        return posts;
      });
  }

  private parseFieldContent(text: string): any {
    const parsed = JSON.parse(text);
    const result = parsed[0];
    result.field_image = parsed.length > 1 ? parsed[1].field_image : '';
    return result;
  }

}

