import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-add-form',
  templateUrl: './add-form.component.html',
  styleUrls: ['./add-form.component.css']
})
export class AddFormComponent implements OnInit {
  @Output() addTodoItem = new EventEmitter();

  content: string = " ";
  placeholder = "請輸入代辦事項";
  constructor() { }

  ngOnInit() {
  }

  addTodo($event: MouseEvent) {
    this.addTodoItem.emit(this.content);
  }
  // getInputText($event :Event){
  //   this.content=($event.target as HTMLInputElement).value;
  // }得到input的值 寫法一

  // Todo($event: MouseEvent) {
  //   console.log("輸入的value為:" + this.content);
  // } 得到input的值 寫法二
}
