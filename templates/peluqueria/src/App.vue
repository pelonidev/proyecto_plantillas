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
            <span>{{ businessInfo.name }}</span>
          </a>
          <ul>
            <li v-for="link in businessInfo.navigation" :key="link.label">
              <a :href="link.href">{{ link.label }}</a>
            </li>
          </ul>
          <a class="nav__cta" :href="businessInfo.booking.href">{{ businessInfo.booking.label }}</a>
        </nav>

        <div class="hero__content" id="inicio">
          <div class="hero__text">
            <p class="hero__eyebrow">{{ businessInfo.hero.eyebrow }}</p>
            <h1>{{ businessInfo.hero.title }}</h1>
            <p>{{ businessInfo.hero.description }}</p>
            <div class="hero__actions">
              <a class="btn btn--primary" :href="businessInfo.booking.href">{{ businessInfo.booking.label }}</a>
              <a class="btn btn--ghost" :href="businessInfo.hero.secondaryCta.href">{{ businessInfo.hero.secondaryCta.label }}</a>
            </div>
          </div>
          <div class="hero__details">
            <div v-for="detail in businessInfo.hero.details" :key="detail.label">
              <span>{{ detail.label }}</span>
              <strong>{{ detail.value }}</strong>
            </div>
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
            <article v-for="service in businessInfo.services.items" :key="service.name" class="service">
              <div>
                <h3>{{ service.name }}</h3>
                <p>{{ service.description }}</p>
              </div>
              <strong>{{ service.price }}</strong>
            </article>
          </div>
        </div>
      </section>

      <section id="experiencia" class="section section--experience">
        <div class="container experience">
          <div>
            <p class="section__eyebrow">{{ businessInfo.experience.eyebrow }}</p>
            <h2>{{ businessInfo.experience.title }}</h2>
            <p>{{ businessInfo.experience.description }}</p>
          </div>
          <ul>
            <li v-for="step in businessInfo.experience.steps" :key="step.title">
              <strong>{{ step.title }}</strong>
              <span>{{ step.description }}</span>
            </li>
          </ul>
        </div>
      </section>

      <section id="equipo" class="section section--team">
        <div class="container">
          <div class="section__header">
            <p class="section__eyebrow">{{ businessInfo.team.eyebrow }}</p>
            <h2>{{ businessInfo.team.title }}</h2>
          </div>
          <div class="team">
            <article v-for="barber in businessInfo.team.members" :key="barber.name" class="team__member">
              <img :src="barber.photo" :alt="barber.name" />
              <div>
                <h3>{{ barber.name }}</h3>
                <p>{{ barber.role }}</p>
                <ul>
                  <li v-for="highlight in barber.highlights" :key="highlight">{{ highlight }}</li>
                </ul>
              </div>
            </article>
          </div>
        </div>
      </section>

      <section id="reserva" class="section section--cta">
        <div class="container cta">
          <div>
            <p class="section__eyebrow">{{ businessInfo.cta.eyebrow }}</p>
            <h2>{{ businessInfo.cta.title }}</h2>
            <p>{{ businessInfo.cta.description }}</p>
          </div>
          <a class="btn btn--primary" :href="businessInfo.booking.href">{{ businessInfo.booking.label }}</a>
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
  width: min(1080px, 92vw);
  margin: 0 auto;
}

.hero {
  background: var(--color-hero);
  color: #fff;
  padding: 3rem 0 4rem;
}

.nav {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 2rem;
  text-transform: uppercase;
  letter-spacing: 0.12em;
  margin-bottom: 3rem;
}

.nav__brand {
  display: flex;
  align-items: center;
  gap: 1rem;
  font-weight: 600;
  color: inherit;
}

.nav__brand img {
  width: 52px;
  height: 52px;
}

.nav ul {
  list-style: none;
  display: flex;
  gap: 1.5rem;
}

.nav__cta {
  color: var(--color-accent);
  font-weight: 700;
}

.hero__content {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 3rem;
  align-items: end;
}

.hero__text h1 {
  font-family: var(--font-display);
  font-size: clamp(3rem, 5vw, 4.2rem);
  line-height: 1.05;
  margin-bottom: 1.5rem;
  text-transform: uppercase;
}

.hero__eyebrow {
  letter-spacing: 0.4em;
  font-size: 0.75rem;
  color: rgba(255, 255, 255, 0.6);
  margin-bottom: 1.5rem;
}

.hero__actions {
  margin-top: 2rem;
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
}

.hero__details {
  display: grid;
  gap: 1rem;
}

.hero__details div {
  border-top: 1px solid rgba(255, 255, 255, 0.2);
  padding-top: 1rem;
}

.hero__details span {
  font-size: 0.75rem;
  letter-spacing: 0.3em;
  color: rgba(255, 255, 255, 0.6);
}

.hero__details strong {
  font-size: 1.4rem;
  display: block;
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
  gap: 1.5rem;
}

.service {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 2rem;
  border-bottom: 1px solid var(--color-border);
  padding-bottom: 1.5rem;
}

.service h3 {
  text-transform: uppercase;
  letter-spacing: 0.16em;
}

.section--experience {
  background: var(--color-experience-bg);
  color: #fff;
}

.experience {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
  gap: 2.5rem;
  align-items: start;
}

.experience ul {
  list-style: none;
  display: grid;
  gap: 1.5rem;
}

.experience li {
  border-left: 2px solid var(--color-accent);
  padding-left: 1rem;
  display: grid;
  gap: 0.4rem;
}

.experience strong {
  text-transform: uppercase;
  letter-spacing: 0.2em;
}

.experience span {
  color: rgba(255, 255, 255, 0.72);
}

.section--team {
  background: #fff;
}

.team {
  display: grid;
  gap: 2rem;
}

.team__member {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
  gap: 1.5rem;
  align-items: center;
  background: var(--color-team-card);
  border-radius: 24px;
  overflow: hidden;
}

.team__member img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.team__member div {
  padding: 2rem;
  display: grid;
  gap: 0.8rem;
}

.team__member ul {
  list-style: none;
  display: grid;
  gap: 0.4rem;
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

.btn {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 0.9rem 1.8rem;
  border-radius: 999px;
  font-weight: 600;
  letter-spacing: 0.2em;
  text-transform: uppercase;
  transition: transform 0.2s ease, box-shadow 0.2s ease;
}

.btn:hover {
  transform: translateY(-2px);
  box-shadow: 0 14px 24px rgba(0, 0, 0, 0.18);
}

.btn--primary {
  background: var(--color-accent);
  color: #1b1b1b;
}

.btn--ghost {
  border: 1px solid rgba(255, 255, 255, 0.4);
  color: #fff;
}

.footer {
  background: #0d0d0d;
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
  color: rgba(255, 255, 255, 0.6);
  font-size: 0.85rem;
}

@media (max-width: 720px) {
  .nav ul {
    display: none;
  }
}
</style>
