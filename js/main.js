/* שפרה גבות – לוגיקה של האתר. אין צורך לערוך קובץ זה; התוכן נמצא ב-js/content.js */
(function () {
  "use strict";
  var S = window.SITE || {};
  var B = S.business || {};

  var ICON = {
    wa: '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M17.5 14.4c-.3-.1-1.7-.9-2-1-.3-.1-.5-.1-.7.1-.2.3-.8 1-.9 1.2-.2.2-.3.2-.6.1-.3-.1-1.2-.5-2.3-1.4-.9-.8-1.4-1.7-1.6-2-.2-.3 0-.5.1-.6l.4-.5c.2-.2.2-.3.3-.5.1-.2 0-.4 0-.5l-.9-2.2c-.2-.6-.5-.5-.7-.5h-.6c-.2 0-.5.1-.8.4-.3.3-1 1-1 2.5s1.1 2.9 1.2 3.1c.1.2 2.1 3.2 5.1 4.5.7.3 1.3.5 1.7.6.7.2 1.4.2 1.9.1.6-.1 1.7-.7 1.9-1.4.2-.7.2-1.2.2-1.4-.1-.1-.3-.2-.6-.3zM12 21.8c-1.8 0-3.5-.5-5-1.4l-.4-.2-3.7 1 1-3.6-.2-.4C2.7 15.6 2.2 13.8 2.2 12 2.2 6.6 6.6 2.2 12 2.2S21.8 6.6 21.8 12 17.4 21.8 12 21.8zM12 0C5.4 0 0 5.4 0 12c0 2.1.6 4.2 1.6 6L0 24l6.2-1.6c1.8 1 3.8 1.5 5.8 1.5 6.6 0 12-5.4 12-12S18.6 0 12 0z"/></svg>',
    phone: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3.1 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.1 4.2 2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1 1 .4 1.9.7 2.8a2 2 0 0 1-.5 2.1L8 9.9a16 16 0 0 0 6 6l1.3-1.3a2 2 0 0 1 2.1-.4c.9.3 1.8.6 2.8.7a2 2 0 0 1 1.7 2z"/></svg>',
    pin: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M21 10c0 7-9 13-9 13S3 17 3 10a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>',
    clock: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><circle cx="12" cy="12" r="10"/><path d="M12 6v6l4 2"/></svg>',
    ig: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><rect x="2" y="2" width="20" height="20" rx="5"/><circle cx="12" cy="12" r="4"/><circle cx="17.5" cy="6.5" r="1" fill="currentColor"/></svg>',
    fb: '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M14 8V6c0-.9.6-1 1-1h2.5V1H14c-3.6 0-4.5 2.7-4.5 4.4V8H7v4h2.5v11h4.5V12h3.3l.5-4H14z"/></svg>',
    tt: '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M16.6 5.8A4.3 4.3 0 0 1 15.5 3h-3.4v13.4a2.6 2.6 0 1 1-2.6-2.6c.3 0 .5 0 .8.1V10.4a6 6 0 1 0 5.2 6V9.6a7.7 7.7 0 0 0 4.5 1.4V7.6s-2 .1-3.4-1.8z"/></svg>',
    menu: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M3 6h18M3 12h18M3 18h18"/></svg>',
    close: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M6 6l12 12M18 6L6 18"/></svg>',
    brow: '<svg viewBox="0 0 120 40" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round"><path d="M6 30C26 10 62 4 114 18"/><path d="M20 24c4-3 8-6 12-8M34 18c4-2 8-4 12-5M50 14c4-1 9-2 14-2M68 12c5 0 10 1 15 2M86 14c5 1 10 3 15 5"/></svg>',
    thread: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round"><path d="M3 18c4-8 8-12 18-12"/><path d="M3 18c6-2 11-6 18-12" opacity=".5"/></svg>',
    blade: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round"><path d="M4 20L16 8"/><path d="M14 6l4 4M15 5l4 4"/><path d="M8 17l1 1M10 15l1 1"/></svg>',
    powder: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6"><circle cx="12" cy="12" r="8"/><circle cx="9" cy="10" r="1" fill="currentColor"/><circle cx="14" cy="9" r=".8" fill="currentColor"/><circle cx="12" cy="14" r="1" fill="currentColor"/><circle cx="15.5" cy="13.5" r=".7" fill="currentColor"/></svg>',
    crown: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linejoin="round"><path d="M3 18h18l-1.5-10-4.5 4-3-6-3 6-4.5-4z"/></svg>',
    brush: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round"><path d="M18 3l3 3-9 9-3-3z"/><path d="M9 12c-3 0-5 2-5 5 0 1.5-1 3-1 3s4 0 6-2c1.5-1.5 2-3 2-3"/></svg>',
    lip: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linejoin="round"><path d="M2 12c3-4 6-5 8-3 1 1 3 1 4 0 2-2 5-1 8 3-3 4-6 6-10 6S5 16 2 12z"/><path d="M2 12h20"/></svg>',
    arrow: '<svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="2"><path d="M19 12H5M11 6l-6 6 6 6"/></svg>'
  };
  var SERVICE_ICON = { threading: "thread", lip: "lip", microblading: "blade", powder: "powder", bridal: "crown", evening: "brush" };

  function esc(s) { return String(s == null ? "" : s).replace(/[&<>"']/g, function (c) { return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]; }); }
  function $(sel, root) { return (root || document).querySelector(sel); }
  function $all(sel, root) { return Array.prototype.slice.call((root || document).querySelectorAll(sel)); }

  /* WhatsApp link with an optional pre-filled message */
  function waLink(msg) {
    var text = encodeURIComponent(msg || "היי שפרה, אשמח לקבוע תור 😊");
    if (B.whatsapp) return "https://wa.me/" + B.whatsapp.replace(/\D/g, "") + "?text=" + text;
    if (B.phone) return "tel:" + B.phone.replace(/[^\d+]/g, "");
    return "index.html#contact";
  }
  window.waLink = waLink;

  var page = document.body.getAttribute("data-page") || "home";
  var home = page === "home" ? "" : "index.html";

  /* ---------- Header ---------- */
  var header = $("#site-header");
  if (header) {
    var logo = B.logo
      ? '<img src="' + esc(B.logo) + '" alt="' + esc(B.name) + '">'
      : '<span class="logo__text">' + esc(B.name) + '<small>BROW STUDIO</small></span>';
    header.outerHTML =
      '<header class="header' + (page !== "home" ? " header--solid" : "") + '" id="header">' +
      '<div class="container header__inner">' +
      '<a class="logo" href="index.html" aria-label="' + esc(B.name) + ' – דף הבית">' + logo + '</a>' +
      '<nav class="nav" id="nav" aria-label="ניווט ראשי">' +
      '<a href="' + home + '#services">טיפולים</a>' +
      '<a href="' + home + '#gallery">עבודות</a>' +
      '<a href="kalot.html"' + (page === "kalot" ? ' class="active"' : "") + '>כלות</a>' +
      '<a href="horaot.html"' + (page === "horaot" ? ' class="active"' : "") + '>הוראות טיפול</a>' +
      '<a href="' + home + '#academy">אקדמיה</a>' +
      '<a href="' + home + '#contact">צור קשר</a>' +
      '<a class="btn btn--primary" data-wa href="#">קביעת תור</a>' +
      '</nav>' +
      '<button class="menu-toggle" id="menuToggle" aria-label="פתיחת תפריט" aria-expanded="false">' + ICON.menu + '</button>' +
      '</div></header>';
  }

  /* ---------- Footer + floating WhatsApp ---------- */
  var footer = $("#site-footer");
  if (footer) {
    footer.outerHTML =
      '<footer class="footer"><div class="container">' +
      '<div class="footer__links"><a href="index.html">דף הבית</a><a href="kalot.html">חבילות כלה</a><a href="horaot.html">הוראות לפני ואחרי</a><a href="index.html#contact">צור קשר</a></div>' +
      '<div>© ' + new Date().getFullYear() + ' ' + esc(B.name) + ' · ' + esc(B.address) + ' · כל הזכויות שמורות</div>' +
      '</div></footer>' +
      '<a class="wa-float" data-wa href="#" aria-label="שליחת הודעה בוואטסאפ">' + ICON.wa + '</a>';
  }

  /* ---------- Services ---------- */
  var sv = $("#servicesGrid");
  if (sv && S.services) {
    sv.innerHTML = S.services.map(function (s) {
      return '<article class="card reveal' + (s.featured ? " card--featured" : "") + '">' +
        (s.featured ? '<span class="card__tag">הסיגנצ׳ר שלי</span>' : "") +
        '<div class="card__icon">' + (ICON[SERVICE_ICON[s.id]] || ICON.brow) + '</div>' +
        '<h3>' + esc(s.name) + '</h3>' +
        '<p>' + esc(s.text) + '</p>' +
        '<div class="card__meta"><span class="time">' + ICON.clock + esc(s.duration) + '</span>' +
        '<span class="price">' + (s.price ? esc(s.price) : "מחיר בהתאמה אישית") + '</span></div>' +
        '<a class="card__book" href="' + (s.id === "bridal" ? "kalot.html" : waLink("היי שפרה, אשמח לקבוע תור ל" + s.name)) + '"' + (s.id === "bridal" ? "" : ' target="_blank" rel="noopener"') + '>' +
        (s.id === "bridal" ? "לחבילות הכלה" : "לקביעת תור") + ' ' + ICON.arrow + '</a>' +
        '</article>';
    }).join("");
  }

  /* ---------- Gallery ---------- */
  var gal = $("#galleryGrid");
  if (gal) {
    var items = (S.gallery || []);
    if (items.length) {
      gal.innerHTML = items.map(function (g) {
        return '<figure class="reveal"><img loading="lazy" src="' + esc(g.src) + '" alt="' + esc(g.caption || "עבודה של שפרה גבות") + '">' +
          (g.caption ? '<figcaption>' + esc(g.caption) + '</figcaption>' : "") + '</figure>';
      }).join("");
    } else {
      var labels = ["עיצוב בחוט", "מיקרובליידינג", "גבות פודרה", "איפור כלה", "לפני ואחרי", "איפור ערב"];
      gal.innerHTML = labels.map(function (l) {
        return '<figure class="reveal"><div class="ph">' + ICON.brow + '<small>' + l + ' · תמונה בקרוב</small></div></figure>';
      }).join("");
    }
  }

  /* ---------- Reviews ---------- */
  var rv = $("#reviewsGrid");
  if (rv) {
    var reviews = S.reviews || [];
    if (reviews.length) {
      rv.className = "reviews";
      rv.innerHTML = reviews.map(function (r) {
        return '<blockquote class="review reveal"><div class="stars">★★★★★</div><p>״' + esc(r.text) + '״</p>' +
          '<cite>' + esc(r.name) + (r.source ? ' <small>· ' + esc(r.source) + '</small>' : "") + '</cite></blockquote>';
      }).join("");
    } else {
      rv.className = "";
      rv.innerHTML = '<div class="reviews-empty reveal"><div class="stars">★★★★★</div>' +
        '<h3>הלקוחות שלנו ממליצות בגוגל</h3><p>אפשר לקרוא את הביקורות של לקוחות שפרה גבות בגוגל, ולהשאיר ביקורת משלך אחרי הטיפול.</p></div>';
    }
  }

  /* ---------- FAQ ---------- */
  var fq = $("#faqList");
  if (fq && S.faq) {
    fq.innerHTML = S.faq.map(function (f, i) {
      return '<details class="reveal"' + (i === 0 ? " open" : "") + '><summary>' + esc(f.q) + '</summary><p>' + esc(f.a) + '</p></details>';
    }).join("");
  }

  /* ---------- Bridal packages ---------- */
  var pk = $("#packagesGrid");
  if (pk && S.bridalPackages) {
    pk.innerHTML = S.bridalPackages.map(function (p) {
      return '<article class="package reveal' + (p.highlight ? " package--hl" : "") + '">' +
        '<h3>' + esc(p.name) + '</h3>' +
        '<div class="price">' + (p.price ? esc(p.price) : "מחיר לפי פנייה") + '</div>' +
        '<ul>' + p.items.map(function (it) { return "<li>" + esc(it) + "</li>"; }).join("") + '</ul>' +
        '<a class="btn ' + (p.highlight ? "btn--gold" : "btn--ghost") + '" target="_blank" rel="noopener" href="' +
        waLink("היי שפרה, אני כלה ואשמח לשמוע על חבילת " + p.name + " 💍") + '">לבדיקת תאריך</a>' +
        '</article>';
    }).join("");
  }

  /* ---------- Contact details ---------- */
  var cl = $("#contactList");
  if (cl) {
    var rows = [];
    rows.push('<li><span class="ico">' + ICON.pin + '</span><div><b>' + esc(B.address) + '</b><span>' + esc(B.addressNote) + '</span></div></li>');
    if (B.phone) rows.push('<li><span class="ico">' + ICON.phone + '</span><div><a href="tel:' + esc(B.phone.replace(/[^\d+]/g, "")) + '"><b>' + esc(B.phone) + '</b></a><span>שיחה או וואטסאפ</span></div></li>');
    rows.push('<li><span class="ico">' + ICON.clock + '</span><div><b>שעות פעילות</b><span>' + esc(B.hours) + '</span></div></li>');
    cl.innerHTML = rows.join("");
  }
  var so = $("#socials");
  if (so) {
    var links = [["instagram", "ig", "אינסטגרם"], ["tiktok", "tt", "טיקטוק"], ["facebook", "fb", "פייסבוק"]]
      .filter(function (x) { return B[x[0]]; })
      .map(function (x) { return '<a href="' + esc(B[x[0]]) + '" target="_blank" rel="noopener" aria-label="' + x[2] + '">' + ICON[x[1]] + '</a>'; });
    so.innerHTML = links.join("");
    if (!links.length) so.style.display = "none";
  }

  /* ---------- Fill dynamic text & links ---------- */
  $all("[data-years]").forEach(function (el) { el.textContent = B.yearsExperience || "30"; });
  $all("[data-google]").forEach(function (el) { el.href = B.googleReviews; });
  $all("[data-img]").forEach(function (el) { var src = B[el.getAttribute("data-img")]; if (src) el.innerHTML = '<img src="' + esc(src) + '" alt="' + esc(B.name) + '">'; });
  $all("[data-logo-img]").forEach(function (el) { if (B.logo) { el.innerHTML = '<img src="' + esc(B.logo) + '" alt="' + esc(B.name) + '" style="object-fit:contain;padding:18%;background:#fff">'; } });
  $all("[data-wa]").forEach(function (el) {
    el.href = waLink(el.getAttribute("data-wa") || "");
    if (/^https?:/.test(el.href) && el.href.indexOf(location.host) === -1) { el.target = "_blank"; el.rel = "noopener"; }
    if (!el.querySelector("svg") && el.classList.contains("btn--wa")) el.insertAdjacentHTML("afterbegin", ICON.wa);
  });

  /* ---------- Mobile menu ---------- */
  var toggle = $("#menuToggle"), nav = $("#nav");
  if (toggle && nav) {
    toggle.addEventListener("click", function () {
      var open = nav.classList.toggle("open");
      toggle.setAttribute("aria-expanded", open);
      toggle.innerHTML = open ? ICON.close : ICON.menu;
    });
    $all("a", nav).forEach(function (a) { a.addEventListener("click", function () { nav.classList.remove("open"); toggle.innerHTML = ICON.menu; }); });
  }

  /* ---------- Header on scroll ---------- */
  var hdr = $("#header");
  function onScroll() { if (hdr) hdr.classList.toggle("scrolled", window.scrollY > 30); }
  window.addEventListener("scroll", onScroll, { passive: true }); onScroll();

  /* ---------- Care-instructions tabs ---------- */
  $all(".tab").forEach(function (t) {
    t.addEventListener("click", function () {
      $all(".tab").forEach(function (x) { x.classList.remove("active"); x.setAttribute("aria-selected", "false"); });
      $all(".care").forEach(function (x) { x.classList.remove("active"); });
      t.classList.add("active"); t.setAttribute("aria-selected", "true");
      var panel = document.getElementById(t.getAttribute("data-tab"));
      if (panel) { panel.classList.add("active"); $all(".reveal", panel).forEach(function (r) { r.classList.add("in"); }); }
      if (history.replaceState) history.replaceState(null, "", "#" + t.getAttribute("data-tab"));
    });
  });
  if (location.hash) { var tb = $('.tab[data-tab="' + location.hash.slice(1) + '"]'); if (tb) tb.click(); }

  /* ---------- Lightbox ---------- */
  var lb = $("#lightbox");
  if (lb) {
    document.addEventListener("click", function (e) {
      if (e.target.matches(".gallery img")) { $("img", lb).src = e.target.src; lb.classList.add("open"); }
      else if (e.target === lb || e.target.closest("#lightbox button")) lb.classList.remove("open");
    });
  }

  /* ---------- Reveal on scroll ---------- */
  var rev = $all(".reveal");
  if ("IntersectionObserver" in window) {
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (en) { if (en.isIntersecting) { en.target.classList.add("in"); io.unobserve(en.target); } });
    }, { threshold: .12, rootMargin: "0px 0px -40px 0px" });
    rev.forEach(function (el) { io.observe(el); });
  } else { rev.forEach(function (el) { el.classList.add("in"); }); }
})();
