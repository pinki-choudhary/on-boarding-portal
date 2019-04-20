import { Injectable } from '@angular/core';
import { IDocumentList } from '../../shared/interfaces/IDocumentList';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

/** This is a document list service. */
@Injectable({
  providedIn: 'root'
})
export class DocumentListService {

  /** URL of the api having documents collection */
  private documentUrl = 'api/documentlist';

  constructor(private http: HttpClient) { }

  /** This is a get method that returns the array of document list. */
  getDocumentList(): Observable<IDocumentList[]> {
    return this.http.get<IDocumentList[]>(this.documentUrl);
  }
}
