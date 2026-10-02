/* IDEA HOME — wspólne elementy strony: nagłówek, stopka, katalog produktów, karty, podgląd. */
(function () {
  var SHOP = "https://www.dladomu.sklep.pl";
  var shopSearch = function (q) { return SHOP + "/search?q=" + encodeURIComponent(q); };

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
    yt: '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M21.6 7.2a2.5 2.5 0 00-1.8-1.8C18.3 5 12 5 12 5s-6.3 0-7.8.4A2.5 2.5 0 002.4 7.2 26 26 0 002 12a26 26 0 00.4 4.8 2.5 2.5 0 001.8 1.8c1.5.4 7.8.4 7.8.4s6.3 0 7.8-.4a2.5 2.5 0 001.8-1.8A26 26 0 0022 12a26 26 0 00-.4-4.8zM10 15V9l5.2 3z"/></svg>'
  };

  // oficjalne logo (IdeaHome_outline_b&w.png) w wersji czarnej i białej z przezroczystym tłem
  var LOGO = '<img class="logo" src="img/logo-ideahome.png" alt="IDEA HOME by Leviatan" width="600" height="532">';
  var LOGO_WHITE = '<img class="logo" src="img/logo-ideahome-white.png" alt="IDEA HOME by Leviatan" width="600" height="532">';

  /* ---------- Kategorie i pomieszczenia ---------- */
  ICON.prezenty = '<svg viewBox="0 0 48 48" ' + P + '><rect x="8" y="18" width="32" height="24" rx="1"/><path d="M6 12h36v6H6zM24 12v30"/><path d="M24 12c-3-6-11-6-10-1 1 3 6 1 10 1zM24 12c3-6 11-6 10-1-1 3-6 1-10 1z"/></svg>';
  ICON.ogrod = '<svg viewBox="0 0 24 24" ' + P + '><path d="M12 21v-7"/><path d="M12 14c-4 0-6-3-6-6 3 0 6 2 6 6zM12 12c0-4 3-7 7-7 0 4-3 7-7 7z"/><path d="M5 21h14"/></svg>';

  var CATS = [
    { id: "worki", name: "Worki na odpady", short: "Worki\nna odpady", desc: "LDPE i HDPE, od 20 do 240 l, w kolorach segregacji" },
    { id: "flexistore", name: "Flexistore", short: "Flexistore", desc: "Pojemniki z pokrywą i wkłady z przegródkami" },
    { id: "techbox", name: "Techbox", short: "Techbox", desc: "Wytrzymałe pojemniki HD i wkłady" },
    { id: "dom", name: "Pudła i przechowywanie", short: "Pudła\ni przechowywanie", desc: "Pudła Loft, kartony do przeprowadzek" },
    { id: "torby", name: "Torby i plecaki", short: "Torby\ni plecaki", desc: "Torby i plecaki z bawełny i sztruksu" },
    { id: "prezenty", name: "Opakowania prezentowe", short: "Opakowania\nprezentowe", desc: "Torby i pudełka Wave Kraft" },
    { id: "sprzatanie", name: "Kuchnia i sprzątanie", short: "Kuchnia\ni sprzątanie", desc: "Ściereczki, zmywaki, druciaki" },
    { id: "chemia", name: "Chemia gospodarcza", short: "Chemia\ngospodarcza", desc: "Płyny RAKUN i MS. EVERYDAY w ekonomicznych opakowaniach" },
    { id: "mydla", name: "Mydła i pielęgnacja", short: "Mydła\ni pielęgnacja", desc: "Mydła w płynie RAKUN, pumeksy" },
    { id: "warsztat", name: "Taśmy i sznurki", short: "Taśmy\ni sznurki", desc: "Taśmy izolacyjne i maskujące, sznurki" },
    { id: "budki", name: "Budki i karmniki", short: "Budki\ni karmniki", desc: "Dla ptaków, jeży i nietoperzy" },
    { id: "nagrobki", name: "Profesjonalne czyszczenie i renowacja nagrobków", short: "Czyszczenie\ni renowacja nagrobków", desc: "Zestawy do odnawiania napisów na pomnikach" },
    { id: "pianka", name: "Aktywna pianka", short: "Aktywna\npianka", desc: "Czyszczenie bez szorowania" }
  ];
  ICON.dom = ICON.organizery;
  ICON.nagrobki = '<svg viewBox="0 0 48 48" ' + P + '><path d="M14 40V18a10 10 0 0120 0v22"/><path d="M8 40h32v4H8z"/><path d="M24 17v12M19 22h10"/></svg>';
  CATS.forEach(function (c) { c.icon = ICON[c.id]; });

  var ROOMS = [
    { id: "salon", name: "Salon", img: "img/foto/flexistore-dsc05557.jpg" },
    { id: "kuchnia", name: "Kuchnia", img: "img/foto/baner-kuchnia.jpg" },
    { id: "garderoba", name: "Garderoba", img: "img/foto/baner-111062-7.jpg" },
    { id: "biuro", name: "Biuro i archiwum", img: "img/foto/baner-pudla-new.jpg" },
    { id: "garaz", name: "Garaż i warsztat", img: "img/foto/baner-garaz-i-warsztat.jpg" },
    { id: "lazienka", name: "Łazienka", img: "img/foto/baner-lazienka.jpg" },
    { id: "ogrod", name: "Ogród i taras", img: "img/foto/baner-ogrod-i-taras.jpg" },
    { id: "wdrodze", name: "Na co dzień", img: "img/foto/torba-valencia-img-0789.jpg" }
  ];
  ROOMS.forEach(function (r) { r.icon = ICON[r.id]; });

  /* ---------- Kolory wariantów + segregacja ---------- */
  var COLORS = {
    "CZARNY": { name: "czarny", hex: "#232322", seg: "Zmieszane" },
    "BRĄZOWY": { name: "brązowy", hex: "#7A5433", seg: "Bio" },
    "ZIELONY": { name: "zielony", hex: "#5E9E48", seg: "Szkło" },
    "ŻÓŁTY": { name: "żółty", hex: "#EDC12E", seg: "Metale i tworzywa sztuczne" },
    "NIEBIESKI": { name: "niebieski", hex: "#2F63AE", seg: "Papier" },
    "CZERWONY": { name: "czerwony", hex: "#C3362B" },
    "BIAŁY": { name: "biały", hex: "#F6F5F1" },
    "SZARY": { name: "szary", hex: "#9A9A96" },
    "DENIM": { name: "denim", hex: "#7F939D" },
    "NEUTRAL": { name: "neutral", hex: "#D8D2C6" },
    "NATURALNY": { name: "naturalny", hex: "#EFE5CF" },
    "LEMON": { name: "lemon", hex: "#F1DE6E" },
    "BŁĘKITNY": { name: "błękitny", hex: "#8DB4D6" },
    "BURSZTYNOWY": { name: "bursztynowy", hex: "#C98A3B" },
    "OLIWKOWY": { name: "oliwkowy", hex: "#7B7F47" },
    "SREBRNY": { name: "srebrny", hex: "linear-gradient(135deg,#E4E5E7,#9EA1A6)" },
    "ZŁOTY": { name: "złoty", hex: "linear-gradient(135deg,#F0D78C,#B8902F)" },
    "MIX": { name: "mix kolorów", hex: "conic-gradient(#C3362B 0 25%,#2F63AE 0 50%,#5E9E48 0 75%,#EDC12E 0)" },
    "ŻÓŁTO-CZARNY": { name: "żółto-czarny", hex: "linear-gradient(135deg,#EDC12E 50%,#232322 50%)" }
  };
  // Odmiany słów w nazwach sklepu (CZARNA, CZERWONE, BIAŁYCH...) → klucz koloru
  var COLOR_WORDS = [
    [/ŻÓŁTO CZARN\S*/, "ŻÓŁTO-CZARNY"], [/MIX KOLOR\S*/, "MIX"], [/\bCZARN\S*/, "CZARNY"], [/BRĄZOW\S*/, "BRĄZOWY"],
    [/ZIELON\S*/, "ZIELONY"], [/ŻÓŁT\S*/, "ŻÓŁTY"], [/NIEBIESK\S*/, "NIEBIESKI"], [/CZERWON\S*/, "CZERWONY"],
    [/BIAŁ\S*/, "BIAŁY"], [/\bSZAR[AYE]\b/, "SZARY"], [/\bDENIM\b/, "DENIM"], [/\bNEUTRAL\b/, "NEUTRAL"],
    [/NATURALN\S*/, "NATURALNY"], [/\bLEMON\b(?! IH RAKUN)/, "LEMON"], [/BŁĘKITN\S*/, "BŁĘKITNY"], [/BURSZTYN\S*/, "BURSZTYNOWY"],
    [/OLIWKOW\S*/, "OLIWKOWY"], [/SREBRN\S*/, "SREBRNY"], [/ZŁOT[YAE]CH|\bZŁOT[YAE]\b/, "ZŁOTY"]
  ];
  var COLOR_ORDER = ["CZARNY", "BRĄZOWY", "ŻÓŁTY", "NIEBIESKI", "ZIELONY", "CZERWONY", "BIAŁY", "SZARY", "NATURALNY", "NEUTRAL", "DENIM", "LEMON", "BŁĘKITNY", "BURSZTYNOWY", "OLIWKOWY", "SREBRNY", "ZŁOTY", "MIX"];

  /* Nazwy własne, które zostają wielką literą w tytułach */
  var PROPER = { "flexistore": "Flexistore", "techbox": "Techbox", "hd": "HD", "ldpe": "LDPE", "hdpe": "HDPE", "rakun": "RAKUN", "kopenhaga": "Kopenhaga",
    "manhattan": "Manhattan", "loft": "Loft", "wave": "Wave", "kraft": "Kraft", "click&go": "Click&Go", "diy": "DIY", "apus": "Apus", "paridae": "Paridae",
    "erina": "Erina", "chiroptera": "Chiroptera", "maxi": "Maxi", "midi": "Midi", "mini": "Mini", "a4": "A4", "idea": "Idea", "roll": "Roll",
    "lemon": "Lemon", "mint": "Mint", "flower": "Flower", "bloom": "Bloom", "forest": "Forest", "walk": "Walk", "milk": "Milk", "honey": "Honey",
    "care": "Care", "ocean": "Ocean", "dive": "Dive", "tropic": "Tropic", "holiday": "Holiday", "12pack": "12 szt.", "6pack": "6 szt." };
  function prettify(s) {
    var t = s.toLowerCase().replace(/\s+/g, " ").trim()
      .replace(/(\d+(?:[.,]\d+)?)l\b/g, "$1 l").replace(/(\d+)mm\b/g, "$1 mm").replace(/(\d+)cm\b/g, "$1 cm").replace(/(\d+)g\b/g, "$1 g")
      .replace(/(\d+)m\b/g, "$1 m").replace(/(\d)\.(\d)/g, "$1,$2").replace(/ x /g, " × ")
      .replace(/(\d+)x(\d+)(?:x(\d+))?/g, function (m, a, b, c) { return a + " × " + b + (c ? " × " + c : ""); });
    t = t.split(" ").map(function (w) { return PROPER[w] || w; }).join(" ").replace(/ Kraft (s|m|l)$/, function (m, a) { return " Kraft " + a.toUpperCase(); });
    return t.charAt(0).toUpperCase() + t.slice(1);
  }

  function catOf(up) {
    if (/^WORKI/.test(up)) return "worki";
    if (/FLEXISTORE/.test(up)) return "flexistore";
    if (/TECHBOX/.test(up)) return "techbox";
    if (/^TORBA PREZENTOWA|PUDEŁKO NA WINO/.test(up)) return "prezenty";
    if (/^TORBA|^PLECAK/.test(up)) return "torby";
    if (/PUDŁO/.test(up)) return "dom";
    if (/BUDKA|KARMNIK/.test(up)) return "budki";
    if (/MYDŁO|PUMEKS/.test(up)) return "mydla";
    if (/PŁYN/.test(up)) return "chemia";
    if (/DRUCIAK|ZMYWAK|GĄBKA|ŚCIERECZK|ROLKA DO UBRAŃ/.test(up)) return "sprzatanie";
    if (/RENOWACJI/.test(up)) return "nagrobki";
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
        if (/HDPE/.test(up)) return "Cienkie, szeleszczące worki HDPE do małych koszy w łazience, biurze i sypialni. Pojemność " + cap + ".";
        if (/EKSTRA/.test(up)) return "Najgrubsza folia w ofercie: na gruz ogrodowy, liście, gałęzie i ciężkie odpady. Pojemność " + cap + ".";
        if (/TAŚM/.test(up)) return "Worki z taśmą ściągającą: zawiązujesz je jednym ruchem i wynosisz jak torbę. Folia LDPE, pojemność " + cap + ".";
        if (/SEGREGACJI/.test(up)) return "Komplet kolorów do segregacji w małym formacie, idealny pod domowe kosze sortujące. Pojemność " + cap + ".";
        if (/MOCNY/.test(up)) return "Elastyczna, grubsza folia LDPE, która nie pęka przy upychaniu. Kolory zgodne z segregacją odpadów. Pojemność " + cap + ".";
        return "Klasyczne worki z folii LDPE na codzienne odpady. Kolory zgodne z segregacją. Pojemność " + cap + ".";
      case "flexistore":
        if (/INSERT/.test(up)) return "Wkład z przegródkami do pojemnika Flexistore. Dzieli wnętrze na sekcje, więc drobiazgi się nie mieszają.";
        if (/MIX/.test(up)) return "Cztery pojemniki z pokrywami w jednym komplecie. Uchwyty w ściankach, pokrywa z otworem, pasują do siebie rozmiarami i łatwo je piętrzyć.";
        return "Zestaw pojemników Flexistore z pokrywami o pojemności " + cap + ". Matowa powierzchnia, uchwyty w ściankach, stabilne piętrowanie.";
      case "techbox": return /INSERT/.test(up) ? "Wkład z przegródkami do pojemnika Techbox HD. Porządek w narzędziach, kablach i drobnych częściach." : "Wytrzymałe pojemniki Techbox HD do garażu, piwnicy i warsztatu, z wkładem na drobiazgi.";
      case "dom": return /PRZEPROWADZ/.test(up) ? "Wzmocnione kartony do przeprowadzek, które wytrzymują ciężkie książki i naczynia." : "Tekturowe pudła Loft z polem do opisu. Do archiwizacji dokumentów, zdjęć i rzeczy sezonowych.";
      case "torby":
        if (/PLECAK/.test(up)) return "Bawełniany plecak-worek ze sznurkiem. Lekki i pakowny, dobry na siłownię i wycieczkę.";
        if (/MANHATTAN/.test(up)) return "Sztruksowa torba Manhattan na co dzień: miękka, pojemna i w modnych kolorach.";
        return "Bawełniana torba z długimi uszami, bez nadruku. Na zakupy, na co dzień i w podróż.";
      case "prezenty": return "Opakowania z kolekcji Wave Kraft z naturalnego papieru. Eleganckie, proste i gotowe do zapakowania prezentu.";
      case "sprzatanie":
        if (/MIKROFIBR/.test(up)) return "Ściereczki z mikrofibry zbierają kurz i tłuszcz bez detergentu. Różne kolory pomagają oddzielić kuchnię od łazienki.";
        if (/ROLL/.test(up)) return "Ściereczki w rolce – odrywasz tyle, ile potrzebujesz. Do blatu, naczyń i szybkiego sprzątania.";
        if (/ROLKA DO UBRAŃ/.test(up)) return "Rolka do ubrań z zapasem wkładów. Zbiera sierść, kurz i włosy z ubrań i tapicerki.";
        if (/GĄBKA/.test(up)) return "Gąbka melaminowa, która usuwa ślady i zabrudzenia samą wodą.";
        return "Akcesoria do zmywania i szorowania garnków, patelni i trudnych zabrudzeń.";
      case "chemia": return /SPRYSKIWACZ/.test(up) ? "Letni płyn do spryskiwaczy RAKUN usuwa owady i smugi z szyby. Kanister 5 l." : /SZYB/.test(up) ? "Płyn RAKUN do mycia szyb i luster bez smug. Kanister 5 l." : "Płyn do mycia naczyń RAKUN, wydajny i przyjemny w zapachu. Ekonomiczny kanister 5 l.";
      case "mydla": return /PUMEKS/.test(up) ? "Pumeks kosmetyczny do pielęgnacji stóp i dłoni." : "Mydło w płynie RAKUN w kanistrze 5 l do uzupełniania dozowników w domu i w firmie.";
      case "warsztat":
        if (/SZNUREK/.test(up)) return "Naturalny sznurek do pakowania, ogrodu, kuchni i rękodzieła.";
        return "Taśmy do pakowania, malowania i prac elektrycznych w praktycznych zestawach.";
      case "budki": return "Drewniana budka lub karmnik IDEA HOME. Daje schronienie i pożywienie zwierzętom w ogrodzie przez cały rok.";
      case "nagrobki": return "Zestaw do odnawiania liter na nagrobkach i tablicach. Przywraca czytelność i kolor napisów.";
    }
    return "";
  }

  /* Produkty sprzedawane na Amazon.pl jako seria MS. EVERYDAY (w dladomu.sklep.pl mają w nazwie RAKUN) */
  var AMAZON_MS = "https://www.amazon.pl/stores/page/916542A8-6F93-43D6-B5FC-639158F0193C/search?terms=MS.EVERYDAY";
  var SERIES_OVERRIDE = {
    "plyn-do-szyb-ih-rakun-5l": { series: "MS. EVERYDAY", amazon: AMAZON_MS, title: "Płyn do szyb MS. EVERYDAY 5 l",
      desc: "Płyn do mycia szyb, luster i przeszklonych powierzchni. Zostawia je czyste i bez smug. Ekonomiczny kanister 5 l." },
    "plyn-do-spryskiwaczy-letni-ih-rakun-5l": { series: "MS. EVERYDAY", amazon: AMAZON_MS, title: "Letni płyn do spryskiwaczy MS. EVERYDAY 5 l",
      desc: "Gotowy do użycia letni płyn do spryskiwaczy. Usuwa owady, kurz i smugi z szyby samochodu. Kanister 5 l." }
  };

  function parse(raw) {
    var name = String(raw.name).replace(/’/g, "'").replace(/\s+/g, " ").trim();
    var up = name.toUpperCase();
    var color = null, colorRe = null;
    for (var i = 0; i < COLOR_WORDS.length; i++) { if (COLOR_WORDS[i][0].test(up)) { color = COLOR_WORDS[i][1]; colorRe = COLOR_WORDS[i][0]; break; } }
    var pack = (up.match(/(\d+)\s*SZT/) || [])[1] || (up.match(/(\d+)PACK/) || [])[1];
    var cap = (up.match(/(\d+)\s*L\b/) || [])[1];
    var length = /SZNUREK/.test(up) ? (up.match(/(\d+)M\b/) || [])[1] : null;
    var cat = catOf(up);

    // Klucz rodziny = nazwa bez IH, koloru, liczby sztuk (i długości sznurka)
    var key = up.replace(/\bIH\b/g, " ");
    if (colorRe) key = key.replace(colorRe, " ");
    key = key.replace(/\d+\s*SZT\.?/g, " ").replace(/\d+PACK/g, " ").replace(/\bA'\d+/g, " ");
    if (length) key = key.replace(/\d+M\b/g, " ").replace(/[\d.]+KG\b/g, " ");
    if (/RENOWACJI/.test(up)) key = "ZESTAW DO RENOWACJI NAPISÓW NA POMNIKACH";
    key = key.replace(/\s+/g, " ").trim().replace(/\sX$/, "");

    var title;
    if (cat === "worki") {
      var type = /EKSTRA MOCNY/.test(up) ? " ekstra mocne" : /MOCNY/.test(up) ? " mocne" : /TAŚM/.test(up) ? " z taśmą" : /SEGREGACJI/.test(up) ? " do segregacji" : "";
      title = "Worki na odpady " + (/HDPE/.test(up) ? "HDPE" : "LDPE") + type + " " + cap + " l";
    } else if (/RENOWACJI/.test(up)) {
      title = "Zestaw do renowacji napisów na pomnikach";
    } else {
      title = prettify(key.replace(/\s*\.$/, ""));
    }
    var p = { id: raw.id, img: raw.img, url: raw.url || null, raw: name, color: color, pack: pack ? +pack : null, cap: cap ? +cap : null,
      length: length ? +length : null, cat: cat, family: key, title: title, rooms: CAT_ROOMS[cat] || [],
      badge: SERIES_OVERRIDE[raw.id] ? SERIES_OVERRIDE[raw.id].series : /RAKUN/.test(up) ? "RAKUN" : null };
    var so = SERIES_OVERRIDE[raw.id];
    if (so) { p.title = so.title; p.amazon = so.amazon; }
    if (cat === "worki") p.rooms = p.cap >= 120 ? ["garaz", "ogrod", "biuro"] : p.cap <= 20 ? ["lazienka", "biuro"] : ["kuchnia", "lazienka", "biuro"];
    // galeria i krótki opis ze sklepu; gdy sklep nie ma opisu, używamy naszego
    p.imgs = raw.imgs && raw.imgs.length ? raw.imgs : [raw.img];
    p.desc = (so && so.desc) || raw.desc || describe(p, up);
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
    if (v.pack) parts.push(v.pack + " szt.");
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
      if (!g.variants.some(function (x) { return x.id === v.id || (variantLabel(x) === variantLabel(v) && x.url && v.url); })) g.variants.push(v);
    });
    list.forEach(function (g) {
      g.variants.sort(function (a, b) { return ((a.url ? 0 : 1) - (b.url ? 0 : 1)) || (COLOR_ORDER.indexOf(a.color) - COLOR_ORDER.indexOf(b.color)) || ((a.length || 0) - (b.length || 0)) || ((a.pack || 0) - (b.pack || 0)); });
      var colors = g.variants.map(function (v) { return v.color; });
      // kropki kolorów tylko gdy każdy wariant ma inny kolor; w innym wypadku przyciski z opisem
      g.dots = g.variants.length > 1 && colors.every(function (c, i) { return c && COLORS[c] && colors.indexOf(c) === i; });
      g.query = g.title + " idea home";
      g.desc = g.variants[0].desc;
    });
    list.sort(function (a, b) {
      var ca = CATS.findIndex(function (c) { return c.id === a.cat; }), cb = CATS.findIndex(function (c) { return c.id === b.cat; });
      return ca - cb || (a.cap || 0) - (b.cap || 0) || a.title.localeCompare(b.title, "pl");
    });
    return list;
  }
  var CATALOG = buildCatalog();
  function catById(id) { return CATS.find(function (c) { return c.id === id; }); }
  function roomById(id) { return ROOMS.find(function (r) { return r.id === id; }); }
  function countIn(catId) { return CATALOG.filter(function (g) { return g.cat === catId; }).length; }
  function pl(n, one, few, many) { var d = n % 10, t = n % 100; return n === 1 ? one : (d >= 2 && d <= 4 && (t < 12 || t > 14)) ? few : many; }
  // wyszukanie rodziny po fragmencie id (do list na stronie głównej)
  function find(part) { return CATALOG.find(function (g) { return g.id.indexOf(part) > -1; }); }

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
    if (g.cat === "worki" && v.color && COLORS[v.color].seg) s += (s ? " · " : "") + COLORS[v.color].seg;
    return s;
  }
  function buyUrl(g, v) { return v.url || shopSearch(g.query); }
  // na przycisku tylko to, czym warianty się różnią (np. "5 szt." zamiast "naturalny · 5 szt.")
  function chipLabel(g, v) {
    var differs = function (k) { return g.variants.some(function (x) { return x[k] !== g.variants[0][k]; }); };
    var parts = [];
    if (differs("color") && v.color && COLORS[v.color]) parts.push(COLORS[v.color].name);
    if (differs("length") && v.length) parts.push(v.length + " m");
    if (differs("pack") && v.pack) parts.push(v.pack + " szt.");
    return parts.join(" · ");
  }
  function variantPicker(g, sel) {
    if (g.variants.length < 2) return "";
    return '<div class="' + (g.dots ? "swatches" : "vchips") + '" role="group" aria-label="Warianty">' + g.variants.map(function (x, i) {
      var label = chipLabel(g, x) || variantLabel(x) || x.raw;
      if (g.dots) return '<button class="sw" type="button" data-v="' + i + '" aria-pressed="' + (i === sel) + '" title="' + esc(label) + '" aria-label="' + esc(label) + '" style="background:' + COLORS[x.color].hex + '"></button>';
      return '<button class="vchip" type="button" data-v="' + i + '" aria-pressed="' + (i === sel) + '">' + esc(label) + "</button>";
    }).join("") + "</div>";
  }
  function card(g, opts) {
    opts = opts || {};
    var v = g.variants[0], cat = catById(g.cat), fav = getFavs().indexOf(g.id) > -1;
    return '<article class="pcard" data-id="' + g.id + '">' +
      (g.badge ? '<span class="badge">' + g.badge + "</span>" : "") +
      '<button class="fav" type="button" aria-pressed="' + fav + '" aria-label="Dodaj do ulubionych">' + ICON.heart + "</button>" +
      '<button class="thumb" type="button" aria-label="Szczegóły: ' + esc(g.title) + '"><img class="main" loading="lazy" src="' + v.img + '" alt="' + esc(g.title) + '">' +
      '<img class="alt" loading="lazy" src="' + (v.imgs[1] || v.img) + '" alt=""' + (v.imgs[1] ? "" : " hidden") + '>' +
      (v.imgs.length > 1 ? '<span class="photos">' + v.imgs.length + " " + pl(v.imgs.length, "zdjęcie", "zdjęcia", "zdjęć") + "</span>" : "") + "</button>" +
      '<div class="body">' +
      (opts.hideCat ? "" : '<span class="pcat">' + cat.name + "</span>") +
      "<h3>" + esc(g.title) + "</h3>" +
      '<p class="pdesc">' + esc(v.desc || "") + "</p>" +
      '<p class="spec">' + esc(variantSpec(g, v)) + "</p>" +
      variantPicker(g, 0) +
      '<div class="foot"><a class="link-arrow buy" href="' + buyUrl(g, v) + '" target="_blank" rel="noopener">Kup online</a>' +
      (v.amazon ? '<a class="link-arrow amz" href="' + v.amazon + '" target="_blank" rel="noopener">Amazon.pl</a>' : "") + "</div>" +
      "</div></article>";
  }
  function selectVariant(root, g, btn) {
    var v = g.variants[+btn.dataset.v];
    var main = root.querySelector(".thumb img.main, .mimg img"); if (main) main.src = v.img;
    var alt = root.querySelector(".thumb img.alt");
    if (alt) { alt.src = v.imgs[1] || v.img; alt.hidden = !v.imgs[1]; }
    var photos = root.querySelector(".thumb .photos"); if (photos) photos.textContent = v.imgs.length + " " + pl(v.imgs.length, "zdjęcie", "zdjęcia", "zdjęć");
    var desc = root.querySelector(".pdesc, .mdesc"); if (desc) desc.textContent = v.desc || "";
    var strip = root.querySelector(".mthumbs"); if (strip) strip.outerHTML = thumbStrip(v);
    root.querySelector(".spec").textContent = variantSpec(g, v);
    var buy = root.querySelector(".buy"); if (buy) buy.href = buyUrl(g, v);
    root.querySelectorAll(".sw, .vchip").forEach(function (b) { b.setAttribute("aria-pressed", b === btn); });
  }
  function bindCards(root) {
    root.addEventListener("click", function (e) {
      var c = e.target.closest(".pcard"); if (!c) return;
      var g = CATALOG.find(function (x) { return x.id === c.dataset.id; });
      var vb = e.target.closest(".sw, .vchip");
      if (vb) return selectVariant(c, g, vb);
      if (e.target.closest(".fav")) {
        var favs = getFavs(), i = favs.indexOf(g.id), btn = e.target.closest(".fav");
        if (i > -1) { favs.splice(i, 1); toast("Usunięto z ulubionych"); } else { favs.push(g.id); toast("Dodano do ulubionych"); }
        btn.setAttribute("aria-pressed", i === -1); setFavs(favs);
        return;
      }
      if (e.target.closest(".thumb")) {
        var cur = c.querySelector('.sw[aria-pressed="true"], .vchip[aria-pressed="true"]');
        openModal(g, cur ? +cur.dataset.v : 0);
      }
    });
  }

  /* ---------- Podgląd produktu ---------- */
  function thumbStrip(v) {
    if (v.imgs.length < 2) return '<div class="mthumbs" hidden></div>';
    return '<div class="mthumbs" role="group" aria-label="Zdjęcia produktu">' + v.imgs.map(function (src, i) {
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
    var specs = [["Kategoria", cat.name]];
    if (g.badge) specs.push(["Seria", g.badge]);
    if (g.cap) specs.push(["Pojemność", g.cap + " l"]);
    if (g.cat === "worki") specs.push(["Materiał", /HDPE/.test(g.title) ? "folia HDPE" : "folia LDPE"]);
    if (packs.length) specs.push(["Opakowanie", packs.join(" / ") + " szt."]);
    if (colors.length) specs.push([colors.length > 1 ? "Kolory" : "Kolor", colors.join(", ")]);
    if (rooms.length) specs.push(["Gdzie się sprawdzi", rooms.join(", ")]);
    specs.push(["Warianty", String(g.variants.length)]);
    m.innerHTML = '<div class="modal-box">' +
      '<button class="icon-btn modal-close" type="button" aria-label="Zamknij">' + ICON.close + "</button>" +
      '<div class="mgallery"><div class="mimg"><img src="' + v.img + '" alt="' + esc(g.title) + '"></div>' + thumbStrip(v) + "</div>" +
      '<div class="mbody"><span class="label">' + cat.name + "</span><h2>" + esc(g.title) + '</h2><p class="mdesc">' + esc(v.desc || "") + "</p>" +
      variantPicker(g, vi) +
      '<p class="spec muted">' + esc(variantSpec(g, v)) + "</p>" +
      '<dl class="specs">' + specs.map(function (s) { return "<dt>" + s[0] + "</dt><dd>" + esc(s[1]) + "</dd>"; }).join("") + "</dl>" +
      '<div class="modal-actions"><a class="btn btn-primary buy" href="' + buyUrl(g, v) + '" target="_blank" rel="noopener">Kup w sklepie ' + ICON.bag.replace("<svg", '<svg width="16" height="16"') + '</a>' + (v.amazon ? '<a class="btn btn-outline" href="' + v.amazon + '" target="_blank" rel="noopener">Kup na Amazon.pl</a>' : "") + '<a class="btn btn-outline" href="kontakt.html">Zapytaj o hurt</a></div>' +
      "</div></div>";
    function close() { m.remove(); document.removeEventListener("keydown", onKey); if (last) last.focus(); }
    function onKey(e) { if (e.key === "Escape") close(); }
    m.addEventListener("click", function (e) {
      if (e.target === m || e.target.closest(".modal-close")) return close();
      var vb = e.target.closest(".sw, .vchip");
      if (vb) { vi = +vb.dataset.v; return selectVariant(m, g, vb); }
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

  /* ---------- Nagłówek i stopka ---------- */
  var page = document.body.dataset.page || "";
  function navLink(href, label, key) { return '<a href="' + href + '"' + (page === key ? ' aria-current="page"' : "") + ">" + label + "</a>"; }
  function renderHeader() {
    var el = document.getElementById("site-header"); if (!el) return;
    var megaCats = CATS.map(function (c) {
      var n = countIn(c.id);
      return '<a href="produkty.html#' + c.id + '">' + c.icon + "<span>" + c.name + "<small>" + (n ? n + " " + pl(n, "produkt", "produkty", "produktów") : "wkrótce") + "</small></span></a>";
    }).join("");
    el.outerHTML =
      '<div class="topbar"><div class="wrap"><span>Produkty IDEA HOME kupisz w sklepie <a href="' + SHOP + '" target="_blank" rel="noopener">dladomu.sklep.pl</a></span><span class="tb-extra"><a href="dla-firm.html">Oferta dla firm</a><a href="kontakt.html">Kontakt</a></span></div></div>' +
      '<header class="site-header"><div class="wrap headbar">' +
      '<a class="brand" href="index.html" aria-label="IDEA HOME – strona główna">' + LOGO + '<span class="brand-tag">Funkcjonalność<br>na co dzień</span></a>' +
      '<nav class="mainnav" id="mainnav" aria-label="Menu główne">' +
      '<div class="dd' + (page === "produkty" ? " current" : "") + '"><button type="button" aria-expanded="false">Produkty ' + ICON.chev + '</button><div class="mega">' + megaCats + '<a class="mega-all" href="produkty.html">Zobacz wszystkie produkty <span>→</span></a></div></div>' +
      '<div class="dd' + (page === "serie" ? " current" : "") + '"><button type="button" aria-expanded="false">Serie ' + ICON.chev + '</button><div class="mega narrow">' +
      '<a href="serie.html#idea-home"><span>IDEA HOME<small>Funkcjonalność na co dzień</small></span></a>' +
      '<a href="serie.html#rakun"><span>RAKUN<small>Skuteczność w każdej sytuacji</small></span></a>' +
      '<a href="serie.html#ms-everyday"><span>MS. EVERYDAY<small>Codzienna higiena i świeżość</small></span></a></div></div>' +
      navLink("kolekcje.html", "Kolekcje", "kolekcje") +
      navLink("o-marce.html", "O marce", "o-marce") +
      navLink("inspiracje.html", "Inspiracje", "inspiracje") +
      navLink("dla-firm.html", "Dla firm", "dla-firm") +
      navLink("kontakt.html", "Kontakt", "kontakt") +
      '<a class="btn btn-primary mobile-cta" href="' + SHOP + '" target="_blank" rel="noopener">Kup online</a>' +
      "</nav>" +
      '<div class="head-actions">' +
      '<button class="icon-btn" type="button" id="searchbtn" aria-label="Szukaj" aria-expanded="false">' + ICON.search + "</button>" +
      '<a class="icon-btn" href="produkty.html#ulubione" aria-label="Ulubione">' + ICON.heart + '<span class="count" id="favcount"></span></a>' +
      '<a class="btn btn-primary" href="' + SHOP + '" target="_blank" rel="noopener">Kup online ' + ICON.bag.replace("<svg", '<svg width="16" height="16"') + "</a>" +
      '<button class="icon-btn navtoggle" type="button" id="navtoggle" aria-label="Otwórz menu" aria-expanded="false">' + ICON.menu + "</button>" +
      "</div></div>" +
      '<div class="search-panel" id="searchpanel" hidden><div class="wrap"><form action="produkty.html" id="searchform" role="search"><label class="visually-hidden" for="q-global">Szukaj produktów</label><input id="q-global" name="q" type="search" placeholder="Czego szukasz? np. worki 60 l, pojemnik, torba"><button class="btn btn-dark" type="submit">Szukaj</button></form>' +
      '<div class="hints">Popularne: <a class="chip" href="produkty.html#worki">Worki na odpady</a><a class="chip" href="produkty.html#flexistore">Flexistore</a><a class="chip" href="produkty.html#torby">Torby bawełniane</a></div></div></div>' +
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
    document.getElementById("searchform").addEventListener("submit", function (e) {
      e.preventDefault();
      var q = document.getElementById("q-global").value.trim();
      try { sessionStorage.setItem("ih-q", q); } catch (err) {}
      location.href = "produkty.html#szukaj";
    });
    updateFavCount();
  }

  function renderFooter() {
    var el = document.getElementById("site-footer"); if (!el) return;
    el.outerHTML = '<footer class="site-footer"><div class="wrap"><div class="foot-grid">' +
      '<div class="fbrand">' + LOGO_WHITE + "<p>Funkcjonalność, jakość i nowoczesne rozwiązania dla Twojego domu. Marka firmy Leviatan z Bielska-Białej.</p>" +
      '<div class="socials"><a href="https://www.facebook.com/LeviatanPoligrafia" target="_blank" rel="noopener" aria-label="Facebook">' + ICON.fb + '</a><a href="https://www.instagram.com/leviatan_poligrafia/" target="_blank" rel="noopener" aria-label="Instagram">' + ICON.ig + '</a><a href="https://www.youtube.com/@LeviatanPoligrafia" target="_blank" rel="noopener" aria-label="YouTube">' + ICON.yt + "</a></div></div>" +
      "<div><h4>Produkty</h4><ul>" + CATS.slice(0, 8).map(function (c) { return '<li><a href="produkty.html#' + c.id + '">' + c.name + "</a></li>"; }).join("") + '<li><a href="produkty.html">Wszystkie →</a></li></ul></div>' +
      '<div><h4>Serie</h4><ul><li><a href="serie.html#idea-home">IDEA HOME</a></li><li><a href="serie.html#rakun">RAKUN</a></li><li><a href="serie.html#ms-everyday">MS. EVERYDAY</a></li></ul><h4 style="margin-top:28px">Kolekcje</h4><ul><li><a href="kolekcje.html#flexistore">Flexistore</a></li><li><a href="kolekcje.html#torby">Torby Valencia i Kopenhaga</a></li></ul></div>' +
      '<div><h4>Informacje</h4><ul><li><a href="o-marce.html">O marce</a></li><li><a href="inspiracje.html">Inspiracje i porady</a></li><li><a href="dla-firm.html">Dla firm i hurtowni</a></li><li><a href="kontakt.html">Kontakt</a></li><li><a href="kontakt.html#faq">Najczęstsze pytania</a></li></ul></div>' +
      '<div class="shopbox"><h4>Kup online</h4><p>Wszystkie produkty IDEA HOME znajdziesz w sklepie naszego partnera.</p><b>dladomu.sklep.pl</b><a class="btn btn-outline btn-sm" href="' + SHOP + '" target="_blank" rel="noopener">Przejdź do sklepu</a></div>' +
      '</div><div class="foot-bottom"><span>© ' + new Date().getFullYear() + ' IDEA HOME by Leviatan. Wszelkie prawa zastrzeżone.</span><span>Rudawka 88, 43-300 Bielsko-Biała</span></div></div></footer>';
  }

  /* ---------- Karuzele ---------- */
  function carousel(track, prev, next) {
    if (!track) return;
    var step = function () { var it = track.firstElementChild; return it ? it.getBoundingClientRect().width + 14 : 300; };
    if (prev) prev.addEventListener("click", function () { track.scrollBy({ left: -step(), behavior: "smooth" }); });
    if (next) next.addEventListener("click", function () { track.scrollBy({ left: step(), behavior: "smooth" }); });
  }

  renderHeader();
  renderFooter();

  window.IH = { find: find, variantLabel: variantLabel, ICON: ICON, CATS: CATS, ROOMS: ROOMS, COLORS: COLORS, CATALOG: CATALOG, SHOP: SHOP, shopSearch: shopSearch, card: card, bindCards: bindCards, openModal: openModal, carousel: carousel, countIn: countIn, pl: pl, getFavs: getFavs, catById: catById, roomById: roomById, esc: esc, toast: toast };
})();
