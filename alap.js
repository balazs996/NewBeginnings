"use strict";

// típusok: number, bigint, string, boolean, null, undefined, object, symbol

let nev = 'A shadowlands úgyis szar lesz csak szólok';

/* Moduláris ablak függvények */

// window.alert(nev);
// alert(nev);

//let tanuloszam = window.prompt("Hány tanuló van jelen?", 12 );
//let szoveg = `A tanulók száma ${tanuloszam}`;
//window.alert(szoveg);

let szoveg = 12;
//szoveg = null;
//window.alert(szoveg);

document.getElementById("kiir").innerText = szoveg;