import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MatTableDataSource } from '@angular/material';

import { IssuesService } from '../../issues.service';
import { Issue } from '../../issue.model';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  issues: Issue[];
  displayedColumns = ['title', 'responsible', 'severity', 'status', 'actions'];

  constructor(
    private issuesService: IssuesService,
    private router: Router
  ) { }

  ngOnInit() {
    this.fetchIssues();
  }

  fetchIssues() {
    this.issuesService.getIssues().subscribe((data: Issue[]) => {
      this.issues = data;
      console.log('Data requested..');
      console.log(this.issues);
    });
  }

  editIssue(id) {
    this.router.navigate([`/edit/${id}`]);
  }

  deleteIssue(id) {
    this.issuesService.deleteIssue(id).subscribe(() => {
      this.fetchIssues();
    });
  }

}
