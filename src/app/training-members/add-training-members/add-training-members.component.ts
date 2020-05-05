import { Component, OnInit } from '@angular/core';
import { Validators, FormControl, FormGroup, FormBuilder } from '@angular/forms';
import { of } from 'rxjs';
import { TeamMembersService } from '../../Service/team-members.service';
import { TrainingPageService } from '../../Service/training-page.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-member-map',
  templateUrl: './add-training-members.component.html',
  styleUrls: ['./add-training-members.component.scss']
})
export class AddTrainingMembersComponent implements OnInit {

  teamMembers;
  ongoingTrainings;
  upcomingTrainings;
  memberMapForm: FormGroup;

  constructor(private formBuilder: FormBuilder, private teamMembersService: TeamMembersService, private trainingPageService: TrainingPageService, private router: Router) {
    this.memberMapForm = this.formBuilder.group({
      teamMembers: ['-'],
      ongoingTrainings: ['-'],
      upcomingTrainings: ['-']
    });

    this.teamMembersService.getTeamMembers().subscribe(data => {
      console.log(data);
      this.teamMembers = data;
    });

    this.trainingPageService.getOngoingTrainingDetails().subscribe(data => {
      console.log(data);
      this.ongoingTrainings = data;
    });

    this.trainingPageService.getTrainingDetails().subscribe(data => {
      console.log(data);
      this.upcomingTrainings = data;
    });
  }

  ngOnInit() {
  }

  onSubmit() {
    this.teamMembersService.addMemberMap(this.memberMapForm.value)
      .subscribe(data => {
        console.log(data);
        this.router.navigate(['home']);
      });
  }

}

