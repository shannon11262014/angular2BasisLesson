import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
@Component({
  selector: 'app-lesson1',
  templateUrl: './lesson1.component.html',
  styleUrls: ['./lesson1.component.css']
})
export class Lesson1Component implements OnInit {
  //money屬性input進來，用tw變數去接
  @Input('money') tw: number = 0;

  //用來處理事件的EventEmitter，可以把它當作一個發射器
  @Output() moneyChange: EventEmitter<number> = new EventEmitter<number>();

  constructor() { }

  ngOnInit() {
  }

  change($event: number) {
    //this.tw這個參數就會傳到change($event)裡的$event部分，而lesson6的change函數就可以接收到這個參數
    this.moneyChange.emit(this.tw);
  }
}
