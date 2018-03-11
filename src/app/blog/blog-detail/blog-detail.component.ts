import { Component, OnInit } from '@angular/core';
import {BlogPost, BlogService} from '../blog.service';
import {ActivatedRoute} from '@angular/router';
import {SliderItem} from '../../includes/slider/slider.component';
import {mergeMap} from 'rxjs/operators';
import {forkJoin} from 'rxjs/observable/forkJoin';
declare var window: any;
@Component({
  selector: 'app-blog-detail',
  templateUrl: './blog-detail.component.html',
  styleUrls: ['./blog-detail.component.scss'],
  providers: [BlogService]
})
export class BlogDetailComponent implements OnInit {
  slides: SliderItem[] = [];
  blogPost: BlogPost;

  constructor(private blogService: BlogService, private route: ActivatedRoute) {
    this.blogPost = new BlogPost();
  }

  ngOnInit() {
    this.route.params.pipe(
       mergeMap(params => {
        return forkJoin(
          this.blogService.getBlogPost(params['id']),
          this.blogService.getPostsFromCategory(params['category'])
        );
      })
    ).subscribe(data => {
      this.blogPost = data[0];
      this.slides = data[1].map(item => (new SliderItem()).fillFromBlogPostRequest(item));
      window.setTimeout(window.initSliderBlog, 1000);
    });
  }

}
