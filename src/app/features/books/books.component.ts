import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { map, Observable } from 'rxjs';

export interface DogImage {
  message: string[];
  status: string;
}

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css'],
})
export class BooksComponent implements OnInit {
  public dogImages$!: Observable<string[]>;

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    console.log
    this.dogImages$ = this.http
      .get<DogImage>(`https://dog.ceo/api/breed/hound/images`)
      .pipe(map((res: DogImage) => res.message));
  }
}
