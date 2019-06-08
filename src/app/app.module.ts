import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
// import { RouterModule, Routes } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
// firebase
// import { AngularFireModule} from 'angularfire2';
// import { firebaseConfig } from './../environments/firebase.config';
// import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireModule } from '@angular/fire';
import { AngularFireDatabaseModule } from '@angular/fire/database';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireStorageModule } from '@angular/fire/storage';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { firebaseConfig } from './../environments/firebase.config';
import { FormsModule } from '@angular/forms';
// const config = {
//   apiKey: "AIzaSyCYfjPdwr8ifv7eoTO3Ql4-uc6_E_yDBRo",
//   authDomain: "medscinu-389eb.firebaseapp.com",
//   databaseURL: "https://medscinu-389eb.firebaseio.com",
//   projectId: "medscinu-389eb",
//   storageBucket: "medscinu-389eb.appspot.com",
//   messagingSenderId: "578347131188",
//   appId: "1:578347131188:web:3217c3d78044be96"
// }

// Component
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { StudentEditComponent } from './components/student-edit/student-edit.component';
import { StudentListComponent } from './components/student-list/student-list.component';
import { StudentAddComponent } from './components/student-add/student-add.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { AdvisorListComponent } from './components/advisor-list/advisor-list.component';
import { AdvisorAddComponent } from './components/advisor-add/advisor-add.component';
import { AdvisorEditComponent } from './components/advisor-edit/advisor-edit.component';
import { CommentFacultyComponent } from './components/comment-faculty/comment-faculty.component';
import { CommentAppComponent } from './components/comment-app/comment-app.component';
import { CommentAppReplyComponent } from './components/comment-app-reply/comment-app-reply.component';
import { CommentFacultyReplyComponent } from './components/comment-faculty-reply/comment-faculty-reply.component';
import { AnnounceEditComponent } from './components/announce-edit/announce-edit.component';
import { SeminarEditComponent } from './components/seminar-edit/seminar-edit.component';
import { ScholarshipEditComponent } from './components/scholarship-edit/scholarship-edit.component';
import { AnnounceListComponent } from './components/announce-list/announce-list.component';
import { ScholarshipListComponent } from './components/scholarship-list/scholarship-list.component';
import { SeminarListComponent } from './components/seminar-list/seminar-list.component';
import { SeminarAddComponent } from './components/seminar-add/seminar-add.component';
import { ScholarshipAddComponent } from './components/scholarship-add/scholarship-add.component';
import { AnnounceAddComponent } from './components/announce-add/announce-add.component';
import { TestComponent } from './components/test/test.component';



@NgModule({
  declarations: [
    AppComponent,
    // AnnounceComponent,
    NavbarComponent,
    // SeminarComponent,
    // ScholarshipComponent,
    // ScholarshipInputComponent,
    // SeminarInputComponent,
    // AnnounceInputComponent,
    StudentEditComponent,
    StudentListComponent,
    StudentAddComponent,
    HomeComponent,
    LoginComponent,
    AdvisorListComponent,
    AdvisorAddComponent,
    AdvisorEditComponent,
    CommentFacultyComponent,
    CommentAppComponent,
    CommentAppReplyComponent,
    CommentFacultyReplyComponent,
    AnnounceEditComponent,
    SeminarEditComponent,
    ScholarshipEditComponent,
    AnnounceListComponent,
    ScholarshipListComponent,
    SeminarListComponent,
    SeminarAddComponent,
    ScholarshipAddComponent,
    AnnounceAddComponent,
    TestComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    // firebase
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireDatabaseModule,
    AngularFirestoreModule,
    AngularFireStorageModule,
    AngularFireAuthModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
