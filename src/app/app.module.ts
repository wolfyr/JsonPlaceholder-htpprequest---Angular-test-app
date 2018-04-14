import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';
import { HttpClientModule } from '@angular/common/http'

import { AppComponent } from './app.component';
import { PostService } from '../app/services/post.service';
import { PostsComponent } from './components/posts/posts.component';
import { PostFormComponent } from './components/post-form/post-form.component'


@NgModule({
  declarations: [
    AppComponent,
    PostsComponent,
    PostFormComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [PostService],
  bootstrap: [AppComponent]
})
export class AppModule { }
