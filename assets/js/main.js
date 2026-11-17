const THEME_KEY = "site-theme";

function applyTheme(theme) {
  const dark = theme === "dark";
  document.documentElement.toggleAttribute("data-theme", dark);

  const icon = document.querySelector("#theme-icon");
  if (icon) {
    icon.classList.toggle("fa-sun", !dark);
    icon.classList.toggle("fa-moon", dark);
  }
}

function initThemeToggle() {
  const savedTheme = localStorage.getItem(THEME_KEY) === "dark" ? "dark" : "light";
  applyTheme(savedTheme);

  document.querySelector("#theme-toggle")?.addEventListener("click", () => {
    const nextTheme = document.documentElement.hasAttribute("data-theme") ? "light" : "dark";
    localStorage.setItem(THEME_KEY, nextTheme);
    applyTheme(nextTheme);
  });
}

function initAuthorMenu() {
  const button = document.querySelector(".author__menu-toggle");
  const links = document.querySelector(".author__urls");
  if (!button || !links) return;

  button.addEventListener("click", () => {
    const open = links.classList.toggle("is-open");
    button.classList.toggle("open", open);
    button.setAttribute("aria-expanded", String(open));
  });
}

function formatVisitorLocation(location) {
  const parts = [location.city, location.region, location.country]
    .filter(Boolean)
    .filter((part, index, values) => values.indexOf(part) === index);
  return parts.join(", ") || "Region unavailable";
}

async function initVisitorGlobe() {
  const container = document.querySelector("[data-visitor-globe]");
  const canvas = container?.querySelector("canvas");
  const locationLabel = document.querySelector("[data-visitor-location]");
  if (!container || !canvas || !locationLabel) return;

  let visitor = null;
  try {
    const response = await fetch("https://get.geojs.io/v1/ip/geo.json");
    if (!response.ok) throw new Error("Location request failed");
    visitor = await response.json();
    locationLabel.textContent = formatVisitorLocation(visitor);
  } catch {
    locationLabel.textContent = "Welcome from around the world";
  }

  try {
    const { default: createGlobe } = await import("https://cdn.jsdelivr.net/npm/cobe@0.6.4/+esm");
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const marker = visitor ? [{
      location: [Number(visitor.latitude), Number(visitor.longitude)],
      size: 0.09,
    }] : [];
    let phi = 0;
    let pointerDown = null;
    let pointerOffset = 0;
    let width = container.offsetWidth;

    const globe = createGlobe(canvas, {
      devicePixelRatio: Math.min(window.devicePixelRatio, 2),
      width: width * 2,
      height: width * 2,
      phi: 0,
      theta: 0.2,
      dark: document.documentElement.hasAttribute("data-theme") ? 1 : 0,
      diffuse: 1.15,
      mapSamples: 12000,
      mapBrightness: 5,
      baseColor: [0.2, 0.48, 0.55],
      markerColor: [0.94, 0.3, 0.24],
      glowColor: [0.72, 0.9, 0.92],
      markers: marker,
      onRender: (state) => {
        if (!pointerDown && !reducedMotion) phi += 0.003;
        state.phi = phi + pointerOffset;
        state.width = width * 2;
        state.height = width * 2;
        state.dark = document.documentElement.hasAttribute("data-theme") ? 1 : 0;
      },
    });

    const resizeObserver = new ResizeObserver(() => {
      width = container.offsetWidth;
    });
    resizeObserver.observe(container);

    canvas.addEventListener("pointerdown", (event) => {
      pointerDown = event.clientX;
      canvas.setPointerCapture(event.pointerId);
    });
    canvas.addEventListener("pointermove", (event) => {
      if (pointerDown === null) return;
      pointerOffset += (event.clientX - pointerDown) / 200;
      pointerDown = event.clientX;
    });
    canvas.addEventListener("pointerup", () => {
      pointerDown = null;
    });
    canvas.addEventListener("pointercancel", () => {
      pointerDown = null;
    });

    container.classList.add("is-ready");
    window.addEventListener("pagehide", () => {
      resizeObserver.disconnect();
      globe.destroy();
    }, { once: true });
  } catch {
    container.classList.add("is-unavailable");
  }
}

document.addEventListener("DOMContentLoaded", () => {
  initThemeToggle();
  initAuthorMenu();
  initVisitorGlobe();
});
