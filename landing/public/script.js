/* ============================================================
   MyBottle — Landing Page Script
   Cinematic scroll story + page interactions
   ============================================================ */

(function () {
  'use strict';

  // ---- Scene management ----
  const SCENES = ['scene-0', 'scene-1', 'scene-2'];
  let currentScene = -1;

  function showScene(idx) {
    if (idx === currentScene) return;
    SCENES.forEach((id, i) => {
      const el = document.getElementById(id);
      if (!el) return;
      el.classList.toggle('active', i === idx);
    });
    // Progress dots
    document.querySelectorAll('.prog-dot').forEach((d, i) => {
      d.classList.toggle('active', i === idx);
    });
    // Scene-specific hooks
    if (idx === 1 && currentScene !== 1) triggerDigitalTransform();
    if (idx === 2 && currentScene !== 2) triggerWalkAway();
    currentScene = idx;
  }

  // ---- Scroll story ----
  function handleStoryScroll() {
    const story = document.getElementById('story');
    if (!story) return;
    const scrollTop = window.scrollY;
    const storyTop = story.offsetTop;
    const storyHeight = story.offsetHeight;
    const viewH = window.innerHeight;

    const progress = Math.max(0, Math.min(1, (scrollTop - storyTop) / (storyHeight - viewH)));

    // Hide scroll hint after first scroll
    if (progress > 0.02) {
      const hint = document.getElementById('scroll-hint');
      if (hint) hint.style.opacity = Math.max(0, 1 - progress * 15).toString();
    }

    // 3 scenes, each occupying 1/3 of scroll range
    let sceneIdx;
    if (progress < 0.33) sceneIdx = 0;
    else if (progress < 0.66) sceneIdx = 1;
    else sceneIdx = 2;

    showScene(sceneIdx);

    // Bottle morphing: scene 0->1 transition (0.25–0.45 range)
    const morphProgress = Math.max(0, Math.min(1, (progress - 0.25) / 0.15));
    animateBottleToPhone(morphProgress);

    // Person walking: scene 2, moves from center to right as we scroll
    const walkProgress = Math.max(0, Math.min(1, (progress - 0.7) / 0.25));
    animatePersonWalking(walkProgress);
  }

  // ---- Bottle → Phone morph ----
  function animateBottleToPhone(t) {
    const bottle = document.getElementById('phys-bottle');
    const phone = document.getElementById('phone-wrapper');
    if (!bottle || !phone) return;

    // Bottle shrinks/rises and fades
    const bottleScale = 1 - t * 0.4;
    const bottleY = -t * 40;
    bottle.style.transform = `translate(-50%, -60%) scale(${bottleScale}) translateY(${bottleY}px)`;
    bottle.style.opacity = String(1 - t);

    // Phone appears and rises into position
    phone.style.opacity = String(t);
    const phoneY = 20 * (1 - t);
    phone.style.transform = `translate(-50%, calc(-60% + ${phoneY}px))`;

    // Particle burst at midpoint
    if (t > 0.45 && t < 0.55 && !phone.dataset.burstDone) {
      phone.dataset.burstDone = '1';
      spawnParticles();
    }
    if (t < 0.3) delete phone.dataset.burstDone;
  }

  // ---- Particle burst ----
  function spawnParticles() {
    const burst = document.getElementById('particle-burst');
    if (!burst) return;
    for (let i = 0; i < 18; i++) {
      const p = document.createElement('div');
      p.className = 'particle';
      const angle = (i / 18) * Math.PI * 2;
      const dist = 60 + Math.random() * 60;
      const x = Math.cos(angle) * dist;
      const y = Math.sin(angle) * dist;
      p.style.cssText = `
        left: 50%; top: 50%;
        transform: translate(-50%, -50%);
        transition: transform ${0.5 + Math.random() * 0.4}s cubic-bezier(0.16,1,0.3,1),
                    opacity ${0.6}s ease-out ${Math.random() * 0.1}s;
      `;
      burst.appendChild(p);
      requestAnimationFrame(() => {
        requestAnimationFrame(() => {
          p.style.opacity = '1';
          p.style.transform = `translate(calc(-50% + ${x}px), calc(-50% + ${y}px))`;
          setTimeout(() => {
            p.style.opacity = '0';
            setTimeout(() => p.remove(), 600);
          }, 300);
        });
      });
    }
  }

  // ---- Person walking ----
  function animatePersonWalking(t) {
    const person = document.getElementById('person-walking');
    if (!person) return;
    person.style.opacity = String(Math.min(1, t * 3));
    // Walk from center toward right
    const walkX = t * 180;
    person.style.transform = `translateX(calc(-50% + ${walkX}px))`;

    // Leg animation (simple pendulum)
    const legL = document.getElementById('leg-l');
    const legR = document.getElementById('leg-r');
    if (legL && legR) {
      const swing = Math.sin(t * Math.PI * 6) * 8;
      legL.style.transform = `rotate(${swing}deg)`;
      legL.style.transformOrigin = '50% 0%';
      legR.style.transform = `rotate(${-swing}deg)`;
      legR.style.transformOrigin = '50% 0%';
    }

    // Phone slides into pocket
    const handPhone = document.getElementById('hand-phone');
    const handScreen = document.getElementById('hand-screen');
    const phoneY = Math.max(0, (t - 0.4) / 0.4) * 35;
    if (handPhone) handPhone.style.transform = `translateY(${phoneY}px)`;
    if (handScreen) handScreen.style.opacity = String(1 - Math.min(1, phoneY / 20));
  }

  // ---- Scene 1 trigger: serving dots animate in ----
  function triggerDigitalTransform() {
    const dots = document.querySelectorAll('.dot');
    dots.forEach((dot, i) => {
      dot.classList.remove('filled');
      setTimeout(() => dot.classList.add('filled'), 100 + i * 120);
    });
  }

  // ---- Scene 2 trigger ----
  function triggerWalkAway() {
    // Dot 5 drains (1 serving used tonight)
    const d5 = document.getElementById('d5');
    if (d5) setTimeout(() => d5.classList.replace('filled', 'empty'), 400);
  }

  // ---- Nav scroll effect ----
  function handleNavScroll() {
    const nav = document.getElementById('nav');
    if (!nav) return;
    nav.classList.toggle('scrolled', window.scrollY > 40);
  }

  // ---- Intersection observer for fade-up sections ----
  function initFadeUps() {
    const targets = document.querySelectorAll(
      '.how-section, .value-section, .clubs-section, .trust-section, .founders-section, .cta-section, .step, .club-stat, .founder-card, .hero-reveal-section .reveal-inner'
    );
    targets.forEach(el => el.classList.add('fade-up'));

    const obs = new IntersectionObserver((entries) => {
      entries.forEach(e => {
        if (e.isIntersecting) {
          e.target.classList.add('visible');
          obs.unobserve(e.target);
        }
      });
    }, { threshold: 0.12 });

    targets.forEach(el => obs.observe(el));
  }

  // ---- Trust steps animation ----
  function initTrustSteps() {
    const steps = document.querySelectorAll('.trust-step');
    const obs = new IntersectionObserver((entries) => {
      entries.forEach(e => {
        if (e.isIntersecting) {
          steps.forEach((s, i) => {
            setTimeout(() => s.classList.add('visible'), i * 100);
          });
          obs.disconnect();
        }
      });
    }, { threshold: 0.2 });
    const section = document.getElementById('trust-steps');
    if (section) obs.observe(section);
  }

  // ---- Waitlist form ----
  function initForm() {
    const form = document.getElementById('waitlist-form');
    if (!form) return;
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      const name = document.getElementById('wl-name').value.trim();
      const email = document.getElementById('wl-email').value.trim();
      const type = document.getElementById('wl-type').value;
      if (!name || !email || !type) return;
      // Simulate success (replace with real endpoint)
      const success = document.getElementById('form-success');
      form.querySelector('.form-row').style.display = 'none';
      if (success) success.hidden = false;
    });
  }

  // ---- Progress dot click ----
  function initProgDots() {
    const story = document.getElementById('story');
    if (!story) return;
    document.querySelectorAll('.prog-dot').forEach((dot, i) => {
      dot.addEventListener('click', () => {
        const storyTop = story.offsetTop;
        const storyH = story.offsetHeight;
        const viewH = window.innerHeight;
        const scrollRange = storyH - viewH;
        // Each scene is 1/3 of scroll range; jump to mid of that scene
        const target = storyTop + scrollRange * ((i / 3) + 1 / 6);
        window.scrollTo({ top: target, behavior: 'smooth' });
      });
    });
  }

  // ---- Init ----
  function init() {
    showScene(0);
    initFadeUps();
    initTrustSteps();
    initForm();
    initProgDots();

    window.addEventListener('scroll', () => {
      handleStoryScroll();
      handleNavScroll();
    }, { passive: true });

    // Trigger once on load
    handleStoryScroll();
    handleNavScroll();
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
