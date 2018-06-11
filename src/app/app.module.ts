import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { MytaskComponent } from './mytask/mytask.component';
import { TaskComponent } from './task/task.component';

const routes: Routes = [
  { path: 'mytask', component: MytaskComponent }

];


@NgModule({
  declarations: [
    AppComponent,
    MytaskComponent,
    TaskComponent,
  ],
  imports: [
    FormsModule,
    BrowserModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
