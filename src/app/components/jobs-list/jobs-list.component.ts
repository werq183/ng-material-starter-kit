import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';
import { Observable } from 'rxjs';
import { JobsModel } from '../../models/jobs.model';
import { JobsService } from '../../services/jobs.service';

@Component({
  selector: 'app-jobs-list',
  styleUrls: ['./jobs-list.component.scss'],
  templateUrl: './jobs-list.component.html',
  encapsulation: ViewEncapsulation.Emulated,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class JobsListComponent {
  readonly list$: Observable<JobsModel[]> = this._jobsService.getAll();

  constructor(private _jobsService: JobsService) {
  }
}
