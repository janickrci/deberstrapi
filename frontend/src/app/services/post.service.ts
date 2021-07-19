import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'

export interface Post {
  id?: string;
  title:string;
  description: string;
}

@Injectable({
  providedIn: 'root'
})
export class PostService {

  API = 'http://localhost:1337/posts'

  constructor(
    private http: HttpClient
  ) { }


    getPosts() {
      return this.http.get(this.API)
    }

    getPostById(id:string) {
      return this.http.get <Post> (`${this.API}/${id}`);
    }
    
    createPosts(title: string, description: string) {
      return this.http.post(this.API, {
       title, description
      })
    }

    updatePost(id: string, post){
      return this. http.put(`${this.API}/${id}`,post);
    }
      deletPost(id: string){
        return this.http.delete(`${this.API}/${id}`)

      }
     


} 
