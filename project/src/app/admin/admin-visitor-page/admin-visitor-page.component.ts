import { Component } from '@angular/core';
import { VisitorStateService } from 'src/app/visitor-state.service';

@Component({
  selector: 'app-admin-visitor-page',
  templateUrl: './admin-visitor-page.component.html',
  styleUrls: ['./admin-visitor-page.component.css']
})
export class AdminVisitorPageComponent {
  constructor(public visitorService: VisitorStateService){
    
  }
  isChecked: boolean = false;
  isDisabled: boolean = false;
  checkValue(event: any){
    this.isChecked =  !this.isChecked;
    this.isDisabled=true;
    
 }
}
