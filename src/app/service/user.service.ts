import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {User } from '../model';
import { Url } from '../model';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  url_list:Array<Url> = [];
  constructor(private http:HttpClient) { }

  saveuser(user:User)
  {
    return this.http.post(`https://615fecc2faa03600179fb77d.mockapi.io/users`,user)
  } 

  getAllUrls(){
    return this.http.get<Array<Url>>(`https://615fecc2faa03600179fb77d.mockapi.io/urls`)
  }

  getURLByID(id:any)
  {
    return this.http.get<Url>(`https://615fecc2faa03600179fb77d.mockapi.io/urls/${id}`)
  }

  saveURL(url:Url)
  {
    this.url_list.push(url)
    return this.http.post(`https://615fecc2faa03600179fb77d.mockapi.io/urls`,url)
} 

updateUrlById(urlID:number|undefined,urlData:Url){
  return this.http.put(`https://615fecc2faa03600179fb77d.mockapi.io/urls/${urlID}`,urlData)
}
}
