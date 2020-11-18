import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, RouterStateSnapshot, UrlSegment } from '@angular/router';

@Component({
  selector: 'app-param',
  templateUrl: './param.component.html',
  styleUrls: ['./param.component.scss']
})
export class ParamComponent implements OnInit {

  inp = '';

  constructor(private route: ActivatedRoute,
              private router: Router) {
    route.params.subscribe(val => {
      console.log('val => ', val);
      this.ngOnInit();
    });
  }

  ngOnInit(): void {
    console.log(this.route);
    console.log(this.route.url);
    console.log(this.route.snapshot.pathFromRoot);
    console.log(this.route.snapshot.url);
    console.log(this.route.snapshot.url[3].path);

    console.log(this.route.snapshot.paramMap.get('a'));
    console.log(this.route.snapshot.paramMap.get('b'));

    console.log(this.router);
    console.log(this.router.url);

  }

  change(): void {
    console.log(this.inp);
    const segments = JSON.parse(JSON.stringify(this.route.snapshot.url));
    segments[1].path = this.inp;
    this.router.navigate([segments[0].path,
                          segments[1].path,
                          segments[2].path,
                          segments[3].path]);
  }
}
