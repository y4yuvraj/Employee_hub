import { Component, OnInit } from '@angular/core';
import { User } from '../user';
import { UserServiceService } from '../user-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css']
})
export class AddUserComponent implements OnInit {

  userModel=new User('','','','');

  constructor(private _userService:UserServiceService,private router:Router) { }

  ngOnInit(): void {
  }

  onSubmit()
  {
    this._userService.addUser(this.userModel).subscribe(
        (data: any)=>console.log('Success',data),(error: any)=>console.error("Error!",error)
      )
      window.location.reload();
      // this.router.navigateByUrl('/showUsers');
      // window.location.reload();
  }

}
