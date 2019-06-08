import { Component, OnInit } from '@angular/core';
// firebase
import { FirebaseApp } from '@angular/fire';
import { AngularFireDatabase } from '@angular/fire/database';
import { AngularFireStorage, AngularFireUploadTask } from '@angular/fire/storage';
import { AngularFirestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs/Observable';
import { tap } from 'rxjs/operators';
import { finalize } from 'rxjs/operators';

@Component({
  selector: 'app-seminar-add',
  templateUrl: './seminar-add.component.html',
  styleUrls: ['./seminar-add.component.css']
})
export class SeminarAddComponent implements OnInit {
  private dropdownSelect = "ทุกสาขา";
  // DATA FOR INSERT TO FIREBASE
    // private data : {
    //   branch: string,
    //   time: string,
    //   topic: string,
    //   description: string,
    //   like: number,
    //   fileName: string,
    //   fileUrl: string 
    //   // fileUrl: Observable<string> 
    // }
    private dataSeminar: {
      branch: string,
      time: string,
      topic: string,
      location: string,
      date: string,
      description: string,
      like: number,
      registerCoun: number 
    }
    private getfileName: string;
    private getfileUrl: string;
  // For up load file
    // Main task 
    task: AngularFireUploadTask;
    // Progress monitoring
    percentage: Observable<number>;
    snapshot: Observable<any>;
    // Download URL
    downloadURL: Observable<string>;
    // State for dropzone CSS toggling
    isUploaded = false;
    printerr: string;
  // For up load file

  // CREATE DB BY AngularFireDatabase
  constructor (private db: AngularFireDatabase, private storage: AngularFireStorage) { }

  ngOnInit() {
  }

  dropAll(){
    this.dropdownSelect = "ทุกสาขา";
  }
  dropMicro(){
    this.dropdownSelect = "จุลชีววิทยา";
  }
  dropMedsci(){
    this.dropdownSelect = "วิทยาศาสตร์การแพทย์";
  }
  dropAnatomi(){
    this.dropdownSelect = "พยาธิวิทยากายวิภาค";
  }
  dropBiochem(){
    this.dropdownSelect = "ชีวเคมีและชีววิทยาโมเลกุล";
  }

// UP LOAD FILE
// uploadFile(event) {
//   // The File object
//   const file = event.item(0)
//   // Client-side validation example 
//     this.printerr = "";
//     if (file.type.split('/')[1] !== 'pdf') { 
//       this.printerr = "กรุณาเลือกไฟล .pdf";
//     // console.error('unsupported file type :( ')
//     return;
//   }

//   // The storage path
//   const path = `seminar-file/${new Date().getTime()}_${file.name}`;
//   // console.log(path);

// // Totally optional metadata
// const customMetadata = { app: 'My AngularFire-powered PWA!' };

// // The main task
// this.task = this.storage.upload(path, file, { customMetadata })

// // Progress monitoring
// this.percentage = this.task.percentageChanges();

// const fileRef = this.storage.ref(path);

// this.task.snapshotChanges().pipe(
//   finalize(() => {
//    fileRef.getDownloadURL().subscribe(url => {
//     //  console.log(url); // <-- do what ever you want with the url..
//      this.getfileName = file.name;
//      this.getfileUrl = url;
//      this.isUploaded = true;
//    });
//  }))
//  .subscribe();
// }
// UP LOAD FILE

// SET DATA FOR FIREBASE
dataAdd(topic, location, dateinput, description){
  // GET DATE FOR SHOW POST
  var months= ["มกราคม", "กุมภาพันธ์", "มีนาคม", "เมษายน", "พฤษภาคม", "มิถุนายน", "กรกฎาคม", "สิงหาคม", "กันยายน", "ตุลาคม", "พฤศจิกายน", "ธันวาคม"];
  var d = new Date();
  var FullYear = d.getFullYear()+543;
  // SET DATA
  // *** ADMIN ต้องแก้ไขตาม UID
  // *** DOC ยังไม่ได้ทำฟังก์ชั่นอัพไฟล
//   if(this.getfileName == null){
//     this.data = {
//       branch: this.dropdownSelect,
//       time: d.getDate() + " " +months[d.getMonth()] + " " + FullYear,
//       topic: topic,
//       description: description,
//       like: 0,
//       fileName: "",
//       fileUrl: ""  
//     }
//     // debugger
//   }
//   else{
//   this.data = {
//     branch: this.dropdownSelect,
//     time: d.getDate() + " " +months[d.getMonth()] + " " + FullYear,
//     topic: topic,
//     description: description,
//     like: 0,
//     fileName: this.getfileName,
//     fileUrl: this.getfileUrl  
//   }
// }
  this.dataSeminar = {
      branch: this.dropdownSelect,
      time: d.getDate() + " " +months[d.getMonth()] + " " + FullYear,
      topic: topic,
      description: description,
      location: location,
      date: dateinput,
      like: 0,
      registerCoun: 0
    }
}

  // INSERT DATA TO FIREBASE (DATA FROM FUNCTION dataAdd)
  seminarAdd(topic, description) {
    
    const itemsRef = this.db.list('/seminar');
    itemsRef.push(this.dataSeminar);
    // itemsRef.push(this.data);
    
  }

  noData(){
    console.log(this.isUploaded);
    if(this.isUploaded == false){
      this.isUploaded = true;
      // console.log("true");
    }
    else{
      this.isUploaded = false
      // console.log("false");
    }
  }




}
