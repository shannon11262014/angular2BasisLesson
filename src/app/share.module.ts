import { NgModule } from "@angular/core";
import { Lesson2Component } from "./lesson2/lesson2.component";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";

@NgModule({
  declarations: [
    Lesson2Component
  ],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports:[
      Lesson2Component
  ] 
})
export class ShareModule { }