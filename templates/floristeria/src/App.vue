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
            <ul class="hero__benefits">
              <li v-for="benefit in businessInfo.hero.benefits" :key="benefit">{{ benefit }}</li>
            </ul>
          </div>
          <div class="hero__showcase">
            <figure v-for="collection in businessInfo.hero.collections" :key="collection.name">
              <img :src="collection.image" :alt="collection.name" />
              <figcaption>
                <span>{{ collection.tag }}</span>
                <strong>{{ collection.name }}</strong>
              </figcaption>
            </figure>
          </div>
        </div>
      </div>
    </header>

    <main>
      <section id="colecciones" class="section section--collections">
        <div class="container">
          <div class="section__header">
            <p class="section__eyebrow">{{ businessInfo.collections.eyebrow }}</p>
            <h2>{{ businessInfo.collections.title }}</h2>
            <p>{{ businessInfo.collections.description }}</p>
          </div>
          <div class="collections">
            <article v-for="collection in businessInfo.collections.items" :key="collection.title" class="collection">
              <img :src="collection.image" :alt="collection.title" />
              <div class="collection__content">
                <span>{{ collection.tag }}</span>
                <h3>{{ collection.title }}</h3>
                <p>{{ collection.description }}</p>
                <a :href="collection.href">{{ collection.linkLabel }}</a>
              </div>
            </article>
          </div>
        </div>
      </section>

      <section id="servicios" class="section section--services">
        <div class="container">
          <div class="section__header">
            <p class="section__eyebrow">{{ businessInfo.services.eyebrow }}</p>
            <h2>{{ businessInfo.services.title }}</h2>
          </div>
          <div class="services">
            <article v-for="service in businessInfo.services.items" :key="service.title" class="service">
              <h3>{{ service.title }}</h3>
              <p>{{ service.description }}</p>
              <span>{{ service.badge }}</span>
            </article>
          </div>
        </div>
      </section>

      <section id="destacados" class="section section--highlights">
        <div class="container">
          <div class="section__header">
            <p class="section__eyebrow">{{ businessInfo.highlights.eyebrow }}</p>
            <h2>{{ businessInfo.highlights.title }}</h2>
          </div>
          <div class="highlights">
            <article v-for="item in businessInfo.highlights.items" :key="item.name" class="highlight">
              <img :src="item.image" :alt="item.name" />
              <div>
                <h3>{{ item.name }}</h3>
                <p>{{ item.description }}</p>
                <strong>{{ item.price }}</strong>
              </div>
            </article>
          </div>
        </div>
      </section>

      <section id="club" class="section section--club">
        <div class="container club">
          <div>
            <p class="section__eyebrow">{{ businessInfo.club.eyebrow }}</p>
            <h2>{{ businessInfo.club.title }}</h2>
            <p>{{ businessInfo.club.description }}</p>
            <ul>
              <li v-for="benefit in businessInfo.club.benefits" :key="benefit">{{ benefit }}</li>
            </ul>
            <a class="btn btn--primary" :href="businessInfo.club.cta.href">{{ businessInfo.club.cta.label }}</a>
          </div>
          <div class="club__image">
            <img :src="businessInfo.club.image" alt="Club de flores" />
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
          <h3>Atención al cliente</h3>
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
  color: #fff;
  font-family: var(--font-family);
}

.container {
  width: min(1180px, 92vw);
  margin: 0 auto;
}

.hero {
  background: var(--color-hero);
  padding: 2.5rem 0 4.5rem;
}

.nav {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 2rem;
  margin-bottom: 3rem;
}

.nav__brand {
  display: flex;
  align-items: center;
  gap: 1rem;
  font-weight: 600;
  color: inherit;
  text-transform: uppercase;
  letter-spacing: 0.18em;
}

.nav__brand img {
  width: 54px;
  height: 54px;
}

.nav ul {
  list-style: none;
  display: flex;
  gap: 1.5rem;
  font-weight: 500;
  letter-spacing: 0.08em;
}

.nav__cta {
  color: var(--color-accent);
  font-weight: 600;
}

.hero__content {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
  gap: 3rem;
  align-items: center;
}

.hero__text h1 {
  font-family: var(--font-display);
  font-size: clamp(2.8rem, 5vw, 3.8rem);
  margin-bottom: 1.5rem;
}

.hero__eyebrow {
  color: var(--color-accent);
  letter-spacing: 0.45em;
  text-transform: uppercase;
  font-size: 0.75rem;
  margin-bottom: 1.5rem;
}

.hero__actions {
  margin: 2rem 0 1.5rem;
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
}

.hero__benefits {
  list-style: none;
  display: grid;
  gap: 0.6rem;
  color: rgba(255, 255, 255, 0.72);
}

.hero__showcase {
  display: grid;
  gap: 1rem;
}

.hero__showcase figure {
  background: rgba(255, 255, 255, 0.05);
  border-radius: 20px;
  padding: 1.5rem;
  display: grid;
  gap: 1rem;
}

.hero__showcase img {
  border-radius: 16px;
  aspect-ratio: 3 / 4;
  object-fit: cover;
}

.hero__showcase figcaption {
  display: flex;
  flex-direction: column;
  gap: 0.4rem;
}

.hero__showcase span {
  color: var(--color-accent);
  font-size: 0.85rem;
  letter-spacing: 0.1em;
}

.section {
  padding: 5rem 0;
  color: var(--color-text);
}

.section--collections {
  background: var(--color-background-light);
}

.section--services {
  background: #fff;
}

.section--highlights {
  background: var(--color-background-light);
}

.section--club {
  background: #fff;
}

.section__header {
  max-width: 48rem;
  margin: 0 auto 3rem;
  text-align: center;
}

.section__eyebrow {
  color: var(--color-accent-dark);
  letter-spacing: 0.32em;
  text-transform: uppercase;
  font-size: 0.72rem;
  margin-bottom: 1rem;
}

.collections {
  display: grid;
  gap: 2rem;
}

.collection {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
  gap: 2rem;
  background: #fff;
  border-radius: 24px;
  overflow: hidden;
  color: var(--color-text);
  box-shadow: 0 18px 40px rgba(0, 0, 0, 0.12);
}

.collection img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.collection__content {
  padding: 2.5rem;
  display: grid;
  gap: 1rem;
}

.collection__content span {
  color: var(--color-accent);
  letter-spacing: 0.32em;
  text-transform: uppercase;
  font-size: 0.7rem;
}

.collection__content a {
  color: var(--color-accent-dark);
  font-weight: 600;
}

.services {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
  gap: 1.5rem;
}

.service {
  background: var(--color-service-bg);
  border-radius: 20px;
  padding: 2rem;
  display: grid;
  gap: 1rem;
  color: var(--color-text-light);
}

.service span {
  align-self: start;
  padding: 0.4rem 0.8rem;
  border-radius: 999px;
  background: rgba(255, 255, 255, 0.12);
  color: #fff;
  font-size: 0.85rem;
  letter-spacing: 0.08em;
}

.highlights {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
  gap: 1.5rem;
}

.highlight {
  background: #fff;
  border-radius: 24px;
  overflow: hidden;
  box-shadow: 0 22px 38px rgba(0, 0, 0, 0.12);
  display: grid;
}

.highlight img {
  width: 100%;
  height: 220px;
  object-fit: cover;
}

.highlight div {
  padding: 1.8rem;
  display: grid;
  gap: 0.8rem;
}

.highlight strong {
  color: var(--color-accent-dark);
}

.club {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 2.5rem;
  align-items: center;
}

.club ul {
  list-style: none;
  display: grid;
  gap: 0.6rem;
  color: var(--color-text-muted);
}

.club__image img {
  width: 100%;
  border-radius: 24px;
  object-fit: cover;
  box-shadow: 0 22px 40px rgba(0, 0, 0, 0.12);
}

.btn {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 0.9rem 2.2rem;
  border-radius: 999px;
  font-weight: 600;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  transition: transform 0.2s ease, box-shadow 0.2s ease;
}

.btn:hover {
  transform: translateY(-3px);
  box-shadow: 0 16px 28px rgba(0, 0, 0, 0.18);
}

.btn--primary {
  background: var(--color-accent);
  color: #1f1f1f;
}

.btn--ghost {
  border: 1px solid rgba(255, 255, 255, 0.4);
  color: #fff;
}

.footer {
  background: #101010;
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
