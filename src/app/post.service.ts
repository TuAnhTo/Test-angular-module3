import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { IPost } from './post';

@Injectable({
  providedIn: 'root'
})
export class PostService {
  private readonly API_URL = 'http://localhost:8081/books';
  constructor(private http: HttpClient) { }
  getBooks(count = 100): Observable<IPost[]> {
    return this.http.get<IPost[]>(this.API_URL).pipe(
      map(response => response.filter((book, i) => i < count))
    );
  }
  getBookById(id: number): Observable<IPost> {
    return this.http.get<IPost>(`${this.API_URL}/${id}`);
  }
  createBook(book: Partial<IPost>): Observable<IPost> {
    return this.http.post<IPost>(this.API_URL, book);
  }
  deleteBook(id: number): Observable<any> {
    return this.http.delete(`${this.API_URL}/${id}`);
  }
  updateBook(book: IPost): Observable<IPost> {
    return this.http.patch<IPost>(`${this.API_URL}/${book.id}`, book);
  }
}
