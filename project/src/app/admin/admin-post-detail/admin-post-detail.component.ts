import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Post } from 'src/app/models/post';
import { Comment } from 'src/app/models/comment';
import { AdminService } from 'src/app/shared/admin.service';

@Component({
  selector: 'app-admin-post-detail',
  templateUrl: './admin-post-detail.component.html',
  styleUrls: ['./admin-post-detail.component.css']
})
export class AdminPostDetailComponent implements OnInit {
  comment?: Comment;
  post?:Post;
constructor( private activatedRoute: ActivatedRoute,
  private router: Router,
  private postService: AdminService){}


  ngOnInit(): void {
    const id = this.activatedRoute.snapshot.params['id'];

    this.postService.getCommentsByPostId(id).subscribe((x) => {
      this.comment = x;
    });

    this.activatedRoute.params.subscribe((param: any) => {
      console.log(param);
      this.postService.getCommentsByPostId(param.id).subscribe((x) => {
        this.comment = x;
      });
    });
  }
}
