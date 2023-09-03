import { CanDeactivateFn } from '@angular/router';
import { AccountComponent } from '../account/account.component'

export const canDeactiveGuard: CanDeactivateFn<AccountComponent> = (component, currentRoute, currentState, nextState) => {
  return component.exit();
};
