/*
ser autenticavel significa ter o metodo autenticar

Duck type
*/

export class AuthenticationSistem{
    static login(authentically, password) {
        if(AuthenticationSistem.isAuthentically(authentically)){
            return authentically.authentic(password);
        }
        return false;
    }
    static isAuthentically(authentically) {
        return 'authentic' in authentically &&
            authentically.authentic instanceof Function;
    }
}