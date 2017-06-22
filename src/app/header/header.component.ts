import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  title = "歡迎來到Todo App!!!";
  constructor() { }

  ngOnInit() {
  }

  getDate() {
    return '現在時間是:' + new Date();
  }
}
