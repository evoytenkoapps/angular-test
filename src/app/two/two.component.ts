import {
  AfterViewInit,
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
} from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'app-two',
  templateUrl: './two.component.ts',
  styleUrls: ['./two.component.ts'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TwoComponent implements AfterViewInit {
  data$ = new BehaviorSubject('test-app');

  constructor() {}

  ngAfterViewInit(): void {
    this.data$.next('changed rx');
  }
}
