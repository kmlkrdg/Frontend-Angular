import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { User } from 'src/app/models/user';
import { AdminService } from 'src/app/shared/admin.service';

@Component({
  selector: 'app-admin-user-detail',
  templateUrl: './admin-user-detail.component.html',
  styleUrls: ['./admin-user-detail.component.css']
})
export class AdminUserDetailComponent implements OnInit{
  user?: User;

  constructor( private activatedRoute: ActivatedRoute,
    private router: Router,
    private userService: AdminService){}

  ngOnInit(): void {
    const id = this.activatedRoute.snapshot.params['id'];

    this.userService.getById(id).subscribe((x) => {
      this.user = x;
    });

    this.activatedRoute.params.subscribe((param: any) => {
      console.log(param);
      this.userService.getById(param.id).subscribe((x) => {
        this.user = x;
      });
    });
  }

}
