import { Component, OnInit } from '@angular/core';
import { IssuesService } from '../../issues.service';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {

  constructor(private issuesService: IssuesService) { }

  ngOnInit() {
  }

}
