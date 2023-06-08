import { Component, OnInit } from '@angular/core';
import { UserServiceService } from '../user-service.service';
import {timer} from 'rxjs';
import { FormBuilder,FormGroup } from '@angular/forms';
import { User } from '../user';
import { UpdateUser } from '../update-user';

@Component({
  selector: 'app-show-users',
  templateUrl: './show-users.component.html',
  styleUrls: ['./show-users.component.css']
})
export class ShowUsersComponent implements OnInit {

userData!:any;
display = "none";
formValue!:FormGroup;
_userModelobj: UpdateUser= new UpdateUser(0,'','','','');
userId:number=0;


  constructor(private _userService:UserServiceService,private _formBuilder:FormBuilder) { }


  getAllUsers(){
    this._userService.getUsers().subscribe(res=>{
      this.userData=res;
    })
  }

  deleteUser(row:any)
  {
    this._userService.deleteUser(row.id).subscribe(res=>{
      alert("Employee Deleted")
    })
    timer(300).subscribe(x=>{window.location.reload();})
  }

  openModal(row:any) {
    this.display = "block";
    this.onEdit(row);
  }
  onCloseHandled() {
    this.display = "none";
    this.updateUser();
  }

  onEdit(row:any)
  {
    this.formValue.controls['name'].setValue(row.name);
    this.formValue.controls['country'].setValue(row.country);
    this.formValue.controls['city'].setValue(row.city);
    this.formValue.controls['job'].setValue(row.job);
    this.userId=row.id;
  }

  updateUser()
  {
    this._userModelobj.id=this.userId;
    this._userModelobj.name=this.formValue.value.name;
    this._userModelobj.country=this.formValue.value.country;
    this._userModelobj.city=this.formValue.value.city;
    this._userModelobj.job=this.formValue.value.job;
    this._userService.updateUser(this._userModelobj,this._userModelobj.id).subscribe(res=>{alert("updated succesfully");
  let ref=document.getElementById('cancel')
  ref?.click();
  this.formValue.reset();
  this.getAllUsers();
  })



  }

  ngOnInit(): void {
    this.getAllUsers();
    this.formValue=this._formBuilder.group({
      name:[''],
      country:[''],
      city:[''],
      job:['']
    })
    console.log(this.userData)
  }

}
