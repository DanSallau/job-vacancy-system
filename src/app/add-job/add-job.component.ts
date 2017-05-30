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
    tags: Array<any> = [];
    ngOnInit() {
      this.employer = <IEmployer>{};
      this.job = <IJob>{};
      this.tags = [];
      console.log('gyambo ', this.job);
    }

    addJob(e: Event) {
      console.log('The added jobs are ', this.employer);
      console.log('The added jobs are ', this.job);
    }

    setTag(e: Event) {
      this.tags.push(e.target['value']);
      console.log('Maigari  ', e.target['value']);
    }


}