import { Component } from '@angular/core';
import { Subscription } from 'rxjs';
import { AppService } from './app.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  dataPassed: string;
  subscription: Subscription;

  constructor(private service: AppService) {
    this.subscription = this.service.getData().subscribe(x => {
      this.dataPassed = x;
    });
  }

}
