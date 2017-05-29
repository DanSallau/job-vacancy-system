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
        limit : number;

        constructor(private service: ApiService) { }

        ngOnInit() {
                this.limit = 3;
                this.service
                        .getAllVacancies()
                        .subscribe((x) => {
                                this.jobs = x;
                        }, err => {
                                console.log('There is an error loading page ', err);
                        })
        }

        loadMore(e: Event) {
                e.preventDefault();
                this.limit += 3;
        }

}
