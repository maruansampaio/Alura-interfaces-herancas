import { Functionarys } from './Functionarys.js';

export class Director extends Functionarys {
    constructor(name, salary, cpf){
        super(name, salary, cpf);
        this._bonificacao = 2;
    }
}