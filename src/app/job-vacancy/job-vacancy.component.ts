import { Component, OnInit } from '@angular/core';
import { ServiceBase } from '../shared/service.base';

@Component({
        selector: 'job-vacancy',
        styleUrls: ['./job-vacancy.component.scss'],
        templateUrl: './job-vacancy.component.html'
})

export class JobVacancyComponent implements OnInit {
        name = 'JobVanacancy';
        constructor(private service: ServiceBase) { }

        ngOnInit() {
                console.log('Loading app here ');
        }
        
}
