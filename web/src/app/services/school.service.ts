import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable} from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import { SchoolCard } from '../models/SchoolCard';
 
 
 
const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};
 
@Injectable()
export class SchoolService {
 
  private SchoolCardsUrl = "file:///D:/Magikslate%20Development/school_names.json";  // URL to web api
 
  constructor(private http: HttpClient) { }
 
  /** GET SchoolCards from the server */
  getSchoolCards (): Observable<SchoolCard[]> {
    return this.http.get<SchoolCard[]>(this.SchoolCardsUrl)
      .pipe(
        tap(SchoolCards => this.log(`fetched schoolCards`)),
        catchError(this.handleError('getSchoolCards', []))
      );
  }
 
  /** GET SchoolCard by id. Return `undefined` when id not found */
  getSchoolCardNo404<Data>(id: number): Observable<SchoolCard> {
    const url = `${this.SchoolCardsUrl}/?id=${id}`;
    return this.http.get<SchoolCard[]>(url)
      .pipe(
        map(SchoolCards => SchoolCards[0]), // returns a {0|1} element array
        tap(h => {
          const outcome = h ? `fetched` : `did not find`;
          this.log(`${outcome} SchoolCard id=${id}`);
        }),
        catchError(this.handleError<SchoolCard>(`getSchoolCard id=${id}`))
      );
  }
 
  /** GET SchoolCard by id. Will 404 if id not found */
  getSchoolCard(id: number): Observable<SchoolCard> {
    const url = `${this.SchoolCardsUrl}/${id}`;
    return this.http.get<SchoolCard>(url).pipe(
      tap(_ => this.log(`fetched SchoolCard id=${id}`)),
      catchError(this.handleError<SchoolCard>(`getSchoolCard id=${id}`))
    );
  }
 
  /* GET SchoolCards whose name contains search term */
  searchSchoolCards(term: string): Observable<SchoolCard[]> {
    if (!term.trim()) {
      // if not search term, return empty SchoolCard array.
      return null;
    }
    return this.http.get<SchoolCard[]>(`${this.SchoolCardsUrl}/?name=${term}`).pipe(
      tap(_ => this.log(`found SchoolCards matching "${term}"`)),
      catchError(this.handleError<SchoolCard[]>('searchSchoolCards', []))
    );
  }
 
  //////// Save methods //////////
 
  /** POST: add a new SchoolCard to the server */
  addSchoolCard (SchoolCard: SchoolCard): Observable<SchoolCard> {
    return this.http.post<SchoolCard>(this.SchoolCardsUrl, SchoolCard, httpOptions).pipe(
      tap((SchoolCard: SchoolCard) => this.log(`added SchoolCard w/ id=${SchoolCard.id}`)),
      catchError(this.handleError<SchoolCard>('addSchoolCard'))
    );
  }
 
  /** DELETE: delete the SchoolCard from the server */
  deleteSchoolCard (SchoolCard: SchoolCard | number): Observable<SchoolCard> {
    const id = typeof SchoolCard === 'number' ? SchoolCard : SchoolCard.id;
    const url = `${this.SchoolCardsUrl}/${id}`;
 
    return this.http.delete<SchoolCard>(url, httpOptions).pipe(
      tap(_ => this.log(`deleted SchoolCard id=${id}`)),
      catchError(this.handleError<SchoolCard>('deleteSchoolCard'))
    );
  }
 
  /** PUT: update the SchoolCard on the server */
  updateSchoolCard (SchoolCard: SchoolCard): Observable<any> {
    return this.http.put(this.SchoolCardsUrl, SchoolCard, httpOptions).pipe(
      tap(_ => this.log(`updated SchoolCard id=${SchoolCard.id}`)),
      catchError(this.handleError<any>('updateSchoolCard'))
    );
  }
 
  /**
   * Handle Http operation that failed.
   * Let the app continue.
   * @param operation - name of the operation that failed
   * @param result - optional value to return as the observable result
   */
  private handleError<T> (operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
 
      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead
 
      // TODO: better job of transforming error for user consumption
      this.log(`${operation} failed: ${error.message}`);
 
      // Let the app keep running by returning an empty result.
      return null;
    };
  }
 
  /** Log a SchoolCardService message with the MessageService */
  private log(message: string) {
    
  }
}          