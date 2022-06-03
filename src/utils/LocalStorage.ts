/**
 * @description Class containing methods to work with localStorage
 */
export class LocalStorage {
  static getToken() {
    return localStorage.getItem('token');
  }
  static setToken(token: string) {
    localStorage.setItem('token', token);
  }
  static clearToken() {
    localStorage.removeItem('token');
  }
}
