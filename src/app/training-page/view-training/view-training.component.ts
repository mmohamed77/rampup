import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TrainingPageService } from "../../Service/training-page.service";
import { Lookup } from "../../Model/teamMember.model";

@Component({
  selector: 'app-view-training',
  templateUrl: './view-training.component.html',
  styleUrls: ['./view-training.component.scss']
})
export class ViewTrainingComponent implements OnInit {
  trainings:any;
  constructor(private trainingPageService : TrainingPageService, private router:Router) { }

  ngOnInit(): void {
    this.trainingPageService.getTrainingDetails().subscribe(data => {
      console.log('upcomingTrainings-->'+data);
      this.trainings = data;
    });
    this.trainingPageService.getOngoingTrainingDetails().subscribe(data => {
      this.trainings = this.trainings.concat(data);
      console.log("training-->"+this.trainings);
    }); 
  }

  addTraining():void{       
    this.router.navigate(['add-training']);
  }

  deleteTraining(training : Lookup):void{
    this.trainingPageService.deleteTraining(training.id,training.trainingSeason).subscribe(data=>{
      this.trainings=this.trainings.filter(team => team !== training);
      this.deleteTopic(training.topicName,training.trainingSeason);
    })
  };

  deleteTopic(topicName:string,trainingSeason:string ){
    console.log(topicName);
    console.log(trainingSeason);
    this.trainingPageService.deleteTopic(topicName,trainingSeason).subscribe(data=>{
    });
  } 

}
