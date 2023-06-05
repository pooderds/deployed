import { Injectable } from "@angular/core";
import { Router, ActivatedRouteSnapshot, RouterStateSnapshot, CanDeactivate } from "@angular/router";
import { Observable, Subject } from "rxjs";
import { RecipeEditComponent } from "./recipe-edit/recipe-edit.component";

export interface CanComponentDeactivate {
    canDeactivate: () => Observable<boolean> | Promise<boolean> | boolean;
}

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
