import { Component, OnInit } from '@angular/core';
import { Pipe, PipeTransform } from '@angular/core';
import { NgForm } from '@angular/forms';
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
import {ActivatedRoute} from '@angular/router';
import { Router } from '@angular/router';
import { finalize } from 'rxjs/operators';

@Component({
  selector: 'app-scholarship-edit',
  templateUrl: './scholarship-edit.component.html',
  styleUrls: ['./scholarship-edit.component.css']
})
export class ScholarshipEditComponent implements OnInit {
  private getOldUrl: any;
  private getOldFileName: any;

  private getUrl: any;
  private test: any= {};
  // CREATE VARIABLE GET DATA FROM FIREBASE BY KEY
  private dataEdit: any= {};
  // private dataEdit = <any>{};
  private branchString: string;
  // CREATE VARIABLE KEY RO FIREBASE
  private id;
  private dropdownSelect: any;

  private data:any;
  private setdata : {
    branch: string,
    topic: string,
    description: string,
    fileName: string,
    fileUrl: string  
  }
  private setdatanoBranch : {
    topic: string,
    description: string,
    fileName: string,
    fileUrl: string  
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


constructor(private db: AngularFireDatabase, private storage: AngularFireStorage, private route: ActivatedRoute) { }

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
uploadFile(event) {
  // debugger
  // The File object
  const file = event.item(0)
  // Client-side validation example 
    this.printerr = "";
    if (file.type.split('/')[1] !== 'pdf') { 
      this.printerr = "กรุณาเลือกไฟล .pdf";
    return;
  }

  // The storage path
  const path = `scholarship-file/${new Date().getTime()}_${file.name}`;
  // console.log(path);

// Totally optional metadata
const customMetadata = { app: 'My AngularFire-powered PWA!' };

// The main task
this.task = this.storage.upload(path, file, { customMetadata })

// Progress monitoring
this.percentage = this.task.percentageChanges();

const fileRef = this.storage.ref(path);

this.task.snapshotChanges().pipe(
  finalize(() => {
   fileRef.getDownloadURL().subscribe(url => {
    //  console.log(url); // <-- do what ever you want with the url..
     this.getfileName = file.name;
     this.getfileUrl = url;
     this.isUploaded = true;
   });
 }))
 .subscribe();
}
// UP LOAD FILE

openFile(){
  if(this.getUrl==""){
    // console.log("no file")
    alert('ไม่มีไฟล์');
  }
  else{
    window.open(this.getUrl, "_blank");

  }
}

// ON LOAD PAGE GET KEY ID FIREBASE FROM LINK PATH
ngOnInit() {
  this.id = this.route.snapshot.paramMap.get("id");
  if(this.id){
      this.getScholarshipByKey(this.id);
  }
}

// AFTER ngOnInit USE KEY ID GET DATA BY KEY ***FOR SHOE DATA IN INPUT IN HTML
getScholarshipByKey(id){
  this.dataEdit = this.db.object('scholarship/' + id).snapshotChanges().map(res => {
    // console.log(res.payload.val().branch)
    // this.dropdownSelect = res.payload.val().branch;
        return res.payload.val();
      });
  
      this.db.list('scholarship/' + id).snapshotChanges().map(actions => {
        return actions.map(action => ({ key: action.key, value: action.payload.val() }));
      }).subscribe(items => {
        this.dropdownSelect = items[0].value;
        // console.log(items)
        this.getOldUrl = items[3].value;
        this.getOldFileName = items[2].value;
        if(items[3].value == ""){
          this.getUrl = "ไม่มีเอกสาร";
        }
        else{
          this.getUrl = items[2].value;
        }
        // this.getUrl = items[3].value;
        // console.log(items)
      });
}


// SET DATA FOR FIREBASE FROM FROM INPUT IN scholarship-EDIT
dataUpdate(topic, description){
  
  // No dropdownSelect
  if(this.dropdownSelect == ""){
    // No Upload File
    if(this.getfileName == null){
      this.setdatanoBranch = {
        topic: topic,
        description: description,
        fileName: this.getOldFileName,
        fileUrl: this.getOldUrl
      }
    }
    // Upload File
    else{
      this.setdatanoBranch = {
        topic: topic,
        description: description,
        fileName: this.getfileName,
        fileUrl: this.getfileUrl
      }
    }
    this.data = this.setdatanoBranch;
}
// dropdownSelect
else{
  // No Upload File
  if(this.getfileName == null){
    this.setdata = {
      branch: this.dropdownSelect,
      topic: topic,
      description: description,
      fileName: this.getOldFileName,
      fileUrl: this.getOldUrl
    }
  }
  // Upload File
  else{
    this.setdata = {
      branch: this.dropdownSelect,
      topic: topic,
      description: description,
      fileName: this.getfileName,
      fileUrl: this.getfileUrl
    }
  }
  this.data = this.setdata;
}

}


// UPDATE DATA TO FIREBASE (DATA FROM FUNCTION dataUpdate)
scholarshipUpdate(){
  if(this.id){
    this.db.list("scholarship/").update(this.id,this.data);
    }
}



noData(){
  // console.log(this.isUploaded);
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
