import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Routes, Router, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { MytaskComponent } from './mytask/mytask.component';

const routes: Routes = [
  { path: 'mytask', component: MytaskComponent }

];


@NgModule({
  declarations: [
    AppComponent,
    MytaskComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
