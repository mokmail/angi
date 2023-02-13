import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpRequest } from '@angular/common/http';
import { Observable, ObservedValueOf } from 'rxjs';



@Injectable({
  providedIn: 'root'
})
export class HeroService {

  constructor(private http: HttpClient) { }

  gettingElements(): Observable<any> {
    return (this.http.get('http://localhost:3000/kmail'))
  }
  addItem(data: any) {
    return (this.http.post('http://localhost:3000/kmail', data, {}))


  }
  deleteItem(id: number) {
    return (this.http.delete(`http://localhost:3000/kmail/${id}`))
  }

  fetchdataFromHassio(): Observable<any> {
    const token = "eyJpc3MiOiJhYmE2NGE1NmYyMGI0MmNkYTc0MmE0NmFmZTZkZTE3NiIsImlhdCI6MTY3NjIxMjYwNSwiZXhwIjoxOTkxNTcyNjA1fQ.fPFFpWFAWWFcOh6rKqyZw3BP2dXRfkkttfvu8lOjotA"
    const heading = new HttpHeaders({
      Authorization: `Bearer ${token}`
    });



    const url = "http://mokmail.duckdns.org:8123/api/states"
    const urls = 'https://api.publicapis.org/entries'
    const cats = "https://catfact.ninja/breeds"
    //const httpreq: XMLHttpRequest = new XMLHttpRequest()
    //httpreq.open("GET", 'https://api.publicapis.org/entries')




    //const request = this.http.get<any>(url)

    return (this.http.get(cats))
  }

}
