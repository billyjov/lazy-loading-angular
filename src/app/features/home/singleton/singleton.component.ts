import { AsyncPipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../models';

@Component({
  selector: 'app-singleton',
  templateUrl: './singleton.component.html',
  standalone: true,
  imports: [AsyncPipe],
  styleUrls: ['./singleton.component.css'],
})
export class SingletonComponent implements OnInit {
  /**
   * 🚀 HINT: scope variable for parent
   */

  public users$!: Observable<User[]>;

  constructor() {}

  ngOnInit(): void {}
}
