import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { AppService } from '../app.service';

@Component({
  selector: 'app-first',
  templateUrl: './first.component.html',
  styleUrls: ['./first.component.scss']
})
export class FirstComponent implements OnInit {

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
    this.service.sendData('Data from A');
  }

  clearData(): void {
    this.service.clearData();
  }

}
