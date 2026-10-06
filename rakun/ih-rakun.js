/* Dopasowanie podstrony RAKUN do strony IDEA HOME (wstawiane przez tools/import-rakun.ps1):
   wspólny nagłówek z powrotem do IDEA HOME, ceny i przyciski "Kup online" przy produktach, poprawione linki w stopce. */
(function () {
  var SHOP = "https://www.dladomu.sklep.pl";
  var data = {};
  (window.IH_SHOP_PRODUCTS || []).forEach(function (p) { data[p.id] = p; });

  /* 1. Jeden nagłówek: logo IDEA HOME (powrót) + logo RAKUN, menu RAKUNA, "Kup online", menu na telefonie */
  var inner = document.querySelector("header .nav-inner"), logo = inner && inner.querySelector(".logo"), nav = inner && inner.querySelector("nav.main-nav");
  if (inner && logo && nav) {
    var brand = document.createElement("div"); brand.className = "ih-brand";
    var home = document.createElement("a"); home.className = "ih-home"; home.href = "../index.html";
    home.setAttribute("aria-label", "IDEA HOME – strona główna"); home.title = "Wróć na stronę IDEA HOME";
    home.innerHTML = '<img class="on-dark" src="../img/logo-ideahome-white.png" alt="" width="600" height="532"><img class="on-light" src="../img/logo-ideahome.png" alt="" width="600" height="532">';
    logo.parentNode.insertBefore(brand, logo); brand.appendChild(home); brand.appendChild(logo);
    var buy = document.createElement("a"); buy.className = "ih-buy"; buy.href = SHOP + "/search?q=rakun"; buy.target = "_blank"; buy.rel = "noopener"; buy.textContent = "Kup online";
    var allLink = document.createElement("a"); allLink.href = "../produkty.html"; allLink.textContent = "Wszystkie produkty"; allLink.className = "ih-all";
    nav.appendChild(allLink);
    var buyM = buy.cloneNode(true); buyM.className = "ih-buy ih-buy-m"; nav.appendChild(buyM);
    var tog = document.createElement("button"); tog.type = "button"; tog.className = "ih-burger"; tog.setAttribute("aria-label", "Otwórz menu"); tog.setAttribute("aria-expanded", "false");
    tog.innerHTML = "<span></span><span></span><span></span>";
    var right = document.createElement("div"); right.className = "ih-right"; right.appendChild(buy); right.appendChild(tog);
    inner.appendChild(right);
    tog.addEventListener("click", function () { var o = nav.classList.toggle("ih-open"); tog.setAttribute("aria-expanded", o); document.querySelector("header").classList.toggle("ih-menu-open", o); });
    nav.querySelectorAll("a").forEach(function (a) { a.addEventListener("click", function () { nav.classList.remove("ih-open"); tog.setAttribute("aria-expanded", "false"); document.querySelector("header").classList.remove("ih-menu-open"); }); });
  }

  // główny nagłówek strony (dla Google i czytników ekranu): pasek "Odkryj świat Rakuna" albo ukryty h1
  if (!document.querySelector("h1")) {
    var h1 = document.createElement("h1"); h1.className = "ih-sr";
    h1.textContent = "RAKUN – seria środków czystości IDEA HOME";
    document.body.insertBefore(h1, document.body.firstChild);
  }

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
