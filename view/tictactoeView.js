/**megjelenít egyetlen elemet */
class Elem {
    constructor(szuloelem) {
        this.node = szuloelem;
        szuloelem.append("<div><p></p></div>");
        this.elem = this.node.children("div:last");
        this.aktiv = true;
        this.ertek="$";
        this.pElem = this.elem.children("p");
        this.elem.on("click", () => {
            if (this.aktiv) {
                this.kattintastrigger()
                this.aktiv = false;
            }
           
        })
    }
    setElem(ertek) {
        this.ertek=ertek;
        this.pElem.html(ertek);
    }
    kattintastrigger() {
        let esemeny = new CustomEvent("kivalaszt", { detail: this });
        window.dispatchEvent(esemeny);
    }

}


class Jatekter {
    constructor(tomb) {
        const szuloelem = $("article");
        for (let index = 0; index < 9; index++) {
            const elem = new Elem(szuloelem);
            tomb.push(elem);
            //elem.setElem("X");            
        }

    }
}