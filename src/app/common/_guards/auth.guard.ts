import { Inject } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivateFn,
  Router,
  RouterStateSnapshot,
} from '@angular/router';
import { map } from 'rxjs';
import { CommonService } from '../_services/common.service';
export const AuthGuard: CanActivateFn = function (this: any, 
  next: ActivatedRouteSnapshot,
  state: RouterStateSnapshot
) {
  const authService: CommonService = Inject(CommonService);
  const router: Router = Inject(Router);
  this.authService.loggedIn(true);
  return true;
  // return authService.isLoggedIn().pipe(
  //   map((status) => {
  //     console.log(status);
  //     if (status) {
  //       return true;
  //     }

  //     return router.createUrlTree(['/auth/login']);
  //   })
  // );
};
