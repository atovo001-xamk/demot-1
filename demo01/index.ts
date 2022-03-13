import express from 'express'; // importataan express
import path from 'path'; // importataan Node:sta 

const app : express.Application = express();    // luodaan olio/ilmentymä vakiona, muuttujan nimi app. Yleinen käytäntö!

const portti : number = Number(process.env.PORT) || 3001;   // palvelimien eroittamiseen toisistaan erotetaan portilla, 
                                                            // 3000 ylöspäin ei ristiriitoja/konlfikteja.
                                                            // Luodaan vakiona => const
                                                            // Portti tulee ympäristömuuttujista => varaudutaan nyt jos siihen, että
                                                            // kaikki tulee prosessin ympäristöstä (process.env.PORT)
                                                            // tyyppimuunnos => Number(process.env.PORT), Number eteen!!

app.get("/", (req : express.Request, res : express.Response) : void => {

    res.sendFile(path.resolve(__dirname, "etusivu.html"));

}); 
// app.get => jos halutaan, että palvelin reagoi get-pyyntöön. Get-metodilla käsittelijä käsittelee vain get-pyyntöjä.
// Jos get-pyyntö on palvelimen juureen, eli vain /, niin se kerrotaan ensimmäisessä parametrissa. 

// Toisessa parametrissa on sitten funktio, johon määritellä toiminnot, jota tehdään, jos tämä reitti pyyntö tulee.
// Tämän käsittelijän parametriksi tulee käytännössä kaksi asiaa, pyyntö ja vastaus. Nämä tulee automaattisesti expressin kautta.
// Kaikkiin reitti käsittelijöihin tulee aina kaksi asiaa, muuttujaa/oliota: Reguest ja Response
// Näiden tyypit ovat samanlailla kuin app, löytyy expressin alta: express.Request, express.Response.
// Kun käsittelijäfunktio ei palauta mitään, ei siis ole returnia, lisätään void => palauttava tyyppi
// Vastausolio => res.send("Hei vaan!"); => respones.send = lähettää palvelimeen. Tulkitaan html:ksi.

// Kun halutaan lähettää palvelimelle koko tiedosto esim. etusivu-tiedosto: importataan Node:sta apupaketti.
// Muutetaan res.send => res.sendFile(path.resolve(__dirname, "etuovi.html"));
// path.resolve => apumetodi, joka etsii kansion oikeasta paikasta.
// Parametreiksi, joita on kaksi, määritellään tiedostonsijainti. Kun laitetaan varattu vakio __dirname => joka on 
// työhakemiston polku tähän asti. Toisena parametrina laitetaan se, että sen alta löytyy etusivu.html, joka on sen tiedoston nimi.



app.listen(portti, () => {

    console.log(`Palvelin käynnistyi porttiin : ${portti}`);    // palvelin käyntiin => kuuntelee porttia 
    // app.listen(portti, () => {console.log(`Palvelin käynnistyi porttiin : ${portti}`);});

});