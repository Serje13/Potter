import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PotterService {
  constructor(private http: HttpClient) {}

  getHouses() {
    return this.http.get<Array<any>>(
      'https://www.potterapi.com/v1/houses?key=$2a$10$BD8PoevCo5yISOJlHy47geFYut1/qYjjtKHLQeHW2ZUD.3RndOJXa'
    );
  }

  getChatacters(house) {
    return this.http.get<Array<any>>(
      `https://www.potterapi.com/v1/characters?house=${house}&key=$2a$10$BD8PoevCo5yISOJlHy47geFYut1/qYjjtKHLQeHW2ZUD.3RndOJXa`
    );
  }

  getChatacter(id) {
    return this.http.get<Array<any>>(
      `https://www.potterapi.com/v1/characters/${id}?key=$2a$10$BD8PoevCo5yISOJlHy47geFYut1/qYjjtKHLQeHW2ZUD.3RndOJXa`
    );
  }
}
