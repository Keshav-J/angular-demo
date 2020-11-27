import { ThrowStmt } from '@angular/compiler';
import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AppService {

  private subject = new Subject<string>();

  constructor() { }

  sendData(message: string): void {
    this.subject.next(message);
  }

  clearData(): void {
    this.subject.next();
  }

  getData(): Observable<string> {
    return this.subject.asObservable();
  }
}
