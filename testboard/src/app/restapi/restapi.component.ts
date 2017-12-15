import {Component} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {URLSearchParams} from '@angular/http';

@Component({
  selector: 'app-rest',
  templateUrl: './restapi.component.html'
})

export class RestapiComponent{
  public message = this.http.get('http://localhost:8081/testboard/rest/hello').subscribe(
    data => {
      this.message = data["message"];
    },
    err => {
      //this.message = "Fail";
    }
  );

  public username;
  public password;

  constructor(private http:HttpClient){

  }

  public postData = function(){
    let body = {"username": this.username, "password":this.password};
  //  let body = new URLSearchParams();
    //body.set('username', this.username);
    this.http.post('http://localhost:8081/testboard/rest/goodbye',
    body).subscribe(pass => {
      this.message = "Yay!";
    },
    fail =>{
      this.message = "Nay...";
    }
    )
  }

  public fetchData = function(){
    this.http.get('http://localhost:8081/testboard/rest/hello').subscribe(
      data => {
        this.message = data["message"];
      },
      err => {
        this.message = "Fail";
      }
    )
  }
}
