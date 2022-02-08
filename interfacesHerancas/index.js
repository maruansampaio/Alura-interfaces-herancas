import { Client } from './Client.js';
import { AuthenticationSistem } from './AuthenticationSistem.js';
import { Manager } from './Funcionarios/Manager.js';
import { Director } from './Funcionarios/Director.js';

const director = new Director('Maruan', 10000, 12345678900);
director.registerPassword('123456789');

const manager = new Manager('Sampaio', 5000, 90012345678);
manager.registerPassword('123456');

const client = new Client('Oliveira', 90012345678, 23455);

const directorIsLogged = AuthenticationSistem.login(director, '123456789');
const managerIsLogged = AuthenticationSistem.login(manager, '123456');
const clientIsLogged = AuthenticationSistem.login(client, '23455');

console.log(directorIsLogged, managerIsLogged, clientIsLogged);