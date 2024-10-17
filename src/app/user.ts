export class User {
    public civil:string;
    public nom:string;
    public prenom:string;
    public adresse:string;
    public cp:string;
    public ville:string;
    public tel:string;
    public mail:string;
    public login:string;
    public mdp:string;
    public pays:string;
    constructor(){
        this.civil="";
        this.nom="";
        this.prenom="";
        this.adresse="";
        this.cp="";
        this.ville="";
        this.tel="";
        this.mail="";
        this.login="";
        this.mdp="";
        this.pays="";
    }
}