import { Component, OnInit } from '@angular/core';
import { GetNumberApiService } from '../get-number-api.service';

@Component({
  selector: 'number-fact-form',
  templateUrl: './number-fact-form.component.html',
  styleUrls: ['./number-fact-form.component.css']
})


export class NumberFactFormComponent  implements OnInit{
  NumberOne: number;
  NumberTwo: number;
  termsAccepted: boolean;
  message: string;
  isShown: boolean; 

  RunCall(){
    this.message = "";
    this.isShown = ! this.isShown;
    let arr = [];
    arr.push(this.NumberOne);
    arr.push(this.NumberTwo);

   for (var num of arr){
      this.api.apiCall(num).subscribe(
        data =>{ console.log( data.toString());  this.message += " " + data.toString(); 
        }
      );
     
    }
  }

  checkforvalidation(){
    this.termsAccepted = !this.termsAccepted;
  }

constructor(private api:GetNumberApiService){
  this.NumberOne;
  this.NumberTwo;
  this.termsAccepted = false;
  this.message = "";
  this.isShown = false;
}

ngOnInit(){}

}
