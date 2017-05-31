import { Component, OnInit } from '@angular/core';
import { ApiService } from '../shared/api.service';
import { IJob, IEmployer } from '../shared/api.interface';
import { Router } from '@angular/router';

@Component({
  selector: 'add-job-component',
  styleUrls: ['add-job.component.scss'],
  templateUrl: 'add-job.component.html'
})

export class AddJobComponent implements OnInit {

  constructor(private service: ApiService, private router: Router) { }
  job: IJob;
  employer: IEmployer;
  tags: Array<any> = [];
  errorMsg: string;

  ngOnInit() {
    this.employer = <IEmployer>{};
    this.job = <IJob>{};
    this.tags = [];
    this.errorMsg = "";
  }

  addJob(e: Event) {
    this.job.JobTags = this.tags.toString();
    
    //Create employer first
    this.service
      .createEmployer(this.employer)
      .subscribe(x => {
        console.log('the employer is ', x);
        this.job.EmployerId = x.id

        this.service
          .addJob(this.job)
          .subscribe((x) => {
            if (x.success) {
              this.router.navigateByUrl('/');
            }
          }, err => {
            this.errorMsg = err;
          })
      })

  }

  setTag(e: Event) {
  
    const index = array.indexOf(e.target['value']);

    if(e.target['checked'] === true) {
      //add when checked
      this.tags.push(e.target['value']);
    } else {
      //remove when unchecked
      array.splice(index, 1);
    }
  }


}