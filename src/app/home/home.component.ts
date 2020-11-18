import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(private route: Router) { }

  ngOnInit(): void {
    this.changeRoute();
  }

  changeRoute(): void {
    console.log('asd');
    this.route.navigate(['lazy', 'asd']);
  }

}
