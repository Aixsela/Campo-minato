window.onload = function(){

    let numeroQuadratini; 
    let numeroBombe;

    let difficolta = prompt("Inserisci il livello di difficoltà", "Facile, medio o difficile");

    switch (difficolta.toLowerCase()) {
      case "facile":
        numeroQuadratini = 25;
        numeroBombe = 5;
        break;
      case "medio":
        numeroQuadratini = 35;
        numeroBombe = 10;
        break;
      case "difficile":
        numeroQuadratini = 45;
        numeroBombe = 15;
        break;
      default: 
        numeroQuadratini = 25;
        numeroBombe = 5;
    }

    

    let winner = (numeroQuadratini - numeroBombe);

    let campoMinato = document.querySelector("#campo");
    console.log(campoMinato);

    // Creo il ciclo per realizzare 25 quadratini 
    for (let i = 0; i < numeroQuadratini; i++) {
      // Creo l'elemento e aggiungo la classe quadratino.
      var quadratino = document.createElement("p");
    //   Aggiungo la classe al tag.
      quadratino.classList.add("quadratino");
    //   Aggiungo l'attributo al tag.
      quadratino.setAttribute("indice", i);
    //   Rimango in ascolto del click.
      quadratino.addEventListener("click", verifica);
      quadratino.innerHTML = i;
    //   Appendo l'elemento al div padre.
      campoMinato.appendChild(quadratino);
    }



    // Istanzio l'array di bombe vuoto.
    let bombe = [];

    // Uso il ciclo while per generare 5 bombe casuali
    // e pusharle dentro l'array.
    let counter = 0;
    while (counter < numeroBombe) {
    
         let bomba = Math.floor(Math.random() * numeroQuadratini);

         if (!bombe.includes(bomba)) {
            bombe.push(bomba);
            counter++;
         } 
    }

    console.log(bombe);
    


    var conteggio = 0;
    // Verifico se l'utente ha cliccato su una bomba.
    function verifica() {
        console.log(this.getAttributeNode("indice").value)
        // Leggo l'attributo e prendo il valore trasformandolo in un numero intero.
        let indice = parseInt(this.getAttributeNode("indice").value);
        // Applico la classe in maniera dinamica.
        if (bombe.includes(indice)) {
            this.classList.add("red");
            alert("Hai perso...");
        } else {
            this.classList.add("green");
            conteggio++;
            if (winner === conteggio) {
                alert("Hai Vinto!");
            }
        }
        
    }
    










}