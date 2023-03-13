import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Post } from 'src/app/models/post';
import { AdminService } from 'src/app/shared/admin.service';

@Component({
  selector: 'app-admin-post-page',
  templateUrl: './admin-post-page.component.html',
  styleUrls: ['./admin-post-page.component.css']
})
export class AdminPostPageComponent implements OnInit{
  postList: Post[];

  constructor(private router: Router, private postService: AdminService) {
    this.postList = [];
  }

  ngOnInit(): void {
    this.postService.getPosts().subscribe((x) => {
      this.postList = x;
    });
  }

  goToPostDetail(id: number) {
    this.router.navigate(['/admin/post-detail',id]);
  }




}
