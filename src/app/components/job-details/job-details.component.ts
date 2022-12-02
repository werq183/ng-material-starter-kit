import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';
import {Observable, switchMap} from 'rxjs';
import { JobsModel } from '../../models/jobs.model';
import { JobsService } from '../../services/jobs.service';
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-job-details',
  styleUrls: ['./job-details.component.scss'],
  templateUrl: './job-details.component.html',
  encapsulation: ViewEncapsulation.Emulated,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class JobDetailsComponent {
  readonly details$: Observable<JobsModel> = this._activatedRoute.params.pipe(switchMap(data => this._jobsService.getOne(data['id'])));

  constructor(private _activatedRoute: ActivatedRoute, private _jobsService: JobsService) {
  }
}
