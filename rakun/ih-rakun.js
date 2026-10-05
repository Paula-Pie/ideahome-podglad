/* Dopasowanie podstrony RAKUN do strony IDEA HOME (wstawiane przez tools/import-rakun.ps1):
   pasek powrotu do IDEA HOME, ceny i przyciski "Kup online" przy produktach, poprawione linki w stopce. */
(function () {
  var SHOP = "https://www.dladomu.sklep.pl";
  var data = {};
  (window.IH_SHOP_PRODUCTS || []).forEach(function (p) { data[p.id] = p; });

  /* 1. Pasek IDEA HOME nad nagłówkiem RAKUN */
  var bar = document.createElement("div");
  bar.className = "ih-bar";
  bar.innerHTML = '<div class="ih-bar-in">' +
    '<a class="ih-back" href="../index.html" aria-label="Wróć na stronę IDEA HOME"><span aria-hidden="true">←</span> <img src="../img/logo-ideahome-white.png" alt="IDEA HOME" width="600" height="532"></a>' +
    '<span class="ih-tag">RAKUN to seria marki IDEA HOME</span>' +
    '<nav class="ih-links" aria-label="IDEA HOME"><a href="../produkty.html">Produkty</a><a href="../serie.html">Serie</a><a href="../kontakt.html">Kontakt</a>' +
    '<a class="ih-buy" href="' + SHOP + '/search?q=rakun" target="_blank" rel="noopener">Kup online</a></nav></div>';
  document.body.insertBefore(bar, document.body.firstChild);
  document.documentElement.classList.add("has-ih-bar");

  /* 2. Ceny i przyciski przy produktach (dopasowanie po nazwie z karty) */
  var MAP = [
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
    if (p) {
      var price = p.price != null ? p.price.toFixed(2).replace(".", ",") + " zł" : "";
      buy.innerHTML = (price ? '<span class="ih-price">' + price + (p.avail === false ? ' <small>chwilowo niedostępny</small>' : "") + "</span>" : "") +
        '<a class="ih-btn" href="' + p.url + '" target="_blank" rel="noopener">Kup online</a>';
    } else {
      buy.innerHTML = '<a class="ih-btn ih-btn-outline" href="' + SHOP + '/search?q=' + encodeURIComponent("rakun roll") + '" target="_blank" rel="noopener">Sprawdź w sklepie</a>';
    }
    item.appendChild(buy);
  });

  /* 3. Sekcja "Dziennik Rakuna" → stała treść o Rakunie (bez bloga do prowadzenia) */
  var blog = document.getElementById("blog");
  if (blog) {
    var eb = blog.querySelector(".eyebrow"), h2 = blog.querySelector("h2"), p = blog.querySelector(".split-text > p");
    if (eb) eb.textContent = "Świat Rakuna";
    if (h2) h2.textContent = "Rakun – Twój pomocnik w domowych porządkach";
    if (p) p.textContent = "Rakun to bohater serii środków czystości IDEA HOME. Na każdej etykiecie znajdziesz go w innej codziennej sytuacji – przy zlewie, przy umywalce, przy oknie i w podróży swoim różowym kabrioletem. Łączymy skuteczne formuły z przyjemnymi zapachami i ekonomicznymi kanistrami 5 l, żeby sprzątanie było prostsze i odrobinę przyjemniejsze.";
    var cards = blog.querySelector(".blog-cards"); if (cards) cards.remove();
    var more = blog.querySelector(".btn"); if (more) more.remove();
  }
  document.querySelectorAll('a[href="#blog"]').forEach(function (a) { if (/dziennik/i.test(a.textContent)) a.textContent = "Świat Rakuna"; });

  // "O marce": bez niepotwierdzonych deklaracji ekologicznych (biodegradowalność, "dla planety")
  var about = document.querySelector("#o-marce .split-text > p");
  if (about && /biodegrad/i.test(about.textContent)) about.textContent = "RAKUN powstał z miłości do prostych, domowych rytuałów. Tworzymy skuteczne środki czystości w przyjemnych zapachach, które zamieniają sprzątanie w chwilę przyjemności.";

  /* 4. Linki bez celu (#) i stopka */
  var fix = {
    "Czytaj dziennik": "../inspiracje.html",
    "FAQ": "../kontakt.html#faq",
    "Dostawa": SHOP,
    "Zwroty": SHOP,
    "Polityka prywatności": "../polityka-prywatnosci.html",
    "Regulamin": "../regulamin.html",
    "Mapa strony": "../index.html"
  };
  document.querySelectorAll('a[href="#"]').forEach(function (a) {
    var t = a.textContent.trim();
    if (fix[t]) { a.href = fix[t]; if (/^https?:/.test(fix[t])) { a.target = "_blank"; a.rel = "noopener"; } }
  });
  var mapLink = Array.prototype.find.call(document.querySelectorAll(".footer-bottom-links a"), function (a) { return a.textContent.trim() === "Mapa strony"; });
  if (mapLink) mapLink.textContent = "IDEA HOME";
  var kontakt = Array.prototype.find.call(document.querySelectorAll("footer a"), function (a) { return a.textContent.trim() === "Kontakt"; });
  if (kontakt) kontakt.href = "../kontakt.html";

  // "Kup teraz": sklep dladomu.sklep.pl obok Allegro
  var allegro = document.querySelector(".allegro-badge");
  if (allegro) {
    var p = allegro.parentElement, intro = p.previousElementSibling;
    if (intro && intro.tagName === "P") intro.textContent = "Produkty RAKUN kupisz w sklepie dladomu.sklep.pl i na Allegro.";
    var shop = document.createElement("a");
    shop.className = "ih-btn"; shop.href = SHOP + "/search?q=rakun"; shop.target = "_blank"; shop.rel = "noopener";
    shop.textContent = "dladomu.sklep.pl";
    p.insertBefore(shop, allegro);
  }
  // logo IDEA HOME w stopce prowadzi na stronę główną
  var ihLogo = document.querySelector(".idea-home-logo img");
  if (ihLogo && !ihLogo.closest("a")) {
    var a = document.createElement("a"); a.href = "../index.html"; a.setAttribute("aria-label", "IDEA HOME – strona główna");
    ihLogo.parentNode.insertBefore(a, ihLogo); a.appendChild(ihLogo);
  }
  // rok w stopce
  var copy = document.querySelector(".footer-bottom > span");
  if (copy) copy.textContent = "© " + new Date().getFullYear() + " RAKUN – seria marki IDEA HOME by Leviatan.";
})();
