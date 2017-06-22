import { Http, RequestOptions, Headers } from '@angular/http';
import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';

@Injectable()
export class DataService {

  constructor(private _http: Http) { }

  getData() {
  // return this._http.get("https://test1-bc570.firebaseio.com/bbb.json").map(res => res.json());
  return this._http.get("https://test1-bc570.firebaseio.com/bbb.json").map(function (res) {
  return res.json();
});
  }
  postData() {
    let headers = new Headers({ 'Content-Type': 'aaplication/json' });
    let options = new RequestOptions({ headers: headers });
    //return this._http.post("https://test1-bc570.firebaseio.com/bbb.json", { "id": "var name = new type(arguments);" }, options).map(res => res.json());
    return this._http.post("https://test1-bc570.firebaseio.com/bbb.json", { "id": "00002" }, options).map(res => res.json());
  }

}
