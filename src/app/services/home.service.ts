import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HomeService {

  constructor(private http: HttpClient) { }

  get headers() {
    return {
      headers:{
        'x-rapidapi-host':'google-news.p.rapidapi.com',
        'x-rapidapi-key':'2b2fc8060fmsh97f693ae3e46324p16c668jsn3d1b327660c5',
      },
      params: {
        q: 'Economia',
        country: 'CO', 
        lang: 'es'  
      }  
    }
  }
  public traerNews(){
    return this.http.get<any>('https://google-news.p.rapidapi.com/v1/search',this.headers)
  }
}
