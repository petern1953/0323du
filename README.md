## törlés, confirm, CRUD Observable-lal
## szűrés egy mezőre, filter pipe, input mező a táblázat felett
## rendezés tetszőleges oszlop szerint -- csak növekvő, sorter pipe
## update record
## validation, error message, button disable while userForm.invalid
## create, gomb a táblázat felett, routerLink navigation, validation

### 1. A megjelenő táblázatban készítsd el a törlés funkcionalitást! ok
- ok A törlés gombra kattintva a példa adatbázisból törlődjön az adott rekord. 
- ok Törlés előtt jelenjen meg egy megerősítő kérdés. 
- ok A törléshez a UserService osztályban is hozd létre a szükséges metódust.
- 
### 2. Tedd szűrhetővé a táblázatban megjelenő adatokat! 
- ok A táblázat felett hozz létre egy beviteli mezőt. 
- ok A beviteli mező értékének módosítása esetén a táblázat
azon rekordjai maradjanak láthatóak, amelyek `name` mezője részben vagy egészben tartalmazza a beviteli mezőbe gépelt szöveget.

### 3. Tedd rendezhetővé a táblázatban megjelenő adatokat! 
- ok Ha a felhasználó a táblázat fejléceire kattint, akkor a megjelenő rekordok rendeződjenek az adott oszlop szerint növekvő sorrendbe. 
- ok Ha egy másik oszlop fejlécére kattint, akkor pedig aszerint az oszlop szerint, amelyre utoljára kattintottak. 
- ok Csak növekvő sorrendbe kell rendezni.
- 
### 4. Tedd módosíthatóvá a táblázatban megjelenő rekordokat! 
- ok A táblázat sorainak utolsó cellájában lévő szerkesztés gombra kattintva jelenleg megjelenik a szerkesztő oldal. 
- ok Az oldalon már létre vannak hozva a beviteli mezők. 
- ok Ha a mentés gombra kattint a felhasználó, akkor az adatbázisban kerüljenek frissítésre az adott rekord adatai. 
- ok A módosításhoz a UserService osztályban is hozd létre a szükséges metódust.
- 
### 5. Validáld az adatokat a szerkesztő űrlapon! 
- ok Minden input elem előtt kommentben feltüntettük a validálás szabályait.
- ok Attribútumok és reguláris kifejezések használatával validáld a mezőkbe írt adatokat. 
- ok Ha nem megfelelő az adat, akkor jelenjen meg releváns hibaüzenet közvetlenül a hibás adatot tartalmazó mező alatt. 
- ok Ha az űrlap bármely mezője hibás adatot tartalmaz, a mentés gomb legyen letiltva, és ne legyen az űrlap elküldhető. 
- ok Sikeres módosítás után navigáljon vissza az alkalmazás a táblázathoz.
- 
### 6. Tedd lehetővé új rekord rögzítését. 
- Hozz létre egy teljes szélességű gombot a lista oldalon a táblázat felett, amelyre kattintva szintén a szerkesztő űrlap jelenik meg, de üres állapotban. 
- Az adatbevitel során ugyanazok a validációs szabályok legyenek érvényesek, mint a szerkesztés esetén. 
- Megfelelő kitöltés után a mentés gombra kattintva történjen meg az új rekord beszúrása az adatbázisba, és navigáljon vissza az oldal a táblázathoz. 
- A beszúráshoz a UserService osztályban is hozd létre a szükséges metódusokat. 
