import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { JobVacancyComponent } from './job-vacancy/job-vacancy.component';
import { AddJobComponent } from './add-job/add-job.component';

const routes: Routes = [
  {
    path: '',
    component: JobVacancyComponent
  },
  {
    path: 'add-job',
    component: AddJobComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }