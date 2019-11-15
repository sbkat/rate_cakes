import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class HttpService {

  constructor(private _http: HttpClient) { }

  createCake(newCake) {
    return this._http.post('/api/cake', newCake);
  }

  getCakes() {
    return this._http.get('/api/cakes');
  }

  rateCake(id, selectedCake) {
    return this._http.put('/api/cakes/' + id, selectedCake)
  }

}
