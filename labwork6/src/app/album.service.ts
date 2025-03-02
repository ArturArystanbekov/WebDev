import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Album } from './models';

@Injectable({
  providedIn: 'root'
})
export class AlbumService {

  constructor(private client: HttpClient) { }

  getPosts(): Observable<Album[]>{
    return this.client.get<Album[]>(`https://jsonplaceholder.typicode.com/albums`)
  }
  getPost(id: number): Observable<Album>{
    return this.client.get<Album>(`https://jsonplaceholder.typicode.com/albums/${id}`)
  }
}
