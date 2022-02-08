import { Functionarys } from './Functionarys.js';

export class Manager extends Functionarys {
    constructor(name, salary, cpf){
        super(name, salary, cpf);
        this._bonificacao = 1.1;
    }
}