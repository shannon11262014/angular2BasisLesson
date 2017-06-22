import { ServiceService } from './../service.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-lesson7',
  templateUrl: './lesson7.component.html',
  styleUrls: ['./lesson7.component.css']
})
export class Lesson7Component implements OnInit {

  constructor(private _bmi: ServiceService) { }

  ngOnInit() {
  }

  callBMIfromService() {
    console.log(this._bmi.calBMI(156, 41));
  }

}
