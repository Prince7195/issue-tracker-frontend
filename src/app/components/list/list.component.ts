import { Component, OnInit } from '@angular/core';
import { IssuesService } from '../../issues.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  constructor(private issuesService: IssuesService) { }

  ngOnInit() {
    this.issuesService.getIssues().subscribe(issues => {
      console.log(issues);
    });
  }

}
