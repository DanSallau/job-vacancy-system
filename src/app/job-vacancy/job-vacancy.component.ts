import { Component, OnInit } from '@angular/core';
import { ApiService } from '../shared/api.service';
import { IJob } from '../shared/api.interface';

@Component({
        selector: 'job-vacancy',
        styleUrls: ['./job-vacancy.component.scss'],
        templateUrl: './job-vacancy.component.html'
})

export class JobVacancyComponent implements OnInit {
        jobs: Array<IJob> = [];
        constructor(private service: ApiService) { }

        ngOnInit() {
                this.service
                        .getAllVacancies()
                        .subscribe((x) => {
                                this.jobs = x;
                                console.log('Loading app here ', x);
                        }, err => {

                        })
        }

}
