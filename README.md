1. A megjelenő táblázatban készítsd el a törlés funkcionalitást! A törlés gombra
kattintva a példa adatbázisból törlődjön az adott rekord. Törlés előtt jelenjen
meg egy megerősítő kérdés. A törléshez a UserService osztályban is hozd
létre a szükséges metódust.
2. Tedd szűrhetővé a táblázatban megjelenő adatokat! A táblázat felett hozz létre
egy beviteli mezőt. A beviteli mező értékének módosítása esetén a táblázat
azon rekordjai maradjanak láthatóak, amelyek `name` mezője részben vagy
egészben tartalmazza a beviteli mezőbe gépelt szöveget.
3. Tedd rendezhetővé a táblázatban megjelenő adatokat! Ha a felhasználó a
táblázat fejléceire kattint, akkor a megjelenő rekordok rendeződjenek az adott
oszlop szerint növekvő sorrendbe. Ha egy másik oszlop fejlécére kattint, akkor
pedig aszerint az oszlop szerint, amelyre utoljára kattintottak. Csak növekvő
sorrendbe kell rendezni.
4. Tedd módosíthatóvá a táblázatban megjelenő rekordokat! A táblázat sorainak
utolsó cellájában lévő szerkesztés gombra kattintva jelenleg megjelenik a
szerkesztő oldal. Az oldalon már létre vannak hozva a beviteli mezők. Ha a
mentés gombra kattint a felhasználó, akkor az adatbázisban kerüljenek
frissítésre az adott rekord adatai. A módosításhoz a UserService osztályban is
hozd létre a szükséges metódust.
5. Validáld az adatokat a szerkesztő űrlapon! Minden input elem előtt
kommentben feltüntettük a validálás szabályait. Attribútumok és reguláris
kifejezések használatával validáld a mezőkbe írt adatokat. Ha nem megfelelő
az adat, akkor jelenjen meg releváns hibaüzenet közvetlenül a hibás adatot
tartalmazó mező alatt. Ha az űrlap bármely mezője hibás adatot tartalmaz, a
mentés gomb legyen letiltva, és ne legyen az űrlap elküldhető. Sikeres
módosítás után navigáljon vissza az alkalmazás a táblázathoz.
6. Tedd lehetővé új rekord rögzítését. Hozz létre egy teljes szélességű gombot a
lista oldalon a táblázat felett, amelyre kattintva szintén a szerkesztő űrlap
jelenik meg, de üres állapotban. Az adatbevitel során ugyanazok a validációs
szabályok legyenek érvényesek, mint a szerkesztés esetén. Megfelelő kitöltés
után a mentés gombra kattintva történjen meg az új rekord beszúrása az
adatbázisba, és navigáljon vissza az oldal a táblázathoz. A beszúráshoz a
UserService osztályban is hozd létre a szükséges metódusokat. 
