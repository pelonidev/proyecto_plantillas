<script setup lang="ts">
import { computed } from 'vue';
import { useTheme } from './theme/useTheme';
import { businessInfo } from './data/businessInfo';

useTheme();

const logo = computed(() => new URL('./assets/logo.svg', import.meta.url).href);
</script>

<template>
  <div class="page">
    <header class="hero">
      <div class="container">
        <nav class="nav">
          <a class="nav__brand" href="#inicio">
            <img :src="logo" :alt="businessInfo.name" />
            <div>
              <span>{{ businessInfo.name }}</span>
              <small>{{ businessInfo.tagline }}</small>
            </div>
          </a>
          <ul>
            <li v-for="link in businessInfo.navigation" :key="link.label">
              <a :href="link.href">{{ link.label }}</a>
            </li>
          </ul>
          <a class="nav__cta" :href="`tel:${businessInfo.contact.phone}`">{{ businessInfo.contact.phone }}</a>
        </nav>

        <div class="hero__content" id="inicio">
          <div class="hero__text">
            <p class="hero__eyebrow">{{ businessInfo.hero.eyebrow }}</p>
            <h1>{{ businessInfo.hero.title }}</h1>
            <p>{{ businessInfo.hero.description }}</p>
            <div class="hero__actions">
              <a class="btn btn--primary" :href="businessInfo.hero.primaryCta.href">{{ businessInfo.hero.primaryCta.label }}</a>
              <a class="btn btn--ghost" :href="businessInfo.hero.secondaryCta.href">{{ businessInfo.hero.secondaryCta.label }}</a>
            </div>
            <ul class="hero__badges">
              <li v-for="badge in businessInfo.hero.badges" :key="badge">{{ badge }}</li>
            </ul>
          </div>
          <div class="hero__card">
            <h2>{{ businessInfo.booking.title }}</h2>
            <p>{{ businessInfo.booking.description }}</p>
            <div class="hero__slots">
              <div v-for="slot in businessInfo.booking.slots" :key="slot.label">
                <span>{{ slot.label }}</span>
                <strong>{{ slot.value }}</strong>
              </div>
            </div>
            <a class="btn btn--surface" :href="businessInfo.hero.primaryCta.href">{{ businessInfo.booking.button }}</a>
          </div>
        </div>
      </div>
    </header>

    <main>
      <section id="servicios" class="section section--services">
        <div class="container">
          <div class="section__header">
            <p class="section__eyebrow">{{ businessInfo.services.eyebrow }}</p>
            <h2>{{ businessInfo.services.title }}</h2>
            <p>{{ businessInfo.services.description }}</p>
          </div>
          <div class="services">
            <article v-for="service in businessInfo.services.items" :key="service.title" class="service">
              <div class="service__icon">{{ service.icon }}</div>
              <div>
                <h3>{{ service.title }}</h3>
                <p>{{ service.description }}</p>
              </div>
            </article>
          </div>
        </div>
      </section>

      <section id="garantias" class="section section--guarantees">
        <div class="container guarantees">
          <div>
            <p class="section__eyebrow">{{ businessInfo.guarantees.eyebrow }}</p>
            <h2>{{ businessInfo.guarantees.title }}</h2>
            <p>{{ businessInfo.guarantees.description }}</p>
          </div>
          <div class="guarantees__list">
            <article v-for="item in businessInfo.guarantees.items" :key="item.title">
              <h3>{{ item.title }}</h3>
              <p>{{ item.detail }}</p>
            </article>
          </div>
        </div>
      </section>

      <section id="mantenimiento" class="section section--maintenance">
        <div class="container maintenance">
          <div>
            <p class="section__eyebrow">{{ businessInfo.maintenance.eyebrow }}</p>
            <h2>{{ businessInfo.maintenance.title }}</h2>
            <p>{{ businessInfo.maintenance.description }}</p>
          </div>
          <ul>
            <li v-for="step in businessInfo.maintenance.steps" :key="step.title">
              <span>{{ step.number }}</span>
              <div>
                <h3>{{ step.title }}</h3>
                <p>{{ step.detail }}</p>
              </div>
            </li>
          </ul>
        </div>
      </section>

      <section id="opiniones" class="section section--reviews">
        <div class="container">
          <div class="section__header">
            <p class="section__eyebrow">{{ businessInfo.reviews.eyebrow }}</p>
            <h2>{{ businessInfo.reviews.title }}</h2>
          </div>
          <div class="reviews">
            <article v-for="review in businessInfo.reviews.items" :key="review.author">
              <p>“{{ review.quote }}”</p>
              <footer>
                <strong>{{ review.author }}</strong>
                <span>{{ review.vehicle }}</span>
              </footer>
            </article>
          </div>
        </div>
      </section>

      <section id="contacto" class="section section--cta">
        <div class="container cta">
          <div>
            <p class="section__eyebrow">{{ businessInfo.cta.eyebrow }}</p>
            <h2>{{ businessInfo.cta.title }}</h2>
            <p>{{ businessInfo.cta.description }}</p>
          </div>
          <div class="cta__actions">
            <a class="btn btn--primary" :href="`tel:${businessInfo.contact.phone}`">{{ businessInfo.cta.primary }}</a>
            <a class="btn btn--ghost" :href="`mailto:${businessInfo.contact.email}`">{{ businessInfo.cta.secondary }}</a>
          </div>
        </div>
      </section>
    </main>

    <footer class="footer">
      <div class="container footer__content">
        <div>
          <img :src="logo" :alt="businessInfo.name" />
          <p>{{ businessInfo.tagline }}</p>
        </div>
        <div>
          <h3>Visítanos</h3>
          <p>{{ businessInfo.contact.address }}</p>
          <p>{{ businessInfo.contact.schedule }}</p>
        </div>
        <div>
          <h3>Contacto</h3>
          <a :href="`tel:${businessInfo.contact.phone}`">{{ businessInfo.contact.phone }}</a>
          <a :href="`mailto:${businessInfo.contact.email}`">{{ businessInfo.contact.email }}</a>
        </div>
      </div>
      <p class="footer__legal">© {{ new Date().getFullYear() }} {{ businessInfo.name }}. Todos los derechos reservados.</p>
    </footer>
  </div>
</template>

<style scoped>
.page {
  background: var(--color-background);
  color: var(--color-text);
  font-family: var(--font-family);
}

.container {
  width: min(1140px, 92vw);
  margin: 0 auto;
}

.hero {
  background: var(--color-hero);
  color: #fff;
  padding: 2.5rem 0 4.5rem;
}

.nav {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 2rem;
  margin-bottom: 2.5rem;
}

.nav__brand {
  display: flex;
  align-items: center;
  gap: 1rem;
  color: inherit;
}

.nav__brand img {
  width: 54px;
  height: 54px;
}

.nav__brand span {
  font-weight: 700;
  letter-spacing: 0.04em;
}

.nav__brand small {
  display: block;
  font-size: 0.75rem;
  opacity: 0.7;
}

.nav ul {
  list-style: none;
  display: flex;
  gap: 1.5rem;
  font-weight: 500;
}

.nav__cta {
  color: var(--color-accent);
  font-weight: 700;
}

.hero__content {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 3rem;
  align-items: start;
}

.hero__text h1 {
  font-family: var(--font-display);
  font-size: clamp(2.8rem, 4.5vw, 3.8rem);
  margin-bottom: 1.5rem;
  line-height: 1.1;
}

.hero__eyebrow {
  letter-spacing: 0.4em;
  font-size: 0.75rem;
  color: rgba(255, 255, 255, 0.7);
  margin-bottom: 1.5rem;
}

.hero__actions {
  margin: 2rem 0 1.5rem;
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
}

.hero__badges {
  list-style: none;
  display: flex;
  flex-wrap: wrap;
  gap: 0.8rem;
}

.hero__badges li {
  background: rgba(0, 0, 0, 0.45);
  border-radius: 999px;
  padding: 0.5rem 1.1rem;
  font-size: 0.85rem;
  letter-spacing: 0.08em;
}

.hero__card {
  background: #101012;
  border-radius: 24px;
  padding: 2.5rem;
  display: grid;
  gap: 1.5rem;
  box-shadow: 0 25px 45px rgba(0, 0, 0, 0.35);
}

.hero__card h2 {
  font-size: 1.5rem;
}

.hero__slots {
  display: grid;
  gap: 1rem;
}

.hero__slots div {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0.75rem 1rem;
  border-radius: 12px;
  background: rgba(255, 255, 255, 0.05);
}

.hero__slots span {
  font-size: 0.85rem;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  opacity: 0.7;
}

.hero__slots strong {
  font-size: 1.2rem;
}

.section {
  padding: 5rem 0;
}

.section__header {
  max-width: 48rem;
  margin: 0 auto 3rem;
  text-align: center;
}

.section__eyebrow {
  letter-spacing: 0.3em;
  text-transform: uppercase;
  font-size: 0.72rem;
  color: var(--color-accent);
  margin-bottom: 1rem;
}

.section--services {
  background: #fff;
}

.services {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
  gap: 1.5rem;
}

.service {
  background: var(--color-service-card);
  border-radius: 20px;
  padding: 2rem;
  display: grid;
  gap: 1rem;
  box-shadow: 0 15px 32px rgba(17, 17, 17, 0.1);
}

.service__icon {
  width: 48px;
  height: 48px;
  border-radius: 12px;
  background: var(--color-accent);
  display: grid;
  place-items: center;
  font-size: 1.5rem;
  color: #000;
}

.section--guarantees {
  background: var(--color-guarantees-bg);
}

.guarantees {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
  gap: 2rem;
  align-items: start;
}

.guarantees__list {
  display: grid;
  gap: 1.5rem;
}

.guarantees__list article {
  background: #fff;
  border-radius: 16px;
  padding: 1.8rem;
  box-shadow: 0 18px 32px rgba(14, 14, 14, 0.12);
}

.section--maintenance {
  background: #fff;
}

.maintenance {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
  gap: 2rem;
}

.maintenance ul {
  list-style: none;
  display: grid;
  gap: 1.5rem;
}

.maintenance li {
  display: grid;
  grid-template-columns: auto 1fr;
  gap: 1.5rem;
  align-items: start;
}

.maintenance span {
  width: 44px;
  height: 44px;
  border-radius: 12px;
  background: var(--color-accent);
  color: #000;
  display: grid;
  place-items: center;
  font-weight: 700;
}

.section--reviews {
  background: var(--color-reviews-bg);
}

.reviews {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
  gap: 1.5rem;
}

.reviews article {
  background: #fff;
  border-radius: 16px;
  padding: 2rem;
  display: grid;
  gap: 1rem;
  box-shadow: 0 18px 28px rgba(0, 0, 0, 0.1);
}

.reviews footer {
  display: grid;
  gap: 0.2rem;
  color: var(--color-text-muted);
}

.section--cta {
  background: var(--color-hero);
  color: #fff;
}

.cta {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;
  gap: 2rem;
}

.cta__actions {
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
}

.btn {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 0.85rem 1.9rem;
  border-radius: 999px;
  font-weight: 700;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  transition: transform 0.2s ease, box-shadow 0.2s ease;
}

.btn:hover {
  transform: translateY(-2px);
  box-shadow: 0 18px 28px rgba(0, 0, 0, 0.15);
}

.btn--primary {
  background: var(--color-accent);
  color: #000;
}

.btn--ghost {
  border: 1px solid rgba(255, 255, 255, 0.6);
  color: #fff;
}

.btn--surface {
  background: var(--color-accent);
  color: #000;
}

.footer {
  background: #0a0a0a;
  color: #fff;
  padding: 3rem 0 2rem;
}

.footer__content {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 2rem;
}

.footer img {
  width: 58px;
}

.footer a {
  color: var(--color-accent);
}

.footer__legal {
  margin-top: 2rem;
  text-align: center;
  color: rgba(255, 255, 255, 0.7);
  font-size: 0.85rem;
}

@media (max-width: 720px) {
  .nav ul {
    display: none;
  }
}
</style>
