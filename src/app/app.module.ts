import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { VoterComponent } from './1-voter/voter.component';
import { TodosComponent } from './2-todos/todos.component';
import { UserDetailsComponent } from './3-user-details/user-details.component';
import { HomeComponent } from './home/home.component';
import { UsersComponent } from './users/users.component';
import { HighlightDirective } from './highlight.directive';
import { GreeterComponent } from './greeter/greeter.component';
import { NavComponent } from './nav/nav.component';

@NgModule({
  declarations: [
    AppComponent,
    VoterComponent,
    TodosComponent,
    UserDetailsComponent,
    HomeComponent,
    UsersComponent,
    HighlightDirective,
    GreeterComponent,
    NavComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
