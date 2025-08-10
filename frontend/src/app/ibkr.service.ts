import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class IbkrService {
  constructor(private http: HttpClient) {}
  public getAccounts(): Observable<any> {
    return this.http.get('/ibkr-api/v1/api/iserver/accounts');
  }
}
