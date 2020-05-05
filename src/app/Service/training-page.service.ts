import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { environment } from "../../environments/environment";
import { ApiResponse } from '../Model/api.response';

const BASE_PATH = environment.trackerApiPath;

@Injectable({
  providedIn: 'root'
})
export class TrainingPageService {

  constructor(private httpClient: HttpClient) { }

  getTrainingDetails(): Observable<any> {
    return this.httpClient.get<any>(BASE_PATH + "/upcomingTrainings/");
  }

  getOngoingTrainingDetails(): Observable<any> {
    return this.httpClient.get<any>(BASE_PATH + "/ongoingTrainings/");
  }

  addTraining(id: number,seasonname: string): Observable<ApiResponse> {
    console.log(BASE_PATH + seasonname);
    return this.httpClient.post<ApiResponse>(BASE_PATH + seasonname, id);
  }

  deleteTraining(id: number,trainingName :string): Observable<ApiResponse> {
    return this.httpClient.delete<ApiResponse>(BASE_PATH + trainingName + "/" +id);
  }

  deleteTopic(topicName: string,trainingName :string): Observable<ApiResponse> {
    return this.httpClient.delete<ApiResponse>(BASE_PATH + trainingName + "/" +topicName);
  }

 addTopicNames(topicName:string,trainingName: string):Observable<ApiResponse> {
  console.log(BASE_PATH + trainingName);
  console.log(topicName);
  return this.httpClient.put<ApiResponse>(BASE_PATH + trainingName,topicName);
}
}
