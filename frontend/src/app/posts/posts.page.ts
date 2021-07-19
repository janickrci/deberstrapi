import { Component} from '@angular/core';
import { PostService } from '../services/post.service';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.page.html',
  styleUrls: ['./posts.page.scss'],
}) 
export class PostsPage {
  posts: any = [];

  constructor(
    private PostService: PostService, 
    private alertController: AlertController
    ) {}

  loadPosts() {
    this.PostService.getPosts().subscribe(
      (res) => {
        console.log(res);
        this.posts = res;
      },
      (err) => console.log(err)
    );
  }

  ionViewWillEnter() {
    this.loadPosts();
  }

  async deletePost(id) {
   const alert = await this.alertController.create({
     header: 'Remove',
     subHeader: 'Remove this post',
    message: 'are you sure?',
    buttons: [{
      text: 'okay',
      handler:() => {
        console.log(id);
    this.PostService.deletPost(id).subscribe(
      (res) =>{
        this.loadPosts();
      },
      (err) => console.error(err)
    );
      }
    },'cancel']
   });

  await alert. present();

  }
 
}
