import { CanMatchFn } from '@angular/router';

// "CanLoad" seems to be deprecated 
// so it didn't work very well (as shown in the Angular course)
export const canLoadGuard: CanMatchFn = (route, segments) => {
  console.log(route)
  console.log(segments)

  if (segments[1]?.path === 'leads') {
    return true
  }
  
  window.alert('Não carregado')
  return false;
};
