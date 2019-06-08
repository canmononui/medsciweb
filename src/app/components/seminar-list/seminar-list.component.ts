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

@Component({
  selector: 'app-seminar-list',
  templateUrl: './seminar-list.component.html',
  styleUrls: ['./seminar-list.component.css']
})
export class SeminarListComponent implements OnInit {
// CREATE VARIABLE GET DATA FROM /announce IN FIREBASE
SeminarList: AngularFireList<any>;
Seminar: any[];

// CREATE VARIABLE REMOVE DATA FROM FIREBASE BY KEY
private dataForRemove : any;

private fileUrl: Observable<string | null>;
private downloadURL: Observable<string>;

private getUrl: any[];
printerr: string;

constructor(db: AngularFireDatabase, private storage: AngularFireStorage, private router: Router) {
  this.SeminarList = db.list('/seminar');
 }

     // ON LOAD MAP DATA FOR ngFor PRINT DATA IN HTML
     ngOnInit() {
      this.SeminarList.snapshotChanges().map(actions => {
      return actions.map(action => ({ key: action.key, value: action.payload.val() }));
      }).subscribe(items => {

      // this.downloadURL = this.storage.ref('/announce-file/1558935409258_08646278.pdf').getDownloadURL();
      // this.getUrl = this.MicroAnnounce;
      this.Seminar = items;
      });

  }

  
  // CLICK EDIT SET PATH (KEY IN PATH) SENT TO announce-edit/key.id
  seminarEdit(data) {
    this.router.navigate([`/seminar-edit/${data.key}`]);
  }

  // CLICK REMOVE DATA INFUNCTION SET DATA FOR FUNCTION announceRemove
  dataRemove(data){
    this.dataForRemove = data;
    // console.log("dataRemove: ",data);
  }

  // CLICK SAVE IN MODEL IN FUNCTION REMOVE DATA IN FIREBASE BY KEY
  seminarRemove() {
    // console.log("seminarRemove");
    this.SeminarList.remove(this.dataForRemove.key);
  }


}
