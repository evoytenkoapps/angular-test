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
  data = 'test-app';
  data$ = new BehaviorSubject('test-app');

  constructor(private changeDetectorRef: ChangeDetectorRef) {}

  ngAfterViewInit(): void {
    // this.changeDetectorRef.detectChanges();
    this.data = 'changed';
    this.data$.next('changed rx');
  }
}
