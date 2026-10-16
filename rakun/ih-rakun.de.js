/* Plik generowany przez tools/i18n-generuj.pl z rakun/ih-rakun.js – nie edytuj recznie. */
/* Dopasowanie podstrony RAKUN do strony IDEA HOME (wstawiane przez tools/import-rakun.ps1):
   wspólny nagłówek z powrotem do IDEA HOME, ceny i przyciski "Online kaufen" przy produktach, poprawione linki w stopce. */
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

  /* 1. Jeden nagłówek: logo IDEA HOME (powrót) + logo RAKUN, menu RAKUNA, "Online kaufen", menu na telefonie */
  var inner = document.querySelector("header .nav-inner"), logo = inner && inner.querySelector(".logo"), nav = inner && inner.querySelector("nav.main-nav");
  if (inner && logo && nav) {
    var brand = document.createElement("div"); brand.className = "ih-brand";
    var home = document.createElement("a"); home.className = "ih-home"; home.href = "../index.html";
    home.setAttribute("aria-label", "IDEA HOME – Startseite"); home.title = "Zurück zur IDEA HOME Website";
    home.innerHTML = '<img class="on-dark" src="../img/logo-ideahome-white.png" alt="" width="600" height="532"><img class="on-light" src="../img/logo-ideahome.png" alt="" width="600" height="532">';
    logo.parentNode.insertBefore(brand, logo); brand.appendChild(home); brand.appendChild(logo);
    var buy = document.createElement("a"); buy.className = "ih-buy"; buy.href = MARKET.url; buy.target = "_blank"; buy.rel = "noopener"; buy.textContent = "Online kaufen";
    var allLink = document.createElement("a"); allLink.href = "../produkty.html"; allLink.textContent = "Alle Produkte"; allLink.className = "ih-all";
    nav.appendChild(allLink);
    var buyM = buy.cloneNode(true); buyM.className = "ih-buy ih-buy-m"; nav.appendChild(buyM);
    var tog = document.createElement("button"); tog.type = "button"; tog.className = "ih-burger"; tog.setAttribute("aria-label", "Menü öffnen"); tog.setAttribute("aria-expanded", "false");
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

  // główny nagłówek strony (dla Google i czytników ekranu): pasek "Entdecken Sie die Welt des Waschbären" albo ukryty h1
  if (!document.querySelector("h1")) {
    var h1 = document.createElement("h1"); h1.className = "ih-sr";
    h1.textContent = "RAKUN – eine Reinigungsmittel-Serie von IDEA HOME";
    document.body.insertBefore(h1, document.body.firstChild);
  }

  // sekcja chemii: nowy nagłówek + Aktywna piana do nagrobków jako pierwszy produkt
  var chem = document.getElementById("chemia");
  if (chem) {
    var ch2 = chem.querySelector(".prod-heading h2"), cp = chem.querySelector(".prod-heading p"), ce = chem.querySelector(".prod-heading .eyebrow");
    if (ch2) ch2.textContent = "RAKUN Reinigungsmittel";
    if (ce) ce.textContent = "Reinigungsmittel";
    if (cp) cp.textContent = "Spülmittel, Glasreiniger und Aktivschaum für Grabsteine – wirksame Reinigung ohne Schrubben.";
    var grid = chem.querySelector(".editorial-grid");
    if (grid && !grid.querySelector(".ih-piana")) {
      var it = document.createElement("div"); it.className = "editorial-item ih-piana";
      it.innerHTML = '<div class="thumb"><img class="img-1" src="ih/aktywna-piana.png" alt="RAKUN Aktivschaum zur Grabsteinreinigung 400 ml"><img class="img-2" src="../img/foto/baner-aktywna-pianka.jpg" alt="Aktivschaum auf einem Grabstein"></div>' +
        '<div class="cat">Aktivschaum</div><h4>Für Grabsteine</h4><p>Entfernt Schmutz, Ablagerungen und Schlieren vom Stein – ohne Schrubben.</p>';
      grid.insertBefore(it, grid.firstChild);
    }
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
    var name = ((item.querySelector("h4") || {}).textContent || "") + " " + ((item.querySelector(".cat") || {}).textContent || "");
    var hit = MAP.find(function (m) { return m[0].test(name); });
    if (!hit) return;
    var p = hit[1] && data[hit[1]];
    var buy = document.createElement("div");
    buy.className = "ih-buyrow";
    if (LANG !== "pl") {
      buy.innerHTML = '<a class="ih-btn" href="' + MARKET.url + '" target="_blank" rel="noopener">Online kaufen</a>';
    } else if (p) {
      buy.innerHTML = '<a class="ih-btn" href="' + p.url + '" target="_blank" rel="noopener">Online kaufen</a>';
    } else {
      buy.innerHTML = '<a class="ih-btn ih-btn-outline" href="' + SHOP + '/search?q=' + encodeURIComponent("rakun roll") + '" target="_blank" rel="noopener">Im Shop ansehen</a>';
    }
    // karta produktu: galeria zdjęć ze sklepu + pełny opis
    if (p) {
      var more = document.createElement("button");
      more.type = "button"; more.className = "ih-btn ih-btn-outline ih-more"; more.textContent = "Details";
      buy.appendChild(more);
      var open = function () { openCard(item, hit[1], p, buy.querySelector("a").href); };
      more.addEventListener("click", open);
      var th = item.querySelector(".thumb");
      if (th) { th.style.cursor = "pointer"; th.setAttribute("role", "button"); th.setAttribute("tabindex", "0"); th.setAttribute("aria-label", "Details"); th.addEventListener("click", open); th.addEventListener("keydown", function (e) { if (e.key === "Enter") open(); }); }
    }
    item.appendChild(buy);
  });

  /* 2b. Karta produktu (okno): zdjęcia ze sklepu dladomu.sklep.pl i pełny opis (ih/rakun-opisy.js, tylko po polsku) */
  if (LANG === "pl") { var ds = document.createElement("script"); ds.src = "ih/rakun-opisy.js?v=202610160941"; document.head.appendChild(ds); }
  // produkty bez opisu w sklepie
  var OWN = {
    "plyn-do-mycia-naczyn-lemon-ih-rakun-5l": "<p>Płyn do mycia naczyń RAKUN Lemon w ekonomicznym kanistrze 5 l. Skutecznie usuwa tłuszcz z naczyń, garnków i patelni, zostawiając cytrusową świeżość.</p><p>Duża pojemność wystarcza na długo i pozwala wygodnie uzupełniać dozownik w domu, biurze czy kuchni firmowej.</p>",
    "plyn-do-mycia-naczyn-mint-ih-rakun-5l": "<p>Płyn do mycia naczyń RAKUN Mint w ekonomicznym kanistrze 5 l. Chłodząca mięta i skuteczne działanie na tłuste garnki i patelnie.</p><p>Duża pojemność wystarcza na długo i pozwala wygodnie uzupełniać dozownik w domu, biurze czy kuchni firmowej.</p>"
  };
  var card = null;
  function esc(s) { return String(s == null ? "" : s).replace(/[&<>"]/g, function (c) { return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c]; }); }
  function openCard(item, id, p, buyHref) {
    if (!card) {
      card = document.createElement("div"); card.className = "ih-card"; card.hidden = true;
      card.innerHTML = '<div class="ih-card-box" role="dialog" aria-modal="true" aria-labelledby="ih-card-title"><button type="button" class="ih-card-x" aria-label="Schließen">×</button><div class="ih-card-gal"><img class="ih-card-main" alt=""><div class="ih-card-thumbs"></div></div><div class="ih-card-body"><span class="ih-card-cat"></span><h3 id="ih-card-title"></h3><div class="ih-card-desc"></div><div class="ih-card-buy"></div></div></div>';
      document.body.appendChild(card);
      var close = function () { card.hidden = true; document.body.style.overflow = ""; };
      card.addEventListener("click", function (e) { if (e.target === card || e.target.closest(".ih-card-x")) close(); });
      document.addEventListener("keydown", function (e) { if (e.key === "Escape" && !card.hidden) close(); });
    }
    var own = item.querySelector(".thumb .img-1");
    var imgs = [];
    if (own) imgs.push(own.getAttribute("src"));
    (p.imgs || [p.img]).forEach(function (u) { if (u && imgs.indexOf(u) < 0) imgs.push(u); });
    var main = card.querySelector(".ih-card-main"), thumbs = card.querySelector(".ih-card-thumbs");
    var show = function (i) { main.src = imgs[i]; thumbs.querySelectorAll("button").forEach(function (b, j) { b.setAttribute("aria-current", j === i); }); };
    thumbs.innerHTML = imgs.map(function (u, i) { return '<button type="button" aria-label="Zdjęcie ' + (i + 1) + '"><img src="' + esc(u) + '" alt="" loading="lazy"></button>'; }).join("");
    thumbs.querySelectorAll("button").forEach(function (b, i) { b.addEventListener("click", function () { show(i); }); });
    show(0);
    var h4 = item.querySelector("h4"), cat = item.querySelector(".cat"), lead = item.querySelector("p");
    card.querySelector(".ih-card-cat").textContent = "RAKUN" + (cat ? " · " + cat.textContent : "");
    card.querySelector("#ih-card-title").textContent = h4 ? h4.textContent : "";
    var full = LANG === "pl" ? ((window.IH_RAKUN_DESC || {})[id] || OWN[id] || "") : "";
    card.querySelector(".ih-card-desc").innerHTML = full || (lead ? "<p>" + esc(lead.textContent) + "</p>" : "");
    card.querySelector(".ih-card-buy").innerHTML = '<a class="ih-btn" href="' + esc(buyHref) + '" target="_blank" rel="noopener">Online kaufen</a>';
    card.hidden = false; document.body.style.overflow = "hidden";
    card.querySelector(".ih-card-x").focus();
  }

  /* 3. Sekcja "Die Welt des Waschbären" → stała treść o Rakunie (bez bloga do prowadzenia) */
  var blog = document.getElementById("blog");
  if (blog) {
    var eb = blog.querySelector(".eyebrow"), h2 = blog.querySelector("h2"), p = blog.querySelector(".split-text > p");
    if (eb) eb.textContent = "Die Welt des Waschbären";
    if (h2) h2.textContent = "Der Waschbär – Ihr Helfer im Haushalt";
    if (p) p.textContent = "Der Waschbär ist der Held der IDEA HOME Reinigungsserie. Auf jedem Etikett finden Sie ihn in einer anderen Alltagssituation – an der Spüle, am Waschbecken, am Fenster und unterwegs in seinem rosa Cabrio. Wir verbinden wirksame Formeln mit angenehmen Düften und sparsamen 5-l-Kanistern, damit Putzen einfacher und ein bisschen schöner wird.";
    var cards = blog.querySelector(".blog-cards"); if (cards) cards.remove();
    var more = blog.querySelector(".btn"); if (more) more.remove();
  }
  document.querySelectorAll('a[href="#blog"]').forEach(function (a) { if (/dziennik/i.test(a.textContent)) a.textContent = "Die Welt des Waschbären"; });

  // "Über uns": bez niepotwierdzonych deklaracji ekologicznych (biodegradowalność, "dla planety")
  var about = document.querySelector("#o-marce .split-text > p");
  if (about && /biodegrad/i.test(about.textContent)) about.textContent = "RAKUN entstand aus der Liebe zu einfachen Ritualen zu Hause. Wir entwickeln wirksame Reinigungsmittel mit angenehmen Düften, die das Putzen zu einem kleinen Vergnügen machen.";

  /* 4. Linki bez celu (#) i stopka */
  var fix = {
    "Weiterlesen": "../inspiracje.html",
    "FAQ": "../kontakt.html#faq",
    "Lieferung": LANG === "pl" ? SHOP : MARKET.url,
    "Rückgabe": LANG === "pl" ? SHOP : MARKET.url,
    "Datenschutzerklärung": "../polityka-prywatnosci.html",
    "Nutzungsbedingungen": "../regulamin.html",
    "Sitemap": "../index.html"
  };
  document.querySelectorAll('a[href="#"]').forEach(function (a) {
    var t = a.textContent.trim();
    if (fix[t]) { a.href = fix[t]; if (/^https?:/.test(fix[t])) { a.target = "_blank"; a.rel = "noopener"; } }
  });
  var mapLink = Array.prototype.find.call(document.querySelectorAll(".footer-bottom-links a"), function (a) { return a.textContent.trim() === "Sitemap"; });
  if (mapLink) mapLink.textContent = "IDEA HOME";
  var kontakt = Array.prototype.find.call(document.querySelectorAll("footer a"), function (a) { return a.textContent.trim() === "Kontakt"; });
  if (kontakt) kontakt.href = "../kontakt.html";

  // "Jetzt kaufen": sklep dladomu.sklep.pl obok Allegro
  var allegro = document.querySelector(".allegro-badge");
  if (allegro && LANG !== "pl") {
    var ip = allegro.parentElement.previousElementSibling;
    if (ip && ip.tagName === "P") ip.textContent = LANG === "cs" ? "RAKUN Produkte erhalten Sie auf Allegro.cz." : "RAKUN Produkte erhalten Sie auf Amazon.de.";
    allegro.href = MARKET.url; allegro.target = "_blank"; allegro.rel = "noopener";
    allegro.className = LANG === "cs" ? "ih-btn ih-allegro" : "ih-btn"; allegro.textContent = MARKET.name;
  } else if (allegro) {
    var p = allegro.parentElement, intro = p.previousElementSibling;
    if (intro && intro.tagName === "P") intro.textContent = "RAKUN Produkte erhalten Sie auf Amazon.de.";
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
    var a = document.createElement("a"); a.href = "../index.html"; a.setAttribute("aria-label", "IDEA HOME – Startseite");
    ihLogo.parentNode.insertBefore(a, ihLogo); a.appendChild(ihLogo);
  }
  // rok w stopce
  var copy = document.querySelector(".footer-bottom > span");
  if (copy) copy.textContent = "© " + new Date().getFullYear() + " RAKUN – eine Serie der Marke IDEA HOME by Leviatan.";
})();
