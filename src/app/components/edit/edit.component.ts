import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material';

import { IssuesService } from '../../issues.service';
import { Issue } from '../../issue.model';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {

  id: String;
  issue: Issue;
  updateForm: FormGroup;

  constructor(
    private issuesService: IssuesService,
    private fb: FormBuilder,
    private router: Router,
    private route: ActivatedRoute,
    private snackBar: MatSnackBar
  ) {
    this.createForm();
   }

   createForm() {
     this.updateForm = this.fb.group({
       title: ['', Validators.required],
       responsible: '',
       description: '',
       severity: '',
       status: ''
     });
   }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.id = params.id;
      this.issuesService.getIssueById(this.id).subscribe((res: Issue) => {
        this.issue = res;
        this.updateForm.get('title').setValue(this.issue.title);
        this.updateForm.get('responsible').setValue(this.issue.responsible);
        this.updateForm.get('description').setValue(this.issue.description);
        this.updateForm.get('severity').setValue(this.issue.severity);
        this.updateForm.get('status').setValue(this.issue.status);
      });
    });
  }

  updateIssue(title, responsible, description, severity, status) {
    this.issuesService.updateIssue(this.id, title, responsible, description, severity, status).subscribe(() => {
      this.snackBar.open('Issue Updated Successfully', 'Ok', {
        duration: 3000
      });
    });
  }

}
