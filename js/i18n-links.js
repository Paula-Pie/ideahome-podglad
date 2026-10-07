/* Wersje językowe (en/de/cs): strona ma <base href> wskazujący na pliki polskiej wersji (zdjęcia, style, skrypty),
   a ten skrypt kieruje linki do podstron na ich odpowiedniki w bieżącym języku – także te dodane później przez skrypty. */
(function () {
  var LANG = window.IH_LANG; if (!LANG || LANG === "pl") return;
  var root = new URL(window.IH_ROOT_REL || "../", location.href).href;
  var here = location.href.split("#")[0];
  function fix(a) {
    var raw = a.getAttribute("href");
    if (!raw || a.dataset.ihLang) return;
    if (raw.charAt(0) === "#") { a.href = here + raw; a.dataset.ihLang = "1"; return; }
    var u; try { u = new URL(raw, document.baseURI); } catch (e) { return; }
    if (u.href.indexOf(root) !== 0) return;
    var rel = u.href.slice(root.length);
    if (/^(en|de|cs|p)\//.test(rel) || a.hasAttribute("hreflang")) return;     // inne języki, strony produktów (tylko PL)
    if (!/^([\w-]+\/)*[\w-]*\.html(#.*)?$/.test(rel) && rel !== "" && !/^[\w-]+\/$/.test(rel)) return; // pliki (zdjęcia, PDF)
    a.href = root + LANG + "/" + rel; a.dataset.ihLang = "1";
  }
  function scan(n) { if (n.querySelectorAll) { if (n.tagName === "A") fix(n); n.querySelectorAll("a[href]").forEach(fix); } }
  document.addEventListener("DOMContentLoaded", function () {
    scan(document.body);
    new MutationObserver(function (ms) { ms.forEach(function (m) { m.addedNodes.forEach(scan); }); }).observe(document.body, { childList: true, subtree: true });
  });
})();
