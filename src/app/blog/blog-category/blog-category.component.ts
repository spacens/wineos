import {Component, OnInit} from '@angular/core';
import {BlogService} from '../blog.service';
import {ActivatedRoute} from '@angular/router';
import {mergeMap} from 'rxjs/operators';
import {Link} from '../../includes/menu/menu.component';
import {forkJoin} from 'rxjs/observable/forkJoin';
import {ArchiveItem} from '../../includes/archive-item/archive-item.component';

@Component({
  selector: 'app-blog-category',
  templateUrl: './blog-category.component.html',
  styleUrls: ['./blog-category.component.scss'],
  providers: [BlogService]
})
export class BlogCategoryComponent implements OnInit {

  categoryLinks: Link[];
  archiveItems: ArchiveItem[];

  constructor(private blogService: BlogService, private router: ActivatedRoute) {
  }

  ngOnInit() {

    this.router.params.pipe(
      mergeMap(params => {
        return forkJoin(
          this.blogService.getCategoryList(),
          this.blogService.getPostsFromCategory(params['category'])
        );
      })
    ).subscribe(([categoryList, posts]) => {
      categoryList.unshift('all');
      this.categoryLinks = categoryList.map(cat => {
        const item = new Link();
        item.title = cat;
        item.link = ['/blog', cat];
        return item;
      });

      this.archiveItems = posts.map(post => (new ArchiveItem()).fillFromBlogRequest(post));

    });
  }

}
