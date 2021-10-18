import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Url,chartData } from '../../app/model';
import {UserService} from '../service/user.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgxChartsModule } from '@swimlane/ngx-charts';

@Component({
  selector: 'app-charts',
  templateUrl: './charts.component.html',
  styleUrls: ['./charts.component.css']
})
export class ChartsComponent implements OnInit {

  view: [number,number] = [1000, 500];
  final: Array<chartData>=[];

  gradient = false;
  showLegend = true;

  animations:boolean=true
  showText=true
  showYAxisLabel = true;
  legendPosition: any = 'top';


  colorScheme:any = {
    domain: ['#003f5c',
      '#2f4b7c',
     '#665191',
      '#a05195',
      '#d45087',
      '#f95d6a',
      '#ff7c43',
      '#ffa600']
  };

  shortenURL:string="";


  constructor(private activeRoute: ActivatedRoute,private userService:UserService) 
  {
    this.activeRoute.params.subscribe((paramsData) => {
      this.shortenURL = paramsData.id;
      this.userService.getAllUrls().subscribe((data) => {
        data.forEach((url)=>{
          if(url.shortenURL===this.shortenURL)
          {
            this.final.push({
              "name":url.longURL,
              "value":url.click_count
              
            })
          }
        })
        
      })
      
  })

}

  ngOnInit(): void
  {
    
  }
}
