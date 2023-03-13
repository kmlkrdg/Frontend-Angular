import { Injectable } from '@angular/core';
import { FormGroup } from '@angular/forms';
import {Visitor} from './models/visitor'

@Injectable({
  providedIn: 'root'
})
export class VisitorStateService {

  public confirmedVisitors : Visitor[] = [];
  public visitors : Visitor[] = [];
  constructor() { }

  deleteVisitor(email:string){
   this.visitors = this.visitors.filter(x=>x.email != email);
  }
  addVisitor(newVisitor:Visitor){
    this.visitors.push(newVisitor);
  }
  resetForm(form: FormGroup){
    form.reset();
    form.controls['publishdateExpire'].setValue('1 month');
  }

  filterConfirm(): Visitor[] {
    return this.confirmedVisitors = this.visitors.filter(x=>x.isConfirmed == true);
  }
}
