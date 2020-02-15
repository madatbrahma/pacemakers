export class LoggedUser {
    static user = '';

    static setUser(val) {
        LoggedUser.user = val;
    }

    static getUser() {
      return  LoggedUser.user ;
    }
}