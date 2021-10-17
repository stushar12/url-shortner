import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import {UserService} from '../../app/service/user.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  userForm:FormGroup
  constructor(private userService:UserService,private router:Router) 
  {
    this.userForm = new FormGroup({
      'userEmail': new FormControl('', [Validators.required, Validators.email]),
      'password': new FormControl('', Validators.required),
      'cnfpassword':new FormControl('', Validators.required),
      'dob': new FormControl('', [Validators.required])
    })
  }



  ngOnInit(): void {
  }

  submituser(){
    Object.keys(this.userForm.controls).forEach(field => {
      const control = this.userForm.get(field);
      if (control instanceof FormControl) {
        control.markAsTouched({ onlySelf: true });
      }
    });


    if(this.userForm.valid){
      this.userService.saveuser(this.userForm.value).subscribe(() => {
        // this.router.navigate(['/dashboard'])
      },() => {
        alert("Something Went Wrong"+"\n"+"Please try again.")
      })
      this.userForm.reset()
    } 
  }
 }
