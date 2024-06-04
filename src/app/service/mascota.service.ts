import { Injectable, OnInit } from '@angular/core';
import { environment } from '../../environments/environments';
import { HttpClient } from '@angular/common/http';
import { Mascota } from '../model/mascota';
import { Observable, Subject, map } from 'rxjs';

const baseUrl = environment.base;
@Injectable({
  providedIn: 'root',
})
export class MascotaService implements OnInit {
  private url = `${baseUrl}`;
  private listacambio = new Subject<Mascota[]>();
  constructor(private http: HttpClient) {}
  ngOnInit(): void {}

  list(): Observable<Mascota[]> {
    console.log(this.url);
    return this.http.get<Mascota[]>(this.url);
  }

  insert(mascota: Mascota): Observable<Mascota> {
    return this.http.post<Mascota>(this.url, mascota);
  }

  setList(listaNueva: Mascota[]) {
    this.listacambio.next(listaNueva);
  }

  getList(): Observable<Mascota[]> {
    return this.listacambio.asObservable();
  }
}
