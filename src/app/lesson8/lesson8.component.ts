import { DataService } from './../data.service';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-lesson8',
  templateUrl: './lesson8.component.html',
  styleUrls: ['./lesson8.component.css']
})
export class Lesson8Component implements OnInit {

  constructor(private _data: DataService) { }

  ngOnInit() {
  }

  getData() {
    this._data.getData().subscribe(
      data => {
        console.log(data);
      },
      error => {
        console.log("ERROR");
      },
      () => {
        console.log("FINISH");
      }
    )
    //     以上寫法等同於
    // (function (data) {
    //   console.log(data);
    // }), function (error) {
    //   console.log("ERROR");
    // }, function () {
    //   console.log("FINISH");
    // };
  }
  postData() {
    this._data.postData().subscribe(
      data => {
        console.log(data);
      },
      error => {
        console.log("ERROR");
      },
      () => {
        console.log("FINISH");
      }
    )
  }
}
