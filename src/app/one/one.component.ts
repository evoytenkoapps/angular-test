import {
  AfterViewInit,
  ChangeDetectionStrategy,
  Component,
} from '@angular/core';

@Component({
  selector: 'app-one',
  templateUrl: './one.component.html',
  styleUrls: ['./one.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class OneComponent implements AfterViewInit {
  data = 'one-app';

  constructor() {}

  ngAfterViewInit(): void {
    this.data = 'changed';
  }
}
