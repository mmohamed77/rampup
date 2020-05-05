import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from "@angular/forms";
import { TeamMembersService } from "../../Service/team-members.service";
import { Router } from "@angular/router";

@Component({
  selector: 'app-add-team-members',
  templateUrl: './add-team-members.component.html',
  styleUrls: ['./add-team-members.component.scss']
})
export class AddTeamMembersComponent implements OnInit {
  addForm : FormGroup;
  MIN_LENGTH = 6;
  constructor(private router: Router, private formBuilder:FormBuilder, private teamMembersService: TeamMembersService) { }

  ngOnInit(): void {
    this.addForm = this.formBuilder.group({
      id: [],
      firstName: ['', [Validators.required, Validators.minLength(this.MIN_LENGTH)], []],
      lastName:['',Validators.required],
      phoneNumber: ['', [Validators.required, Validators.pattern("^((\\+91-?)|0)?[0-9]{10}$")]],
      emailId: ['', [Validators.required, Validators.email]]
    });
  }

  get firstName() {
    return this.addForm.get("firstName") as FormControl;
  }

  get frm() { 
    return this.addForm.controls; 
  }

  onSubmit(){  
    this.teamMembersService.addMember(this.addForm.value)
    .subscribe(data => {
      this.router.navigate(['home']);
    });
  }

}
