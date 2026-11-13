/* Voice · rastreio único (Marketing da Central Voice)
   UTM primeiro/último contato + GA4. Pixel e Clarity só entram se a página ainda não tiver. */
(function () {
  var PIXEL = "1268398628617400", GA4 = "G-SZ8QPQBDGW", CLARITY = "z7vooiigar";

  // ---- UTM: primeiro e último contato (cookie de 90 dias em todo o domínio)
  var DOM = /(^|\.)comunidadevoice\.com\.br$/.test(location.hostname) ? "; domain=.comunidadevoice.com.br" : "";
  var CAMPOS = ["utm_source", "utm_medium", "utm_campaign", "utm_content", "utm_term", "fbclid", "gclid"];
  function ler() { var m = document.cookie.match(/(?:^|; )cv_utm=([^;]*)/); try { return m ? JSON.parse(decodeURIComponent(m[1])) : {}; } catch (e) { return {}; } }
  function gravar(o) { document.cookie = "cv_utm=" + encodeURIComponent(JSON.stringify(o)) + "; max-age=" + 90 * 86400 + "; path=/; SameSite=Lax" + DOM; }
  try {
    var q = new URLSearchParams(location.search), t = {}, achou = false, st = ler();
    CAMPOS.forEach(function (c) { if (q.get(c)) { t[c] = q.get(c); achou = true; } });
    if (achou) { t.pagina = location.pathname; t.em = new Date().toISOString(); if (!st.primeiro) st.primeiro = t; st.ultimo = t; gravar(st); }
    else if (!st.primeiro && document.referrer && document.referrer.indexOf(location.hostname) < 0) {
      t = { utm_source: new URL(document.referrer).hostname, utm_medium: "referral", pagina: location.pathname, em: new Date().toISOString() };
      st.primeiro = t; st.ultimo = t; gravar(st);
    }
  } catch (e) {}
  window.cvUtm = ler;

  // ---- Pixel Meta (só se a página não tiver o dela)
  if (!window.fbq) {
    !function (f, b, e, v, n, t, s) { n = f.fbq = function () { n.callMethod ? n.callMethod.apply(n, arguments) : n.queue.push(arguments) }; if (!f._fbq) f._fbq = n; n.push = n; n.loaded = !0; n.version = "2.0"; n.queue = []; t = b.createElement(e); t.async = !0; t.src = v; s = b.getElementsByTagName(e)[0]; s.parentNode.insertBefore(t, s) }(window, document, "script", "https://connect.facebook.net/en_US/fbevents.js");
    fbq("init", PIXEL); fbq("track", "PageView");
  }

  // ---- GA4
  var g = document.createElement("script"); g.async = true; g.src = "https://www.googletagmanager.com/gtag/js?id=" + GA4; document.head.appendChild(g);
  window.dataLayer = window.dataLayer || []; window.gtag = function () { dataLayer.push(arguments); };
  gtag("js", new Date()); gtag("config", GA4);

  // ---- Clarity (só se a página não tiver o dela)
  if (!window.clarity) {
    (function (c, l, a, r, i, t, y) { c[a] = function () { (c[a].q = c[a].q || []).push(arguments) }; t = l.createElement(r); t.async = 1; t.src = "https://www.clarity.ms/tag/" + i; y = l.getElementsByTagName(r)[0]; y.parentNode.insertBefore(t, y); })(window, document, "clarity", "script", CLARITY);
  }

  // ---- Liga a origem (UTM) à pessoa quando ela informa e-mail/telefone (checkout)
  window.cvToque = function (email, phone) {
    try {
      var st = ler(); if (!st.primeiro && !st.ultimo) return;
      fetch("https://znnepziakycrmohjxrhj.supabase.co/functions/v1/mkt-toque", {
        method: "POST", headers: { "Content-Type": "application/json" }, keepalive: true,
        body: JSON.stringify({ email: email, phone: phone, primeiro: st.primeiro, ultimo: st.ultimo, pagina: location.pathname })
      }).catch(function () {});
    } catch (e) {}
  };
})();
