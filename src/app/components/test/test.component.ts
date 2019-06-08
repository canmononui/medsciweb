import { Component, OnInit } from '@angular/core';
// import { AngularFireStorage } from 'angularfire2/storage';
// firebase
import { FirebaseApp } from '@angular/fire';
import { AngularFireDatabase } from '@angular/fire/database';
import { AngularFireStorage, AngularFireUploadTask } from '@angular/fire/storage';
import { AngularFirestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs/Observable';
// import { url } from 'inspector';
import { tap } from 'rxjs/operators';
import { finalize } from 'rxjs/operators';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
// export class TestComponent implements OnInit {
export class TestComponent  {
// For up load file
  // Main task 
  task: AngularFireUploadTask;
  // Progress monitoring
  percentage: Observable<number>;
  snapshot: Observable<any>;
  // Download URL
  downloadURL: Observable<string>;
  // downloadURL: string; 
  // State for dropzone CSS toggling
  isUploaded: boolean;
// For up load file

// TEST
private getfileName: string;
  private getfileUrl: string;
  private data : {
    fileUrl: string 
  }
// TEST

  constructor(private db: AngularFireDatabase, private storage: AngularFireStorage) { 

  }

  // TEST
  

  // TEST






  uploadFile(event) {
  // The File object
  const file = event.item(0)
  // Client-side validation example 
    if (file.type.split('/')[1] !== 'pdf') { 
    console.error('unsupported file type :( ')
    return;
  }

  // The storage path
  const path = `announce-file/${new Date().getTime()}_${file.name}`;
  console.log(path);

// Totally optional metadata
const customMetadata = { app: 'My AngularFire-powered PWA!' };

// The main task
this.task = this.storage.upload(path, file, { customMetadata })

// Progress monitoring
this.percentage = this.task.percentageChanges();

// TEST 1
// const fileRef = this.storage.ref(path);
// this.snapshot = this.task.snapshotChanges().pipe(
//   // The file's download URL
//   finalize(() => this.downloadURL = fileRef.getDownloadURL()),
//   tap(snap => {
//     console.log(snap)
//     if (snap.bytesTransferred === snap.totalBytes) {
//       this.getfileName = file.name;
//       // this.getfileUrl = this.downloadURL;
//       this.isUploaded = true;
//       console.log(this.downloadURL)
//     }
//   })
// )
// this.snapshot.subscribe();

// TEST 2
// this.snapshot = this.task.snapshotChanges().pipe(
//   tap(snap => {
//     console.log(snap)
//     if (snap.bytesTransferred === snap.totalBytes) {
//     this.downloadURL.subscribe((url) =>{
//       this.getfileName = file.name;
//       this.getfileUrl = url.toString();
//       this.isUploaded = true;
//       console.log(this.getfileUrl)
//     })
//   }
// })
// )

// this.downloadURL = this.task.downloadURL();

// TEST 3
const fileRef = this.storage.ref(path);
this.task.snapshotChanges().pipe(
  finalize(() => {
   fileRef.getDownloadURL().subscribe(url => {
     console.log(url); // <-- do what ever you want with the url..
     this.isUploaded = true;
   });
 }))
 .subscribe();  



}
  


   
  // ngOnInit() {
  // }

}
