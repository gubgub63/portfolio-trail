/* ════════════════════════════════════════════════════════════════
   Portfolio Enzo Gubbiotti — JS
   ════════════════════════════════════════════════════════════════ */

/* ─── NAV ACTIVE STATE ─────────────────────────────────────────── */
(() => {
  const links = Array.from(document.querySelectorAll("[data-nav-link]"));
  const sections = Array.from(document.querySelectorAll("[data-nav-section]"));
  if (!links.length || !sections.length) return;

  const setActive = (id) => {
    links.forEach((link) => {
      const active = link.getAttribute("href") === `#${id}`;
      link.classList.toggle("is-active", active);
      if (active) {
        link.setAttribute("aria-current", "page");
      } else {
        link.removeAttribute("aria-current");
      }
    });
  };

  setActive(sections[0].id);

  const obs = new IntersectionObserver(
    (entries) => {
      const visible = entries
        .filter((e) => e.isIntersecting)
        .sort((a, b) => b.intersectionRatio - a.intersectionRatio);
      if (visible.length) setActive(visible[0].target.id);
    },
    { threshold: [0.25, 0.5], rootMargin: "-12% 0px -38% 0px" },
  );

  sections.forEach((s) => obs.observe(s));
})();

/* ─── PARALLAX ─────────────────────────────────────────────────── */
(() => {
  const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
  const heroTitle = document.querySelector(".hero-title");
  const parallaxNodes = document.querySelectorAll("[data-parallax]");

  if (!heroTitle && !parallaxNodes.length) return;

  let ticking = false;

  const update = () => {
    ticking = false;

    if (mq.matches) {
      if (heroTitle) heroTitle.style.transform = "";
      parallaxNodes.forEach((n) =>
        n.style.setProperty("--parallax-offset", "0px"),
      );
      return;
    }

    const scrollY = window.scrollY || window.pageYOffset;

    if (heroTitle) {
      const offset = Math.min(scrollY * 0.28, 120);
      heroTitle.style.transform = `translate3d(0, ${offset}px, 0)`;
    }

    const vc = window.innerHeight / 2;
    parallaxNodes.forEach((node) => {
      const factor = parseFloat(node.dataset.parallax || "0.05");
      const limit = parseFloat(node.dataset.parallaxLimit || "28");
      const rect = node.getBoundingClientRect();
      const delta = rect.top + rect.height / 2 - vc;
      const offset = Math.max(-limit, Math.min(limit, -delta * factor));
      node.style.setProperty("--parallax-offset", `${offset.toFixed(2)}px`);
    });
  };

  const onScroll = () => {
    if (!ticking) {
      ticking = true;
      window.requestAnimationFrame(update);
    }
  };

  update();
  window.addEventListener("scroll", onScroll, { passive: true });
  window.addEventListener("resize", onScroll);

  const onMQ = () => update();
  if (mq.addEventListener) {
    mq.addEventListener("change", onMQ);
  } else if (mq.addListener) {
    mq.addListener(onMQ);
  }
})();

/* ─── REVEAL AU SCROLL ─────────────────────────────────────────── */
(() => {
  const revealTargets = document.querySelectorAll(".reveal");
  const skillRows = document.querySelectorAll(".skill-row");

  if (!revealTargets.length && !skillRows.length) return;

  const revealObs = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        entry.target.classList.add("is-visible");
        revealObs.unobserve(entry.target);
      });
    },
    { threshold: 0.14, rootMargin: "0px 0px -8% 0px" },
  );

  revealTargets.forEach((el) => revealObs.observe(el));

  /* Skill bar animation — déclenché séparément */
  const skillObs = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        entry.target.classList.add("is-visible");
        skillObs.unobserve(entry.target);
      });
    },
    { threshold: 0.3, rootMargin: "0px 0px -5% 0px" },
  );

  skillRows.forEach((el) => skillObs.observe(el));
})();

/* ─── COUNTER ANIMATION ─────────────────────────────────────────── */
(() => {
  const counters = document.querySelectorAll("[data-count]");
  if (!counters.length) return;

  const mq = window.matchMedia("(prefers-reduced-motion: reduce)");

  const animateCount = (el) => {
    const target = parseInt(el.dataset.count, 10);
    const duration = 1400;
    const start = performance.now();

    const easeOut = (t) => 1 - Math.pow(1 - t, 3);

    const tick = (now) => {
      const elapsed = Math.min(now - start, duration);
      const progress = easeOut(elapsed / duration);
      const current = Math.round(progress * target);
      el.textContent =
        current >= 1000 ? current.toLocaleString("fr-FR") : String(current);
      if (elapsed < duration) requestAnimationFrame(tick);
    };

    requestAnimationFrame(tick);
  };

  const obs = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        const el = entry.target;
        if (mq.matches) {
          el.textContent = parseInt(el.dataset.count, 10).toLocaleString(
            "fr-FR",
          );
        } else {
          animateCount(el);
        }
        obs.unobserve(el);
      });
    },
    { threshold: 0.5 },
  );

  counters.forEach((el) => obs.observe(el));
})();

/* ─── MODAL PROJETS ─────────────────────────────────────────────── */
(() => {
  const modal = document.querySelector(".project-modal");
  if (!modal) return;

  const title = modal.querySelector("#modal-title");
  const desc = modal.querySelector("#modal-desc");
  const cards = document.querySelectorAll(".projet-card");

  let lastFocused = null;

  const open = (card) => {
    if (title) title.textContent = card.dataset.title || "";
    if (desc) desc.textContent = card.dataset.description || "";
    lastFocused = document.activeElement;
    modal.classList.add("is-open");
    modal.setAttribute("aria-hidden", "false");
    document.body.style.overflow = "hidden";
    const closeBtn = modal.querySelector("[data-modal-close]");
    if (closeBtn instanceof HTMLElement) closeBtn.focus();
  };

  const close = () => {
    modal.classList.remove("is-open");
    modal.setAttribute("aria-hidden", "true");
    document.body.style.overflow = "";
    if (lastFocused instanceof HTMLElement) lastFocused.focus();
  };

  cards.forEach((card) => {
    card.setAttribute("tabindex", "0");
    card.setAttribute("role", "button");
    card.setAttribute("aria-label", card.dataset.title || "Voir le projet");

    card.addEventListener("click", () => open(card));
    card.addEventListener("keydown", (e) => {
      if (e.key === "Enter" || e.key === " ") {
        e.preventDefault();
        open(card);
      }
    });
  });

  modal.querySelectorAll("[data-modal-close]").forEach((btn) => {
    btn.addEventListener("click", close);
  });

  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && modal.classList.contains("is-open")) close();
  });
})();
