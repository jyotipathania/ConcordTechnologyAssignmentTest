import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { NgForm } from '@angular/forms';
import { Addnew } from '../addnew';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-family-tree',
  templateUrl: './family-tree.component.html',
  styleUrls: ['./family-tree.component.scss']
})
export class FamilyTreeComponent implements OnInit {
  isValidFormSubmitted = false;
  url = 'http://localhost:3000/';
  familyData:any;
  user:any;
  newMember:Object = [];
  model:Addnew = {
    id: '',
    name: '',
    gender: ''
  }
  constructor(private http: HttpClient,private modalService: NgbModal) { }

  ngOnInit(): void {
    this.getAll()
      
    }

    getAll() {
       this.http.get(this.url + 'family').subscribe((res)=>{
        this.familyData = res;
       })
        
      }

      openModal(targetModal, user) {
        this.modalService.open(targetModal, {
         centered: true,
         backdrop: 'static'
        });
               this.user = user
               this.model.gender = "";
               this.model.name = "";
               
       }

      onSubmitAddNewForm(form: NgForm) {
        this.isValidFormSubmitted = false;
        let getChildrenLen
        if(form.invalid) return;
        if(this.user.children){
          getChildrenLen = Object.keys(this.user.children).length + 1;
        } else {
          getChildrenLen = 1;
          this.user.children = []
        }
        
        this.model = form.value;
        this.model.id = this.user.id + "_" +getChildrenLen;
        console.log(this.model)
        this.user.children.push(this.model)
        console.log(this.user)
        this.isValidFormSubmitted = true;
        // this.http.post(this.url + id).subscribe((res)=>{
        //  this.familyData = res;
        // })
        this.modalService.dismissAll()
         
       }
  

}
