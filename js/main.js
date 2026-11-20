/* שיפרה גבות – לוגיקה של האתר. אין צורך לערוך קובץ זה; התוכן נמצא ב-js/content.js */
(function () {
  "use strict";
  var S = window.SITE || {};
  var B = S.business || {};

  var ICON = {
    wa: '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M17.5 14.4c-.3-.1-1.7-.9-2-1-.3-.1-.5-.1-.7.1-.2.3-.8 1-.9 1.2-.2.2-.3.2-.6.1-.3-.1-1.2-.5-2.3-1.4-.9-.8-1.4-1.7-1.6-2-.2-.3 0-.5.1-.6l.4-.5c.2-.2.2-.3.3-.5.1-.2 0-.4 0-.5l-.9-2.2c-.2-.6-.5-.5-.7-.5h-.6c-.2 0-.5.1-.8.4-.3.3-1 1-1 2.5s1.1 2.9 1.2 3.1c.1.2 2.1 3.2 5.1 4.5.7.3 1.3.5 1.7.6.7.2 1.4.2 1.9.1.6-.1 1.7-.7 1.9-1.4.2-.7.2-1.2.2-1.4-.1-.1-.3-.2-.6-.3zM12 21.8c-1.8 0-3.5-.5-5-1.4l-.4-.2-3.7 1 1-3.6-.2-.4C2.7 15.6 2.2 13.8 2.2 12 2.2 6.6 6.6 2.2 12 2.2S21.8 6.6 21.8 12 17.4 21.8 12 21.8zM12 0C5.4 0 0 5.4 0 12c0 2.1.6 4.2 1.6 6L0 24l6.2-1.6c1.8 1 3.8 1.5 5.8 1.5 6.6 0 12-5.4 12-12S18.6 0 12 0z"/></svg>',
    phone: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6"><path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3.1 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.1 4.2 2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1 1 .4 1.9.7 2.8a2 2 0 0 1-.5 2.1L8 9.9a16 16 0 0 0 6 6l1.3-1.3a2 2 0 0 1 2.1-.4c.9.3 1.8.6 2.8.7a2 2 0 0 1 1.7 2z"/></svg>',
    pin: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M21 10c0 7-9 13-9 13S3 17 3 10a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>',
    clock: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><circle cx="12" cy="12" r="10"/><path d="M12 6v6l4 2"/></svg>',
    ig: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><rect x="2" y="2" width="20" height="20" rx="5"/><circle cx="12" cy="12" r="4"/><circle cx="17.5" cy="6.5" r="1" fill="currentColor"/></svg>',
    fb: '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M14 8V6c0-.9.6-1 1-1h2.5V1H14c-3.6 0-4.5 2.7-4.5 4.4V8H7v4h2.5v11h4.5V12h3.3l.5-4H14z"/></svg>',
    tt: '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M16.6 5.8A4.3 4.3 0 0 1 15.5 3h-3.4v13.4a2.6 2.6 0 1 1-2.6-2.6c.3 0 .5 0 .8.1V10.4a6 6 0 1 0 5.2 6V9.6a7.7 7.7 0 0 0 4.5 1.4V7.6s-2 .1-3.4-1.8z"/></svg>',
    menu: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6"><path d="M3 7h18M3 12h18M3 17h18"/></svg>',
    close: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6"><path d="M6 6l12 12M18 6L6 18"/></svg>',
    home: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linejoin="round"><path d="M3 11l9-7 9 7v9a1 1 0 0 1-1 1h-5v-6h-6v6H4a1 1 0 0 1-1-1z"/></svg>',
    grid: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6"><rect x="3" y="3" width="7.5" height="7.5" rx="2"/><rect x="13.5" y="3" width="7.5" height="7.5" rx="2"/><rect x="3" y="13.5" width="7.5" height="7.5" rx="2"/><rect x="13.5" y="13.5" width="7.5" height="7.5" rx="2"/></svg>',
    ring: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linejoin="round"><circle cx="12" cy="15" r="6"/><path d="M9 5l3-3 3 3-3 3.5z"/></svg>',
    doc: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linejoin="round"><path d="M14 3H6a1 1 0 0 0-1 1v16a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V8z"/><path d="M14 3v5h5M8.5 13h7M8.5 17h5"/></svg>',
    arrow: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M19 12H5M11 6l-6 6 6 6"/></svg>',
    /* service icons – thin line art */
    brow: '<svg viewBox="0 0 48 48" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round"><path d="M6 26c8-8 22-11 36-6"/><path d="M11 23l2-3M16 20.5l1.6-3M21 19l1.2-3M26 18.4l.6-3M31 18.6l.2-3"/><path d="M14 34c3-2 7-3 10-3s7 1 10 3" opacity=".7"/></svg>',
    browlip: '<svg viewBox="0 0 48 48" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><path d="M8 15c7-6 19-8 32-4"/><path d="M8 32c5-5 9-6 12-4 2 1.4 6 1.4 8 0 3-2 7-1 12 4-5 5-10 7-16 7S13 37 8 32z"/><path d="M8 32h32"/></svg>',
    blade: '<svg viewBox="0 0 48 48" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><path d="M10 40l20-20"/><rect x="26" y="8" width="8" height="18" rx="2" transform="rotate(45 30 17)"/><path d="M33 9l6 6M35 7l6 6"/></svg>',
    powder: '<svg viewBox="0 0 48 48" fill="none" stroke="currentColor" stroke-width="1.6"><ellipse cx="24" cy="28" rx="15" ry="9"/><path d="M9 28v4c0 5 7 9 15 9s15-4 15-9v-4"/><circle cx="19" cy="27" r="1" fill="currentColor"/><circle cx="25" cy="25" r="1" fill="currentColor"/><circle cx="29" cy="29" r="1" fill="currentColor"/><path d="M30 6c4 2 6 6 5 11" stroke-linecap="round"/></svg>',
    bride: '<svg viewBox="0 0 48 48" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linejoin="round"><circle cx="24" cy="30" r="11"/><path d="M18 11l6-6 6 6-6 7z"/><path d="M21 11h6"/></svg>',
    evening: '<svg viewBox="0 0 48 48" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linejoin="round"><rect x="17" y="22" width="14" height="20" rx="2"/><path d="M19 22v-8l5-8 5 8v8"/><path d="M17 30h14"/></svg>',
    soft: '<svg viewBox="0 0 48 48" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><path d="M34 6l6 6-14 14-6-6z"/><path d="M20 20c-6 0-10 4-10 10 0 3-2 6-2 6s8 0 12-4c3-3 4-6 4-6"/></svg>',
    care: '<svg viewBox="0 0 48 48" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linejoin="round"><path d="M28 6H14a2 2 0 0 0-2 2v32a2 2 0 0 0 2 2h20a2 2 0 0 0 2-2V14z"/><path d="M28 6v8h8M18 24h12M18 30h12M18 36h7"/></svg>'
  };
  var SERVICE_ICON = { "brows": "brow", "brows-lip": "browlip", microblading: "blade", powder: "powder", bridal: "bride", evening: "evening", soft: "soft" };

  function esc(s) { return String(s == null ? "" : s).replace(/[&<>"']/g, function (c) { return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]; }); }
  function $(sel, root) { return (root || document).querySelector(sel); }
  function $all(sel, root) { return Array.prototype.slice.call((root || document).querySelectorAll(sel)); }

  /* WhatsApp link with an optional pre-filled message */
  function waLink(msg) {
    var text = encodeURIComponent(msg || "היי שיפרה, אשמח לקבוע תור 😊");
    if (B.whatsapp) return "https://wa.me/" + B.whatsapp.replace(/\D/g, "") + "?text=" + text;
    if (B.phone) return "tel:" + B.phone.replace(/[^\d+]/g, "");
    return "index.html#contact";
  }
  function telLink() { return B.phone ? "tel:" + B.phone.replace(/[^\d+]/g, "") : waLink(); }
  var EXT = ' target="_blank" rel="noopener"';

  var page = document.body.getAttribute("data-page") || "home";
  var home = page === "home" ? "" : "index.html";

  /* ---------- Header ---------- */
  var header = $("#site-header");
  if (header) {
    var logo = B.logo
      ? '<img src="' + esc(B.logo) + '" alt="' + esc(B.name) + ' – לוגו"><span class="logo__name">' + esc(B.name) + '<small>BROWS · MAKEUP</small></span>'
      : '<span class="logo__name" style="display:block">' + esc(B.name) + '<small>BROWS · MAKEUP</small></span>';
    header.outerHTML =
      '<header class="header' + (page !== "home" ? " header--solid" : "") + '" id="header">' +
      '<div class="container header__inner">' +
      '<a class="logo" href="index.html" aria-label="' + esc(B.name) + ' – דף הבית">' + logo + '</a>' +
      '<nav class="nav" id="nav" aria-label="ניווט ראשי">' +
      '<a href="' + home + '#services">טיפולים ומחירים</a>' +
      '<a href="' + home + '#gallery">עבודות</a>' +
      '<a href="kalot.html"' + (page === "kalot" ? ' class="active"' : "") + '>כלות</a>' +
      '<a href="horaot.html"' + (page === "horaot" ? ' class="active"' : "") + '>הוראות טיפול</a>' +
      '<a href="' + home + '#academy">אקדמיה</a>' +
      '<a href="' + home + '#contact">צור קשר</a>' +
      '<a class="btn btn--red" href="' + waLink() + '"' + EXT + '>קביעת תור</a>' +
      '</nav>' +
      '<button class="menu-toggle icon-btn" id="menuToggle" aria-label="פתיחת תפריט" aria-expanded="false">' + ICON.menu + '</button>' +
      '<div class="header__icons"><a class="icon-btn" href="' + telLink() + '" aria-label="התקשרי">' + ICON.phone + '</a></div>' +
      '</div></header>';
  }

  /* ---------- Footer, floating WhatsApp, mobile tab bar ---------- */
  var footer = $("#site-footer");
  if (footer) {
    footer.outerHTML =
      '<footer class="footer"><div class="container">' +
      (B.logo ? '<img src="' + esc(B.logo) + '" alt="' + esc(B.name) + '" loading="lazy">' : "") +
      '<div class="footer__links"><a href="index.html">דף הבית</a><a href="index.html#services">טיפולים ומחירים</a><a href="kalot.html">חבילות כלה</a><a href="horaot.html">הוראות לפני ואחרי</a><a href="index.html#contact">צור קשר</a></div>' +
      '<div>© ' + new Date().getFullYear() + ' ' + esc(B.name) + ' · ' + esc(B.address) + (B.phone ? ' · <a href="' + telLink() + '">' + esc(B.phone) + '</a>' : "") + '</div>' +
      '</div></footer>' +
      '<a class="wa-float" href="' + waLink() + '"' + EXT + ' aria-label="שליחת הודעה בוואטסאפ">' + ICON.wa + '</a>' +
      '<nav class="tabbar" aria-label="ניווט מהיר">' +
      '<a href="index.html"' + (page === "home" ? ' class="active"' : "") + '>' + ICON.home + 'בית</a>' +
      '<a href="' + home + '#services">' + ICON.grid + 'טיפולים</a>' +
      '<a class="tabbar__wa" href="' + waLink() + '"' + EXT + '><span>' + ICON.wa + '</span>תור</a>' +
      '<a href="kalot.html"' + (page === "kalot" ? ' class="active"' : "") + '>' + ICON.ring + 'כלות</a>' +
      '<a href="horaot.html"' + (page === "horaot" ? ' class="active"' : "") + '>' + ICON.doc + 'הוראות</a>' +
      '</nav>';
  }

  /* ---------- Quick tiles (home) ---------- */
  var tl = $("#tiles");
  if (tl && S.services) {
    var short = { "brows": "גבות", "brows-lip": "גבות + שפם", microblading: "מיקרובליידינג", powder: "פודרה", bridal: "איפור כלה", evening: "איפור ערב", soft: "איפור עדין" };
    tl.innerHTML = S.services.map(function (s) {
      return '<a class="tile" href="#svc-' + esc(s.id) + '"><span class="tile__ico">' + (ICON[SERVICE_ICON[s.id]] || ICON.brow) + '</span>' +
        '<b>' + esc(short[s.id] || s.name) + '</b>' + (s.price ? '<small>' + esc(s.price) + '</small>' : "") + '</a>';
    }).join("") +
      '<a class="tile" href="horaot.html"><span class="tile__ico">' + ICON.care + '</span><b>הוראות טיפול</b><small>לפני ואחרי</small></a>';
  }

  /* ---------- Services ---------- */
  var sv = $("#servicesGrid");
  if (sv && S.services) {
    sv.innerHTML = S.services.map(function (s) {
      var isBride = s.id === "bridal";
      return '<article class="card reveal' + (s.featured ? " card--featured" : "") + '" id="svc-' + esc(s.id) + '">' +
        (s.featured ? '<span class="card__tag">הכי מבוקש</span>' : "") +
        '<div class="card__head"><div class="card__icon">' + (ICON[SERVICE_ICON[s.id]] || ICON.brow) + '</div><h3>' + esc(s.name) + '</h3></div>' +
        '<p>' + esc(s.text) + '</p>' +
        '<div class="card__meta"><span class="time">' + ICON.clock + esc(s.duration) + '</span>' +
        (s.price ? '<span class="price">' + esc(s.price) + '</span>' : '<span class="price ask">מחיר בהתאמה אישית</span>') + '</div>' +
        '<div class="card__book">' + (isBride
          ? '<a class="btn btn--outline" href="kalot.html">לחבילות הכלה</a>'
          : '<a class="btn btn--outline" href="' + waLink("היי שיפרה, אשמח לקבוע תור ל" + s.name) + '"' + EXT + '>קביעת תור בוואטסאפ</a>') +
        '</div></article>';
    }).join("");
  }

  /* ---------- Gallery ---------- */
  var gal = $("#galleryGrid");
  if (gal) {
    var items = S.gallery || [];
    if (items.length) {
      gal.innerHTML = items.map(function (g) {
        return '<figure class="reveal"><img loading="lazy" src="' + esc(g.src) + '" alt="' + esc(g.caption || "עבודה של " + B.name) + '">' +
          (g.caption ? '<figcaption>' + esc(g.caption) + '</figcaption>' : "") + '</figure>';
      }).join("");
    } else {
      var labels = ["עיצוב גבות", "מיקרובליידינג", "גבות פודרה", "איפור כלה", "לפני ואחרי", "איפור ערב"];
      var mono = B.logo ? '<img src="images/monogram.png" alt="">' : "";
      gal.innerHTML = labels.map(function (l) {
        return '<figure class="reveal"><div class="ph">' + mono + '<small>' + l + ' · תמונה בקרוב</small></div></figure>';
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
      rv.innerHTML = '<div class="reviews-empty reveal"><div class="stars">★★★★★</div>' +
        '<h3>הלקוחות ממליצות</h3><p>היית אצלי? אשמח מאוד אם תשאירי ביקורת בגוגל. זה עוזר לעוד נשים למצוא אותי 💕</p></div>';
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
        '<a class="btn ' + (p.highlight ? "btn--white" : "btn--outline") + '"' + EXT + ' href="' +
        waLink("היי שיפרה, אני כלה ואשמח לשמוע על חבילת " + p.name + " 💍") + '">לבדיקת תאריך</a>' +
        '</article>';
    }).join("");
  }

  /* ---------- Contact details ---------- */
  var cl = $("#contactList");
  if (cl) {
    var rows = [];
    rows.push('<li><span class="ico">' + ICON.pin + '</span><div><b>' + esc(B.address) + '</b><span>' + esc(B.addressNote) + '</span></div></li>');
    if (B.phone) rows.push('<li><span class="ico">' + ICON.phone + '</span><div><a href="' + telLink() + '"><b>' + esc(B.phone) + '</b></a><span>שיחה או וואטסאפ</span></div></li>');
    rows.push('<li><span class="ico">' + ICON.clock + '</span><div><b>שעות פעילות</b><span>' + esc(B.hours) + '</span></div></li>');
    cl.innerHTML = rows.join("");
  }
  var so = $("#socials");
  if (so) {
    var links = [["instagram", "ig", "אינסטגרם"], ["tiktok", "tt", "טיקטוק"], ["facebook", "fb", "פייסבוק"]]
      .filter(function (x) { return B[x[0]]; })
      .map(function (x) { return '<a href="' + esc(B[x[0]]) + '"' + EXT + ' aria-label="' + x[2] + '">' + ICON[x[1]] + '</a>'; });
    so.innerHTML = links.join("");
    if (!links.length) so.style.display = "none";
  }

  /* ---------- Fill dynamic text & links ---------- */
  $all("[data-years]").forEach(function (el) { el.textContent = B.yearsExperience || "30"; });
  $all("[data-name]").forEach(function (el) { el.textContent = B.name; });
  $all("[data-google]").forEach(function (el) { el.href = B.googleReviews; });
  $all("[data-logo]").forEach(function (el) { if (B.logo) el.src = B.logo; else el.remove(); });
  $all("[data-img]").forEach(function (el) { var src = B[el.getAttribute("data-img")]; if (src) el.innerHTML = '<img src="' + esc(src) + '" alt="' + esc(B.name) + '">'; });
  $all("[data-price]").forEach(function (el) {
    var s = (S.services || []).filter(function (x) { return x.id === el.getAttribute("data-price"); })[0];
    if (s && s.price) el.textContent = s.price; else if (el.parentNode) el.parentNode.style.display = "none";
  });
  $all("[data-wa]").forEach(function (el) {
    el.href = waLink(el.getAttribute("data-wa") || "");
    if (/^https?:/.test(el.href)) { el.target = "_blank"; el.rel = "noopener"; }
    if (el.classList.contains("btn--wa") && !el.querySelector("svg")) el.insertAdjacentHTML("afterbegin", ICON.wa);
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

  /* ---------- Header shadow on scroll ---------- */
  var hdr = $("#header");
  function onScroll() { if (hdr) hdr.classList.toggle("scrolled", window.scrollY > 20); }
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
