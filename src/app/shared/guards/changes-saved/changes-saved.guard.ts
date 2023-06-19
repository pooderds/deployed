import { Injectable } from "@angular/core";
import { Router, ActivatedRouteSnapshot, RouterStateSnapshot, CanDeactivate } from "@angular/router";
import { Observable } from "rxjs";
import { CanComponentDeactivate } from "./safe-data.interface";



@Injectable()
export class UnsavedGuard implements CanDeactivate<CanComponentDeactivate> {
  constructor( private router: Router) {}
  canDeactivate(
    component: CanComponentDeactivate,
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<boolean> | boolean |Promise<boolean>  {

    return component.canDeactivate();
  }
}
