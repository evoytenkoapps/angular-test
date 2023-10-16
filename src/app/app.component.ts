import { AfterViewInit, Component } from '@angular/core';
import { BehaviorSubject, of } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements AfterViewInit {
  data = new BehaviorSubject('test-app');

  ngAfterViewInit(): void {
    this.data.next('changed rx');
  }
}
