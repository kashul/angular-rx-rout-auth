import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StartingPageComponent } from './starting-page/starting-page.component';
import { PageNotFoundComponent } from './util/page-not-found/page-not-found.component';
import { RouteMatchTestComponent } from './util/route-match-test/route-match-test.component';
import { TestDirectiveDirective } from './test-directive.directive';
import { StoreModule } from '@ngrx/store';
import { testReduxStoreReducer, testReduxStoreReducertwo } from './redux-store/test-redux-store.reducer';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    StartingPageComponent,
    PageNotFoundComponent,
    RouteMatchTestComponent,
    TestDirectiveDirective
  ],
  imports: [
    FormsModule,
    BrowserModule,
    AppRoutingModule,
    StoreModule.forRoot({testone:testReduxStoreReducer,testtwo:testReduxStoreReducertwo}),
  ],
  providers: [ ],
  bootstrap: [AppComponent]
})
export class AppModule { }
