import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { AppService } from '../app.service';

@Component({
  selector: 'app-second',
  templateUrl: './second.component.html',
  styleUrls: ['./second.component.scss']
})
export class SecondComponent implements OnInit {

  dataPassed: string;
  subscription: Subscription;

  constructor(private service: AppService) {
    this.subscription = this.service.getData().subscribe(x => {
      this.dataPassed = x;
    });
  }

  ngOnInit(): void {
  }

  sendData(): void {
    this.service.sendData('Data from B');
  }

  clearData(): void {
    this.service.clearData();
  }

}
