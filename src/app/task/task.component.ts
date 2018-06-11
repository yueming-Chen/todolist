import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { task } from '../app.component';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.scss']
})
export class TaskComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  @Input()
  isDone: boolean = false;

  @Input()
  dueDate: Date = new Date();

  @Input()
  isStar: boolean = false;

  @Input()
  title: string = "";

  @Input()
  isEdit: boolean = false;

  private _dateTime: Date;

  @Output()
  dateTimeChange: EventEmitter<Date> = new EventEmitter();

  @Input()
  get dateTime(): any {
    return this._dateTime;
  };
  set dateTime(dateTime) {
    if (dateTime === this._dateTime) return;
    this._dateTime = dateTime;
    this.dateTimeChange.emit(this.dateTime);
  }


  private _comments: string;
  @Output()
  commentChange: EventEmitter<string> = new EventEmitter();

  @Input()
  get comment(): any {
    return this._comments;
  };
  set comment(comment) {
    if (comment === this._comments) return;
    this._dateTime = comment;
    this.commentChange.emit(this.comment);
  }

  @Output()
  public addTask: EventEmitter<task> = new EventEmitter();

  submit() {
    console.log('asdasd');
    let obj: task = {
      title: this.title,
      comments: this.comment,
      dueDate: this.dueDate,
      isDone: this.isDone,
      isStar: this.isStar,
      isEdit: false
    }
    this.addTask.emit(obj);
    this.clear();
  }

  public clear() {
    this.isEdit = false;
    this.title = '';
    this.comment = '';
    this.dueDate = new Date();
    this.isDone = false;
    this.isStar = false;

  }
}
