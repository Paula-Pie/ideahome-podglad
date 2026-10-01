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
    fb: '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M14 8h3V4h-3a4 4 0 00-4 4v2H7v4h3v8h4v-8h3l1-4h-4V8z"/></svg>',
    ig: '<svg viewBox="0 0 24 24" ' + P + '><rect x="3" y="3" width="18" height="18" rx="5"/><circle cx="12" cy="12" r="4"/><circle cx="17.5" cy="6.5" r=".8" fill="currentColor"/></svg>',
    yt: '<svg viewBox="0 0 24 24" ' + P + '><rect x="2" y="5" width="20" height="14" rx="4"/><path d="M10 9l5 3-5 3z" fill="currentColor"/></svg>'
  };

  var LOGO = '<svg viewBox="0 0 132 92" role="img" aria-label="IDEA HOME"><rect x="2.5" y="2.5" width="127" height="87" fill="none" stroke="currentColor" stroke-width="5"/>' +
    '<text x="21" y="43" font-family="Manrope, Segoe UI, sans-serif" font-weight="800" font-size="31" letter-spacing="1" fill="currentColor">IDEA</text>' +
    '<text x="21" y="76" font-family="Manrope, Segoe UI, sans-serif" font-weight="800" font-size="31" letter-spacing="1" fill="currentColor">HOME</text></svg>';

  /* ---------- Kategorie i pomieszczenia ---------- */
  var CATS = [
    { id: "worki", name: "Worki na odpady", short: "Worki\nna odpady", desc: "LDPE, od 35 do 240 l" },
    { id: "flexistore", name: "Flexistore", short: "Flexistore", desc: "Pojemniki z pokrywą" },
    { id: "organizery", name: "Organizery", short: "Organizery", desc: "Porządek w szafach" },
    { id: "torby", name: "Torby i worki", short: "Torby\ni worki", desc: "Bawełna, filc" },
    { id: "sprzatanie", name: "Kuchnia i sprzątanie", short: "Kuchnia\ni sprzątanie", desc: "Ściereczki, druciaki" },
    { id: "warsztat", name: "Warsztat i garaż", short: "Warsztat\ni garaż", desc: "Taśmy, oznaczenia" },
    { id: "chemia", name: "Chemia gospodarcza", short: "Chemia\ngospodarcza", desc: "Płyny i koncentraty" },
    { id: "pianka", name: "Aktywna pianka", short: "Aktywna\npianka", desc: "Czyszczenie bez szorowania" },
    { id: "mydla", name: "Mydła", short: "Mydła", desc: "W płynie i w kostce" },
    { id: "techbox", name: "Techbox", short: "Techbox", desc: "Skrzynki i przegródki" },
    { id: "dom", name: "Dom i biuro", short: "Dom\ni biuro", desc: "Archiwizacja, pudła" },
    { id: "budki", name: "Budki dla ptaków", short: "Budki\ndla ptaków", desc: "Drewniane, gotowe do montażu" }
  ];
  CATS.forEach(function (c) { c.icon = ICON[c.id]; });

  var ROOMS = [
    { id: "salon", name: "Salon", img: "img/foto/flexistore-dsc05557.jpg" },
    { id: "kuchnia", name: "Kuchnia", img: "img/produkty/sciereczki-do-kuchni-ih-roll-18x35cm-a-100-x-2szt.jpg", contain: true },
    { id: "garderoba", name: "Garderoba", img: "img/foto/baner-111062-7.jpg" },
    { id: "biuro", name: "Biuro i archiwum", img: "img/foto/baner-pudla-new.jpg" },
    { id: "garaz", name: "Garaż i warsztat", img: "img/produkty/worki-ih-ldpe-mocny-240l-czarny-10szt.jpg", contain: true },
    { id: "lazienka", name: "Łazienka", img: "img/foto/flexistore-1000071613.jpg" },
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
    "DENIM": { name: "denim", hex: "#7F939D" },
    "NEUTRAL": { name: "neutral", hex: "#D8D2C6" },
    "NATURALNY": { name: "naturalny", hex: "#EFE5CF" },
    "ŻÓŁTO CZARNA": { name: "żółto-czarny", hex: "linear-gradient(135deg,#EDC12E 50%,#232322 50%)" }
  };
  var COLOR_KEYS = Object.keys(COLORS).sort(function (a, b) { return b.length - a.length; });

  /* Ręczne opisy dla rodzin produktów — reszta tworzy się z nazwy pliku. */
  var FAMILY = {
    "flexistore": { title: "Pojemniki Flexistore – zestaw 4 rozmiarów", desc: "Cztery pojemniki z pokrywami w jednym komplecie. Uchwyty w ściankach, pokrywa z otworem, pasują do siebie rozmiarami, więc łatwo je piętrzyć na półce i w szafie.", rooms: ["salon", "garderoba", "lazienka", "biuro"], badge: "Nowość" },
    "torba-kopenhaga": { title: "Torba bawełniana Kopenhaga 38 × 42 cm", desc: "Naturalna bawełna z długimi uszami, bez nadruku. Sprawdza się na zakupach, jako torba na co dzień i jako baza pod własny nadruk – pakowana po 10 sztuk.", rooms: ["wdrodze"] },
    "sciereczki": { title: "Ściereczki kuchenne w rolce 18 × 35 cm", desc: "Dwie rolki po 100 ściereczek. Odrywasz tyle, ile potrzebujesz – do blatu, naczyń i szybkiego sprzątania.", rooms: ["kuchnia"] },
    "druciak": { title: "Druciak metalowy", desc: "Metalowe druciaki do przypaleń, garnków i grilla. Opakowanie 12 sztuk.", rooms: ["kuchnia", "garaz"] },
    "tasma": { title: "Taśma ostrzegawcza odblaskowa 50 mm × 5 m", desc: "Samoprzylepna, żółto-czarna ze strzałką. Oznacza progi, stopnie, słupki i krawędzie w garażu, warsztacie i magazynie.", rooms: ["garaz"] }
  };

  function titleCase(s) { return s.toLowerCase().replace(/(^|\s)\S/, function (m) { return m.toUpperCase(); }); }

  function parse(raw) {
    var n = raw.name.replace(/\s+IH\s+/, " ").replace(/’/g, "'").trim();
    var up = n.toUpperCase();
    var color = null;
    for (var i = 0; i < COLOR_KEYS.length; i++) { if (up.indexOf(" " + COLOR_KEYS[i]) > -1) { color = COLOR_KEYS[i]; break; } }
    var pack = (up.match(/(\d+)\s*SZT/) || [])[1];
    var cap = (up.match(/(\d+)\s*L\b/) || [])[1];
    var p = { id: raw.id, img: raw.img, raw: raw.name, color: color, pack: pack ? +pack : null, cap: cap ? +cap : null };

    if (/^WORKI/.test(up)) {
      var type = /EKSTRA MOCNY/.test(up) ? "Ekstra mocne" : /Z TAŚMĄ/.test(up) ? "Z taśmą" : "Mocne";
      p.cat = "worki";
      p.family = "worki-" + type + "-" + cap;
      p.title = "Worki na odpady LDPE " + type.toLowerCase() + " " + cap + " l";
      p.type = type;
      p.rooms = cap >= 120 ? ["garaz", "biuro"] : ["kuchnia", "lazienka", "biuro"];
      p.desc = type === "Z taśmą"
        ? "Worki ze ściągaczem z taśmy – zawiązujesz jednym ruchem, bez wysypywania. Folia LDPE, pojemność " + cap + " l."
        : type === "Ekstra mocne"
        ? "Najgrubsza folia w ofercie, na gruz ogrodowy, liście i ciężkie odpady. Pojemność " + cap + " l."
        : "Elastyczna folia LDPE, która nie pęka przy upychaniu. Pięć kolorów zgodnych z zasadami segregacji. Pojemność " + cap + " l.";
      p.query = "worki idea home " + cap + "l";
    } else if (/FLEXISTORE/.test(up)) {
      p.cat = "flexistore"; p.family = "flexistore";
    } else if (/^TORBA/.test(up)) {
      p.cat = "torby"; p.family = /KOPENHAGA/.test(up) ? "torba-kopenhaga" : "torba-" + raw.id;
    } else if (/ŚCIERECZKI/.test(up)) {
      p.cat = "sprzatanie"; p.family = "sciereczki";
    } else if (/DRUCIAK/.test(up)) {
      p.cat = "sprzatanie"; p.family = "druciak";
    } else if (/TAŚMA/.test(up)) {
      p.cat = "warsztat"; p.family = "tasma";
    } else if (/POJEMNIK|ORGANIZER/.test(up)) {
      p.cat = "organizery"; p.family = raw.id;
    } else {
      p.cat = "dom"; p.family = raw.id;
    }
    var f = FAMILY[p.family];
    if (f) { p.title = f.title; p.desc = f.desc; p.rooms = f.rooms; p.badge = f.badge; }
    if (!p.title) p.title = titleCase(n.replace(/\s*\d+\s*szt\.?/i, ""));
    if (!p.rooms) p.rooms = [];
    if (!p.query) p.query = p.title.replace(/[–—].*$/, "").trim() + " idea home";
    return p;
  }

  var COLOR_ORDER = ["CZARNY", "BRĄZOWY", "ŻÓŁTY", "NIEBIESKI", "ZIELONY", "NEUTRAL", "DENIM", "NATURALNY"];
  function buildCatalog() {
    var raw = window.IH_RAW_PRODUCTS || [];
    var fams = {}, list = [];
    raw.map(parse).forEach(function (v) {
      var g = fams[v.family];
      if (!g) {
        g = fams[v.family] = { id: v.family.toLowerCase().replace(/ł/g, "l").normalize("NFD").replace(/[̀-ͯ]/g, "").replace(/[^a-z0-9]+/g, "-"), title: v.title, cat: v.cat, desc: v.desc, rooms: v.rooms, badge: v.badge, cap: v.cap, type: v.type, query: v.query, variants: [] };
        list.push(g);
      }
      g.variants.push(v);
    });
    list.forEach(function (g) {
      g.variants.sort(function (a, b) { return COLOR_ORDER.indexOf(a.color) - COLOR_ORDER.indexOf(b.color); });
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
    var parts = [];
    if (v.color && COLORS[v.color]) parts.push(COLORS[v.color].name);
    if (v.pack) parts.push(v.pack + " szt.");
    if (g.cat === "worki" && v.color && COLORS[v.color].seg) parts.push(COLORS[v.color].seg);
    return parts.join(" · ");
  }
  function card(g, opts) {
    opts = opts || {};
    var v = g.variants[0], cat = catById(g.cat), fav = getFavs().indexOf(g.id) > -1;
    var sw = g.variants.length > 1 ? '<div class="swatches" role="group" aria-label="Warianty">' + g.variants.map(function (x, i) {
      var c = COLORS[x.color] || { name: x.raw, hex: "#ccc" };
      return '<button class="sw" type="button" data-v="' + i + '" aria-pressed="' + (i === 0) + '" title="' + esc(c.name) + '" aria-label="' + esc(c.name) + '" style="background:' + c.hex + '"></button>';
    }).join("") + "</div>" : "";
    return '<article class="pcard" data-id="' + g.id + '">' +
      (g.badge ? '<span class="badge">' + g.badge + "</span>" : "") +
      '<button class="fav" type="button" aria-pressed="' + fav + '" aria-label="Dodaj do ulubionych">' + ICON.heart + "</button>" +
      '<button class="thumb" type="button" aria-label="Szczegóły: ' + esc(g.title) + '"><img loading="lazy" src="' + v.img + '" alt="' + esc(g.title) + '"></button>' +
      '<div class="body">' +
      (opts.hideCat ? "" : '<span class="pcat">' + cat.name + "</span>") +
      "<h3>" + esc(g.title) + "</h3>" +
      '<p class="spec">' + esc(variantSpec(g, v)) + "</p>" +
      '<div class="foot">' + sw + '<a class="link-arrow buy" href="' + shopSearch(g.query) + '" target="_blank" rel="noopener">Kup online</a></div>' +
      "</div></article>";
  }
  function bindCards(root) {
    root.addEventListener("click", function (e) {
      var c = e.target.closest(".pcard"); if (!c) return;
      var g = CATALOG.find(function (x) { return x.id === c.dataset.id; });
      var sw = e.target.closest(".sw");
      if (sw) {
        var v = g.variants[+sw.dataset.v];
        c.querySelector(".thumb img").src = v.img;
        c.querySelector(".spec").textContent = variantSpec(g, v);
        c.querySelectorAll(".sw").forEach(function (b) { b.setAttribute("aria-pressed", b === sw); });
        return;
      }
      if (e.target.closest(".fav")) {
        var favs = getFavs(), i = favs.indexOf(g.id), btn = e.target.closest(".fav");
        if (i > -1) { favs.splice(i, 1); toast("Usunięto z ulubionych"); } else { favs.push(g.id); toast("Dodano do ulubionych"); }
        btn.setAttribute("aria-pressed", i === -1); setFavs(favs);
        return;
      }
      if (e.target.closest(".thumb")) {
        var cur = c.querySelector('.sw[aria-pressed="true"]');
        openModal(g, cur ? +cur.dataset.v : 0);
      }
    });
  }

  /* ---------- Podgląd produktu ---------- */
  function openModal(g, vi) {
    var v = g.variants[vi || 0], cat = catById(g.cat), last = document.activeElement;
    var m = document.createElement("div");
    m.className = "modal"; m.setAttribute("role", "dialog"); m.setAttribute("aria-modal", "true"); m.setAttribute("aria-label", g.title);
    var colors = g.variants.filter(function (x) { return x.color; }).map(function (x) { return COLORS[x.color] ? COLORS[x.color].name : ""; });
    var packs = g.variants.map(function (x) { return x.pack; }).filter(Boolean).filter(function (x, i, a) { return a.indexOf(x) === i; });
    var rooms = g.rooms.map(roomById).filter(Boolean).map(function (r) { return r.name; });
    var specs = [["Kategoria", cat.name]];
    if (g.cap) specs.push(["Pojemność", g.cap + " l"]);
    if (g.cat === "worki") specs.push(["Materiał", "folia LDPE"]);
    if (packs.length) specs.push(["Opakowanie", packs.join(" / ") + " szt."]);
    if (colors.length) specs.push([colors.length > 1 ? "Kolory" : "Kolor", colors.join(", ")]);
    if (rooms.length) specs.push(["Gdzie się sprawdzi", rooms.join(", ")]);
    m.innerHTML = '<div class="modal-box">' +
      '<button class="icon-btn modal-close" type="button" aria-label="Zamknij">' + ICON.close + "</button>" +
      '<div class="mimg"><img src="' + v.img + '" alt="' + esc(g.title) + '"></div>' +
      '<div class="mbody"><span class="label">' + cat.name + "</span><h2>" + esc(g.title) + "</h2><p>" + esc(g.desc || "") + "</p>" +
      (g.variants.length > 1 ? '<div class="swatches">' + g.variants.map(function (x, i) { var c = COLORS[x.color] || { name: "", hex: "#ccc" }; return '<button class="sw" type="button" data-v="' + i + '" aria-pressed="' + (i === (vi || 0)) + '" aria-label="' + c.name + '" title="' + c.name + '" style="background:' + c.hex + '"></button>'; }).join("") + "</div>" : "") +
      '<p class="spec muted" id="mspec">' + esc(variantSpec(g, v)) + "</p>" +
      '<dl class="specs">' + specs.map(function (s) { return "<dt>" + s[0] + "</dt><dd>" + esc(s[1]) + "</dd>"; }).join("") + "</dl>" +
      '<div class="modal-actions"><a class="btn btn-primary" href="' + shopSearch(g.query) + '" target="_blank" rel="noopener">Kup w sklepie ' + ICON.bag.replace("<svg", '<svg width="16" height="16"') + '</a><a class="btn btn-outline" href="kontakt.html">Zapytaj o hurt</a></div>' +
      "</div></div>";
    function close() { m.remove(); document.removeEventListener("keydown", onKey); if (last) last.focus(); }
    function onKey(e) { if (e.key === "Escape") close(); }
    m.addEventListener("click", function (e) {
      if (e.target === m || e.target.closest(".modal-close")) return close();
      var sw = e.target.closest(".sw");
      if (sw) { var x = g.variants[+sw.dataset.v]; m.querySelector(".mimg img").src = x.img; m.querySelector("#mspec").textContent = variantSpec(g, x); m.querySelectorAll(".sw").forEach(function (b) { b.setAttribute("aria-pressed", b === sw); }); }
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
      '<div class="fbrand">' + LOGO + "<p>Funkcjonalność, jakość i nowoczesne rozwiązania dla Twojego domu. Marka firmy Leviatan z Bielska-Białej.</p>" +
      '<div class="socials"><a href="https://www.facebook.com/" target="_blank" rel="noopener" aria-label="Facebook">' + ICON.fb + '</a><a href="https://www.instagram.com/" target="_blank" rel="noopener" aria-label="Instagram">' + ICON.ig + '</a><a href="https://www.youtube.com/" target="_blank" rel="noopener" aria-label="YouTube">' + ICON.yt + "</a></div></div>" +
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

  window.IH = { ICON: ICON, CATS: CATS, ROOMS: ROOMS, COLORS: COLORS, CATALOG: CATALOG, SHOP: SHOP, shopSearch: shopSearch, card: card, bindCards: bindCards, openModal: openModal, carousel: carousel, countIn: countIn, pl: pl, getFavs: getFavs, catById: catById, roomById: roomById, esc: esc, toast: toast };
})();
