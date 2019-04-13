import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';

@Injectable({
  providedIn: 'root'
})
export class InMemoryLoginDataService implements InMemoryDbService {
  createDb() {
    const login = [
      { id: 11, username: 'admin', password: 'admin' },
      { id: 12, username: 'user', password: 'user' },
      { id: 13, username: 'admin123', password: 'admin123' }
    ];
    return { 'login': login};
  }
}
