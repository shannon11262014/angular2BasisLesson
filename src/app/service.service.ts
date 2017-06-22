import { Injectable } from '@angular/core';

@Injectable()
export class ServiceService {

  constructor() { }

  calBMI(height,weight) {
    let bmi: number = 0.0;
    bmi = weight / Math.pow((height/100),2);
    return bmi;
  }
}
