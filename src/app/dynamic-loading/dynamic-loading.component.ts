import { Component, ComponentFactoryResolver, OnInit, ViewChild, ViewContainerRef } from '@angular/core';
import { FirstComponent } from './first/first.component';
import { SecondComponent } from './second/second.component';

@Component({
  selector: 'app-dynamic-loading',
  templateUrl: './dynamic-loading.component.html',
  styleUrls: ['./dynamic-loading.component.scss']
})
export class DynamicLoadingComponent implements OnInit {

  comp = true;

  @ViewChild('container', {read: ViewContainerRef}) container: ViewContainerRef;

  constructor(private componentFactoryResolver: ComponentFactoryResolver) { }

  ngOnInit(): void {
  }

  load(): void {
    console.log(this.comp);

    if (this.comp) {
      this.loadComponent(FirstComponent);
    }
    else {
      this.loadComponent(SecondComponent);
    }
  }

  loadComponent(component: any): void {
    const factory = this.componentFactoryResolver.resolveComponentFactory(component);

    const ref = this.container.createComponent(factory);

    ref.changeDetectorRef.detectChanges();
  }

  remove(): void {
    this.container.remove(0);
  }

}
