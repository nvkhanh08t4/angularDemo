import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { environment } from './../../../environments/environment'

@Injectable({
  providedIn: 'root'
})

export class BaseService<T> {
  // URL mockapi serve
  public  API_ROOT: string = environment.URL_API;

  constructor(private http: HttpClient) { }

  /**
   * Get full URL
   * @param url
   */
  getUrl(url: string): string {
    return `${this.API_ROOT}${url}`
  }

  /**
   * Get list
   * @param url
   */
  getList(url: string): Observable<T[]> {
    return this.http.get<T[]>(this.getUrl(url));
  }

}
