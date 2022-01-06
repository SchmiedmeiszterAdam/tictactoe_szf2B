class InfoView{
    constructor(){
        this.jatekvegeElem=$(".jatekvege");
        this.kovetkezoJatekosElem=$(".kovetkezoJatekos");

    }
    setJatekVege(ertek){
        this.jatekvegeElem.html(ertek); 
    }
    setKovetkezoJatekos(ertek){
        this.kovetkezoJatekosElem.html(ertek); 
    }
}