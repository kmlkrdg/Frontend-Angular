import { VisitorStateService } from './../../visitor-state.service';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Post } from 'src/app/models/post';
import { User } from 'src/app/models/user';
import { AdminService } from 'src/app/shared/admin.service';

@Component({
  selector: 'app-admin-home',
  templateUrl: './admin-home.component.html',
  styleUrls: ['./admin-home.component.css']
})
export class AdminHomeComponent {
  postList: Post[] = [];
  userList:User[] = [];

  constructor(private router: Router, private postService: AdminService,public VisitorStateService:VisitorStateService) {
    this.postList = [];
  }
  ngOnInit(): void {
    this.postService.getPosts().subscribe((x) => {
      this.postList = x;
    });
    this.postService.getUsers().subscribe((x) =>{
      this.userList = x;
    })
  }
}
