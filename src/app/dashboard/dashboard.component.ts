import { Component, OnInit } from '@angular/core';
import { Url } from '../../app/model';
import {UserService} from '../service/user.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  urlList:Array<Url> = []

  constructor(private userService:UserService) { }

  ngOnInit(): void 
  {
    this.changeData()
  }

  changeData()
  {
    this.userService.getAllUrls().subscribe((data) => 
    {
      this.urlList = data
     })
  }

   
}