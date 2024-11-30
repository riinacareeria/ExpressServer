//Express.js palvelin 
const path = require('path') // lataa Node.js:n path-moduulin, joka tarjoaa apuvälineitä tiedostopolkujen käsittelyyn

const express = require('express') // ladataan Express.js-kirjasto, joka on Node.js:lle rakennettu web-sovelluskehys. 
                                   //Express tekee HTTP-palvelimen luomisesta ja reittien käsittelystä helpompaa.

const app = express() // Tässä luodaan Express-sovellusinstanssi (app), joka edustaa koko web-palvelinta. 
                      //Tämä app-olio on se, jonka avulla määritetään reitit ja konfiguroidaan palvelin.

const herkut = require('./herkut.json')
//require() on Node.js:n sisäänrakennettu funktio, jota käytetään ulkoisten tiedostojen tai moduulien tuomiseen käyttöön.
//Tässä require() tuo herkut.json-tiedoston, joka sijaitsee samassa hakemistossa kuin tämä koodirivi (koska käytetään suhteellista polkua ./).
//require() toimii Node.js:ssa myös JSON-tiedostojen kanssa. Kun JSON-tiedosto ladataan require()-kutsulla, Node.js lukee tiedoston ja muuntaa sen JavaScript-objektiksi.

app.get('/api/herkut', (req, res) => { res.json(herkut)} );
//app.get on Express.js-metodi, jota käytetään määrittämään GET-reitti (HTTP GET -pyyntö).
//'/api/herkut' on reitin polku. Tämä tarkoittaa, että kun käyttäjä tekee GET-pyynnön /api/herkut-osoitteeseen (esimerkiksi http://localhost:3000/api/herkut), tämä reitti aktivoituu.

// nuolifunktio (arrow function), joka määrittää, mitä tapahtuu, kun pyynnön vastaanottamisen jälkeen käsitellään se.
//req (request) edustaa pyynnön tietoja, kuten URL-osoitteita, parametreja, pyyntöön liittyviä tietoja.
//res (response) edustaa palvelimen vastausta asiakkaalle. Voit käyttää tätä lähettääksesi tiedot takaisin asiakkaalle.

//res.json() on Express.js:n tarjoama apumetodi, joka muuntaa annetun tiedon (tässä tapauksessa herkut) JSON-muotoon ja lähettää sen asiakkaalle HTTP-vastauksena.


const polku = path.join(__dirname, './public') //Luo polun, joka yhdistää nykyisen tiedoston sijainnin (__dirname) ja "public"-kansioon. __dirname on erityinen muuttuja, joka pitää sisällään nykyisen tiedoston polun. path.join() yhdistää nämä kaksi polkua oikein huomioiden käyttöjärjestelmän polun erottimen.
//Esimerkiksi, jos tämän koodin tiedosto sijaitsee kansiossa C:\projekti\app.js, niin polku olisi C:\projekti\public (Windowsissa).

//Sanotaan että em. polussa on tiedostosisältö, jota palvelin käyttää kun se saa http request
app.use(express.static(polku))
//Tämä rivi määrittää Expressille, että se käyttää express.static-middlewarea, joka palvelee staattisia (ei muuttuvia) tiedostoja määritetystä kansiosta (tässä tapauksessa polku, joka viittaa public-kansioon).
//Staattiset tiedostot voivat olla esimerkiksi HTML-, CSS-, JavaScript- tai kuvafilejä, jotka eivät muutu dynaamisesti (eli käyttäjän pyynnöstä muodostu tai päivity). Express käsittelee nämä tiedostot ja palauttaa ne HTTP-vastauksina, kun niitä pyydetään asiakasohjelmasta (esim. selaimesta).

app.listen(3000, () => {
    console.log('Server is up on port 3000.');
})
//Tällä rivillä määritetään, että palvelin kuuntelee porttia 3000. Kun palvelin on käynnissä ja valmis vastaanottamaan pyyntöjä, se tulostaa konsoliin viestin "Server is up on port 3000.".
//app.listen(3000) kertoo palvelimelle, että se kuuntelee porttia 3000.
//Kun palvelin on käynnistynyt, se tulostaa ilmoituksen.