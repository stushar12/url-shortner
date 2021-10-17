import { Component, OnInit } from '@angular/core';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';
import {UserService} from '../service/user.service';
import { Url } from '../../app/model';

@Component({
  selector: 'app-add-url',
  templateUrl: './add-url.component.html',
  styleUrls: ['./add-url.component.css']
})
export class AddUrlComponent implements OnInit {

  UrlData:Array<Url>=[];
  success=0;
  UrlObject={
    "longURL":"",
    "shortenURL":"",
    "click_count":0
  }
  shortUrl:FormGroup

  constructor(private userService:UserService) {
    this.shortUrl = new FormGroup({
      'longURL': new FormControl('', Validators.required),
    })
   }

  ngOnInit(): void {
  }

  loadData(){
    this.userService.getAllUrls().subscribe((data) => {
      console.log(data);
      this.UrlData=data;
    },() => {
      alert("Something Went Wrong."+"\n"+"Try Again.")
    })

  }

  generate_url(){
    let final_url="";
    let characters = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
    let length=characters.length;
    for(let i=0;i<6;i++)
    { 
      final_url+=characters.charAt(Math.floor(Math.random()*length))
    }
    return final_url;
  }

  submitURL(){
    Object.keys(this.shortUrl.controls).forEach(field => {
      const control = this.shortUrl.get(field);
      if (control instanceof FormControl) {
        control.markAsTouched({ onlySelf: true });
      }
    });

    if(this.shortUrl.valid){
      console.log(this.shortUrl.value);
      this.UrlObject={
        "longURL":this.shortUrl.value.longURL,
        "shortenURL":this.generate_url(),
        "click_count":0
      }
      this.userService.saveURL(this.UrlObject).subscribe(() => {
        this.success=1;
        this.shortUrl.reset()
        alert("URL shrinked"+"\n"+ "Go back to access the shrinked URL")
      },() => {
        alert("Something Went Wrong")
      })
      
    }
    

  }
}
