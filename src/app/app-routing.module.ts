import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { JobsListComponent } from './components/jobs-list/jobs-list.component';
import { JobDetailsComponent } from './components/job-details/job-details.component';
import { JobsListComponentModule } from './components/jobs-list/jobs-list.component-module';
import { JobsServiceModule } from './services/jobs.service-module';
import { JobDetailsComponentModule } from './components/job-details/job-details.component-module';

@NgModule({
  imports: [RouterModule.forRoot([{ path: 'jobs', component: JobsListComponent }, { path: 'jobs/:id', component: JobDetailsComponent }]), JobsListComponentModule, JobsServiceModule, JobDetailsComponentModule],
  exports: [RouterModule]
})
export class AppRoutingModule { }
