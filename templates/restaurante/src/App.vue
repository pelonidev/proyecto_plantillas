<script setup lang="ts">
import { computed } from 'vue';
import { useTheme } from './theme/useTheme';
import { businessInfo } from './data/businessInfo';

useTheme();

const logo = computed(() => new URL('./assets/logo.svg', import.meta.url).href);
</script>

<template>
  <div class="page">
    <header class="hero" :style="{ backgroundImage: `linear-gradient(135deg, rgba(14, 42, 71, 0.75), rgba(9, 26, 44, 0.85)), url(${businessInfo.hero.backgroundImage})` }">
      <nav class="nav container">
        <a class="nav__brand" href="#inicio">
          <img :src="logo" :alt="businessInfo.name" />
          <span>{{ businessInfo.name }}</span>
        </a>
        <ul>
          <li v-for="link in businessInfo.navigation" :key="link.label">
            <a :href="link.href">{{ link.label }}</a>
          </li>
        </ul>
      </nav>

      <div class="hero__content container" id="inicio">
        <div class="hero__text">
          <p class="hero__pretitle">{{ businessInfo.hero.pretitle }}</p>
          <h1>{{ businessInfo.hero.title }}</h1>
          <p class="hero__description">{{ businessInfo.hero.description }}</p>
          <div class="hero__actions">
            <a class="btn btn--primary" :href="businessInfo.hero.primaryCta.href">
              {{ businessInfo.hero.primaryCta.label }}
            </a>
            <a class="btn btn--ghost" :href="businessInfo.hero.secondaryCta.href">
              {{ businessInfo.hero.secondaryCta.label }}
            </a>
          </div>
          <ul class="hero__highlights">
            <li v-for="highlight in businessInfo.hero.highlights" :key="highlight.title">
              <strong>{{ highlight.title }}</strong>
              <span>{{ highlight.description }}</span>
            </li>
          </ul>
        </div>
        <div class="hero__card">
          <h2>{{ businessInfo.reservations.title }}</h2>
          <p>{{ businessInfo.reservations.description }}</p>
          <div class="hero__contact">
            <a :href="`tel:${businessInfo.contact.phone}`">📞 {{ businessInfo.contact.phone }}</a>
            <a :href="`mailto:${businessInfo.contact.email}`">✉️ {{ businessInfo.contact.email }}</a>
            <a :href="businessInfo.hero.primaryCta.href">🗓️ {{ businessInfo.reservations.bookingText }}</a>
          </div>
          <div class="hero__schedule">
            <h3>Horario</h3>
            <p>{{ businessInfo.contact.schedule }}</p>
          </div>
        </div>
      </div>
    </header>

    <main>
      <section id="casa" class="section section--story">
        <div class="container story">
          <div class="story__text">
            <p class="section__eyebrow">{{ businessInfo.story.eyebrow }}</p>
            <h2>{{ businessInfo.story.title }}</h2>
            <p v-for="paragraph in businessInfo.story.paragraphs" :key="paragraph">{{ paragraph }}</p>
            <div class="story__details">
              <div v-for="detail in businessInfo.story.details" :key="detail.label">
                <span>{{ detail.label }}</span>
                <strong>{{ detail.value }}</strong>
              </div>
            </div>
          </div>
          <div class="story__image">
            <img :src="businessInfo.story.image" alt="Comedor del restaurante" />
          </div>
        </div>
      </section>

      <section id="carta" class="section section--menu">
        <div class="container">
          <div class="section__header">
            <p class="section__eyebrow">{{ businessInfo.menu.eyebrow }}</p>
            <h2>{{ businessInfo.menu.title }}</h2>
            <p>{{ businessInfo.menu.description }}</p>
          </div>
          <div class="menu-grid">
            <article v-for="category in businessInfo.menu.categories" :key="category.title" class="menu-card">
              <h3>{{ category.title }}</h3>
              <p>{{ category.subtitle }}</p>
              <ul>
                <li v-for="item in category.items" :key="item.name">
                  <div>
                    <span class="menu-card__name">{{ item.name }}</span>
                    <span class="menu-card__description">{{ item.description }}</span>
                  </div>
                  <span class="menu-card__price">{{ item.price }}</span>
                </li>
              </ul>
            </article>
          </div>
        </div>
      </section>

      <section id="experiencias" class="section section--experiences">
        <div class="container">
          <div class="section__header">
            <p class="section__eyebrow">{{ businessInfo.experiences.eyebrow }}</p>
            <h2>{{ businessInfo.experiences.title }}</h2>
            <p>{{ businessInfo.experiences.description }}</p>
          </div>
          <div class="experiences">
            <article v-for="experience in businessInfo.experiences.items" :key="experience.title" class="experience">
              <h3>{{ experience.title }}</h3>
              <p>{{ experience.description }}</p>
              <span>{{ experience.badge }}</span>
            </article>
          </div>
        </div>
      </section>

      <section id="galeria" class="section section--gallery">
        <div class="container">
          <div class="section__header">
            <p class="section__eyebrow">{{ businessInfo.gallery.eyebrow }}</p>
            <h2>{{ businessInfo.gallery.title }}</h2>
          </div>
          <div class="gallery-grid">
            <figure v-for="image in businessInfo.gallery.images" :key="image.alt">
              <img :src="image.src" :alt="image.alt" />
              <figcaption>{{ image.caption }}</figcaption>
            </figure>
          </div>
        </div>
      </section>

      <section id="reservas" class="section section--cta">
        <div class="container cta">
          <div>
            <p class="section__eyebrow">{{ businessInfo.reservations.eyebrow }}</p>
            <h2>{{ businessInfo.reservations.title }}</h2>
            <p>{{ businessInfo.reservations.description }}</p>
          </div>
          <div class="cta__actions">
            <a class="btn btn--surface" :href="`tel:${businessInfo.contact.phone}`">
              {{ businessInfo.reservations.callLabel }}
            </a>
            <a class="btn btn--outline" :href="businessInfo.hero.secondaryCta.href">
              {{ businessInfo.reservations.viewMenuLabel }}
            </a>
          </div>
        </div>
      </section>
    </main>

    <footer class="footer">
      <div class="container footer__content">
        <div>
          <img class="footer__logo" :src="logo" :alt="`${businessInfo.name} logo`" />
          <p>{{ businessInfo.tagline }}</p>
        </div>
        <div class="footer__info">
          <h3>Visítanos</h3>
          <p>{{ businessInfo.contact.address }}</p>
          <p>{{ businessInfo.contact.schedule }}</p>
        </div>
        <div class="footer__info">
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
}

.container {
  width: min(1120px, 92vw);
  margin: 0 auto;
}

.hero {
  position: relative;
  padding: 2.5rem 0 6rem;
  color: #fff;
  background-size: cover;
  background-position: center;
}

.nav {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 2rem;
  padding-bottom: 2rem;
}

.nav__brand {
  display: flex;
  align-items: center;
  gap: 1rem;
  font-weight: 600;
  font-size: 1.1rem;
}

.nav__brand img {
  width: 52px;
  height: 52px;
  object-fit: contain;
}

.nav ul {
  display: flex;
  gap: 1.5rem;
  list-style: none;
}

.nav a {
  color: inherit;
  font-weight: 500;
  letter-spacing: 0.04em;
}

.hero__content {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 3rem;
  align-items: start;
}

.hero__text h1 {
  font-size: clamp(2.75rem, 4vw, 3.8rem);
  font-family: var(--font-display);
  margin-bottom: 1rem;
}

.hero__pretitle {
  letter-spacing: 0.3em;
  text-transform: uppercase;
  font-size: 0.8rem;
  margin-bottom: 1rem;
  color: var(--color-accent);
}

.hero__description {
  font-size: 1.1rem;
  max-width: 32rem;
  margin-bottom: 2rem;
}

.hero__actions {
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
  margin-bottom: 2.5rem;
}

.hero__highlights {
  list-style: none;
  display: grid;
  gap: 1rem;
}

.hero__highlights li {
  display: flex;
  flex-direction: column;
  gap: 0.4rem;
  padding: 1rem 1.25rem;
  background: rgba(255, 255, 255, 0.08);
  border-radius: 12px;
  backdrop-filter: blur(4px);
}

.hero__card {
  background: rgba(12, 29, 46, 0.92);
  padding: 2rem;
  border-radius: 20px;
  box-shadow: 0 20px 50px rgba(9, 26, 44, 0.3);
  display: grid;
  gap: 1.5rem;
}

.hero__card h2 {
  font-size: 1.5rem;
}

.hero__contact {
  display: grid;
  gap: 0.8rem;
}

.hero__contact a {
  color: #fff;
  font-weight: 600;
}

.hero__schedule {
  border-top: 1px solid rgba(255, 255, 255, 0.15);
  padding-top: 1rem;
}

.section {
  padding: 5rem 0;
}

.section__header {
  text-align: center;
  max-width: 52rem;
  margin: 0 auto 3rem;
}

.section__eyebrow {
  letter-spacing: 0.3em;
  text-transform: uppercase;
  color: var(--color-accent);
  font-size: 0.75rem;
  margin-bottom: 1rem;
}

.section--story {
  background: var(--color-surface);
}

.story {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 3rem;
  align-items: center;
}

.story__text p {
  margin-bottom: 1rem;
}

.story__details {
  margin-top: 2rem;
  display: flex;
  flex-wrap: wrap;
  gap: 2rem;
}

.story__details span {
  text-transform: uppercase;
  font-size: 0.75rem;
  letter-spacing: 0.18em;
  color: var(--color-muted);
}

.story__details strong {
  font-size: 1.3rem;
  color: var(--color-primary);
}

.story__image img {
  border-radius: 20px;
  box-shadow: 0 20px 45px rgba(0, 0, 0, 0.1);
  width: 100%;
  object-fit: cover;
}

.section--menu {
  background: var(--color-background-soft);
}

.menu-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
  gap: 2rem;
}

.menu-card {
  background: var(--color-surface);
  border-radius: 18px;
  padding: 2rem;
  display: grid;
  gap: 1.5rem;
  box-shadow: 0 15px 30px rgba(9, 26, 44, 0.08);
}

.menu-card ul {
  list-style: none;
  display: grid;
  gap: 1rem;
}

.menu-card__name {
  font-weight: 600;
}

.menu-card__description {
  display: block;
  color: var(--color-muted-text);
  margin-top: 0.25rem;
}

.menu-card__price {
  font-weight: 600;
  color: var(--color-primary);
}

.section--experiences {
  background: linear-gradient(135deg, var(--color-secondary), var(--color-primary));
  color: #fff;
}

.experiences {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
  gap: 2rem;
}

.experience {
  background: rgba(255, 255, 255, 0.08);
  border-radius: 18px;
  padding: 2rem;
  display: grid;
  gap: 1rem;
}

.experience span {
  display: inline-block;
  align-self: start;
  padding: 0.4rem 0.8rem;
  border-radius: 999px;
  background: var(--color-accent);
  color: var(--color-secondary);
  font-weight: 600;
}

.section--gallery {
  background: var(--color-surface);
}

.gallery-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
  gap: 1.5rem;
}

.gallery-grid figure {
  display: grid;
  gap: 0.75rem;
}

.gallery-grid img {
  border-radius: 16px;
  object-fit: cover;
  aspect-ratio: 3 / 4;
}

.gallery-grid figcaption {
  font-size: 0.9rem;
  color: var(--color-muted-text);
}

.section--cta {
  background: var(--color-secondary);
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
  padding: 0.9rem 1.8rem;
  border-radius: 999px;
  font-weight: 600;
  transition: transform 0.2s ease, box-shadow 0.2s ease;
}

.btn:hover {
  transform: translateY(-2px);
  box-shadow: 0 12px 20px rgba(0, 0, 0, 0.15);
}

.btn--primary {
  background: var(--color-accent);
  color: var(--color-secondary);
}

.btn--ghost {
  border: 1px solid rgba(255, 255, 255, 0.4);
  color: #fff;
}

.btn--surface {
  background: #fff;
  color: var(--color-secondary);
}

.btn--outline {
  border: 1px solid #fff;
  color: #fff;
}

.footer {
  background: var(--color-footer);
  color: #fff;
  padding: 3rem 0 2rem;
}

.footer__content {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 2rem;
  align-items: start;
}

.footer__logo {
  width: 64px;
  margin-bottom: 1rem;
}

.footer__info a {
  color: inherit;
}

.footer__legal {
  text-align: center;
  margin-top: 2rem;
  font-size: 0.85rem;
  color: rgba(255, 255, 255, 0.72);
}

@media (max-width: 640px) {
  .hero {
    padding-bottom: 4rem;
  }

  .nav ul {
    display: none;
  }

  .hero__card {
    order: -1;
  }
}
</style>
