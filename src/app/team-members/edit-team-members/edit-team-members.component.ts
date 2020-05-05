import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { first } from "rxjs/operators";
import { TeamMembersService } from "../../Service/team-members.service";

@Component({
  selector: 'app-edit-team-members',
  templateUrl: './edit-team-members.component.html',
  styleUrls: ['./edit-team-members.component.scss']
})
export class EditTeamMembersComponent implements OnInit {

  constructor(private formBuilder: FormBuilder, private router: Router, private teamMembersService: TeamMembersService) { }
  editForm: FormGroup;

  ngOnInit(): void {
    let teamMemberId = window.localStorage.getItem('editItem');
    if (!teamMemberId) {
      this.router.navigate(['view-team-members']);
      return;
    }    

    this.editForm=this.formBuilder.group({
      id:[''],
      firstName:['', Validators.required],
      lastName:['', Validators.required],
      phoneNumber:[''],
      emailId:['']
    });

    this.teamMembersService.getMemberById(+teamMemberId)
      .subscribe(data => {
        this.editForm.setValue(data);
      });
  }

  onSubmit() {
    this.teamMembersService.editMember(this.editForm.value)
      .pipe(first()).subscribe(data => {
        this.router.navigate(['/']);
    });
  }

}
