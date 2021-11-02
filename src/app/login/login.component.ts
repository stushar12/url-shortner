import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import {UserService} from '../../app/service/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  userForm:FormGroup
  constructor(private userService:UserService,private router:Router) 
  {
    this.userForm = new FormGroup({
      'userEmail': new FormControl('', [Validators.required, Validators.email]),
      'password': new FormControl('', Validators.required),
    })
  }



  ngOnInit(): void {
  }

  submituser()
  {
    const email=this.userForm.value.userEmail;
    const password=this.userForm.value.password;

    if(email!="" && password!="")
    {
      this.userService.signIn(email,password).subscribe(res=>
        {
          console.log(res);
          this.userForm.reset();
          this.router.navigate(['/dashboard']);
        },
        err =>
        {
          alert("Wrong Credentials\n"+" Try Again");
        }
        )
    }
    else
    {
      alert("Enter all the fields");
//       <div class="alert alert-danger" role="alert">
//   A simple danger alert—check it out!
// </div> 
    }
    
  }

 }