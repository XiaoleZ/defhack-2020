export let LOCAL_STORAGE_USER = 'user';
export function getUser() {
  return JSON.parse(localStorage.getItem(LOCAL_STORAGE_USER));
}
export function setUser(user) {
  localStorage.setItem(LOCAL_STORAGE_USER, JSON.stringify(user));
}