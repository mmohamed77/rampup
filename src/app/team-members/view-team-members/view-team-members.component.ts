import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";

import { TeamMembersService } from "../../Service/team-members.service";
import { Lookup } from "../../Model/teamMember.model";

@Component({
  selector: 'app-view-team-members',
  templateUrl: './view-team-members.component.html',
  styleUrls: ['./view-team-members.component.scss']
})
export class ViewTeamMembersComponent implements OnInit {
  teamMembers:any;
  btnTeamMember: boolean = false;

  constructor(private router: Router, private teamMemberService: TeamMembersService) { }

  ngOnInit(): void {
    this.teamMemberService.getTeamMembers().subscribe(data => {
      console.log(data);
      this.teamMembers = data;
    });
  }

  addMember():void{
    this.btnTeamMember =true;
  }

  deleteMember(teamMember : Lookup):void{
    this.teamMemberService.deleteMember(teamMember.id).subscribe(data=>{
      this.teamMembers=this.teamMembers.filter(team => team !== teamMember);
    })
  };

  editMember(teamMember:Lookup):void{
    window.localStorage.removeItem("editItem");
    window.localStorage.setItem("editItem",teamMember.id.toString());
    this.router.navigate(['edit-team-members']);
  }

}
