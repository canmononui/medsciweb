import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
// import { AnnounceComponent } from './components/announce/announce.component';
import { NavbarComponent } from './components/navbar/navbar.component';
// import { SeminarComponent } from './components/seminar/seminar.component';
// import { ScholarshipComponent } from './components/scholarship/scholarship.component';
// import { ScholarshipInputComponent } from './components/scholarship-input/scholarship-input.component';
// import { SeminarInputComponent } from './components/seminar-input/seminar-input.component';
// import { AnnounceInputComponent } from './components/announce-input/announce-input.component';
import { StudentEditComponent } from './components/student-edit/student-edit.component';
import { StudentListComponent } from './components/student-list/student-list.component';
import { StudentAddComponent } from './components/student-add/student-add.component';
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

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  // { path: 'announce', component: AnnounceComponent },
  // { path: 'announce-input', component: AnnounceInputComponent },
  // { path: 'seminar', component: SeminarComponent },
  // { path: 'seminar-input', component: SeminarInputComponent },
  // { path: 'scholarship', component: ScholarshipComponent },
  // { path: 'scholarship-input', component: ScholarshipInputComponent },
  { path: 'student-edit', component: StudentEditComponent },
  { path: 'student-list', component: StudentListComponent },
  { path: 'student-add', component: StudentAddComponent },
  { path: 'advisor-edit', component: AdvisorEditComponent },
  { path: 'advisor-list', component: AdvisorListComponent },
  { path: 'advisor-add', component: AdvisorAddComponent },
  { path: 'comment-faculty', component: CommentFacultyComponent },
  { path: 'comment-app', component: CommentAppComponent },
  { path: 'comment-faculty-reply', component: CommentFacultyReplyComponent },
  { path: 'comment-app-reply', component: CommentAppReplyComponent },
  { path: 'announce-edit/:id', component: AnnounceEditComponent },
  { path: 'scholarship-edit/:id', component: ScholarshipEditComponent },
  { path: 'seminar-edit/:id', component: SeminarEditComponent },
  { path: 'seminar-edit', component: SeminarEditComponent },
  { path: 'scholarship-edit', component: ScholarshipEditComponent },
  { path: 'announce-list', component: AnnounceListComponent },
  { path: 'scholarship-list', component: ScholarshipListComponent },
  { path: 'seminar-list', component: SeminarListComponent },
  { path: 'announce-add', component: AnnounceAddComponent },
  { path: 'scholarship-add', component: ScholarshipAddComponent },
  { path: 'seminar-add', component: SeminarAddComponent },
  { path: 'test', component: TestComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
