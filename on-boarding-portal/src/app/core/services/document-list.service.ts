import { Injectable } from '@angular/core';
import { IDocumentList } from '../../shared/interfaces/IDocumentList';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DocumentListService {

  private documentUrl = 'api/documentlist';

  constructor(private http: HttpClient) { }

  getDocumentList(): Observable<IDocumentList[]> {
    return this.http.get<IDocumentList[]>(this.documentUrl);
  }
}
