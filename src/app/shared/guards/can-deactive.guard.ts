import { CanDeactivateFn } from '@angular/router';
import { AccountComponent } from '../pages/account/account.component'

export const canDeactiveGuard: CanDeactivateFn<AccountComponent> = (component, currentRoute, currentState, nextState) => {
  console.log(currentRoute)
  console.log(currentState)
  console.log(nextState)
  
  return component.exit();
};
