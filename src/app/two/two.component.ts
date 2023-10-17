import {
  AfterViewInit,
  ChangeDetectionStrategy,
  Component,
} from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'app-two',
  templateUrl: './two.component.html',
  styleUrls: ['./two.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TwoComponent implements AfterViewInit {
  data$ = new BehaviorSubject('test-app');

  constructor() {}

  ngAfterViewInit(): void {
    this.data$.next('changed rx');
  }
}
