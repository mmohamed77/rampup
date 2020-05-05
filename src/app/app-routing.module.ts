import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DashboardComponent } from "./dashboard/dashboard/dashboard.component";
import { ViewTeamMembersComponent } from "./team-members/view-team-members/view-team-members.component";
import { AddTeamMembersComponent } from "./team-members/add-team-members/add-team-members.component";
import { EditTeamMembersComponent } from "./team-members/edit-team-members/edit-team-members.component";

import { ViewTrainingComponent } from "./training-page/view-training/view-training.component";
import { AddTrainingComponent } from "./training-page/add-training/add-training.component";

import { AddTrainingMembersComponent } from "./training-members/add-training-members/add-training-members.component";


const routes: Routes = [
  { path:'home', component: DashboardComponent },
  { path:'team-members', component: ViewTeamMembersComponent },
  { path:'training-details', component: ViewTrainingComponent },
  { path:'training-mappings', component: AddTrainingMembersComponent},
  { path:'add-team-members', component:AddTeamMembersComponent },
  { path:'edit-team-members', component:EditTeamMembersComponent },
  { path:'add-training', component:AddTrainingComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
