import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Footer } from './footer';
@Injectable({
  providedIn: 'root'
})
export class FooterService {
  public getFooter() {
    return this.httpClient.get<Footer>('/assets/config/footer.json')
  }
  constructor(private httpClient: HttpClient) { }
}
