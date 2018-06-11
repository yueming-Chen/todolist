import { Component, OnInit } from '@angular/core';
import { task } from '../app.component';
@Component({
  selector: 'app-mytask',
  templateUrl: './mytask.component.html',
  styleUrls: ['./mytask.component.scss']
})
export class MytaskComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    this.taskList = Array(9).fill(null).map((v, idx) => {
      console.log('abc');
      let _date = new Date;
      _date.setDate(_date.getDate() + idx);
      let obj: task = {
        title: 'number  : ' + idx,
        comments: 'thisi is cool idx with real ' + idx,
        dueDate: _date,
        isStar: (idx % 2 === 0) ? true : false,
        isEdit: false,
        isDone: (idx % 3 === 0) ? true : false,
      };
      return obj;
    });
    this.resortList();

  }
  private isExtend: boolean = false;

  public taskList: task[];

  public insertList(e) {
    this.isExtend = false;
    this.taskList.push(e);
    this.resortList();
  }

  public resortList() {
    let statList = this.taskList.filter(v => v.isStar && !v.isDone).sort((a, b) => {
      if (a.dueDate < b.dueDate) return -1;
      else if (a.dueDate > b.dueDate) return 1;
      else return 0
    });
    let processList = this.taskList.filter(v => !v.isStar && !v.isDone).sort((a, b) => {
      if (a.dueDate < b.dueDate) return -1;
      else if (a.dueDate > b.dueDate) return 1;
      else return 0
    });

    let doneList = this.taskList.filter(v => v.isDone).sort((a, b) => {
      if (a.dueDate < b.dueDate) return -1;
      else if (a.dueDate > b.dueDate) return 1;
      else return 0
    });
    this.taskList = statList.concat(processList).concat(doneList);
  }


}
