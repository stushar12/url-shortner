import { Component, OnInit } from '@angular/core';
import { ActivatedRoute} from '@angular/router';
import {UserService} from '../service/user.service';

@Component({
  selector: 'app-new-tab',
  templateUrl: './new-tab.component.html',
  styleUrls: ['./new-tab.component.css']
})
export class NewTabComponent implements OnInit {

  shortenURL:string="";
  UrlObject={
    "longURL":"",
    "shortenURL":"",
    "click_count":0
  }
  constructor(private activeRoute: ActivatedRoute,private userService:UserService) { }

  ngOnInit(): void {
    this.activeRoute.params.subscribe((paramsData) => {
      this.shortenURL = paramsData.id;
      this.userService.getAllUrls().subscribe((data) => {
        data.forEach((url)=>{
          if(url.shortenURL===this.shortenURL)
          {
            this.UrlObject={
              "longURL":url.longURL,
              "shortenURL":url.shortenURL,
              "click_count":url.click_count+1
            }
            this.userService.updateUrlById(url.id,this.UrlObject).subscribe((data)=>{
             window.location.href = this.UrlObject.longURL;
            })

          }
        })
        
      })
    })
  }

}