class TTTController {
    constructor() {
       const tomb = [];
        new Jatekter(tomb);
        this.info=new InfoView();
        /**Ellenőrizzük azt, hoyg van - e győzelem */
        const kiertekel = new Kiertekel(tomb);
        this.lepes = 0;
        $(window).on("kivalaszt", (event) => {
            let aktelem = event.detail;
            if (this.lepes % 2 === 0) {
                aktelem.setElem("X");
                this.info.setKovetkezoJatekos("O következik")
            }
            else {
                aktelem.setElem("O");
                this.info.setKovetkezoJatekos("X következik")
            }
            this.lepes++;

            if (kiertekel.ellenerozes() === "X") {
                this.info.setJatekVege("X nyert");
                this.jatekVege(tomb);
            } else if (kiertekel.ellenerozes() === "O") { 
                this.info.setJatekVege("O nyert"); 
                this.jatekVege(tomb);
            } else if(this.lepes===9){
                this.info.setJatekVege("döntetlen"); 
                this.info.setKovetkezoJatekos("VÉGE")
            }
        })
    }
    jatekVege(tomb){
        this.info.setKovetkezoJatekos("VÉGE")
        tomb.forEach(element=>{
            element.aktiv=false;
        })
    };
}