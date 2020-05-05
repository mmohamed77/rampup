import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard/dashboard.component';
import { AddTeamMembersComponent } from './team-members/add-team-members/add-team-members.component';
import { ViewTeamMembersComponent } from './team-members/view-team-members/view-team-members.component';
import { EditTeamMembersComponent } from './team-members/edit-team-members/edit-team-members.component';

import { AddTrainingMembersComponent } from './training-members/add-training-members/add-training-members.component';
import { ViewTrainingMembersComponent } from './training-members/view-training-members/view-training-members.component';

import { ViewTrainingComponent } from "./training-page/view-training/view-training.component";
import { AddTrainingComponent } from './training-page/add-training/add-training.component';
import { EditTrainingComponent } from "./training-page/edit-training/edit-training.component";


@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    AddTeamMembersComponent,
    ViewTeamMembersComponent,
    EditTeamMembersComponent,
    AddTrainingMembersComponent,
    ViewTrainingMembersComponent,
    AddTrainingComponent,
    EditTrainingComponent,
    ViewTrainingComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    MatExpansionModule,
    MatDatepickerModule,
    MatFormFieldModule,
    MatInputModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
