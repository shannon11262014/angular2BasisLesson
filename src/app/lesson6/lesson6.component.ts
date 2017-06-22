import { ServiceService } from './../service.service';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-lesson6',
  templateUrl: './lesson6.component.html',
  styleUrls: ['./lesson6.component.css']
})
export class Lesson6Component implements OnInit {

  tw6: number = 0;
  constructor(private _bmi :ServiceService) { }

  ngOnInit() {
  }

  change(tw: number) {
    this.tw6 = tw;
  }

  callBMI(){
    console.log(this._bmi.calBMI(160,50));
  }
}
