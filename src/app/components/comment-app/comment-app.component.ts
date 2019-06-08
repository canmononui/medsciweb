import { Component, OnInit } from '@angular/core';
import { Pipe, PipeTransform } from '@angular/core';

// firebase
import { FirebaseApp } from '@angular/fire';
import { AngularFireDatabase, AngularFireList } from '@angular/fire/database';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { AngularFireStorage, AngularFireUploadTask } from '@angular/fire/storage';
// import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Observable, Subject } from 'rxjs';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import { Router } from '@angular/router';
import { TestBed } from '@angular/core/testing';

@Component({
  selector: 'app-comment-app',
  templateUrl: './comment-app.component.html',
  styleUrls: ['./comment-app.component.css']
})
export class CommentAppComponent implements OnInit {
// CREATE VARIABLE GET DATA FROM /announce IN FIREBASE
CommentAppList: AngularFireList<any>;
CommentAppListShow: AngularFireList<any>;
CommentApp: any[];
// CommentAppShow: any[];
CommentAppShow = [];
dataKeyID = [];
// CommentAppShow : {
//   date: string,
//   imgName: string,
//   imgUrl: string,
//   name: string,
//   text: string
// };

// CREATE VARIABLE REMOVE DATA FROM FIREBASE BY KEY
private dataForRemove : any;

private fileUrl: Observable<string | null>;
private downloadURL: Observable<string>;

private getUrl: any[];
printerr: string;


constructor(private db: AngularFireDatabase, private storage: AngularFireStorage, private router: Router) {
  // this.CommentAppList = db.list('/comment-app');
 }

      // ON LOAD MAP DATA FOR ngFor PRINT DATA IN HTML
      ngOnInit() {
        this.db.list('/comment-app').snapshotChanges().map(actions => {
        return actions.map(action => ({ key: action.key, value: action.payload.val() }));
        }).subscribe(items => {
  
        // this.downloadURL = this.storage.ref('/announce-file/1558935409258_08646278.pdf').getDownloadURL();
        // this.getUrl = this.MicroAnnounce;
        this.CommentApp = items;
        console.log(this.CommentApp);
        for (let i = 0; i < items.length; i++) {
          // console.log (items[0].key);
          this.db.list('/comment-app/'+ items[i].key + '/message/',ref => ref.limitToFirst(1)).snapshotChanges().map(actions => {
            return actions.map(action => ({ key: action.key, value: action.payload.val() }));
          }).subscribe(data => {
            // console.log (data);
            // this.dataKeyID = data;
            console.log (data[0].value);
            // console.log(this.dataKeyID)

            // data[0].push({"name": "items[i].key"});

            this.CommentAppShow.push(data[0]);
            // this.CommentAppShow[i].push({namekey: "items[i].key"})
            console.log (this.CommentAppShow[i]);
          });
        }
        console.log (this.CommentAppShow);
        });


        
        
    
    }


  // CLICK EDIT SET PATH (KEY IN PATH) SENT TO announce-edit/key.id
  commentAppEdit(data) {
    console.log(data)
    // this.router.navigate([`/scholarship-edit/${data.key}`]);
  }
}
