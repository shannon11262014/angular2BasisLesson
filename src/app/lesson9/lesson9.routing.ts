import { Lesson9Component } from './lesson9.component';
import { Routes ,RouterModule} from "@angular/router";
import { ModuleWithProviders } from "@angular/core";


const routes:Routes=[
    {
        path:'',component:Lesson9Component
    }
]

export const routing:ModuleWithProviders=RouterModule.forChild(routes);
