/* Plik generowany przez tools/i18n-generuj.pl z rakun/ih-rakun.js – nie edytuj recznie. */
/* Dopasowanie podstrony RAKUN do strony IDEA HOME (wstawiane przez tools/import-rakun.ps1):
   wspólny nagłówek z powrotem do IDEA HOME, ceny i przyciski "Buy online" przy produktach, poprawione linki w stopce. */
(function () {
  var SHOP = "https://www.dladomu.sklep.pl";
  // wersje językowe: EN/DE kupują na Amazon.de, CS na Allegro.cz; cen nie pokazujemy
  var LANG = window.IH_LANG || "pl";
  var AMAZON = "https://www.amazon.de/stores/page/916542A8-6F93-43D6-B5FC-639158F0193C";
  var MARKET = LANG === "cs" ? { name: "allegro.cz", url: "https://allegro.cz/uzivatel/Leviatan_SHOPCZ?string=rakun" }
    : LANG === "pl" ? { name: "dladomu.sklep.pl", url: SHOP + "/search?q=rakun" }
    : { name: "Amazon.de", url: AMAZON + "/search?terms=RAKUN" };
  var data = {};
  (window.IH_SHOP_PRODUCTS || []).forEach(function (p) { data[p.id] = p; });

  /* 1. Jeden nagłówek: logo IDEA HOME (powrót) + logo RAKUN, menu RAKUNA, "Buy online", menu na telefonie */
  var inner = document.querySelector("header .nav-inner"), logo = inner && inner.querySelector(".logo"), nav = inner && inner.querySelector("nav.main-nav");
  if (inner && logo && nav) {
    var brand = document.createElement("div"); brand.className = "ih-brand";
    var home = document.createElement("a"); home.className = "ih-home"; home.href = "../index.html";
    home.setAttribute("aria-label", "IDEA HOME – home page"); home.title = "Back to the IDEA HOME website";
    home.innerHTML = '<img class="on-dark" src="../img/logo-ideahome-white.png" alt="" width="600" height="532"><img class="on-light" src="../img/logo-ideahome.png" alt="" width="600" height="532">';
    logo.parentNode.insertBefore(brand, logo); brand.appendChild(home); brand.appendChild(logo);
    var buy = document.createElement("a"); buy.className = "ih-buy"; buy.href = MARKET.url; buy.target = "_blank"; buy.rel = "noopener"; buy.textContent = "Buy online";
    var allLink = document.createElement("a"); allLink.href = "../produkty.html"; allLink.textContent = "All products"; allLink.className = "ih-all";
    nav.appendChild(allLink);
    var buyM = buy.cloneNode(true); buyM.className = "ih-buy ih-buy-m"; nav.appendChild(buyM);
    var tog = document.createElement("button"); tog.type = "button"; tog.className = "ih-burger"; tog.setAttribute("aria-label", "Open menu"); tog.setAttribute("aria-expanded", "false");
    tog.innerHTML = "<span></span><span></span><span></span>";
    var right = document.createElement("div"); right.className = "ih-right"; right.appendChild(buy); right.appendChild(tog);
    inner.appendChild(right);
    // przełącznik języka
    var langs = document.createElement("div"); langs.className = "ih-langs";
    langs.innerHTML = ["pl", "en", "de", "cs"].map(function (l) {
      var href = l === "pl" ? (LANG === "pl" ? "index.html" : "../../rakun/index.html") : (LANG === "pl" ? "../" : "../../") + l + "/rakun/index.html";
      return '<a href="' + new URL(href, location.href).href + '" hreflang="' + l + '"' + (l === LANG ? ' aria-current="true"' : "") + ">" + l.toUpperCase() + "</a>";
    }).join("");
    right.insertBefore(langs, right.firstChild);
    tog.addEventListener("click", function () { var o = nav.classList.toggle("ih-open"); tog.setAttribute("aria-expanded", o); document.querySelector("header").classList.toggle("ih-menu-open", o); });
    nav.querySelectorAll("a").forEach(function (a) { a.addEventListener("click", function () { nav.classList.remove("ih-open"); tog.setAttribute("aria-expanded", "false"); document.querySelector("header").classList.remove("ih-menu-open"); }); });
  }

  // główny nagłówek strony (dla Google i czytników ekranu): pasek "Discover the Raccoon's world" albo ukryty h1
  if (!document.querySelector("h1")) {
    var h1 = document.createElement("h1"); h1.className = "ih-sr";
    h1.textContent = "RAKUN – an IDEA HOME range of cleaning products";
    document.body.insertBefore(h1, document.body.firstChild);
  }

  // sekcja chemii: nowy nagłówek + Aktywna piana do nagrobków jako pierwszy produkt
  var chem = document.getElementById("chemia");
  if (chem) {
    var ch2 = chem.querySelector(".prod-heading h2"), cp = chem.querySelector(".prod-heading p"), ce = chem.querySelector(".prod-heading .eyebrow");
    if (ch2) ch2.textContent = "RAKUN cleaning products";
    if (ce) ce.textContent = "Cleaning products";
    if (cp) cp.textContent = "Washing-up liquids, glass cleaner and active headstone cleaning foam – effective cleaning without scrubbing.";
    var grid = chem.querySelector(".editorial-grid");
    if (grid && !grid.querySelector(".ih-piana")) {
      var it = document.createElement("div"); it.className = "editorial-item ih-piana";
      it.innerHTML = '<div class="thumb"><img class="img-1" src="ih/aktywna-piana.png" alt="RAKUN active headstone cleaning foam 400 ml"><img class="img-2" src="../img/foto/baner-aktywna-pianka.jpg" alt="Active foam on a headstone"></div>' +
        '<div class="cat">Active foam</div><h4>For headstones</h4><p>Removes dirt, deposits and streaks from stone – without scrubbing.</p>';
      grid.insertBefore(it, grid.firstChild);
    }
  }

  // nowe pianki, których nie ma w dladomu.sklep.pl – w wersji PL "Buy online" prowadzi do oferty na Allegro
  var ALLEGRO = {
    kokpit: "https://allegro.pl/produkt/piana-aktywna-kokpit-i-szyby-ih-rakun-400ml-ad232c44-94bb-4124-8e63-bfc447b37a0e?offerId=19069339248",
    buty: "https://allegro.pl/produkt/idea-home-pianka-do-czyszczenia-butow-400-ml-5f4b22ce-ca72-4c1c-9578-38dffe1ab553?offerId=19069339002",
    lustra: "https://allegro.pl/produkt/piana-aktywna-do-szyb-i-luster-ih-rakun-600ml-30ea4d0f-9606-45cf-bde0-4bc20cbddf9d?offerId=19069345341"
  };
  // zdjęcia z ofert Allegro do galerii w kafelku i karcie produktu (pliki w rakun/ih/galeria/)
  var GALLERY = {
    kokpit: ["kokpit-1.jpg", "kokpit-2.jpg", "kokpit-3.jpg", "kokpit-4.jpg"],
    lustra: ["lustra-1.jpg", "lustra-2.jpg", "lustra-3.jpg", "lustra-4.jpg"],
    buty: ["buty-1.jpg", "buty-2.jpg", "buty-3.jpg", "buty-4.jpg"]
  };
  function addFoam(section, key, img, alt, cat, name, lead) {
    var grid = section && section.querySelector(".editorial-grid");
    if (!grid || grid.querySelector('[data-allegro="' + key + '"]')) return;
    var it = document.createElement("div"); it.className = "editorial-item ih-nowa"; it.setAttribute("data-allegro", key);
    var img2 = (GALLERY[key] || [])[0] ? "ih/galeria/" + GALLERY[key][0] : "ih/" + img;   // drugie zdjęcie = pierwsze z galerii, jak ilustracja przy innych produktach
    it.innerHTML = '<div class="thumb"><img class="img-1" src="ih/' + img + '" alt="' + alt + '"><img class="img-2" src="' + img2 + '" alt="' + alt + '"></div>' +
      '<div class="cat">' + cat + "</div><h4>" + name + "</h4><p>" + lead + "</p>";
    grid.appendChild(it);
  }
  if (chem) {
    var cp2 = chem.querySelector(".prod-heading p");
    if (cp2) cp2.textContent = "New in the RAKUN range: active foams for windows and mirrors and for shoes. They join the active headstone foam and our washing-up liquids and glass cleaner – effective cleaning all around the home.";
    addFoam(chem, "lustra", "piana-szyby-lustra.png", "RAKUN active foam for windows and mirrors 600 ml", "Active foam", "For windows and mirrors", "Removes fingerprints and grease from windows, mirrors and glass doors – without water and without streaks.");
    addFoam(chem, "buty", "pianka-do-butow.png", "RAKUN XXL active shoe cleaning foam 400 ml", "Active foam", "For shoes", "Cleans leather, suede, nubuck and fabrics without water – shoes are ready to wear straight away.");
    // pianki obok siebie w pierwszym rzędzie, płyny w kanistrach pod nimi
    var cg = chem.querySelector(".editorial-grid");
    if (cg) Array.prototype.slice.call(cg.querySelectorAll(".ih-nowa")).reverse().forEach(function (f) { cg.insertBefore(f, cg.children[1]); });
  }
  var auto = document.getElementById("spryskiwacz");
  if (auto) {
    var ah2 = auto.querySelector(".prod-heading h2"), ap = auto.querySelector(".prod-heading p");
    if (ah2) ah2.textContent = "RAKUN for your car";
    if (ap) ap.textContent = "Summer screenwash and active foam for the dashboard and windows – a clean car for every journey.";
    addFoam(auto, "kokpit", "piana-kokpit.png", "RAKUN active foam for dashboard and windows 400 ml", "Active foam", "Dashboard and windows", "Cleans plastics, windows and mirrors in your car without water – no streaks, no greasy film.");
  }

  /* 2. Ceny i przyciski przy produktach (dopasowanie po nazwie z karty) */
  var MAP = [
    [/aktywna piana|nagrobk/i, "spray-do-nagrobkow-aktywna-piana-plyn-do-mycia-nagrobkow-pomnikow-400ml"],
    [/flower bloom/i, "mydlo-w-plynie-ih-rakun-flower-bloom-5l"],
    [/forest walk/i, "mydlo-w-plynie-ih-rakun-forest-walk-5l"],
    [/milk/i, "mydlo-w-plynie-ih-rakun-milk-honey-care-5l"],
    [/ocean dive/i, "mydlo-w-plynie-ih-rakun-ocean-dive-5l"],
    [/tropic/i, "mydlo-w-plynie-ih-rakun-tropic-holiday-5l"],
    [/cytrynow|lemon/i, "plyn-do-mycia-naczyn-lemon-ih-rakun-5l"],
    [/miętow|mint/i, "plyn-do-mycia-naczyn-mint-ih-rakun-5l"],
    [/szyb/i, "plyn-do-szyb-ih-rakun-5l"],
    [/summer|spryskiwacz/i, "plyn-do-spryskiwaczy-letni-ih-rakun-5l"],
    [/mikrofibr/i, "sciereczki-z-mikrofibry-ih-rakun-30x30cm-24szt-mix-kolor-pizza-box-all"],
    [/roll/i, null]
  ];
  document.querySelectorAll(".editorial-item").forEach(function (item) {
    var key = item.getAttribute("data-allegro");
    var name = ((item.querySelector("h4") || {}).textContent || "") + " " + ((item.querySelector(".cat") || {}).textContent || "");
    // pianki z Allegro: zdjęcia z własnej galerii (pierwsze = miniatura, pomijane jak zdjęcie ze sklepu), link do oferty
    var hit = key ? [null, "allegro-" + key] : MAP.find(function (m) { return m[0].test(name); });
    if (!hit) return;
    var p = key ? { url: ALLEGRO[key], imgs: [""].concat((GALLERY[key] || []).map(function (f) { return "ih/galeria/" + f; })) } : hit[1] && data[hit[1]];
    var buy = document.createElement("div");
    buy.className = "ih-buyrow";
    if (LANG !== "pl") {
      buy.innerHTML = '<a class="ih-btn" href="' + MARKET.url + '" target="_blank" rel="noopener">Buy online</a>';
    } else if (p) {
      buy.innerHTML = '<a class="ih-btn" href="' + p.url + '" target="_blank" rel="noopener">Buy online</a>';
    } else {
      buy.innerHTML = '<a class="ih-btn ih-btn-outline" href="' + SHOP + '/search?q=' + encodeURIComponent("rakun roll") + '" target="_blank" rel="noopener">Check in shop</a>';
    }
    // karta produktu: galeria zdjęć ze sklepu + pełny opis
    if (p) {
      var more = document.createElement("button");
      more.type = "button"; more.className = "ih-btn ih-btn-outline ih-more"; more.textContent = "Details";
      buy.appendChild(more);
      var open = function () { openCard(item, hit[1], p, buy.querySelector("a").href); };
      more.addEventListener("click", open);
      var th = item.querySelector(".thumb");
      if (th) {
        th.style.cursor = "pointer"; th.setAttribute("tabindex", "0"); th.setAttribute("aria-label", "Details");
        var swiped = makeSlider(th, item, p);
        th.addEventListener("click", function (e) { if (swiped() || e.target.closest(".ih-sl-nav, .ih-sl-dots")) return; open(); });
        th.addEventListener("keydown", function (e) { if (e.key === "Enter") open(); });
      }
    }
    item.appendChild(buy);
  });

  /* 2b. Karta produktu (okno): zdjęcia ze sklepu dladomu.sklep.pl i pełny opis (ih/rakun-opisy.js, tylko po polsku) */
  if (LANG === "pl") { var ds = document.createElement("script"); ds.src = "ih/rakun-opisy.js?v=202610160941"; document.head.appendChild(ds); }
  // produkty bez opisu w sklepie
  var OWN = {
    "plyn-do-mycia-naczyn-lemon-ih-rakun-5l": "<p>Płyn do mycia naczyń RAKUN Lemon w ekonomicznym kanistrze 5 l. Skutecznie usuwa tłuszcz z naczyń, garnków i patelni, zostawiając cytrusową świeżość.</p><p>Duża pojemność wystarcza na długo i pozwala wygodnie uzupełniać dozownik w domu, biurze czy kuchni firmowej.</p>",
    "plyn-do-mycia-naczyn-mint-ih-rakun-5l": "<p>Płyn do mycia naczyń RAKUN Mint w ekonomicznym kanistrze 5 l. Chłodząca mięta i skuteczne działanie na tłuste garnki i patelnie.</p><p>Duża pojemność wystarcza na długo i pozwala wygodnie uzupełniać dozownik w domu, biurze czy kuchni firmowej.</p>",
    // pianki z Allegro (opisy na podstawie ofert Leviatan_SHOP)
    "allegro-kokpit": "<h4>Aktywna piana RAKUN do kokpitu i szyb – czyste wnętrze auta w kilka minut</h4>" +
      "<p>Uniwersalna piana do pielęgnacji całego wnętrza samochodu. Usuwa kurz, brud i lekkie plamy z deski rozdzielczej, plastików, winylu, szyb i lusterek – na sucho, bez użycia wody i bez smug. Jeden podręczny spray zastępuje osobne środki do plastików i do szyb.</p>" +
      "<h5>Dlaczego warto wybrać ten produkt?</h5><ul>" +
      "<li><strong>2 w 1 – plastiki i szkło:</strong> czyści deskę rozdzielczą, elementy z tworzywa i winylu oraz szyby i lusterka.</li>" +
      "<li><strong>Bez smug i tłustej warstwy:</strong> zostawia matowe wykończenie, więc deska rozdzielcza nie odbija światła i nie lepi się.</li>" +
      "<li><strong>Czyste szyby:</strong> formuła do szyb samochodowych i lusterek zapewnia dobrą widoczność podczas jazdy.</li>" +
      "<li><strong>Działanie ochronne:</strong> zostawia niewidoczną warstwę antystatyczną, dzięki której kurz wolniej osiada, a plastiki dłużej wyglądają jak nowe.</li>" +
      "<li><strong>Gęsta piana:</strong> nie kapie i nie rozpryskuje się na sąsiednie powierzchnie, dzięki czemu jest wydajna, a sprzątanie szybkie i czyste.</li>" +
      "<li><strong>Świeży zapach:</strong> neutralny, z delikatną nutą cytryny, bez drażniących aromatów.</li>" +
      "<li><strong>Podręczny pojemnik 400 ml:</strong> zmieści się w schowku albo w bagażniku.</li></ul>" +
      "<h5>Jak stosować?</h5><ol>" +
      "<li><strong>Spryskaj</strong> – nanieś równomierną warstwę piany bezpośrednio na zabrudzoną powierzchnię.</li>" +
      "<li><strong>Odczekaj</strong> chwilę, aż aktywna piana rozpuści brud.</li>" +
      "<li><strong>Przetrzyj</strong> do sucha czystą ściereczką, np. z mikrofibry RAKUN – bez szorowania.</li></ol>" +
      "<h5>Specyfikacja techniczna</h5><table><thead><tr><th>Cecha</th><th>Wartość</th></tr></thead><tbody>" +
      "<tr><td>Rodzaj produktu</td><td>Aktywna piana czyszcząca (APC) do wnętrza auta</td></tr>" +
      "<tr><td>Zastosowanie</td><td>Kokpit, plastiki, winyl, szyby i lusterka</td></tr>" +
      "<tr><td>Scent</td><td>Neutralny z nutą cytryny</td></tr>" +
      "<tr><td>Capacity</td><td>400 ml</td></tr>" +
      "<tr><td>Producent</td><td>IDEA HOME</td></tr>" +
      "<tr><td>Numer katalogowy</td><td>700009</td></tr>" +
      "<tr><td>EAN</td><td>5902308746350</td></tr></tbody></table>",
    "allegro-buty": "<h4>Aktywna piana RAKUN do butów XXL – czyste buty bez wody i bez czekania</h4>" +
      "<p>Wydajna aktywna piana do czyszczenia obuwia na sucho. Wnika w zabrudzenia i rozpuszcza je bez użycia wody, więc buty są gotowe do noszenia od razu po czyszczeniu. Sprawdza się przy skórze licowej, zamszu, nubuku, tkaninach i syntetycznych siateczkach (mesh) – jeden środek zamiast kilku specjalistycznych.</p>" +
      "<h5>Dlaczego warto wybrać ten produkt?</h5><ul>" +
      "<li><strong>Duży format XXL – 400 ml:</strong> starcza na długo i obniża koszt jednego czyszczenia.</li>" +
      "<li><strong>Czyszczenie na sucho:</strong> aktywna piana rozpuszcza brud bez wody, co znacznie skraca czas czyszczenia.</li>" +
      "<li><strong>Do różnych materiałów:</strong> skóra licowa, zamsz, nubuk, tekstylia i materiały syntetyczne – sneakersy, buty sportowe, codzienne i robocze.</li>" +
      "<li><strong>Buty od razu gotowe:</strong> bez suszenia – obuwie można założyć zaraz po zabiegu.</li></ul>" +
      "<h5>Jak stosować?</h5><ol>" +
      "<li><strong>Spryskaj</strong> – nanieś równomierną warstwę piany na zabrudzoną powierzchnię buta.</li>" +
      "<li><strong>Odczekaj</strong> chwilę, aż piana rozpuści brud.</li>" +
      "<li><strong>Przetrzyj</strong> do sucha czystą ściereczką, np. z mikrofibry RAKUN.</li></ol>" +
      "<h5>Także dla firm</h5>" +
      "<p>Duża pojemność sprawdza się tam, gdzie butów czyści się dużo: w zakładach pracy (obuwie robocze i ochronne), w hotelach i gastronomii, w firmach sprzątających oraz w sklepach obuwniczych i sportowych.</p>" +
      "<h5>Specyfikacja techniczna</h5><table><thead><tr><th>Cecha</th><th>Wartość</th></tr></thead><tbody>" +
      "<tr><td>Rodzaj produktu</td><td>Aktywna piana do czyszczenia obuwia</td></tr>" +
      "<tr><td>Materiały</td><td>Skóra licowa, zamsz, nubuk, tekstylia, siateczki syntetyczne</td></tr>" +
      "<tr><td>Capacity</td><td>400 ml (XXL)</td></tr>" +
      "<tr><td>Marka</td><td>IDEA HOME</td></tr>" +
      "<tr><td>Kod producenta</td><td>700021</td></tr></tbody></table>",
    "allegro-lustra": "<h4>Aktywna piana RAKUN do szyb i luster – lśniące szkło bez smug</h4>" +
      "<p>Praktyczny pomocnik do szybkiego czyszczenia okien, luster i wszystkich błyszczących powierzchni w domu. Wydajna formuła usuwa brud, odciski palców i osady tłuszczu, a stabilna piana zostaje tam, gdzie ją nałożysz – także na pionowych szybach. Do mycia na sucho, bez wiadra z wodą.</p>" +
      "<h5>Dlaczego warto wybrać ten produkt?</h5><ul>" +
      "<li><strong>Silna formuła czyszcząca:</strong> skoncentrowana aktywna piana radzi sobie z odciskami palców, tłuszczem i uporczywym brudem.</li>" +
      "<li><strong>Bez smug:</strong> skład ogranicza smugi i pozostałości – okna są przejrzyste, a lustra lśnią.</li>" +
      "<li><strong>Nie spływa:</strong> gęsta piana trzyma się powierzchni pionowych, więc nie kapie na parapety i podłogę.</li>" +
      "<li><strong>Wszechstronne zastosowanie:</strong> okna, witryny, lustra, szklane drzwi i stoły oraz inne powierzchnie o wysokim połysku.</li>" +
      "<li><strong>Duża pojemność 600 ml:</strong> wystarcza na długo, bez ciągłego dokupowania.</li>" +
      "<li><strong>Podręczny pojemnik:</strong> wystarczy ściereczka i piana RAKUN – bez wody i dodatkowych akcesoriów.</li></ul>" +
      "<h5>Jak stosować?</h5><ol>" +
      "<li><strong>Spryskaj</strong> – nanieś równomierną warstwę piany bezpośrednio na zabrudzoną powierzchnię.</li>" +
      "<li><strong>Odczekaj</strong> chwilę, aż aktywna piana rozpuści brud.</li>" +
      "<li><strong>Przetrzyj</strong> do sucha czystą ściereczką, np. z mikrofibry RAKUN – bez szorowania.</li></ol>" +
      "<h5>Specyfikacja techniczna</h5><table><thead><tr><th>Cecha</th><th>Wartość</th></tr></thead><tbody>" +
      "<tr><td>Rodzaj produktu</td><td>Aktywna piana do mycia szyb i luster</td></tr>" +
      "<tr><td>Zastosowanie</td><td>Okna, witryny, lustra, szklane drzwi i stoły, powierzchnie o wysokim połysku</td></tr>" +
      "<tr><td>Capacity</td><td>600 ml</td></tr>" +
      "<tr><td>Marka</td><td>IDEA HOME</td></tr>" +
      "<tr><td>EAN</td><td>5902308746343</td></tr></tbody></table>"
  };
  var card = null;

  // przesuwanie zdjęć: strzałki, kropki i gest (palcem albo przeciągnięcie myszą); zwraca funkcję „czy przed chwilą przesunięto”
  function swipe(el, step) {
    var x0 = null, moved = false, t = 0;
    el.addEventListener("pointerdown", function (e) { x0 = e.clientX; moved = false; });
    el.addEventListener("pointerup", function (e) {
      if (x0 === null) return; var dx = e.clientX - x0; x0 = null;
      if (Math.abs(dx) > 35) { moved = true; t = Date.now(); step(dx < 0 ? 1 : -1); }
    });
    el.addEventListener("pointercancel", function () { x0 = null; });
    el.addEventListener("dragstart", function (e) { e.preventDefault(); });
    return function () { return moved && Date.now() - t < 400; };
  }
  // zdjęcia ze sklepu; pierwsze (zdjęcie produktu na białym tle) pomijamy, gdy mamy własną miniaturę – wyglądałoby jak duplikat
  function shopImgs(p, haveOwn) { var a = (p.imgs || [p.img]).filter(Boolean); return haveOwn ? a.slice(1) : a; }
  function makeSlider(th, item, p) {
    var i1 = th.querySelector(".img-1"), i2 = th.querySelector(".img-2");
    var imgs = [];
    [i1, i2].forEach(function (im) { if (im && im.getAttribute("src")) imgs.push(im.getAttribute("src")); });
    shopImgs(p, imgs.length > 0).forEach(function (u) { if (u && imgs.indexOf(u) < 0) imgs.push(u); });
    if (imgs.length < 2) return function () { return false; };
    item.classList.add("ih-slider");
    th.dataset.first = imgs[0];
    var cur = 0;
    // jedna, dyskretna strzałka po prawej; po zjechaniu z kafelka (albo dotknięciu innego miejsca) wraca pierwsze zdjęcie
    th.insertAdjacentHTML("beforeend", '<button type="button" class="ih-sl-nav next" aria-label="Next photo">›</button><div class="ih-sl-dots">' + imgs.map(function () { return "<i></i>"; }).join("") + "</div>");
    var dots = th.querySelectorAll(".ih-sl-dots i");
    function go(i) {
      cur = (i + imgs.length) % imgs.length;
      i1.src = imgs[cur]; i1.classList.toggle("ih-photo", cur > 0);   // ilustracja i zdjęcia ze sklepu bez powiększenia, żeby nie nachodziły na sąsiednie kafelki
      dots.forEach(function (d, j) { d.classList.toggle("on", j === cur); });
      item.classList.toggle("ih-sl-moved", cur > 0);
    }
    th.querySelector(".next").addEventListener("click", function (e) { e.stopPropagation(); go(cur + 1); });
    item.addEventListener("mouseleave", function () { if (cur) go(0); });
    document.addEventListener("pointerdown", function (e) { if (cur && !item.contains(e.target)) go(0); });
    go(0);
    return swipe(th, function (d) { go(cur + d); });
  }
  function esc(s) { return String(s == null ? "" : s).replace(/[&<>"]/g, function (c) { return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c]; }); }
  function openCard(item, id, p, buyHref) {
    if (!card) {
      card = document.createElement("div"); card.className = "ih-card"; card.hidden = true;
      card.innerHTML = '<div class="ih-card-box" role="dialog" aria-modal="true" aria-labelledby="ih-card-title"><button type="button" class="ih-card-x" aria-label="Close">×</button><div class="ih-card-gal"><div class="ih-card-stage"><img class="ih-card-main" alt="" draggable="false"><button type="button" class="ih-sl-nav prev" aria-label="Previous photo">‹</button><button type="button" class="ih-sl-nav next" aria-label="Next photo">›</button></div><div class="ih-card-thumbs"></div></div><div class="ih-card-body"><span class="ih-card-cat"></span><h3 id="ih-card-title"></h3><div class="ih-card-desc"></div><div class="ih-card-buy"></div></div></div>';
      document.body.appendChild(card);
      var close = function () { card.hidden = true; document.body.style.overflow = ""; };
      card.addEventListener("click", function (e) { if (e.target === card || e.target.closest(".ih-card-x")) close(); });
      document.addEventListener("keydown", function (e) {
        if (card.hidden) return;
        if (e.key === "Escape") close();
        if (e.key === "ArrowLeft" || e.key === "ArrowRight") card._step(e.key === "ArrowRight" ? 1 : -1);
      });
      card.querySelector(".ih-card-stage .prev").addEventListener("click", function () { card._step(-1); });
      card.querySelector(".ih-card-stage .next").addEventListener("click", function () { card._step(1); });
      swipe(card.querySelector(".ih-card-stage"), function (d) { card._step(d); });
    }
    var th0 = item.querySelector(".thumb");
    var imgs = [];
    if (th0 && th0.dataset.first) imgs.push(th0.dataset.first);
    else { var own = item.querySelector(".thumb .img-1"); if (own) imgs.push(own.getAttribute("src")); }
    shopImgs(p, imgs.length > 0).forEach(function (u) { if (u && imgs.indexOf(u) < 0) imgs.push(u); });
    var main = card.querySelector(".ih-card-main"), thumbs = card.querySelector(".ih-card-thumbs"), at = 0;
    var show = function (i) {
      at = (i + imgs.length) % imgs.length; main.src = imgs[at];
      thumbs.querySelectorAll("button").forEach(function (b, j) { b.setAttribute("aria-current", j === at); if (j === at && b.scrollIntoView) b.scrollIntoView({ block: "nearest", inline: "nearest" }); });
    };
    card._step = function (d) { show(at + d); };
    card.classList.toggle("ih-card-one", imgs.length < 2);   // jedno zdjęcie: bez strzałek i miniatur
    thumbs.innerHTML = imgs.map(function (u, i) { return '<button type="button" aria-label="Zdjęcie ' + (i + 1) + '"><img src="' + esc(u) + '" alt="" loading="lazy"></button>'; }).join("");
    thumbs.querySelectorAll("button").forEach(function (b, i) { b.addEventListener("click", function () { show(i); }); });
    show(0);
    var h4 = item.querySelector("h4"), cat = item.querySelector(".cat"), lead = item.querySelector("p");
    card.querySelector(".ih-card-cat").textContent = "RAKUN" + (cat ? " · " + cat.textContent : "");
    card.querySelector("#ih-card-title").textContent = h4 ? h4.textContent : "";
    var full = LANG === "pl" ? ((window.IH_RAKUN_DESC || {})[id] || OWN[id] || "") : "";
    card.querySelector(".ih-card-desc").innerHTML = full || (lead ? "<p>" + esc(lead.textContent) + "</p>" : "");
    card.querySelector(".ih-card-buy").innerHTML = '<a class="ih-btn" href="' + esc(buyHref) + '" target="_blank" rel="noopener">Buy online</a>';
    card.hidden = false; document.body.style.overflow = "hidden";
    card.querySelector(".ih-card-x").focus();
  }

  /* 3. Sekcja "Raccoon's world" → stała treść o Rakunie (bez bloga do prowadzenia) */
  var blog = document.getElementById("blog");
  if (blog) {
    var eb = blog.querySelector(".eyebrow"), h2 = blog.querySelector("h2"), p = blog.querySelector(".split-text > p");
    if (eb) eb.textContent = "Raccoon's world";
    if (h2) h2.textContent = "The Raccoon – your helper with housework";
    if (p) p.textContent = "The Raccoon is the hero of the IDEA HOME cleaning range. On every label you'll find him in a different everyday situation – at the sink, at the washbasin, at the window and on the road in his pink convertible. We combine effective formulas with pleasant scents and economical 5 l canisters to make cleaning simpler and a little more enjoyable.";
    var cards = blog.querySelector(".blog-cards"); if (cards) cards.remove();
    var more = blog.querySelector(".btn"); if (more) more.remove();
  }
  document.querySelectorAll('a[href="#blog"]').forEach(function (a) { if (/dziennik/i.test(a.textContent)) a.textContent = "Raccoon's world"; });

  // "About us": bez niepotwierdzonych deklaracji ekologicznych (biodegradowalność, "dla planety")
  var about = document.querySelector("#o-marce .split-text > p");
  if (about && /biodegrad/i.test(about.textContent)) about.textContent = "RAKUN was born from a love of simple home rituals. We create effective cleaning products in pleasant scents that turn cleaning into a moment of pleasure.";

  /* 4. Linki bez celu (#) i stopka */
  var fix = {
    "Read more": "../inspiracje.html",
    "FAQ": "../kontakt.html#faq",
    "Delivery": LANG === "pl" ? SHOP : MARKET.url,
    "Returns": LANG === "pl" ? SHOP : MARKET.url,
    "Privacy policy": "../polityka-prywatnosci.html",
    "Terms of use": "../regulamin.html",
    "Sitemap": "../index.html"
  };
  document.querySelectorAll('a[href="#"]').forEach(function (a) {
    var t = a.textContent.trim();
    if (fix[t]) { a.href = fix[t]; if (/^https?:/.test(fix[t])) { a.target = "_blank"; a.rel = "noopener"; } }
  });
  var mapLink = Array.prototype.find.call(document.querySelectorAll(".footer-bottom-links a"), function (a) { return a.textContent.trim() === "Sitemap"; });
  if (mapLink) mapLink.textContent = "IDEA HOME";
  var kontakt = Array.prototype.find.call(document.querySelectorAll("footer a"), function (a) { return a.textContent.trim() === "Contact"; });
  if (kontakt) kontakt.href = "../kontakt.html";

  // "Buy now": sklep dladomu.sklep.pl obok Allegro
  var allegro = document.querySelector(".allegro-badge");
  if (allegro && LANG !== "pl") {
    var ip = allegro.parentElement.previousElementSibling;
    if (ip && ip.tagName === "P") ip.textContent = LANG === "cs" ? "RAKUN products are available on Allegro.cz." : "RAKUN products are available on Amazon.de.";
    allegro.href = MARKET.url; allegro.target = "_blank"; allegro.rel = "noopener";
    allegro.className = LANG === "cs" ? "ih-btn ih-allegro" : "ih-btn"; allegro.textContent = MARKET.name;
  } else if (allegro) {
    var p = allegro.parentElement, intro = p.previousElementSibling;
    if (intro && intro.tagName === "P") intro.textContent = "RAKUN products are available on Amazon.de.";
    var shop = document.createElement("a");
    shop.className = "ih-btn"; shop.href = SHOP + "/search?q=rakun"; shop.target = "_blank"; shop.rel = "noopener";
    shop.textContent = "dladomu.sklep.pl";
    p.insertBefore(shop, allegro);
    allegro.href = "https://allegro.pl/uzytkownik/Leviatan_SHOP?string=RAKUN";
    allegro.target = "_blank"; allegro.rel = "noopener";
    allegro.className = "ih-btn ih-allegro"; allegro.textContent = "allegro.pl";
  }
  // logo IDEA HOME w stopce prowadzi na stronę główną
  var ihLogo = document.querySelector(".idea-home-logo img");
  if (ihLogo && !ihLogo.closest("a")) {
    var a = document.createElement("a"); a.href = "../index.html"; a.setAttribute("aria-label", "IDEA HOME – home page");
    ihLogo.parentNode.insertBefore(a, ihLogo); a.appendChild(ihLogo);
  }
  // rok w stopce
  var copy = document.querySelector(".footer-bottom > span");
  if (copy) copy.textContent = "© " + new Date().getFullYear() + " RAKUN – a range by IDEA HOME by Leviatan.";
})();
