import decode from "jwt-decode";

class AuthService {
<<<<<<< HEAD
  getProfile() {
=======
    getToken() {
        // Retrieves the user token from localStorage
        return localStorage.getItem("id_token");
      }
      
  getUser() {
>>>>>>> 0609fa76c79c7fa6c7d6dce70cbc21250a4219b0
    return decode(this.getToken());
  }

  loggedIn() {
    // Checks if there is a saved token and it's still valid
    const token = this.getToken();
    return !!token && !this.isTokenExpired(token);
  }

  isTokenExpired(token) {
    try {
      const decoded = decode(token);
      if (decoded.exp < Date.now() / 1000) {
        return true;
      } else return false;
    } catch (err) {
      return false;
    }
  }

<<<<<<< HEAD
  getToken() {
    // Retrieves the user token from localStorage
    return localStorage.getItem('id_token');
  }

  login(idToken) {
    // Saves user token to localStorage
    localStorage.setItem('id_token', idToken);

    window.location.assign('/');
=======


  login(idToken) {
    // Saves user token to localStorage
    localStorage.setItem("id_token", idToken);

    window.location.assign("/");
>>>>>>> 0609fa76c79c7fa6c7d6dce70cbc21250a4219b0
  }

  logout() {
    // Clear user token and profile data from localStorage
<<<<<<< HEAD
    localStorage.removeItem('id_token');
    // this will reload the page and reset the state of the application
    window.location.assign('/');
=======
    localStorage.removeItem("id_token");
    // this will reload the page and reset the state of the application
    window.location.assign("/");
>>>>>>> 0609fa76c79c7fa6c7d6dce70cbc21250a4219b0
  }
}

export default new AuthService();
