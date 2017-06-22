import { ShareModule } from './../share.module';
import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { routing } from "./lesson9.routing";
import { Lesson9Component } from "./lesson9.component";




@NgModule({
    imports: [
        CommonModule, 
        routing,
        ShareModule
    ],
    declarations: [Lesson9Component]
})
export class Lesson9Module { }