/* Wysyłka formularzy na skrzynkę firmową przez FormSubmit (formsubmit.co).
   Pierwsza wiadomość wyśle na ten adres e-mail z prośbą o aktywację – trzeba kliknąć link w tej wiadomości. */
window.IH_FORM = (function () {
  var TO = "leviatan@leviatan.pl";
  function send(subject, fields, done) {
    var data = { _subject: subject, _template: "table", _captcha: "false" };
    Object.keys(fields).forEach(function (k) { data[k] = fields[k]; });
    fetch("https://formsubmit.co/ajax/" + TO, {
      method: "POST",
      headers: { "Content-Type": "application/json", "Accept": "application/json" },
      body: JSON.stringify(data)
    }).then(function (r) { return r.json().catch(function () { return {}; }).then(function (j) { done(r.ok && String(j.success) !== "false"); }); })
      .catch(function () { done(false); });
  }
  return { send: send, to: TO };
})();
