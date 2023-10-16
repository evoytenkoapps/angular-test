import { AfterViewInit, ChangeDetectorRef, Component } from '@angular/core';
import { BehaviorSubject, of } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements AfterViewInit {
  data = new BehaviorSubject('test-app');

  constructor(private changeDetectorRef: ChangeDetectorRef) {}

  ngAfterViewInit(): void {
    this.data.next('changed rx');
    // this.changeDetectorRef.detectChanges();
  }
}
