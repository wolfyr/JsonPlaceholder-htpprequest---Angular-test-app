import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'

import { Observable } from 'rxjs/observable';
import { of } from 'rxjs/observable/of';

import { Post } from '../models/Post'


const httpOptions = {
    headers: new HttpHeaders({'content-type': 'application/json'})
}

@Injectable()
export class PostService{
    postsUrl: string = 'https://jsonplaceholder.typicode.com/posts';
    posts: Post[]

    constructor(private http: HttpClient){ }

    getPosts() : Observable<Post[]>{
        return this.http.get<Post[]>(this.postsUrl);
    }

    savePost(post: Post): Observable<Post> {
        return this.http.post<Post>(this.postsUrl, post, httpOptions);
    }

    updatingPost(post: Post): Observable<Post> {
        const url = `${this.postsUrl}/${post.id}`;  
        return this.http.put<Post>(url, post, httpOptions);   
    }

    removePost(post: Post | number): Observable<Post>{
        const id = typeof post === 'number' ? post : post.id;
        const url = `${this.postsUrl}/${id}`; 
        return this.http.delete<Post>(url, httpOptions);

    }
}