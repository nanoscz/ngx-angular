import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class TestsService {
  baseUrl = 'http://localhost:3000/v1/tests/'
  constructor(private http: HttpClient) { }

  findAll() {
    return this.http.get(this.baseUrl)
      .toPromise()
      .catch(this.handleError)
  }

  create(test: any): Promise<any> {
    return this.http.post(this.baseUrl, test)
      .toPromise()
      .catch(this.handleError);
  }

  update(id: number, test: any) {
    return this.http.patch(`${this.baseUrl}/${id}`, test)
      .toPromise()
      .catch(this.handleError);
  }

  delete(id: number) {
    return this.http.delete(`${this.baseUrl}/${id}`)
      .toPromise()
      .catch(this.handleError);
  }

  handleError(err: any): Promise<any> {
    return Promise.reject(err.error);
  }
}
