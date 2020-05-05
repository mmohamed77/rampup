import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";

import { Observable } from "rxjs";

import { environment } from "../../environments/environment";
import { Lookup } from "../Model/teamMember.model";
import { ApiResponse } from "../Model/api.response";

const BASE_PATH = environment.trackerApiPath;


@Injectable({
  providedIn: 'root'
})
export class TeamMembersService {

  constructor(private httpClient: HttpClient) { }

  getTeamMembers(): Observable<ApiResponse> {
    return this.httpClient.get<ApiResponse>(BASE_PATH + "/teamMembers/");
  }

  addMember(teamMember: Lookup): Observable<any> {
    return this.httpClient.post<any>(BASE_PATH + "/teamMembers/", teamMember);
  }

  editMember(teamMember: Lookup): Observable<ApiResponse> {
    return this.httpClient.put<ApiResponse>(BASE_PATH + "/teamMembers/"+teamMember.id, teamMember);
  }

  addMemberMap(teamMember: Lookup): Observable<ApiResponse> {
    return this.httpClient.post<ApiResponse>(BASE_PATH + "/memberMapTraining", teamMember);
  }

  deleteMember(id: number): Observable<ApiResponse> {
    return this.httpClient.delete<ApiResponse>(BASE_PATH + "/teamMembers/" + id);
  }

  getUpcomingCourses(): Observable<any> {
    return this.httpClient.get<any>(BASE_PATH + "/upcomingTrainings");
  }

  getOngoingCourses(): Observable<any> {
    return this.httpClient.get<any>(BASE_PATH + "/ongoingTrainings");
  }

  getMemberById(id: number): Observable<ApiResponse> {
    return this.httpClient.get<ApiResponse>(BASE_PATH + "/teamMembers/" + id);
  }

  getMemberMapTraining():Observable<any>{
    return this.httpClient.get<any>(BASE_PATH + "/memberMapTraining");
  }


}


