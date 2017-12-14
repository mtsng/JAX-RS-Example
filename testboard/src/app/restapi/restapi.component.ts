import {Component} from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-rest'
  templateUrl: './restapi.component.html'
})

export class RestapiComponent{
  public message = this.http.get('http://localhost:8081/testboard/rest/hello').subscribe(
    data => {
      this.message = data["message"];
    },
    err => {
      this.message = "Fail";
    }
  );

  constructor(private http:HttpClient){

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
