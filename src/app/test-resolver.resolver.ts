import { Injectable } from '@angular/core';
import {
  Router, Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot
} from '@angular/router';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TestResolverResolver implements Resolve<boolean> {
  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> {
    // do anything before route Note: this fuction run after pass guard (canActive,canActivechild,canload...etc)  if guard is defined.
    console.log('Resolver called!');
    return of(true);
  }
}
