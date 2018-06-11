import { Component } from '@angular/core';
export interface task {
  title: string;
  comments: string;
  dueDate: Date;
  isStar: boolean;
  isEdit: boolean;
  isDone: boolean;
}
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'app';
}
