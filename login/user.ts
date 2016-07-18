export class User{
    
    username: string;
    password: string;
    clientType: string;
    constructor(){}

    toString(){
        return "User {'username':"+this.username+" 'password':"+this.password+" 'clientType':"+this.clientType+" }";
    }

}