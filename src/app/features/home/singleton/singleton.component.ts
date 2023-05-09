import { AsyncPipe, JsonPipe, NgFor, NgIf } from '@angular/common';
import { Component, Input } from '@angular/core';

import { Observable } from 'rxjs';

import { User } from '../models';

@Component({
  selector: 'app-singleton',
  templateUrl: './singleton.component.html',
  standalone: true,
  imports: [AsyncPipe, JsonPipe, NgFor, NgIf],
  styleUrls: ['./singleton.component.css'],
})
export class SingletonComponent {
  @Input() componentName!: string;
  
  /**
   * 🚀 HINT: scope variable for parent
   */

  public users$!: Observable<User[]>;
}
