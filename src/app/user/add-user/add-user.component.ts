import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/app/model/user';
import { UserService } from 'src/app/service/user.service';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css']
})
export class AddUserComponent implements OnInit {
  user: User = new User();
  submitted = false;

  constructor(private userService: UserService, private router: Router) { }

  ngOnInit() {
  }

  onSubmit(){
    this.submitted= true;
    this.userService.createUser(this.user).subscribe(
      data=>console.log(data),error=>console.log(error));
    this.user= new User();
    this.router.navigate(['/add']);
  }

}
