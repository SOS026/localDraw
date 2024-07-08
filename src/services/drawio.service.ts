// import { Injectable } from '@angular/core';
// import { HttpClient } from '@angular/common/http';
// import { Observable } from 'rxjs';

// @Injectable({
//   providedIn: 'root'
// })
// export class DrawioService {

//   private apiUrl = 'http://localhost:3000/api/fetch-svg';

//   constructor(private http: HttpClient) { }

//   // Method to fetch SVG data for a custom shape ID
//   fetchSVG(shapeId: string): Observable<any> {
//     const url = `${this.apiUrl}/${shapeId}`;
//     return this.http.get(url, { responseType: 'text' });
//   }
// }











// import { Injectable } from '@angular/core';
// import { HttpClient } from '@angular/common/http';
// import { Observable } from 'rxjs';

// @Injectable({
//   providedIn: 'root'
// })
// export class DrawioService {
//   private apiUrl = '/api'; // Proxy route defined in proxy.conf.json

//   constructor(private http: HttpClient) {}

//   fetchSVGData(): Observable<any> {
//     return this.http.get<any>(`${this.apiUrl}/fetch-svg`);
//   }
// }



















import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class DrawioService {

  // private baseUrl = 'http://localhost:3000'; // Your Node.js server URL
  // private fetchDiagramUrl = `${this.baseUrl}/fetch-diagram`;

  private apiUrl = 'https://localhost:3000/save-diagram'; // Replace with your API endpoint

  constructor(private http: HttpClient) { }

  saveDiagram(diagramData: string): Observable<any> {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json'
      // Add any other headers if required
    });

    return this.http.post<any>(this.apiUrl, { diagramData }, { headers }).pipe(
      catchError((error: any) => {
        console.error('Error saving diagram', error);
        return throwError('Something went wrong while saving diagram.');
      })
    );
  }
}
