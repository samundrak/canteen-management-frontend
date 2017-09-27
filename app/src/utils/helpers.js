export function getToken() {
  if (!window.localStorage) {
    return null;
  }

  return window.localStorage.getItem('token');
}
