import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';

@Injectable({
  providedIn: 'root'
})
export class InMemoryLoginDataService implements InMemoryDbService {
  createDb() {
    const login = [
      { id: 11, username: 'Admin', password: 'admin' },
      { id: 12, username: 'Pinki', password: 'pinki' },
      { id: 13, username: 'Arun', password: 'arun' }
    ];
    return { 'login': login};
  }
}
