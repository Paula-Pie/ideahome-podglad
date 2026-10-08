/* Plik generowany przez tools/i18n-generuj.pl z js/site.js – nie edytuj recznie. */
/* IDEA HOME — wspólne elementy strony: nagłówek, stopka, katalog produktów, karty, podgląd. */
(function () {
  var SHOP = "https://www.dladomu.sklep.pl";
  var shopSearch = function (q) { return SHOP + "/search?q=" + encodeURIComponent(q); };

  /* ---------- Wersje językowe (pl = strona główna, en/de/cs generuje tools/i18n-generuj.pl) ---------- */
  var LANG = window.IH_LANG || "pl";
  var LANGS = ["pl", "en", "de", "cs"];
  var AMAZON = "https://www.amazon.de/stores/page/916542A8-6F93-43D6-B5FC-639158F0193C";
  var ALLEGRO_CZ = "https://allegro.cz/uzivatel/Leviatan_SHOPCZ";
  // gdzie kupić w danym języku: nazwa sklepu, strona główna sklepu, wyszukiwanie po haśle
  var MARKETS = {
    pl: { name: "dladomu.sklep.pl", home: SHOP, search: shopSearch },
    en: { name: "Amazon.de", home: AMAZON, search: function (q) { return AMAZON + "/search?terms=" + encodeURIComponent(q); } },
    de: { name: "Amazon.de", home: AMAZON, search: function (q) { return AMAZON + "/search?terms=" + encodeURIComponent(q); } },
    cs: { name: "Allegro.cz", home: ALLEGRO_CZ, search: function (q) { return ALLEGRO_CZ + "?string=" + encodeURIComponent(q); } }
  };
  var MARKET = MARKETS[LANG] || MARKETS.pl;
  // hasła wyszukiwania w sklepie danego kraju, według kategorii
  var MARKET_TERMS = {
    de: { worki: "Müllsäcke", flexistore: "Flexistore", techbox: "Techbox", dom: "Umzugskarton", torby: "Tasche", prezenty: "Wave", sprzatanie: "Mikrofasertücher", chemia: "RAKUN", mydla: "Flüssigseife", warsztat: "Abdeckband", budki: "Vogel", nagrobki: "Inschriften" },
    cs: { worki: "pytle", flexistore: "flexistore", techbox: "techbox", dom: "krabice", torby: "taška", prezenty: "dárková taška", sprzatanie: "utěrky", chemia: "rakun", mydla: "mýdlo", warsztat: "páska", budki: "budka", nagrobki: "náhrobky" }
  };
  MARKET_TERMS.en = MARKET_TERMS.de;
  // korzeń strony względem bieżącej podstrony (ustawiany na stronach obcojęzycznych przez generator)
  function siteRoot() { return new URL(window.IH_ROOT_REL || (/\/(rakun|p)\//.test(location.pathname) ? "../" : "./"), location.href).href; }
  // link do podstrony w bieżącym języku, np. page("produkty.html#worki")
  function page(p) { return LANG === "pl" ? p : siteRoot() + LANG + "/" + p; }
  // adres tej samej podstrony w innym języku
  function langHref(l) {
    var root = siteRoot(), rel = location.href.split("#")[0].slice(root.length).replace(/^(en|de|cs)\//, "");
    if (!rel || /\/$/.test(rel)) rel += "index.html";
    return root + (l === "pl" ? "" : l + "/") + rel + location.hash;
  }
  function langSwitch() {
    return '<div class="langs" role="navigation" aria-label="Sprache / Language">' + LANGS.map(function (l) {
      return '<a href="' + langHref(l) + '" hreflang="' + l + '" lang="' + l + '"' + (l === LANG ? ' aria-current="true"' : "") + ">" + l.toUpperCase() + "</a>";
    }).join("") + "</div>";
  }

  /* ---------- Ikony (linia 1.5px, jak ramka w logo) ---------- */
  var P = 'fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"';
  var ICON = {
    dom: '<svg viewBox="0 0 48 48" ' + P + '><path d="M8 22L24 9l16 13"/><path d="M12 19v20h24V19"/><rect x="20" y="28" width="8" height="11"/><path d="M31 13V9h4v7"/></svg>',
    chemia: '<svg viewBox="0 0 48 48" ' + P + '><path d="M20 6h8v6h-8z"/><path d="M19 12h10l3 6v22a2 2 0 01-2 2H18a2 2 0 01-2-2V18z"/><path d="M16 24h16"/><path d="M22 31c0-2 2-4 2-4s2 2 2 4a2 2 0 01-4 0z"/></svg>',
    pianka: '<svg viewBox="0 0 48 48" ' + P + '><path d="M18 16h10l2 6v18a2 2 0 01-2 2H18a2 2 0 01-2-2V22z"/><path d="M20 16v-5h6l6 2v3"/><path d="M26 11h-8"/><circle cx="37" cy="10" r="1.5"/><circle cx="41" cy="15" r="1.2"/><circle cx="38" cy="18" r="1"/><path d="M16 28h14"/></svg>',
    mydla: '<svg viewBox="0 0 48 48" ' + P + '><path d="M22 8h8"/><path d="M26 8v6"/><path d="M22 14h8v4"/><path d="M17 18h14a3 3 0 013 3v17a4 4 0 01-4 4H18a4 4 0 01-4-4V21a3 3 0 013-3z"/><path d="M19 28h10"/><circle cx="10" cy="12" r="2.5"/><circle cx="7" cy="20" r="1.5"/></svg>',
    organizery: '<svg viewBox="0 0 48 48" ' + P + '><path d="M6 18l18-6 18 6-18 6z"/><path d="M6 18v16l18 7 18-7V18"/><path d="M24 24v17"/><path d="M13 27v6M17 29v6"/></svg>',
    flexistore: '<svg viewBox="0 0 48 48" ' + P + '><rect x="7" y="16" width="34" height="24" rx="2"/><path d="M5 12h38v4H5z"/><path d="M20 24h8a0 0 0 010 0v3h-8z"/><path d="M20 14h8"/></svg>',
    techbox: '<svg viewBox="0 0 48 48" ' + P + '><rect x="6" y="12" width="36" height="26" rx="3"/><path d="M6 20h36"/><path d="M18 12v-3h12v3"/><circle cx="15" cy="29" r="3"/><path d="M24 26h10M24 31h7"/></svg>',
    worki: '<svg viewBox="0 0 48 48" ' + P + '><path d="M16 14c2-3 4-6 8-6s6 3 8 6"/><path d="M14 16h20l3 22a3 3 0 01-3 3H14a3 3 0 01-3-3z"/><path d="M20 26l-2 3h4M28 26l2 3h-4M24 33l-2-2"/><path d="M19 29l5 5 5-5"/></svg>',
    torby: '<svg viewBox="0 0 48 48" ' + P + '><path d="M10 16h28l-2 26H12z"/><path d="M18 20v-7a6 6 0 0112 0v7"/></svg>',
    budki: '<svg viewBox="0 0 48 48" ' + P + '><path d="M24 5L8 19h32z"/><path d="M12 19v22h24V19"/><circle cx="24" cy="27" r="4"/><path d="M24 34v3M22 37h4"/><path d="M24 41v4"/></svg>',
    sprzatanie: '<svg viewBox="0 0 48 48" ' + P + '><rect x="8" y="12" width="20" height="28" rx="2"/><path d="M8 20h20M8 28h20"/><path d="M34 14c4 0 6 3 6 6s-2 5-6 5-6-2-6-5"/><path d="M32 30c3 0 6 2 6 5s-3 5-6 5"/></svg>',
    warsztat: '<svg viewBox="0 0 48 48" ' + P + '><circle cx="24" cy="24" r="14"/><circle cx="24" cy="24" r="6"/><path d="M11 18l6 2M12 31l6-3M31 36l-2-6M37 20l-6 3M27 10l-1 7"/></svg>',
    // pomieszczenia
    kuchnia: '<svg viewBox="0 0 24 24" ' + P + '><rect x="4" y="3" width="16" height="18" rx="1"/><path d="M4 9h16M8 6h.01M11 6h.01M9 13h6"/></svg>',
    lazienka: '<svg viewBox="0 0 24 24" ' + P + '><path d="M3 12h18v3a5 5 0 01-5 5H8a5 5 0 01-5-5z"/><path d="M6 12V5a2 2 0 014 0"/><path d="M7 20l-1 2M17 20l1 2"/></svg>',
    salon: '<svg viewBox="0 0 24 24" ' + P + '><path d="M4 11V8a3 3 0 013-3h10a3 3 0 013 3v3"/><path d="M2 12a2 2 0 014 0v3h12v-3a2 2 0 014 0v6H2z"/><path d="M5 18v2M19 18v2"/></svg>',
    garderoba: '<svg viewBox="0 0 24 24" ' + P + '><path d="M12 6a2 2 0 112 2c-1 0-2 1-2 2l9 6H3l9-6"/></svg>',
    biuro: '<svg viewBox="0 0 24 24" ' + P + '><rect x="3" y="4" width="18" height="12" rx="1"/><path d="M8 20h8M12 16v4"/></svg>',
    garaz: '<svg viewBox="0 0 24 24" ' + P + '><path d="M3 9l9-5 9 5v11H3z"/><path d="M7 20v-7h10v7M7 16h10"/></svg>',
    wdrodze: '<svg viewBox="0 0 24 24" ' + P + '><path d="M5 8h14l-1 13H6z"/><path d="M9 10V6a3 3 0 016 0v4"/></svg>',
    // UI
    search: '<svg viewBox="0 0 24 24" ' + P + '><circle cx="11" cy="11" r="7"/><path d="M20 20l-4-4"/></svg>',
    heart: '<svg viewBox="0 0 24 24" ' + P + '><path d="M12 20s-7-4.4-7-10a4 4 0 017-2.6A4 4 0 0119 10c0 5.6-7 10-7 10z"/></svg>',
    bag: '<svg viewBox="0 0 24 24" ' + P + '><path d="M5 8h14l-1 13H6z"/><path d="M9 10V6a3 3 0 016 0v4"/></svg>',
    menu: '<svg viewBox="0 0 24 24" ' + P + '><path d="M4 7h16M4 12h16M4 17h16"/></svg>',
    close: '<svg viewBox="0 0 24 24" ' + P + '><path d="M6 6l12 12M18 6L6 18"/></svg>',
    chev: '<svg viewBox="0 0 12 12" ' + P + '><path d="M2 4l4 4 4-4"/></svg>',
    left: '<svg viewBox="0 0 24 24" ' + P + '><path d="M15 5l-7 7 7 7"/></svg>',
    right: '<svg viewBox="0 0 24 24" ' + P + '><path d="M9 5l7 7-7 7"/></svg>',
    box: '<svg viewBox="0 0 48 48" ' + P + '><path d="M6 15l18-8 18 8-18 8z"/><path d="M6 15v18l18 8 18-8V15M24 23v18"/><path d="M15 11l18 8v6"/></svg>',
    award: '<svg viewBox="0 0 48 48" ' + P + '><circle cx="24" cy="18" r="11"/><circle cx="24" cy="18" r="6"/><path d="M17 27l-4 15 6-3 4 5 1-12M31 27l4 15-6-3-4 5"/></svg>',
    people: '<svg viewBox="0 0 48 48" ' + P + '><circle cx="24" cy="15" r="5"/><circle cx="11" cy="19" r="4"/><circle cx="37" cy="19" r="4"/><path d="M15 38c0-6 4-11 9-11s9 5 9 11M4 36c0-5 3-9 7-9 2 0 3 .5 4 1.5M44 36c0-5-3-9-7-9-2 0-3 .5-4 1.5"/></svg>',
    shield: '<svg viewBox="0 0 48 48" ' + P + '><path d="M24 5l16 6v12c0 10-7 17-16 20C15 40 8 33 8 23V11z"/><path d="M17 24l5 5 9-10"/></svg>',
    mail: '<svg viewBox="0 0 24 24" ' + P + '><rect x="3" y="5" width="18" height="14" rx="1"/><path d="M3 7l9 6 9-6"/></svg>',
    phone: '<svg viewBox="0 0 24 24" ' + P + '><path d="M5 4h4l2 5-2.5 1.5a11 11 0 005 5L15 13l5 2v4a1 1 0 01-1 1A16 16 0 014 5a1 1 0 011-1z"/></svg>',
    pin: '<svg viewBox="0 0 24 24" ' + P + '><path d="M12 21s-7-6.2-7-11.5A7 7 0 0112 3a7 7 0 017 6.5C19 14.8 12 21 12 21z"/><circle cx="12" cy="10" r="2.5"/></svg>',
    leaf: '<svg viewBox="0 0 48 48" ' + P + '><path d="M10 38C10 20 22 10 40 8c0 18-10 30-28 30z"/><path d="M10 38l16-16"/></svg>',
    truck: '<svg viewBox="0 0 48 48" ' + P + '><path d="M4 12h24v20H4zM28 20h9l6 7v5H28z"/><circle cx="12" cy="35" r="4"/><circle cx="35" cy="35" r="4"/></svg>',
    tag: '<svg viewBox="0 0 48 48" ' + P + '><path d="M6 24V8h16l20 20-16 16z"/><circle cx="15" cy="17" r="3"/></svg>',
    print: '<svg viewBox="0 0 48 48" ' + P + '><path d="M14 18V6h20v12"/><rect x="6" y="18" width="36" height="16" rx="2"/><path d="M14 28h20v14H14z"/></svg>',
    fb: '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M13.4 21v-7.6h2.6l.4-3h-3V8.5c0-.9.3-1.5 1.5-1.5h1.6V4.3c-.3 0-1.2-.1-2.3-.1-2.3 0-3.9 1.4-3.9 4v2.2H7.7v3h2.6V21z"/></svg>',
    ig: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><rect x="3.5" y="3.5" width="17" height="17" rx="5"/><circle cx="12" cy="12" r="3.8"/><circle cx="17.2" cy="6.8" r="1.1" fill="currentColor" stroke="none"/></svg>',
    yt: '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M21.6 7.2a2.5 2.5 0 00-1.8-1.8C18.3 5 12 5 12 5s-6.3 0-7.8.4A2.5 2.5 0 002.4 7.2 26 26 0 002 12a26 26 0 00.4 4.8 2.5 2.5 0 001.8 1.8c1.5.4 7.8.4 7.8.4s6.3 0 7.8-.4a2.5 2.5 0 001.8-1.8A26 26 0 0022 12a26 26 0 00-.4-4.8zM10 15V9l5.2 3z"/></svg>',
    pin2: '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 2a10 10 0 00-3.6 19.3c-.1-.8-.2-2 0-2.9l1.2-5s-.3-.6-.3-1.5c0-1.4.8-2.4 1.8-2.4.9 0 1.3.6 1.3 1.4 0 .9-.5 2.1-.8 3.3-.2 1 .5 1.8 1.5 1.8 1.8 0 3.1-1.9 3.1-4.6 0-2.4-1.7-4.1-4.2-4.1-2.9 0-4.6 2.2-4.6 4.4 0 .9.3 1.8.8 2.3.1.1.1.2.1.3l-.3 1.2c0 .2-.2.3-.4.2-1.3-.6-2.1-2.5-2.1-4 0-3.3 2.4-6.3 6.9-6.3 3.6 0 6.4 2.6 6.4 6 0 3.6-2.3 6.5-5.4 6.5-1.1 0-2.1-.6-2.4-1.2l-.7 2.5c-.2.9-.9 2.1-1.3 2.8A10 10 0 1012 2z"/></svg>',
    tt: '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M16.6 3c.3 2.2 1.6 3.6 3.9 3.8v2.6c-1.4.1-2.6-.3-3.9-1.1v5.5c0 6.9-7.6 9.1-10.6 4.1-2-3.2-.8-8.9 5.6-9.1v2.7c-.5.1-1 .2-1.4.4-1.4.5-2.2 1.4-2 3 .4 3.1 6.2 4 5.7-2V3h2.7z"/></svg>',
  };

  // oficjalne logo (IdeaHome_outline_b&w.png) w wersji czarnej i białej z przezroczystym tłem
  var LOGO = '<img class="logo" src="img/logo-ideahome.png" alt="IDEA HOME by Leviatan" width="600" height="532">';
  var LOGO_WHITE = '<img class="logo" src="img/logo-ideahome-white.png" alt="IDEA HOME by Leviatan" width="600" height="532">';

  /* ---------- Kategorie i pomieszczenia ---------- */
  ICON.prezenty = '<svg viewBox="0 0 48 48" ' + P + '><rect x="8" y="18" width="32" height="24" rx="1"/><path d="M6 12h36v6H6zM24 12v30"/><path d="M24 12c-3-6-11-6-10-1 1 3 6 1 10 1zM24 12c3-6 11-6 10-1-1 3-6 1-10 1z"/></svg>';
  ICON.ogrod = '<svg viewBox="0 0 24 24" ' + P + '><path d="M12 21v-7"/><path d="M12 14c-4 0-6-3-6-6 3 0 6 2 6 6zM12 12c0-4 3-7 7-7 0 4-3 7-7 7z"/><path d="M5 21h14"/></svg>';

  var CATS = [
    { id: "worki", name: "Müllbeutel", short: "Müll-\nbeutel", desc: "LDPE und HDPE, 20 bis 240 l, in Trennfarben" },
    { id: "flexistore", name: "Flexistore", short: "Flexistore", desc: "Boxen mit Deckel und Einsätze mit Fächern" },
    { id: "techbox", name: "Techbox", short: "Techbox", desc: "Robuste HD-Boxen und Einsätze" },
    { id: "dom", name: "Kartons und Aufbewahrung", short: "Kartons und\nAufbewahrung", desc: "Loft-Boxen, Umzugskartons" },
    { id: "torby", name: "Taschen und Rucksäcke", short: "Taschen und\nRucksäcke", desc: "Taschen und Rucksäcke aus Baumwolle und Cord" },
    { id: "prezenty", name: "Geschenkverpackungen", short: "Geschenk-\nverpackungen", desc: "Wave Kraft Tüten und Boxen" },
    { id: "sprzatanie", name: "Küche und Reinigung", short: "Küche und\nReinigung", desc: "Tücher, Schwämme, Topfreiniger" },
    { id: "chemia", name: "Haushaltsreiniger", short: "Haushalts-\nreiniger", desc: "RAKUN Reiniger in sparsamen Packungen" },
    { id: "mydla", name: "Seifen und Pflege", short: "Seifen\nund Pflege", desc: "RAKUN Flüssigseifen, Bimssteine" },
    { id: "warsztat", name: "Klebebänder und Schnüre", short: "Klebebänder\nund Schnüre", desc: "Isolier- und Abdeckbänder, Schnüre" },
    { id: "budki", name: "Nistkästen und Futterhäuser", short: "Nistkästen und\nFutterhäuser", desc: "Für Vögel, Igel und Fledermäuse" },
    { id: "nagrobki", name: "Professionelle Grabsteinreinigung und -renovierung", short: "Grabstein-\nreinigung", desc: "Aktivschaum für Grabsteine und Sets zur Inschriftenrenovierung" },
  ];
  ICON.dom = ICON.organizery;
  ICON.nagrobki = '<svg viewBox="0 0 48 48" ' + P + '><path d="M14 40V18a10 10 0 0120 0v22"/><path d="M8 40h32v4H8z"/><path d="M24 17v12M19 22h10"/></svg>';
  CATS.forEach(function (c) { c.icon = ICON[c.id]; });

  var ROOMS = [
    { id: "salon", name: "Wohnzimmer", img: "img/foto/flexistore-dsc05557.jpg" },
    { id: "kuchnia", name: "Küche", img: "img/foto/baner-kuchnia.jpg" },
    { id: "garderoba", name: "Ankleide", img: "img/foto/baner-111062-7.jpg" },
    { id: "biuro", name: "Büro und Archiv", img: "img/foto/baner-pudla-new.jpg" },
    { id: "garaz", name: "Garage und Werkstatt", img: "img/foto/baner-garaz-i-warsztat.jpg" },
    { id: "lazienka", name: "Badezimmer", img: "img/foto/baner-lazienka.jpg" },
    { id: "ogrod", name: "Garten und Terrasse", img: "img/foto/baner-ogrod-i-taras.jpg" },
    { id: "wdrodze", name: "Für jeden Tag", img: "img/foto/torba-valencia-img-0789.jpg" }
  ];
  ROOMS.forEach(function (r) { r.icon = ICON[r.id]; });

  /* ---------- Kolory wariantów + segregacja ---------- */
  var COLORS = {
    "CZARNY": { name: "schwarz", hex: "#232322", seg: "Restmüll" },
    "BRĄZOWY": { name: "braun", hex: "#7A5433", seg: "Bio" },
    "ZIELONY": { name: "grün", hex: "#5E9E48", seg: "Glas" },
    "ŻÓŁTY": { name: "gelb", hex: "#EDC12E", seg: "Metalle und Kunststoffe" },
    "NIEBIESKI": { name: "blau", hex: "#2F63AE", seg: "Papier" },
    "CZERWONY": { name: "rot", hex: "#C3362B" },
    "BIAŁY": { name: "weiß", hex: "#F6F5F1" },
    "SZARY": { name: "grau", hex: "#9A9A96" },
    "DENIM": { name: "denim", hex: "#7F939D" },
    "NEUTRAL": { name: "neutral", hex: "#D8D2C6" },
    "NATURALNY": { name: "natur", hex: "#EFE5CF" },
    "LEMON": { name: "lemon", hex: "#F1DE6E" },
    "RÓŻOWY": { name: "rosa", hex: "#E58BB0" },
    "TURKUSOWY": { name: "türkis", hex: "#2FB5B0" },
    "POMARAŃCZOWY": { name: "orange", hex: "#EE8A2E" },
    "BŁĘKITNY": { name: "hellblau", hex: "#8DB4D6" },
    "BURSZTYNOWY": { name: "bernstein", hex: "#C98A3B" },
    "OLIWKOWY": { name: "oliv", hex: "#7B7F47" },
    "SREBRNY": { name: "silber", hex: "linear-gradient(135deg,#E4E5E7,#9EA1A6)" },
    "ZŁOTY": { name: "gold", hex: "linear-gradient(135deg,#F0D78C,#B8902F)" },
    "MIX": { name: "Farbmix", hex: "conic-gradient(#C3362B 0 25%,#2F63AE 0 50%,#5E9E48 0 75%,#EDC12E 0)" },
    "ŻÓŁTO-CZARNY": { name: "gelb-schwarz", hex: "linear-gradient(135deg,#EDC12E 50%,#232322 50%)" }
  };
  // Odmiany słów w nazwach sklepu (CZARNA, CZERWONE, BIAŁYCH...) → klucz koloru
  var COLOR_WORDS = [
    [/ŻÓŁTO CZARN\S*/, "ŻÓŁTO-CZARNY"], [/MIX KOLOR\S*/, "MIX"], [/\bCZARN\S*/, "CZARNY"], [/BRĄZOW\S*/, "BRĄZOWY"],
    [/ZIELON\S*/, "ZIELONY"], [/ŻÓŁT\S*/, "ŻÓŁTY"], [/NIEBIESK\S*/, "NIEBIESKI"], [/CZERWON\S*/, "CZERWONY"],
    [/BIAŁ\S*/, "BIAŁY"], [/\bSZAR[AYE]\b/, "SZARY"], [/\bDENIM\b/, "DENIM"], [/\bNEUTRAL\b/, "NEUTRAL"],
    [/NATURALN\S*/, "NATURALNY"], [/\bLEMON\b(?! IH RAKUN)/, "LEMON"], [/BŁĘKITN\S*/, "BŁĘKITNY"], [/BURSZTYN\S*/, "BURSZTYNOWY"],
    [/OLIWKOW\S*/, "OLIWKOWY"], [/RÓŻOW\S*/, "RÓŻOWY"], [/TURKUSOW\S*/, "TURKUSOWY"], [/POMARAŃCZOW\S*/, "POMARAŃCZOWY"], [/SREBRN\S*/, "SREBRNY"], [/ZŁOT[YAE]CH|\bZŁOT[YAE]\b/, "ZŁOTY"]
  ];
  var COLOR_ORDER = ["CZARNY", "BRĄZOWY", "ŻÓŁTY", "NIEBIESKI", "ZIELONY", "CZERWONY", "BIAŁY", "SZARY", "NATURALNY", "NEUTRAL", "DENIM", "LEMON", "BŁĘKITNY", "BURSZTYNOWY", "OLIWKOWY", "RÓŻOWY", "TURKUSOWY", "POMARAŃCZOWY", "SREBRNY", "ZŁOTY", "MIX"];

  /* Nazwy własne, które zostają wielką literą w tytułach */
  var PROPER = { "flexistore": "Flexistore", "techbox": "Techbox", "hd": "HD", "ldpe": "LDPE", "hdpe": "HDPE", "rakun": "RAKUN", "kopenhaga": "Kopenhaga",
    "manhattan": "Manhattan", "loft": "Loft", "wave": "Wave", "kraft": "Kraft", "click&go": "Click&Go", "diy": "DIY", "xxl": "XXL", "kangoo": "Kangoo", "apus": "Apus", "paridae": "Paridae",
    "erina": "Erina", "chiroptera": "Chiroptera", "maxi": "Maxi", "midi": "Midi", "mini": "Mini", "a4": "A4", "idea": "Idea", "roll": "Roll",
    "lemon": "Lemon", "mint": "Mint", "flower": "Flower", "bloom": "Bloom", "forest": "Forest", "walk": "Walk", "milk": "Milk", "honey": "Honey",
    "care": "Care", "ocean": "Ocean", "dive": "Dive", "tropic": "Tropic", "holiday": "Holiday", "12pack": "12 Stk.", "6pack": "6 Stk." };
  function prettify(s) {
    var t = s.toLowerCase().replace(/\s+/g, " ").trim()
      .replace(/(\d+(?:[.,]\d+)?)l\b/g, "$1 l").replace(/(\d+)mm\b/g, "$1 mm").replace(/(\d+)cm\b/g, "$1 cm").replace(/(\d+)g\b/g, "$1 g")
      .replace(/(\d+)m\b/g, "$1 m").replace(/(\d)\.(\d)/g, "$1,$2").replace(/ x /g, " × ")
      .replace(/(\d+)x(\d+)(?:x(\d+))?/g, function (m, a, b, c) { return a + " × " + b + (c ? " × " + c : ""); });
    t = t.split(" ").map(function (w) { return PROPER[w] || w; }).join(" ").replace(/ Kraft (s|m|l)$/, function (m, a) { return " Kraft " + a.toUpperCase(); });
    return t.charAt(0).toUpperCase() + t.slice(1);
  }

  function catOf(up) {
    if (/RENOWACJI|NAGROBK|POMNIK/.test(up)) return "nagrobki";
    if (/^WORKI/.test(up)) return "worki";
    if (/FLEXISTORE/.test(up)) return "flexistore";
    if (/TECHBOX/.test(up)) return "techbox";
    if (/^TORBA PREZENTOWA|PUDEŁKO NA WINO/.test(up)) return "prezenty";
    if (/TORBA|PLECAK/.test(up)) return "torby";
    if (/PUDŁO/.test(up)) return "dom";
    if (/BUDKA|KARMNIK/.test(up)) return "budki";
    if (/MYDŁO|PUMEKS/.test(up)) return "mydla";
    if (/PŁYN/.test(up)) return "chemia";
    if (/DRUCIAK|ZMYWAK|GĄBKA|ŚCIERECZK|ROLKA DO UBRAŃ/.test(up)) return "sprzatanie";

    if (/TAŚMA|SZNUREK/.test(up)) return "warsztat";
    return "dom";
  }
  var CAT_ROOMS = { flexistore: ["salon", "garderoba", "lazienka", "biuro"], techbox: ["garaz"], dom: ["biuro", "garaz", "garderoba"],
    torby: ["wdrodze"], prezenty: ["salon"], sprzatanie: ["kuchnia", "lazienka"], chemia: ["kuchnia", "lazienka"], mydla: ["lazienka", "kuchnia"],
    warsztat: ["garaz"], budki: ["ogrod"] };

  function describe(p, up) {
    var cap = p.cap ? p.cap + " l" : "";
    switch (p.cat) {
      case "worki":
        if (/HDPE/.test(up)) return "Dünne, raschelnde HDPE-Beutel für kleine Eimer in Bad, Büro und Schlafzimmer. Volumen " + cap + ".";
        if (/EKSTRA/.test(up)) return "Die dickste Folie im Sortiment: für Gartenabfälle, Laub, Äste und schwere Abfälle. Volumen " + cap + ".";
        if (/TAŚM/.test(up)) return "Beutel mit Zugband: mit einem Griff verschließen und wie eine Tasche hinaustragen. LDPE-Folie, Volumen " + cap + ".";
        if (/SEGREGACJI/.test(up)) return "Alle Trennfarben im kleinen Format, ideal für Mülltrennsysteme zu Hause. Volumen " + cap + ".";
        if (/MOCNY/.test(up)) return "Elastische, dickere LDPE-Folie, die beim Stopfen nicht reißt. Farben nach Mülltrennung. Volumen " + cap + ".";
        return "Klassische LDPE-Müllbeutel für den täglichen Abfall. Farben nach Mülltrennung. Volumen " + cap + ".";
      case "flexistore":
        if (/INSERT/.test(up)) return "Einsatz mit Fächern für die Flexistore-Box. Er teilt das Innere in Bereiche, damit sich Kleinigkeiten nicht vermischen.";
        if (/MIX/.test(up)) return "Vier Boxen mit Deckel in einem Set. Griffe in den Seiten, Deckel mit Öffnung; die Größen passen zusammen und lassen sich leicht stapeln.";
        return "Set Flexistore-Boxen mit Deckel, Volumen " + cap + ". Matte Oberfläche, Griffe in den Seiten, stabiles Stapeln.";
      case "techbox": return /INSERT/.test(up) ? "Einsatz mit Fächern für die Techbox HD. Ordnung bei Werkzeugen, Kabeln und Kleinteilen." : "Robuste Techbox HD-Boxen für Garage, Keller und Werkstatt, mit Einsatz für Kleinteile.";
      case "dom": return /PRZEPROWADZ/.test(up) ? "Verstärkte Umzugskartons, die schwere Bücher und Geschirr aushalten." : "Loft-Kartons mit Beschriftungsfeld. Zum Archivieren von Dokumenten, Fotos und Saisonartikeln.";
      case "torby":
        if (/PLECAK/.test(up)) return "Baumwoll-Turnbeutel mit Kordel. Leicht und geräumig, ideal für Sport und Ausflüge.";
        if (/MANHATTAN/.test(up)) return "Manhattan-Cordtasche für jeden Tag: weich, geräumig und in modischen Farben.";
        return "Schlichte Baumwolltasche mit langen Henkeln. Zum Einkaufen, für jeden Tag und auf Reisen.";
      case "prezenty": return "Verpackungen der Kollektion Wave Kraft aus Naturpapier. Elegant, schlicht und bereit für Ihr Geschenk.";
      case "sprzatanie":
        if (/MIKROFIBR/.test(up)) return "Mikrofasertücher nehmen Staub und Fett ohne Reinigungsmittel auf. Verschiedene Farben helfen, Küche und Bad zu trennen.";
        if (/ROLL/.test(up)) return "Tücher auf der Rolle – Sie reißen so viele ab, wie Sie brauchen. Für Arbeitsplatte, Geschirr und schnelles Putzen.";
        if (/ROLKA DO UBRAŃ/.test(up)) return "Fusselrolle mit Ersatzrollen. Entfernt Tierhaare, Staub und Haare von Kleidung und Polstern.";
        if (/GĄBKA/.test(up)) return "Melaminschwamm, der Spuren und Schmutz nur mit Wasser entfernt.";
        return "Zubehör zum Spülen und Scheuern von Töpfen, Pfannen und hartnäckigem Schmutz.";
      case "chemia": return /SPRYSKIWACZ/.test(up) ? "RAKUN Sommer-Scheibenwaschflüssigkeit entfernt Insekten und Schlieren von der Scheibe. 5-l-Kanister." : /SZYB/.test(up) ? "RAKUN Glas- und Spiegelreiniger ohne Schlieren. 5-l-Kanister." : "RAKUN Spülmittel, ergiebig und angenehm duftend. Sparsamer 5-l-Kanister.";
      case "mydla": return /PUMEKS/.test(up) ? "Kosmetischer Bimsstein für die Fuß- und Handpflege." : "RAKUN Flüssigseife im 5-l-Kanister zum Nachfüllen von Spendern zu Hause und im Betrieb.";
      case "warsztat":
        if (/SZNUREK/.test(up)) return "Naturschnur zum Verpacken, für Garten, Küche und Handarbeit.";
        return "Klebebänder zum Verpacken, Malern und für Elektroarbeiten in praktischen Sets.";
      case "budki": return "Holz-Nistkasten oder Futterhaus von IDEA HOME. Bietet Tieren im Garten das ganze Jahr Schutz und Futter.";
      case "nagrobki": return "Set zum Auffrischen von Buchstaben auf Grabsteinen und Tafeln. Stellt Lesbarkeit und Farbe der Inschriften wieder her.";
    }
    return "";
  }

  /* Ręczne nadpisanie serii/nazwy/opisu dla pojedynczych produktów (id ze sklepu → { series, title, desc, amazon }) */
  var SERIES_OVERRIDE = {};

  /* Grupowanie podobnych produktów w jedną kartę: re → klucz rodziny, tytuł, nazwa opcji i jej wartość [etykieta, kolejność] */
  function pick(list) { return function (up) { for (var i = 0; i < list.length; i++) if (list[i][0].test(up)) return [list[i][1], i]; return [null, 99]; }; }
  var GROUP_RULES = [
    { re: /PUDŁO DO PRZECHOWYWANIA ZESTAW LOFT/, key: "PUDŁA LOFT", title: "Loft-Aufbewahrungsboxen", label: "Modell",
      opt: pick([[/^(?!.*IDEA A4)/, "Loft"], [/IDEA A4/, "Loft Idea A4"]]) },
    { re: /^PLECAK BAWEŁNIANY/, key: "PLECAK BAWEŁNIANY", title: "Baumwollrucksack 360 × 440 mm", label: "Grammatur",
      opt: function (up) { var g = +(up.match(/(\d+)G\b/) || [])[1]; return [g + " g", g]; } },
    { re: /^TORBA BAWEŁNIANA \d+G/, key: "TORBA BAWEŁNIANA", title: "Baumwolltasche 380 × 420 mm mit Henkeln, unbedruckt", label: "Ausführung",
      opt: function (up) { var g = +(up.match(/(\d+)G\b/) || [])[1], w = /POSZERZANA/.test(up); return [g + " g" + (w ? " poszerzana" : ""), g * 10 + (w ? 1 : 0)]; } },
    { re: /^TORBA PREZENTOWA .*WAVE KRAFT/, key: "TORBA PREZENTOWA WAVE KRAFT", title: "Geschenktüte Wave Kraft", label: "Größe",
      opt: pick([[/KRAFT S\b/, "S"], [/KRAFT M\b/, "M"], [/KRAFT L\b/, "L"]]) },
    { re: /^PUDEŁKO NA WINO .*WAVE KRAFT/, key: "PUDEŁKO NA WINO WAVE KRAFT", title: "Weinbox Wave Kraft", label: "Modell",
      opt: pick([[/^(?!.*CLICK)/, "Klassisch"], [/CLICK/, "Click&Go"]]) },
    { re: /^DRUCIAK/, key: "DRUCIAKI", title: "Topfreiniger für Töpfe und Pfannen", label: "Art",
      opt: pick([[/METALOWY/, "metalowy"], [/PLASTIKOWY/, "plastikowy"], [/SPIRALNY/, "spiralny"]]) },
    { re: /^ZMYWAK|^GĄBKA MAGICZNA/, key: "ZMYWAKI I GĄBKI", title: "Küchenschwämme", label: "Art", clearColor: true,
      opt: pick([[/CELULOZOWY/, "Zellulose"], [/DELIKATNYCH/, "für empfindliche Oberflächen"], [/TEFLONU/, "für Antihaft"], [/GĄBKA/, "Schmutzradierer"]]) },
    { re: /ŚCIERECZK\S* Z MIKROFIBRY(?!.*RAKUN)/, key: "ŚCIERECZKI Z MIKROFIBRY", title: "Mikrofasertücher", label: "Größe",
      opt: function (up) { var s = up.match(/(\d+)X(\d+)CM/) || []; return [s[1] + " × " + s[2] + " cm", +s[1]]; } },
    { re: /^PŁYN DO MYCIA NACZYŃ .*RAKUN/, key: "PŁYN DO MYCIA NACZYŃ RAKUN", title: "RAKUN Spülmittel 5 l", label: "Duft",
      opt: pick([[/LEMON/, "Lemon"], [/MINT/, "Mint"]]) },
    { re: /^MYDŁO W PŁYNIE .*RAKUN/, key: "MYDŁO W PŁYNIE RAKUN", title: "RAKUN Flüssigseife 5 l", label: "Duft",
      opt: pick([[/FLOWER/, "Flower Bloom"], [/FOREST/, "Forest Walk"], [/MILK/, "Milk & Honey Care"], [/OCEAN/, "Ocean Dive"], [/TROPIC/, "Tropic Holiday"]]) },
    { re: /^SZNUREK/, label: "Länge", clearLength: true,
      opt: function (up, len) { return [len + " m", len]; } },
    { re: /^TAŚMA MASKUJĄCA/, key: "TAŚMA MASKUJĄCA", title: "Abdeckband 50 m", label: "Breite",
      opt: function (up) { var w = +(up.match(/(\d+)MM/) || [])[1]; return [w + " mm", w]; } },
    { re: /TORBA FILCOWA|TORBA KANGOO/, key: "TORBY FILCOWE", title: "Filztasche", label: "Modell",
      opt: pick([[/XXL/, "XXL zum Einkaufen"], [/1102/, "1102"], [/KANGOO/, "Kangoo mit Fächern"]]) },
    { re: /AKTYWNA PIANA/, key: "AKTYWNA PIANA DO NAGROBKÓW", title: "Aktivschaum zur Grabsteinreinigung 400 ml", label: "Variante",
      opt: function () { return [null, 0]; } },
    { re: /^KARMNIK DLA PTAKÓW/, key: "KARMNIK DLA PTAKÓW", title: "Vogelfutterhaus", label: "Modell",
      opt: pick([[/MAXI/, "Maxi"], [/MIDI/, "Midi DIY"], [/MINI(?! DIY)/, "Mini"], [/MINI DIY/, "Mini DIY"]]) },
    { re: /^BUDKA DLA PTAKÓW/, key: "BUDKA DLA PTAKÓW", title: "Vogelhaus", label: "Modell",
      opt: pick([[/APUS/, "Apus"], [/PARIDAE/, "Paridae"]]) }
  ];

  /* Pomieszczenia przypisane do konkretnego rodzaju produktu (pierwsza pasująca reguła) */
  var ROOM_RULES = [
    [/PŁYN DO MYCIA NACZYŃ|DRUCIAK|ZMYWAK|GĄBKA|ŚCIERECZKI DO KUCHNI|WĘDLINIARSKI/, ["kuchnia"]],
    [/SPRYSKIWACZ/, ["garaz"]],
    [/PŁYN DO SZYB/, ["salon", "lazienka"]],
    [/MYDŁO|PUMEKS/, ["lazienka"]],
    [/MIKROFIBR/, ["kuchnia", "lazienka"]],
    [/ROLKA DO UBRAŃ/, ["garderoba"]],
    [/INSERT DO POJEMNIKA FLEXISTORE/, ["garderoba", "biuro", "lazienka"]],
    [/FLEXISTORE/, ["salon", "garderoba", "lazienka", "biuro"]],
    [/TECHBOX/, ["garaz"]],
    [/PUDŁO DO PRZECHOWYWANIA/, ["biuro", "garderoba"]],
    [/PUDŁO DO PRZEPROWADZEK/, ["garaz", "biuro"]],
    [/^TORBA PREZENTOWA|PUDEŁKO NA WINO/, ["salon"]],
    [/TORBA|PLECAK/, ["wdrodze"]],
    [/SIZALOWY/, ["ogrod", "garaz"]],
    [/TAŚMA|SZNUREK/, ["garaz"]],
    [/BUDKA|KARMNIK/, ["ogrod"]],
    [/RENOWACJI|NAGROBK|POMNIK/, []]
  ];
  function roomsFor(p, up) {
    if (p.cat === "worki") {
      if (/HDPE/.test(up)) return ["lazienka", "biuro"];
      if (p.cap >= 120) return ["garaz", "ogrod"];
      if (p.cap >= 60) return ["kuchnia", "garaz"];
      return ["kuchnia", "biuro"];
    }
    for (var i = 0; i < ROOM_RULES.length; i++) if (ROOM_RULES[i][0].test(up)) return ROOM_RULES[i][1];
    return CAT_ROOMS[p.cat] || [];
  }

  function parse(raw) {
    var name = String(raw.name).replace(/’/g, "'").replace(/\s+/g, " ").trim();
    var up = name.toUpperCase();
    var color = null, colorRe = null;
    for (var i = 0; i < COLOR_WORDS.length; i++) { if (COLOR_WORDS[i][0].test(up)) { color = COLOR_WORDS[i][1]; colorRe = COLOR_WORDS[i][0]; break; } }
    var pack = (up.match(/(\d+)\s*SZT/) || [])[1] || (up.match(/(\d+)PACK/) || [])[1] || (up.match(/A'(\d+)/) || [])[1];
    var cap = (up.match(/(\d+)\s*L\b/) || [])[1];
    var length = /SZNUREK/.test(up) ? (up.match(/(\d+)M\b/) || [])[1] : null;
    var cat = catOf(up);

    // Klucz rodziny = nazwa bez IH, koloru, liczby sztuk (i długości sznurka)
    var key = up.replace(/\bIH\b/g, " ");
    if (colorRe) key = key.replace(colorRe, " ");
    key = key.replace(/\d+\s*SZT\.?/g, " ").replace(/\d+PACK/g, " ").replace(/\bA'\d+/g, " ");
    if (length) key = key.replace(/\d+M\b/g, " ").replace(/[\d.]+KG\b/g, " ");
    if (/RENOWACJI/.test(up)) key = "ZESTAW DO RENOWACJI NAPISÓW NA POMNIKACH";
    var bagType = /EKSTRA MOCNY/.test(up) ? " extrastark" : /MOCNY/.test(up) ? " mocne" : /TAŚM/.test(up) ? " mit Zugband" : /SEGREGACJI/.test(up) ? " zur Mülltrennung" : "";
    var bagMat = /HDPE/.test(up) ? "HDPE" : "LDPE";
    // worki: jedna rodzina na rodzaj worka, pojemność i kolor to warianty
    if (cat === "worki") key = ("WORKI " + bagMat + bagType).toUpperCase();
    // Flexistore / Techbox: jedna karta na pojemniki i jedna na inserty, rozmiar jako opcja do wyboru
    var opt = null, optSort = null, optLabel = "Volumen";
    if (cat === "flexistore" || cat === "techbox") {
      var isInsert = /INSERT/.test(up) && !/SET/.test(up);
      var sizes = (up.match(/(\d+)\/(\d+)\s*L/) || []);
      if (cat === "flexistore") key = isInsert ? "INSERTY FLEXISTORE" : "POJEMNIKI FLEXISTORE";
      else key = "TECHBOX HD";
      if (/MIX ROZMIAR/.test(up)) { opt = "Mix 4 Größen"; optSort = 0; }
      else if (/SET 2X(\d+)L/.test(up)) { var n = up.match(/SET 2X(\d+)L/)[1]; opt = "Set 2 × " + n + " l + Einsatz"; optSort = 1; }
      else if (sizes[1]) { opt = (isInsert && cat === "techbox" ? "Einsatz " : "") + sizes[1] + "/" + sizes[2] + " l"; optSort = +sizes[1] + (cat === "techbox" ? 1000 : 0); }
      else if (cap) { opt = cap + " l"; optSort = +cap; }
      optLabel = cat === "techbox" ? "Variante" : "Größe";
    }
    // pozostałe podobne produkty: jedna karta, różnica jako opcja do wyboru
    var rr = null;
    for (var ri = 0; ri < GROUP_RULES.length; ri++) { if (GROUP_RULES[ri].re.test(up)) { rr = GROUP_RULES[ri]; break; } }
    if (rr) { if (rr.key) key = rr.key; var ro = rr.opt(up, length); opt = ro[0]; optSort = ro[1]; optLabel = rr.label; }
    key = key.replace(/\s+/g, " ").trim().replace(/\sX$/, "");

    var title;
    if (cat === "worki") {
      title = "Müllbeutel " + bagMat + bagType;
    } else if (key === "POJEMNIKI FLEXISTORE") {
      title = "Flexistore-Boxen mit Deckel";
    } else if (key === "INSERTY FLEXISTORE") {
      title = "Einsatz mit Fächern für Flexistore-Box";
    } else if (key === "TECHBOX HD") {
      title = "Techbox HD-Boxen und Einsätze";
    } else if (/RENOWACJI/.test(up)) {
      title = "Set zur Renovierung von Grabinschriften";
    } else {
      title = prettify(key.replace(/\s*\.$/, ""));
    }
    if (rr && rr.title) title = rr.title;
    var p = { id: raw.id, img: raw.img, url: raw.url || null, raw: name, color: color, pack: pack ? +pack : null, cap: cap ? +cap : null,
      length: length ? +length : null, cat: cat, family: key, title: title, rooms: CAT_ROOMS[cat] || [],
      badge: SERIES_OVERRIDE[raw.id] ? SERIES_OVERRIDE[raw.id].series : /RAKUN/.test(up) ? "RAKUN" : null };
    var so = SERIES_OVERRIDE[raw.id];
    if (so) { p.title = so.title; p.amazon = so.amazon; }
    p.rooms = roomsFor(p, up);
    // galeria i krótki opis ze sklepu; gdy sklep nie ma opisu, używamy naszego
    if (rr && rr.clearColor) p.color = null;
    if (rr && rr.clearLength) p.length = null;
    // opcja do wyboru na karcie (domyślnie pojemność w litrach)
    p.opt = opt || (p.cap ? p.cap + " l" : null); p.optSort = optSort != null ? optSort : p.cap; p.optLabel = optLabel;
    p.price = raw.price != null ? raw.price : null; p.avail = raw.avail;
    p.imgs = raw.imgs && raw.imgs.length ? raw.imgs : [raw.img];
    // opisy ze sklepu są po polsku – w innych językach używamy naszych (przetłumaczonych) opisów
    p.desc = (so && so.desc) || (LANG === "pl" ? raw.desc : "") || describe(p, up);
    return p;
  }

  /* Lokalne miniatury → produkt w sklepie (gdy nazwa pliku różni się od adresu w sklepie) */
  var LOCAL_ALIAS = {
    "sciereczki-do-kuchni-ih-roll-18x35cm-a-100-x-2szt": "sciereczki-do-kuchni-ih-roll-18x35cm-a100-x-2szt",
    "worki-ih-ldpe-ekstra-mocny-120l-czarny-10szt": "worki-ldpe-120l-czarny-10szt-ekstra-mocny",
    "worki-ih-ldpe-z-tasma-35l-czarny-50szt": "worki-ldpe-z-tasma-sciagajaca-35l-czarny-50szt",
    "worki-ih-ldpe-z-tasma-60l-czarny-40szt": "worki-ldpe-z-tasma-sciagajaca-60l-czarny-40szt"
  };
  /* Dodatkowe zdjęcia z MINIATUR dołączane do galerii innego produktu (zamiast osobnej karty) */
  var LOCAL_EXTRA = {
    "66ffe752e524fb70b6b7cae0-tama-ostrzegawcza-ih-50mm-x-5m-klejca-odblaskowa-toczarna-strzaka": "tasma-ostrzegawcza-ih-50mm-x-5m-klejaca-odblaskowa-zolto-czarna-strzalka"
  };
  function variantLabel(v) {
    var parts = [];
    if (v.color && COLORS[v.color]) parts.push(COLORS[v.color].name);
    if (v.length) parts.push(v.length + " m");
    if (v.pack) parts.push(v.pack + " Stk.");
    return parts.join(" · ");
  }
  function buildCatalog() {
    var shop = (window.IH_SHOP_PRODUCTS || []).slice();
    var byId = {}; shop.forEach(function (s) { byId[s.id] = s; });
    // własne miniatury: podmieniają zdjęcie produktu ze sklepu albo dochodzą jako osobne pozycje
    var locals = window.IH_LOCAL_PRODUCTS || [];
    locals.forEach(function (l) {
      if (LOCAL_EXTRA[l.id]) return;
      var s = byId[LOCAL_ALIAS[l.id] || l.id];
      if (s) { s.img = l.img; if (s.imgs && s.imgs.length) s.imgs = [l.img].concat(s.imgs.slice(1)); }
      else { s = { id: l.id, name: l.name, img: l.img, imgs: [l.img], url: null }; shop.push(s); byId[l.id] = s; }
    });
    locals.forEach(function (l) {
      var t = byId[LOCAL_EXTRA[l.id]];
      if (t) t.imgs = (t.imgs && t.imgs.length ? t.imgs : [t.img]).concat(l.img);
    });
    var fams = {}, list = [];
    shop.map(parse).forEach(function (v) {
      var g = fams[v.family];
      if (!g) {
        g = fams[v.family] = { id: v.family.toLowerCase().replace(/ł/g, "l").normalize("NFD").replace(/[̀-ͯ]/g, "").replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, ""),
          title: v.title, cat: v.cat, desc: v.desc, rooms: v.rooms, badge: v.badge, cap: v.cap, variants: [] };
        list.push(g);
      }
      // ten sam wariant bywa w sklepie pod dwoma adresami - zostawiamy pierwszy
      var same = function (x) { return x.color === v.color && x.opt === v.opt && x.cap === v.cap && x.pack === v.pack && x.length === v.length; };
      if (!g.variants.some(function (x) { return x.id === v.id || (same(x) && x.url && v.url); })) g.variants.push(v);
      v.rooms.forEach(function (r) { if (g.rooms.indexOf(r) === -1) g.rooms = g.rooms.concat(r); });
    });
    list.forEach(function (g) {
      // pojemności rodziny; przy kilku litrażach karta pokazuje wybór litrów i kolorów
      g.caps = g.variants.map(function (v) { return v.cap; }).filter(function (c, i, a) { return c && a.indexOf(c) === i; }).sort(function (a, b) { return a - b; });
      // opcje (litraż albo rozmiar/wariant) w kolejności optSort
      var os = {}; g.variants.forEach(function (v) { if (v.opt && !(v.opt in os)) os[v.opt] = v.optSort; });
      g.opts = Object.keys(os).sort(function (a, b) { return (os[a] || 0) - (os[b] || 0); });
      g.optLabel = g.variants[0].optLabel;
      g.multi = g.opts.length > 1;
      g.cap = g.caps.length === 1 ? g.caps[0] : null;
      g.capMin = g.caps[0] || null;
      g.variants.sort(function (a, b) { return ((a.url ? 0 : 1) - (b.url ? 0 : 1)) || ((a.optSort || 0) - (b.optSort || 0)) || (COLOR_ORDER.indexOf(a.color) - COLOR_ORDER.indexOf(b.color)) || ((a.length || 0) - (b.length || 0)) || ((a.pack || 0) - (b.pack || 0)); });
      var colors = g.variants.map(function (v) { return v.color; });
      // kropki kolorów tylko gdy każdy wariant ma inny kolor; w innym wypadku przyciski z opisem
      g.dots = g.variants.length > 1 && colors.every(function (c, i) { return c && COLORS[c] && colors.indexOf(c) === i; });
      g.query = g.title + " idea home";
      g.desc = g.variants[0].desc;
      // przetłumaczone nazwy grup produktów (js/i18n.<lang>.js)
      if (window.IH_TITLES && window.IH_TITLES[g.id]) g.title = window.IH_TITLES[g.id];
    });
    list.sort(function (a, b) {
      var ca = CATS.findIndex(function (c) { return c.id === a.cat; }), cb = CATS.findIndex(function (c) { return c.id === b.cat; });
      return ca - cb || (a.capMin || 0) - (b.capMin || 0) || a.title.localeCompare(b.title, "pl");
    });
    return list;
  }
  var CATALOG = buildCatalog();
  function catById(id) { return CATS.find(function (c) { return c.id === id; }); }
  function roomById(id) { return ROOMS.find(function (r) { return r.id === id; }); }
  function countIn(catId) { return CATALOG.filter(function (g) { return g.cat === catId; }).reduce(function (s, g) { return s + g.variants.length; }, 0); }
  function pl(n, one, few, many) {
    var d = n % 10, t = n % 100;
    if (LANG === "en" || LANG === "de") return n === 1 ? one : many;
    if (LANG === "cs") return n === 1 ? one : (n >= 2 && n <= 4) ? few : many;
    return n === 1 ? one : (d >= 2 && d <= 4 && (t < 12 || t > 14)) ? few : many;
  }
  // wyszukanie rodziny po fragmencie id (do list na stronie głównej)
  function find(part) { return CATALOG.find(function (g) { return g.id === part; }) || CATALOG.find(function (g) { return g.id.indexOf(part) > -1; }); }

  /* ---------- Ulubione (tylko w tej przeglądarce) ---------- */
  var FAV_KEY = "ih-favs";
  function getFavs() { try { return JSON.parse(localStorage.getItem(FAV_KEY) || "[]"); } catch (e) { return []; } }
  function setFavs(a) { try { localStorage.setItem(FAV_KEY, JSON.stringify(a)); } catch (e) {} updateFavCount(); }
  function updateFavCount() { var el = document.getElementById("favcount"); if (el) el.textContent = getFavs().length || ""; }

  function toast(msg) {
    var t = document.createElement("div"); t.className = "toast"; t.setAttribute("role", "status"); t.textContent = msg;
    document.body.appendChild(t); setTimeout(function () { t.remove(); }, 2400);
  }

  /* ---------- Karta produktu ---------- */
  function esc(s) { return String(s).replace(/[&<>"]/g, function (c) { return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c]; }); }
  function variantSpec(g, v) {
    var s = variantLabel(v);
    if (g.multi && v.opt) s = v.opt + (s ? " · " + s : "");
    if (g.cat === "worki" && v.color && COLORS[v.color].seg) s += (s ? " · " : "") + COLORS[v.color].seg;
    return s;
  }
  // ceny nie są pokazywane na stronie (decyzja: tylko przyciski do sklepu)
  function priceHtml(v) { return '<p class="price" hidden></p>'; }
  function buyUrl(g, v) {
    if (LANG === "pl") return v.url || shopSearch(g.query);
    // EN/DE: konkretny produkt na Amazon.de, jeśli jest dopasowany (js/amazon-data.js), inaczej wyszukiwanie w sklepie marki
    var amz = (LANG === "en" || LANG === "de") && window.IH_AMAZON;
    var asin = amz && (amz[v.id] || amz["rodzina:" + g.id]);
    if (asin) return "https://www.amazon.de/dp/" + asin;
    var terms = MARKET_TERMS[LANG] || {};
    if (/PIANA|PIANKA/i.test(v.raw)) return MARKET.search(LANG === "cs" ? "pěna" : "Aktivschaum");
    return MARKET.search(terms[g.cat] || "IDEA HOME");
  }
  // na przycisku tylko to, czym warianty się różnią (np. "5 Stk." zamiast "natur · 5 Stk.")
  function chipLabel(g, v) {
    var differs = function (k) { return g.variants.some(function (x) { return x[k] !== g.variants[0][k]; }); };
    var parts = [];
    if (differs("color") && v.color && COLORS[v.color]) parts.push(COLORS[v.color].name);
    if (differs("length") && v.length) parts.push(v.length + " m");
    if (differs("pack") && v.pack) parts.push(v.pack + " Stk.");
    return parts.join(" · ");
  }
  // wybór wariantu w maks. trzech rzędach: opcja (litraż/rozmiar/model…), kolor, opakowanie
  function multiPicker(g, sel) {
    var v = g.variants[sel];
    var uniq = function (a) { return a.filter(function (x, i) { return x != null && a.indexOf(x) === i; }); };
    var colors = uniq(g.variants.map(function (x) { return x.color; })).sort(function (a, b) { return COLOR_ORDER.indexOf(a) - COLOR_ORDER.indexOf(b); });
    var sameOpt = g.variants.filter(function (x) { return x.opt === v.opt; });
    var packPool = sameOpt.filter(function (x) { return x.color === v.color; });
    if (uniq(packPool.map(function (x) { return x.pack; })).length < 2) packPool = sameOpt;
    var packs = uniq(packPool.map(function (x) { return x.pack; })).sort(function (a, b) { return a - b; });
    var lab = g.optLabel || "Volumen";
    var html = '<div class="vpick">';
    if (g.opts.length > 1) html += '<div class="vrow" role="group" aria-label="' + lab + '"><span class="vlab">' + lab + "</span>" + g.opts.map(function (o) {
      return '<button class="vchip" type="button" data-opt="' + esc(o) + '" aria-pressed="' + (o === v.opt) + '">' + esc(o) + "</button>";
    }).join("") + "</div>";
    if (colors.length > 1) html += '<div class="vrow swatches" role="group" aria-label="Farbe"><span class="vlab">Farbe</span>' + colors.map(function (c) {
      var ok = sameOpt.some(function (x) { return x.color === c; }), name = COLORS[c] ? COLORS[c].name : c;
      return '<button class="sw' + (ok ? "" : " na") + '" type="button" data-color="' + c + '" aria-pressed="' + (c === v.color) + '" title="' + esc(name + (ok ? "" : " – in einer anderen Variante")) + '" aria-label="' + esc(name) + '" style="background:' + (COLORS[c] ? COLORS[c].hex : "#ccc") + '"></button>';
    }).join("") + "</div>";
    if (packs.length > 1) html += '<div class="vrow" role="group" aria-label="Packung"><span class="vlab">Packung</span>' + packs.map(function (p) {
      return '<button class="vchip" type="button" data-pack="' + p + '" aria-pressed="' + (p === v.pack) + '">' + p + " Stk.</button>";
    }).join("") + "</div>";
    return html + "</div>";
  }
  // po kliknięciu: wariant z klikniętą wartością, możliwie zgodny z resztą obecnego wyboru
  function pickIndex(g, cur, btn) {
    var v = g.variants[cur], d, val;
    if (btn.dataset.opt !== undefined) { d = "opt"; val = btn.dataset.opt; }
    else if (btn.dataset.color !== undefined) { d = "color"; val = btn.dataset.color; }
    else if (btn.dataset.pack !== undefined) { d = "pack"; val = +btn.dataset.pack; }
    else return cur;
    var W = { opt: 4, color: 2, pack: 1 }, best = -1, bestScore = -1;
    g.variants.forEach(function (x, k) {
      if (x[d] !== val) return;
      var s = 0;
      Object.keys(W).forEach(function (o) { if (o !== d && x[o] === v[o]) s += W[o]; });
      if (d === "color" && x.opt !== v.opt) s -= Math.abs((x.optSort || 0) - (v.optSort || 0)) / 1000;
      if (s > bestScore) { bestScore = s; best = k; }
    });
    return best > -1 ? best : cur;
  }
  function variantPicker(g, sel) {
    if (g.variants.length < 2) return "";
    return multiPicker(g, sel);
  }
  function card(g, opts) {
    opts = opts || {};
    // opts.color: od razu pokaż wariant w tym kolorze (np. po kliknięciu koloru w sekcji segregacji)
    var si = opts.vi != null ? opts.vi : opts.color ? Math.max(0, g.variants.findIndex(function (x) { return x.color === opts.color; })) : 0;
    var v = g.variants[si], cat = catById(g.cat), fav = getFavs().indexOf(g.id) > -1;
    return '<article class="pcard" data-id="' + g.id + '" data-vi="' + si + '">' +
      (g.badge ? '<span class="badge">' + g.badge + "</span>" : "") +
      '<button class="fav" type="button" aria-pressed="' + fav + '" aria-label="Dodaj do ulubionych">' + ICON.heart + "</button>" +
      '<button class="thumb" type="button" aria-label="Szczegóły: ' + esc(g.title) + '"><img class="main" loading="lazy" src="' + v.img + '" alt="' + esc(g.title) + '">' +
      '<img class="alt" loading="lazy" src="' + (v.imgs[1] || v.img) + '" alt=""' + (v.imgs[1] ? "" : " hidden") + '>' +
      (v.imgs.length > 1 ? '<span class="photos">' + v.imgs.length + " " + pl(v.imgs.length, "Foto", "Fotos", "Fotos") + "</span>" : "") + "</button>" +
      '<div class="body">' +
      (opts.hideCat ? "" : '<span class="pcat">' + cat.name + "</span>") +
      '<h3><a class="plink" href="p/' + g.id + '.html">' + esc(g.title) + "</a></h3>" +
      '<p class="pdesc">' + esc(v.desc || "") + "</p>" +
      '<p class="spec">' + esc(variantSpec(g, v)) + "</p>" + priceHtml(v) +
      '<div class="vwrap">' + variantPicker(g, si) + "</div>" +
      '<div class="foot"><a class="btn btn-primary btn-sm buy" href="' + buyUrl(g, v) + '" target="_blank" rel="noopener">Online kaufen</a>' +
      (v.amazon ? '<a class="link-arrow amz" href="' + v.amazon + '" target="_blank" rel="noopener">Amazon.de</a>' : "") + "</div>" +
      "</div></article>";
  }
  function selectVariant(root, g, idx) {
    var v = g.variants[idx];
    root.dataset.vi = idx;
    var main = root.querySelector(".thumb img.main, .mimg img"); if (main) main.src = v.img;
    var alt = root.querySelector(".thumb img.alt");
    if (alt) { alt.src = v.imgs[1] || v.img; alt.hidden = !v.imgs[1]; }
    var photos = root.querySelector(".thumb .photos"); if (photos) photos.textContent = v.imgs.length + " " + pl(v.imgs.length, "Foto", "Fotos", "Fotos");
    var desc = root.querySelector(".pdesc, .mdesc"); if (desc) desc.textContent = v.desc || "";
    var strip = root.querySelector(".mthumbs"); if (strip) strip.outerHTML = thumbStrip(v);
    root.querySelector(".spec").textContent = variantSpec(g, v);
    var pr = root.querySelector(".price"); if (pr) pr.outerHTML = priceHtml(v);
    var buy = root.querySelector(".buy"); if (buy) buy.href = buyUrl(g, v);
    var w = root.querySelector(".vwrap"); if (w) w.innerHTML = variantPicker(g, idx);
    var amz = root.querySelector(".amz"); if (amz) amz.hidden = !v.amazon;
  }
  function bindCards(root) {
    root.addEventListener("click", function (e) {
      var c = e.target.closest(".pcard"); if (!c) return;
      var g = CATALOG.find(function (x) { return x.id === c.dataset.id; });
      var vb = e.target.closest(".sw, .vchip");
      if (vb) return selectVariant(c, g, pickIndex(g, +c.dataset.vi || 0, vb));
      if (e.target.closest(".fav")) {
        var favs = getFavs(), i = favs.indexOf(g.id), btn = e.target.closest(".fav");
        if (i > -1) { favs.splice(i, 1); toast("Aus Favoriten entfernt"); } else { favs.push(g.id); toast("Zu Favoriten hinzugefügt"); }
        btn.setAttribute("aria-pressed", i === -1); setFavs(favs);
        return;
      }
      if (e.target.closest(".thumb")) {
        openModal(g, +c.dataset.vi || 0);
      }
    });
  }

  /* ---------- Podgląd produktu ---------- */
  function thumbStrip(v) {
    if (v.imgs.length < 2) return '<div class="mthumbs" hidden></div>';
    return '<div class="mthumbs" role="group" aria-label="Produktfotos">' + v.imgs.map(function (src, i) {
      return '<button type="button" data-img="' + i + '" aria-pressed="' + (i === 0) + '" aria-label="Zdjęcie ' + (i + 1) + '"><img loading="lazy" src="' + src + '" alt=""></button>';
    }).join("") + "</div>";
  }
  function openModal(g, vi) {
    vi = vi || 0;
    var v = g.variants[vi], cat = catById(g.cat), last = document.activeElement;
    var m = document.createElement("div");
    m.className = "modal"; m.setAttribute("role", "dialog"); m.setAttribute("aria-modal", "true"); m.setAttribute("aria-label", g.title);
    var uniq = function (a) { return a.filter(function (x, i) { return x && a.indexOf(x) === i; }); };
    var colors = uniq(g.variants.map(function (x) { return x.color && COLORS[x.color] ? COLORS[x.color].name : null; }));
    var packs = uniq(g.variants.map(function (x) { return x.pack; }));
    var rooms = g.rooms.map(roomById).filter(Boolean).map(function (r) { return r.name; });
    var specs = [["Kategorie", cat.name]];
    if (g.badge) specs.push(["Serie", g.badge]);
    if (g.caps.length && (g.cat === "worki" || !g.multi)) specs.push([g.caps.length > 1 ? "Volumen" : "Volumen", g.caps.join(" / ") + " l"]);
    if (g.multi && g.cat !== "worki") specs.push([g.optLabel === "Variante" ? "Varianten" : "Größen", g.opts.join(", ")]);
    if (g.cat === "worki") specs.push(["Material", /HDPE/.test(g.title) ? "HDPE-Folie" : "LDPE-Folie"]);
    if (packs.length) specs.push(["Packung", packs.join(" / ") + " Stk."]);
    if (colors.length) specs.push([colors.length > 1 ? "Farben" : "Farbe", colors.join(", ")]);
    if (rooms.length) specs.push(["Wo es sich bewährt", rooms.join(", ")]);
    specs.push(["Varianten", String(g.variants.length)]);
    m.innerHTML = '<div class="modal-box">' +
      '<button class="icon-btn modal-close" type="button" aria-label="Schließen">' + ICON.close + "</button>" +
      '<div class="mgallery"><div class="mimg"><img src="' + v.img + '" alt="' + esc(g.title) + '"></div>' + thumbStrip(v) + "</div>" +
      '<div class="mbody"><span class="label">' + cat.name + "</span><h2>" + esc(g.title) + '</h2><p class="mdesc">' + esc(v.desc || "") + "</p>" +
      '<div class="vwrap">' + variantPicker(g, vi) + "</div>" +
      '<p class="spec muted">' + esc(variantSpec(g, v)) + "</p>" + priceHtml(v) +
      '<dl class="specs">' + specs.map(function (s) { return "<dt>" + s[0] + "</dt><dd>" + esc(s[1]) + "</dd>"; }).join("") + "</dl>" +
      '<div class="modal-actions"><a class="btn btn-primary buy" href="' + buyUrl(g, v) + '" target="_blank" rel="noopener">Im Shop kaufen ' + ICON.bag.replace("<svg", '<svg width="16" height="16"') + '</a>' + (v.amazon ? '<a class="btn btn-outline" href="' + v.amazon + '" target="_blank" rel="noopener">Auf Amazon.de kaufen</a>' : "") + '<a class="btn btn-outline" href="p/' + g.id + '.html">Produktseite</a>' + '</div>' +
      "</div></div>";
    function close() { m.remove(); document.removeEventListener("keydown", onKey); if (last) last.focus(); }
    function onKey(e) { if (e.key === "Escape") close(); }
    m.addEventListener("click", function (e) {
      if (e.target === m || e.target.closest(".modal-close")) return close();
      var vb = e.target.closest(".sw, .vchip");
      if (vb) { vi = pickIndex(g, vi, vb); return selectVariant(m, g, vi); }
      var tb = e.target.closest(".mthumbs button");
      if (tb) {
        m.querySelector(".mimg img").src = g.variants[vi].imgs[+tb.dataset.img];
        m.querySelectorAll(".mthumbs button").forEach(function (b) { b.setAttribute("aria-pressed", b === tb); });
      }
    });
    document.addEventListener("keydown", onKey);
    document.body.appendChild(m);
    m.querySelector(".modal-close").focus();
  }

  /* ---------- Wyszukiwanie odporne na literówki ----------
     - bez polskich znaków (zolty = żółty), wielkość liter bez znaczenia
     - słowo może być początkiem wyrazu (work → worki)
     - literówki: 1 przy słowach 4–5 liter, 2 przy dłuższych; zamienione sąsiednie litery liczą się jako 1 (tobra → torba) */
  function fold(s) { return String(s).toLowerCase().replace(/ł/g, "l").normalize("NFD").replace(/[̀-ͯ]/g, ""); }
  function dist(a, b) {
    var d = [], i, j;
    for (i = 0; i <= a.length; i++) { d[i] = [i]; }
    for (j = 0; j <= b.length; j++) d[0][j] = j;
    for (i = 1; i <= a.length; i++) for (j = 1; j <= b.length; j++) {
      var c = Math.min(d[i - 1][j] + 1, d[i][j - 1] + 1, d[i - 1][j - 1] + (a[i - 1] === b[j - 1] ? 0 : 1));
      if (i > 1 && j > 1 && a[i - 1] === b[j - 2] && a[i - 2] === b[j - 1]) c = Math.min(c, d[i - 2][j - 2] + 1);
      d[i][j] = c;
    }
    return d[a.length][b.length];
  }
  // synonimy i odmiany, żeby różne słowa trafiały w ten sam produkt
  var SYN = [
    [/\bpian/, "pianka pianki pianke piana piany piane spray"],
    [/worki|worek/, "worek worki worka workow smieci odpady kosz kosza smietnik"],
    [/torb/, "torba torby torebka siatka"],
    [/sciereczk|scierk/, "scierka scierki sciereczka sciereczki"],
    [/pojemnik|flexistore|techbox/, "pojemnik pojemniki skrzynka pudelko organizer"],
    [/mydlo/, "mydlo mydla"],
    [/nagrob|pomnik|renowacj/, "nagrobek nagrobki pomnik pomniki cmentarz znicz"],
    // wersje językowe: słowa, które wpisze klient z Niemiec, Czech albo Wielkiej Brytanii
    [/worki|worek/, "bag bags bin binbag binbags trash rubbish garbage waste muell muellbeutel muellsack muellsaecke abfall abfallbeutel beutel pytel pytle odpadky odpad kos"],
    [/torb|plecak/, "bag tote shopper backpack tasche taschen einkaufstasche beutel rucksack taska tasky batoh"],
    [/sciereczk|scierk|mikrofibr/, "cloth cloths microfibre microfiber tuch tuecher mikrofaser mikrofasertuch utarka uterka uterky mikrovlakno hadr"],
    [/pojemnik|flexistore|techbox|insert/, "box boxes storage container organiser organizer kiste box boxen aufbewahrung behaelter ulozny krabice"],
    [/pudl|karton/, "box boxes carton cardboard moving archive karton kartons umzugskarton archiv krabice stehovaci archiv"],
    [/mydlo/, "soap liquid seife fluessigseife mydlo tekute"],
    [/\bpian|nagrob|pomnik|renowacj/, "headstone gravestone grave tombstone foam cleaner grabstein grab friedhof schaum aktivschaum reiniger nahrobek nahrobky pomnik hrbitov pena"],
    [/naczyn/, "dish dishes washing up liquid spuelmittel geschirr nadobi saponat jar"],
    [/szyb|spryskiwacz/, "glass window cleaner screenwash washer windscreen glasreiniger fenster scheibenwaschanlage scheibe cistic skel okna ostrikovac"],
    [/tasm/, "tape masking insulating warning klebeband abdeckband isolierband warnband paska lepici"],
    [/sznur/, "twine string cord schnur kordel provazek"],
    [/budk|karmnik/, "birdhouse bird feeder nest box hedgehog bat vogelhaus nistkasten futterhaus igel fledermaus budka krmitko ptaci jezek netopyr"],
    [/druciak|zmywak|gabk/, "sponge scourer scrubber schwamm topfreiniger houbicka dratenka"],
    [/wino|prezent|wave/, "gift present wine geschenk geschenktuete wein darek darkova vino"]
  ];
  function searchText(g, v) {
    var t = fold([g.title, catById(g.cat).name, v.raw, v.opt || "",
      v.color && COLORS[v.color] ? COLORS[v.color].name + " " + (COLORS[v.color].seg || "") : ""].join(" "));
    SYN.forEach(function (s) { if (s[0].test(t)) t += " " + s[1]; });
    return t;
  }
  function fuzzyMatch(q, hay) {
    var h = fold(hay), words = h.split(/[^a-z0-9]+/).filter(Boolean);
    return fold(q).split(/\s+/).filter(Boolean).every(function (w) {
      w = w.replace(/^(\d+)l$/, "$1");
      if (h.indexOf(w) > -1) return true;
      if (w.length < 3) return true; // krótkie słowa (na, do, z) pomijamy
      if (/^\d+$/.test(w) || w.length < 4) return false;
      var max = w.length <= 6 ? 1 : 2;
      return words.some(function (x) {
        if (x.length < 3) return false;
        return dist(w, x) <= max || (x.length > w.length && dist(w, x.slice(0, w.length)) <= max);
      });
    });
  }
  // wyniki dla podpowiedzi w wyszukiwarce w nagłówku: najpierw trafienia dokładne
  function searchProducts(q, limit) {
    var exact = [], fuzzy = [], fq = fold(q);
    CATALOG.forEach(function (g) {
      for (var k = 0; k < g.variants.length; k++) {
        var t = searchText(g, g.variants[k]);
        if (fq.split(/\s+/).every(function (w) { return t.indexOf(w) > -1; })) { exact.push({ g: g, k: k }); return; }
        if (fuzzyMatch(q, t)) { fuzzy.push({ g: g, k: k }); return; }
      }
    });
    return exact.concat(fuzzy).slice(0, limit || 6);
  }

  /* ---------- Nagłówek i stopka ---------- */
  var curPage = document.body.dataset.page || "";
  function navLink(href, label, key) { return '<a href="' + href + '"' + (curPage === key ? ' aria-current="page"' : "") + ">" + label + "</a>"; }
  function renderHeader() {
    var el = document.getElementById("site-header"); if (!el) return;
    var megaCats = CATS.map(function (c) {
      var n = countIn(c.id);
      return '<a href="produkty.html#' + c.id + '">' + c.icon + "<span>" + c.name + "<small>" + (n ? n + " " + pl(n, "Produkt", "produkty", "Produkte") : "bald verfügbar") + "</small></span></a>";
    }).join("");
    el.outerHTML =
      '<div class="topbar"><div class="wrap"><span>IDEA HOME Produkte erhalten Sie auf <a href="' + MARKET.home + '" target="_blank" rel="noopener">' + MARKET.name + '</a></span><span class="tb-extra"><a href="dla-firm.html">Angebot für Unternehmen</a><a href="kontakt.html">Kontakt</a></span></div></div>' +
      '<header class="site-header"><div class="wrap headbar">' +
      '<a class="brand" href="index.html" aria-label="IDEA HOME – Startseite">' + LOGO + '<span class="brand-tag">Funktionalität<br>für jeden Tag</span></a>' +
      '<nav class="mainnav" id="mainnav" aria-label="Hauptmenü">' +
      '<div class="dd' + (curPage === "produkty" ? " current" : "") + '"><button type="button" aria-expanded="false">Produkte ' + ICON.chev + '</button><div class="mega">' + megaCats + '<a class="mega-all" href="produkty.html">Alle Produkte ansehen <span>→</span></a></div></div>' +
      '<div class="dd' + (curPage === "serie" ? " current" : "") + '"><button type="button" aria-expanded="false">Serien ' + ICON.chev + '</button><div class="mega narrow">' +
      '<a href="serie.html#idea-home"><span>IDEA HOME<small>Funktionalität für jeden Tag</small></span></a>' +
      '<a href="rakun/index.html"><span>RAKUN<small>Wirksam in jeder Situation</small></span></a>' +
      '<a href="ms-everyday.html"><span>MS. EVERYDAY<small>Sauberkeit für jeden Tag</small></span></a>' +
      '<a class="mega-all" href="serie.html">Alle Serien ansehen <span>→</span></a></div></div>' +
      navLink("kolekcje.html", "Kollektionen", "kolekcje") +
      navLink("o-marce.html", "Über uns", "o-marce") +
      navLink("inspiracje.html", "Inspiration", "inspiracje") +
      navLink("dla-firm.html", "Für Unternehmen", "dla-firm") +
      navLink("kontakt.html", "Kontakt", "kontakt") +
      '<a class="btn btn-primary mobile-cta" href="' + MARKET.home + '" target="_blank" rel="noopener">Online kaufen</a>' +
      "</nav>" +
      '<div class="head-actions">' + langSwitch() +
      '<button class="icon-btn" type="button" id="searchbtn" aria-label="Suchen" aria-expanded="false">' + ICON.search + "</button>" +
      '<a class="icon-btn" href="produkty.html#ulubione" aria-label="Favoriten">' + ICON.heart + '<span class="count" id="favcount"></span></a>' +
      '<a class="btn btn-primary" href="' + MARKET.home + '" target="_blank" rel="noopener">Online kaufen ' + ICON.bag.replace("<svg", '<svg width="16" height="16"') + "</a>" +
      '<button class="icon-btn navtoggle" type="button" id="navtoggle" aria-label="Menü öffnen" aria-expanded="false">' + ICON.menu + "</button>" +
      "</div></div>" +
      '<div class="search-panel" id="searchpanel" hidden><div class="wrap"><form action="produkty.html" id="searchform" role="search"><label class="visually-hidden" for="q-global">Produkte suchen</label><input id="q-global" name="q" type="search" placeholder="Was suchen Sie? z. B. Beutel 60 l, Box, Tasche"><button class="btn btn-dark" type="submit">Suchen</button></form>' +
      '<div class="suggest" id="suggest" hidden></div>' +
      '<div class="hints">Beliebt: <a class="chip" href="produkty.html#worki">Müllbeutel</a><a class="chip" href="produkty.html#flexistore">Flexistore</a><a class="chip" href="produkty.html#torby">Baumwolltaschen</a></div></div></div>' +
      "</header>";

    var nav = document.getElementById("mainnav"), tog = document.getElementById("navtoggle");
    tog.addEventListener("click", function () {
      var open = nav.classList.toggle("open");
      tog.setAttribute("aria-expanded", open); tog.innerHTML = open ? ICON.close : ICON.menu;
      document.body.style.overflow = open ? "hidden" : "";
    });
    nav.querySelectorAll(".dd > button").forEach(function (b) {
      b.addEventListener("click", function () {
        var dd = b.parentElement, open = !dd.classList.contains("open");
        nav.querySelectorAll(".dd").forEach(function (x) { x.classList.remove("open"); x.firstChild.setAttribute("aria-expanded", "false"); });
        dd.classList.toggle("open", open); b.setAttribute("aria-expanded", open);
      });
    });
    document.addEventListener("click", function (e) { if (!e.target.closest(".dd")) nav.querySelectorAll(".dd").forEach(function (x) { x.classList.remove("open"); }); });
    nav.querySelectorAll("a").forEach(function (a) { a.addEventListener("click", function () { nav.classList.remove("open"); document.body.style.overflow = ""; }); });

    var sb = document.getElementById("searchbtn"), sp = document.getElementById("searchpanel");
    sb.addEventListener("click", function () { sp.hidden = !sp.hidden; sb.setAttribute("aria-expanded", !sp.hidden); if (!sp.hidden) document.getElementById("q-global").focus(); });
    // podpowiedzi w trakcie pisania (odporne na literówki)
    var qg = document.getElementById("q-global"), sug = document.getElementById("suggest"), sugTimer;
    function showSuggest() {
      var q = qg.value.trim();
      if (q.length < 2) { sug.hidden = true; sug.innerHTML = ""; return; }
      var res = searchProducts(q, 6);
      sug.hidden = false;
      sug.innerHTML = res.length ? res.map(function (r, i) {
        var v = r.g.variants[r.k];
        return '<button type="button" class="sg-item" data-i="' + i + '"><img src="' + esc(v.img) + '" alt="" loading="lazy"><span><b>' + esc(r.g.title) + "</b><small>" + esc(catById(r.g.cat).name + (variantLabel(v) ? " · " + variantLabel(v) : "")) + "</small></span></button>";
      }).join("") + '<button type="submit" form="searchform" class="sg-all">Alle Ergebnisse →</button>'
        : '<p class="sg-none">Keine Produkte gefunden für „' + esc(q) + '“. Versuchen Sie ein anderes Wort, z. B. Beutel, Tasche, Box.</p>';
      sug.querySelectorAll(".sg-item").forEach(function (b) {
        b.addEventListener("click", function () { var r = res[+b.dataset.i]; openModal(r.g, r.k); });
      });
    }
    qg.addEventListener("input", function () { clearTimeout(sugTimer); sugTimer = setTimeout(showSuggest, 120); });
    document.getElementById("searchform").addEventListener("submit", function (e) {
      e.preventDefault();
      var q = document.getElementById("q-global").value.trim();
      try { sessionStorage.setItem("ih-q", q); } catch (err) {}
      // fraza w adresie (#szukaj-puudla): działa też, gdy katalog jest już otwarty z tym samym adresem
      var target = new URL(page("produkty.html") + "#szukaj" + (q ? "-" + encodeURIComponent(q.replace(/\s+/g, "-")) : ""), location.href).href;
      sug.hidden = true; sp.hidden = true; sb.setAttribute("aria-expanded", "false");
      if (target === location.href) window.dispatchEvent(new HashChangeEvent("hashchange"));
      else location.href = target;
    });
    sug.addEventListener("click", function (e) {
      if (e.target.closest(".sg-all")) { e.preventDefault(); document.getElementById("searchform").dispatchEvent(new Event("submit", { cancelable: true })); }
    });
    updateFavCount();
  }

  function renderFooter() {
    var el = document.getElementById("site-footer"); if (!el) return;
    el.outerHTML = '<footer class="site-footer"><div class="wrap"><div class="foot-grid">' +
      '<div class="fbrand">' + LOGO_WHITE + "<p>Funktionalität, Qualität und moderne Lösungen für Ihr Zuhause. Eine Marke von Leviatan aus Bielsko-Biała (Polen).</p>" +
      '<div class="socials"><a href="https://www.facebook.com/LeviatanPoligrafia" target="_blank" rel="noopener" aria-label="Facebook">' + ICON.fb + '</a><a href="https://www.instagram.com/leviatan_poligrafia/" target="_blank" rel="noopener" aria-label="Instagram">' + ICON.ig + '</a><a href="https://www.youtube.com/@LeviatanPoligrafia" target="_blank" rel="noopener" aria-label="YouTube">' + ICON.yt + '</a><a href="https://pl.pinterest.com/leviatanpoligrafia/" target="_blank" rel="noopener" aria-label="Pinterest">' + ICON.pin2 + '</a><a href="https://www.tiktok.com/@leviatanpoligrafia" target="_blank" rel="noopener" aria-label="TikTok">' + ICON.tt + "</a></div></div>" +
      "<div><h4>Produkte</h4><ul>" + CATS.slice(0, 8).map(function (c) { return '<li><a href="produkty.html#' + c.id + '">' + c.name + "</a></li>"; }).join("") + '<li><a href="produkty.html">Alle →</a></li></ul></div>' +
      '<div><h4>Serien</h4><ul><li><a href="serie.html#idea-home">IDEA HOME</a></li><li><a href="rakun/index.html">RAKUN</a></li><li><a href="ms-everyday.html">MS. EVERYDAY</a></li></ul><h4 style="margin-top:28px">Kollektionen</h4><ul><li><a href="kolekcje.html#flexistore">Flexistore</a></li><li><a href="kolekcje.html#torby">Taschen Valencia und Kopenhaga</a></li></ul></div>' +
      '<div><h4>Informationen</h4><ul><li><a href="o-marce.html">Über uns</a></li><li><a href="inspiracje.html">Inspiration und Tipps</a></li><li><a href="dla-firm.html">Für Unternehmen und Großhändler</a></li><li><a href="kontakt.html">Kontakt</a></li><li><a href="kontakt.html#faq">Häufige Fragen</a></li><li><a href="o-marce.html#marki-leviatan">Marken von Leviatan</a></li></ul></div>' +
      '<div class="shopbox"><h4>Online kaufen</h4><p>IDEA HOME Produkte finden Sie im Shop unseres Partners.</p><b>' + MARKET.name + '</b><a class="btn btn-outline btn-sm" href="' + MARKET.home + '" target="_blank" rel="noopener">Zum Shop</a></div>' +
      '</div><div class="foot-brands"><span class="fb-label">Leviatan und unsere Marken</span>' +
      '<a href="https://www.leviatan.pl/pl" target="_blank" rel="noopener" title="Leviatan – Hersteller"><img src="img/marki/leviatan.svg" alt="Leviatan" width="108" height="88"><small>Hersteller</small></a>' +
      '<a href="https://strona-marki-school.vercel.app" target="_blank" rel="noopener" title="S&#39;COOL – artykuły plastyczne i szkolne"><img src="img/marki/scool.png" alt="S&#39;COOL" width="448" height="228"><small>Bastelbedarf</small></a>' +
      '<a href="https://lifeup.cafe/" target="_blank" rel="noopener" title="LIFE UP – eigener Kaffee"><img src="img/marki/lifeup.png" alt="LIFE UP" width="336" height="440"><small>eigener Kaffee</small></a></div>' +
      '<div class="foot-bottom"><span>© ' + new Date().getFullYear() + ' IDEA HOME by Leviatan. Alle Rechte vorbehalten.</span><span><a href="polityka-prywatnosci.html">Datenschutz und Cookies</a> · <a href="regulamin.html">Nutzungsbedingungen</a> · Rudawka 88, 43-300 Bielsko-Biała, Polen</span></div></div></footer>';
  }

  /* ---------- Karuzele ---------- */
  function carousel(track, prev, next) {
    if (!track) return;
    var step = function () { var it = track.firstElementChild; return it ? it.getBoundingClientRect().width + 14 : 300; };
    if (prev) prev.addEventListener("click", function () { track.scrollBy({ left: -step(), behavior: "smooth" }); });
    if (next) next.addEventListener("click", function () { track.scrollBy({ left: step(), behavior: "smooth" }); });
  }

  // informacja o cookies (strona nie śledzi – wystarczy informacja, bez zgody)
  function cookieNote() {
    try { if (localStorage.getItem("ih-cookies")) return; } catch (e) {}
    var n = document.createElement("div"); n.className = "cookie-note"; n.setAttribute("role", "region"); n.setAttribute("aria-label", "Cookie-Hinweis");
    n.innerHTML = "<p>Diese Website verwendet keine Analyse- oder Werbe-Cookies. Der Browserspeicher dient nur zum Speichern Ihrer Favoriten. <a href=\"polityka-prywatnosci.html\">Datenschutzerklärung</a></p><button class=\"btn btn-dark btn-sm\" type=\"button\">OK</button>";
    n.querySelector("button").addEventListener("click", function () { try { localStorage.setItem("ih-cookies", "1"); } catch (e) {} n.remove(); });
    document.body.appendChild(n);
  }
  renderHeader();
  renderFooter();
  cookieNote();
  // wersje językowe: linki do polskiego sklepu w treści stron zamieniamy na sklep danego kraju
  function fixShopLinks(rootEl) {
    if (LANG === "pl") return;
    (rootEl || document).querySelectorAll('a[href*="dladomu.sklep.pl"]').forEach(function (a) {
      var h = a.getAttribute("href"), m = h.match(/\/product\/([^?#]+)/), url = MARKET.home;
      if (m) { CATALOG.some(function (g) { return g.variants.some(function (v) { if (v.id === m[1]) { url = buyUrl(g, v); return true; } }); }); }
      else if (/flexistore/i.test(h)) url = MARKET.search((MARKET_TERMS[LANG] || {}).flexistore || "Flexistore");
      else if (/pomnik|nagrob/i.test(h)) url = MARKET.search((MARKET_TERMS[LANG] || {}).nagrobki || "IDEA HOME");
      else if (/rakun/i.test(h)) url = MARKET.search("RAKUN");
      a.href = url;
      if (/dladomu/i.test(a.textContent)) a.textContent = MARKET.name;
    });
  }
  if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", function () { fixShopLinks(); }); else fixShopLinks();

  window.IH = { LANG: LANG, page: page, MARKET: MARKET, buyUrl: buyUrl, fixShopLinks: fixShopLinks, find: find, variantLabel: variantLabel, fuzzyMatch: fuzzyMatch, searchText: searchText, searchProducts: searchProducts, fold: fold, ICON: ICON, CATS: CATS, ROOMS: ROOMS, COLORS: COLORS, CATALOG: CATALOG, SHOP: SHOP, shopSearch: shopSearch, card: card, bindCards: bindCards, openModal: openModal, carousel: carousel, countIn: countIn, pl: pl, getFavs: getFavs, catById: catById, roomById: roomById, esc: esc, toast: toast };
})();
