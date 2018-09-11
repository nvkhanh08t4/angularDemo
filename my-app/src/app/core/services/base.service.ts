import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

// import third party library
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

// import environment file
import { environment } from './../../../environments/environment'

@Injectable({
  providedIn: 'root'
})

export class BaseService<T> {
  // URL mockapi serve
  public  API_ROOT: string = environment.URL_API;

  constructor(
    private http: HttpClient
  ) { }

  /**
   * Get full URL
   * @param url
   */
  getUrl(url: string): string {
    return `${this.API_ROOT}${url}`
  }

  /**
   * Call API with GET method
   * @param url
   */
  getList(url: string): Observable<T[]> {
    return this.http.get<T[]>(this.getUrl(url));
  }

  getItem(url: string): Observable<T[]> {
    return this.http.get<T[]>(this.getUrl(url));
  }

    /**
   * Call API with PUT method
   * @param url
   * @param body
   */
  put(url: string, body: any): Observable<T> {
    return this.http.put<T>(this.getUrl(url), body);
  }

  /**
   * Call API with PUT method
   * @param url
   * @param body
   */
  post(url: string, body: any): Observable<T> {
    return this.http.post<T>(this.getUrl(url), body);
  }

  /**
   * Call API with DELETE method
   * @param url
   */
  delete(url: string): Observable<{}> {
    return this.http.delete(this.getUrl(url));
  }
}
