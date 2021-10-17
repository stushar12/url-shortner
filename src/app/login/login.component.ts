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

  
 }