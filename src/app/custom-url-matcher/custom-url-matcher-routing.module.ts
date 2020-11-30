import { NgModule } from '@angular/core';
import { Routes, RouterModule, UrlSegment } from '@angular/router';
import { CustomUrlMatcherComponent } from './custom-url-matcher.component';
import { UrlMatcherChildComponent } from './url-matcher-child/url-matcher-child.component';

// tslint:disable-next-line: typedef
function htmlFiles(url: UrlSegment[]) {
  console.log('url => ', url);
  return url.length === 1 && url[0].path.startsWith('c') ? ({consumed: url}) : null;
}

const routes: Routes = [
  {
    path: 'home',
    component: CustomUrlMatcherComponent,
    children: [
      {
        path: 'child',
        component: UrlMatcherChildComponent
      },
      {
        matcher: htmlFiles,
        component: UrlMatcherChildComponent
      },
      {
        path: '**',
        redirectTo: ''
      }
    ]
  },
  {
    path: 'child',
    component: UrlMatcherChildComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CustomUrlMatcherRoutingModule { }
