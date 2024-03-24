import { NgModule } from '@angular/core';
import { RouterModule, Routes, UrlSegment } from '@angular/router';
import { StartingPageComponent } from './starting-page/starting-page.component';
import { FirstLevelPageTwoComponent } from './first-level-page-two/first-level-page-two.component';
import { PageNotFoundComponent } from './util/page-not-found/page-not-found.component';
import { RouteMatchTestComponent } from './util/route-match-test/route-match-test.component';
import { TestResolverResolver } from './test-resolver.resolver';
import { TestRoutGuardGuard } from './test-rout-guard.guard';

const routes: Routes = [
  {
    path: '',
    component: StartingPageComponent,
  },
  {
    path: 'first-level-page-one',
    loadChildren: () =>
      import('./first-level-page-one/first-level-page-one.module').then(
        (m) => m.FirstLevelPageOneModule
      ),
  },
  {
    path: 'first-level-page-two',
    component: FirstLevelPageTwoComponent,
    loadChildren: () =>
      import('./first-level-page-two/first-level-page-two.module').then(
        (m) => m.FirstLevelPageTwoModule
      ),
  },
  {
    path: 'first-level-page-three',
    canActivate: [TestRoutGuardGuard],
    resolve: {
      testdata: TestResolverResolver
    },
    loadChildren: () =>
      import('./first-level-page-three/first-level-page-three.module').then(
        (m) => m.FirstLevelPageThreeModule
      ),
  },
  {
    matcher: (url) => {
      console.log('url', url);
      if (url.length === 1 && url[0].path.match(/^@[\w]+$/gm)) {
       
        return {
          consumed: url,
          posParams: { username: new UrlSegment(url[0].path.slice(1), {}) },
        };
      }

      return null;
    },
    component: RouteMatchTestComponent,
  },
  { path: 'wrong', redirectTo: '', pathMatch: 'full' },
  { path: '**', component: PageNotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
