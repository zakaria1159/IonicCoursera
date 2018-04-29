import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams,ViewController } from 'ionic-angular';
import {Validators, FormBuilder, FormGroup } from '@angular/forms';

import { Dish } from '../../shared/dish';
import { Comment } from '../../shared/comment';

/**
 * Generated class for the CommentPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-comment',
  templateUrl: 'comment.html',
})
export class CommentPage {
  commentform: FormGroup;
  comment: Comment;
  dish: Dish;
  

  constructor(public navCtrl: NavController, public navParams: NavParams, public viewCtrl: ViewController, 
    private formBuilder: FormBuilder) {
      this.commentform = this.formBuilder.group({
      author:'',
      rating: 5,
      comment:['', Validators.required],
      date: new Date().toISOString()
    });

    }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CommentPage');
  }

  dismiss() {
    this.viewCtrl.dismiss();
  }

  onSubmit() {
    console.log(this.commentform.value);
    this.viewCtrl.dismiss(this.commentform.value);

    

    this.commentform.reset({
      author:'',
      rating:5,
      comment:''
    });

  
    
  }

}
