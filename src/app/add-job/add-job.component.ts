import { Component, OnInit } from '@angular/core';
import { ApiService } from '../shared/api.service';
import { IJob,IEmployer } from '../shared/api.interface';

@Component({
  selector: 'add-job-component',
  styleUrls: ['add-job.component.scss'],
  templateUrl: 'add-job.component.html'
})

export class AddJobComponent implements OnInit {

    constructor(private service: ApiService) { }
    job: IJob ;
    employer: IEmployer;
    ngOnInit() {
      this.employer = <IEmployer>{};
      this.job = <IJob>{};
    }


}