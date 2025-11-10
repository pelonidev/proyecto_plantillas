<script setup lang="ts">
import { computed } from 'vue';
import { useTheme } from './theme/useTheme';
import { businessInfo } from './data/businessInfo';

useTheme();

const logo = computed(() => new URL('./assets/logo.svg', import.meta.url).href);
</script>

<template>
  <div class="page">
    <header
      class="hero"
      :style="{ backgroundImage: `linear-gradient(115deg, rgba(8, 19, 33, 0.78), rgba(8, 19, 33, 0.6)), url(${businessInfo.hero.backgroundImage})` }"
    >
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
        </nav>
      </div>

      <div class="container hero__content" id="inicio">
        <div class="hero__text">
          <p class="hero__kicker">{{ businessInfo.hero.kicker }}</p>
          <h1>
            {{ businessInfo.hero.title }}
            <span>{{ businessInfo.hero.subtitle }}</span>
          </h1>
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
            <li v-for="highlight in businessInfo.hero.highlights" :key="highlight.label">
              <span>{{ highlight.label }}</span>
              <strong>{{ highlight.value }}</strong>
            </li>
          </ul>
        </div>
        <aside class="hero__card">
          <h2>{{ businessInfo.hero.card.title }}</h2>
          <p>{{ businessInfo.hero.card.description }}</p>
          <div class="hero__card-details">
            <div v-for="detail in businessInfo.hero.card.details" :key="detail.label">
              <span>{{ detail.label }}</span>
              <strong>{{ detail.value }}</strong>
            </div>
          </div>
          <div class="hero__card-actions">
            <a :href="`tel:${businessInfo.contact.phone}`">📞 {{ businessInfo.contact.phone }}</a>
            <a :href="`mailto:${businessInfo.contact.email}`">✉️ {{ businessInfo.contact.email }}</a>
          </div>
        </aside>
      </div>
    </header>

    <main>
      <section id="cocina" class="section section--identity">
        <div class="container identity">
          <div class="identity__text">
            <p class="section__eyebrow">{{ businessInfo.identity.eyebrow }}</p>
            <h2>{{ businessInfo.identity.title }}</h2>
            <p v-for="paragraph in businessInfo.identity.paragraphs" :key="paragraph">{{ paragraph }}</p>
            <blockquote>{{ businessInfo.identity.quote }}</blockquote>
          </div>
          <div class="identity__image">
            <img :src="businessInfo.identity.image" alt="Sala principal del restaurante" />
          </div>
        </div>
      </section>

      <section id="filosofia" class="section section--cuisine">
        <div class="container">
          <div class="section__header">
            <p class="section__eyebrow">{{ businessInfo.cuisine.eyebrow }}</p>
            <h2>{{ businessInfo.cuisine.title }}</h2>
            <p>{{ businessInfo.cuisine.description }}</p>
          </div>
          <div class="pillars">
            <article v-for="pillar in businessInfo.cuisine.pillars" :key="pillar.title" class="pillar">
              <h3>{{ pillar.title }}</h3>
              <p>{{ pillar.description }}</p>
            </article>
          </div>
        </div>
      </section>

      <section id="menus" class="section section--menus">
        <div class="container">
          <div class="section__header">
            <p class="section__eyebrow">{{ businessInfo.menus.eyebrow }}</p>
            <h2>{{ businessInfo.menus.title }}</h2>
            <p>{{ businessInfo.menus.description }}</p>
          </div>
          <div class="menus">
            <article v-for="menu in businessInfo.menus.items" :key="menu.name" class="menu">
              <div class="menu__header">
                <h3>{{ menu.name }}</h3>
                <span class="menu__price">{{ menu.price }}</span>
              </div>
              <p>{{ menu.description }}</p>
              <ul>
                <li v-for="course in menu.courses" :key="course">{{ course }}</li>
              </ul>
              <a class="menu__link" :href="menu.href">{{ menu.linkLabel }}</a>
            </article>
          </div>
          <p class="menus__note">{{ businessInfo.menus.note }}</p>
        </div>
      </section>

      <section id="espacios" class="section section--spaces">
        <div class="container">
          <div class="section__header">
            <p class="section__eyebrow">{{ businessInfo.spaces.eyebrow }}</p>
            <h2>{{ businessInfo.spaces.title }}</h2>
            <p>{{ businessInfo.spaces.description }}</p>
          </div>
          <div class="spaces">
            <article v-for="space in businessInfo.spaces.items" :key="space.name" class="space">
              <img :src="space.image" :alt="space.name" />
              <div class="space__content">
                <h3>{{ space.name }}</h3>
                <p>{{ space.description }}</p>
              </div>
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
            <article v-for="experience in businessInfo.experiences.items" :key="experience.name" class="experience">
              <h3>{{ experience.name }}</h3>
              <p>{{ experience.description }}</p>
              <span>{{ experience.detail }}</span>
            </article>
          </div>
        </div>
      </section>

      <section id="actualidad" class="section section--news">
        <div class="container">
          <div class="section__header section__header--news">
            <div>
              <p class="section__eyebrow">{{ businessInfo.news.eyebrow }}</p>
              <h2>{{ businessInfo.news.title }}</h2>
            </div>
            <a class="news__all" :href="businessInfo.news.moreLink.href">{{ businessInfo.news.moreLink.label }}</a>
          </div>
          <div class="news">
            <article v-for="article in businessInfo.news.articles" :key="article.title" class="news__item">
              <span class="news__date">{{ article.date }}</span>
              <h3>{{ article.title }}</h3>
              <p>{{ article.description }}</p>
              <a :href="article.href">{{ article.linkLabel }}</a>
            </article>
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
            <a class="btn btn--outline" :href="businessInfo.reservations.secondaryCta.href">
              {{ businessInfo.reservations.secondaryCta.label }}
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
  font-family: var(--font-family);
}

.container {
  width: min(1180px, 92vw);
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
  justify-content: space-between;
  align-items: center;
  gap: 2rem;
}

.nav__brand {
  display: inline-flex;
  align-items: center;
  gap: 0.75rem;
  font-weight: 600;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  color: inherit;
}

.nav__brand img {
  width: 44px;
  height: 44px;
}

.nav ul {
  display: flex;
  gap: 1.5rem;
  list-style: none;
  margin: 0;
  padding: 0;
}

.nav a {
  color: inherit;
  text-decoration: none;
  font-size: 0.95rem;
  letter-spacing: 0.05em;
  position: relative;
}

.nav a::after {
  content: '';
  position: absolute;
  left: 0;
  bottom: -0.35rem;
  width: 100%;
  height: 2px;
  background: rgba(255, 255, 255, 0.45);
  transform: scaleX(0);
  transform-origin: right;
  transition: transform 0.3s ease;
}

.nav a:hover::after {
  transform: scaleX(1);
  transform-origin: left;
}

.hero__content {
  display: grid;
  grid-template-columns: 1.4fr 1fr;
  gap: 3rem;
  margin-top: 4rem;
  align-items: start;
}

.hero__text h1 {
  font-family: var(--font-display);
  font-size: clamp(2.5rem, 5vw, 3.75rem);
  line-height: 1.1;
  margin-bottom: 1rem;
}

.hero__text h1 span {
  display: block;
  font-weight: 300;
}

.hero__kicker {
  text-transform: uppercase;
  letter-spacing: 0.4em;
  font-size: 0.8rem;
  margin-bottom: 1.5rem;
  color: rgba(255, 255, 255, 0.7);
}

.hero__description {
  max-width: 34rem;
  font-size: 1.05rem;
  margin-bottom: 2rem;
  color: rgba(255, 255, 255, 0.86);
}

.hero__actions {
  display: flex;
  gap: 1rem;
  flex-wrap: wrap;
  margin-bottom: 2rem;
}

.btn {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  padding: 0.85rem 1.75rem;
  border-radius: 999px;
  font-weight: 600;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  font-size: 0.85rem;
  text-decoration: none;
  transition: transform 0.25s ease, box-shadow 0.25s ease;
}

.btn--primary {
  background: var(--color-accent);
  color: var(--color-secondary);
  box-shadow: 0 12px 24px rgba(0, 0, 0, 0.25);
}

.btn--primary:hover {
  transform: translateY(-3px);
}

.btn--ghost {
  border: 1px solid rgba(255, 255, 255, 0.5);
  color: #fff;
}

.btn--surface {
  background: var(--color-surface);
  color: var(--color-primary);
  border: 1px solid transparent;
}

.btn--outline {
  border: 1px solid var(--color-primary);
  color: var(--color-primary);
}

.section--cta .btn--outline {
  border-color: rgba(255, 255, 255, 0.6);
  color: #fff;
}

.section--cta .btn--outline:hover {
  border-color: #fff;
}

.hero__highlights {
  display: grid;
  gap: 1.25rem;
  grid-template-columns: repeat(auto-fit, minmax(160px, 1fr));
  padding: 0;
  margin: 0;
  list-style: none;
}

.hero__highlights li span {
  font-size: 0.75rem;
  letter-spacing: 0.2em;
  text-transform: uppercase;
  color: rgba(255, 255, 255, 0.6);
}

.hero__highlights li strong {
  font-size: 1.15rem;
  font-weight: 600;
}

.hero__card {
  background: rgba(255, 255, 255, 0.08);
  border: 1px solid rgba(255, 255, 255, 0.25);
  border-radius: 20px;
  padding: 2rem;
  backdrop-filter: blur(8px);
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
}

.hero__card h2 {
  font-size: 1.35rem;
  font-weight: 600;
  letter-spacing: 0.08em;
  text-transform: uppercase;
}

.hero__card-details {
  display: grid;
  gap: 1rem;
}

.hero__card-details div span {
  display: block;
  text-transform: uppercase;
  font-size: 0.7rem;
  letter-spacing: 0.28em;
  color: rgba(255, 255, 255, 0.6);
  margin-bottom: 0.25rem;
}

.hero__card-details div strong {
  font-size: 1.05rem;
  font-weight: 600;
}

.hero__card-actions {
  display: flex;
  flex-direction: column;
  gap: 0.65rem;
}

.hero__card-actions a {
  color: inherit;
  text-decoration: none;
  font-weight: 600;
}

.section {
  padding: clamp(4rem, 8vw, 6rem) 0;
}

.section__eyebrow {
  text-transform: uppercase;
  letter-spacing: 0.35em;
  font-size: 0.75rem;
  color: var(--color-muted-text);
  margin-bottom: 1.5rem;
}

.section__header {
  text-align: center;
  max-width: 720px;
  margin: 0 auto 3rem;
}

.section__header h2 {
  font-family: var(--font-display);
  font-size: clamp(2rem, 4vw, 2.75rem);
  margin-bottom: 1rem;
}

.section__header p {
  color: var(--color-muted-text);
}

.identity {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 3rem;
  align-items: center;
}

.identity__text p {
  margin-bottom: 1rem;
  color: var(--color-muted-text);
}

.identity__text blockquote {
  margin-top: 2rem;
  padding-left: 1.5rem;
  border-left: 3px solid var(--color-accent);
  font-style: italic;
  color: var(--color-primary);
}

.identity__image img {
  width: 100%;
  border-radius: 28px;
  box-shadow: 0 24px 40px rgba(0, 0, 0, 0.12);
}

.section--cuisine {
  background: var(--color-background-soft);
}

.pillars {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
  gap: 1.75rem;
}

.pillar {
  background: var(--color-surface);
  border-radius: 20px;
  padding: 2rem;
  box-shadow: 0 20px 35px rgba(13, 48, 68, 0.08);
}

.pillar h3 {
  margin-bottom: 0.75rem;
  font-size: 1.1rem;
}

.pillar p {
  color: var(--color-muted-text);
}

.section--menus {
  background: linear-gradient(135deg, rgba(255, 255, 255, 0.78), rgba(255, 255, 255, 0.92));
}

.menus {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
  gap: 2rem;
}

.menu {
  background: #fff;
  border-radius: 24px;
  padding: 2.25rem;
  border: 1px solid rgba(12, 41, 63, 0.08);
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  box-shadow: 0 30px 40px rgba(15, 47, 66, 0.08);
}

.menu__header {
  display: flex;
  justify-content: space-between;
  align-items: baseline;
  gap: 1rem;
}

.menu__header h3 {
  font-size: 1.3rem;
}

.menu__price {
  font-weight: 600;
  color: var(--color-accent);
  letter-spacing: 0.08em;
}

.menu ul {
  margin: 0;
  padding-left: 1.1rem;
  color: var(--color-muted-text);
  display: grid;
  gap: 0.5rem;
}

.menu__link {
  align-self: flex-start;
  font-weight: 600;
  color: var(--color-primary);
  letter-spacing: 0.1em;
  text-transform: uppercase;
  text-decoration: none;
}

.menus__note {
  text-align: center;
  margin-top: 2.5rem;
  color: var(--color-muted-text);
  font-size: 0.95rem;
}

.spaces {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
  gap: 2rem;
}

.space {
  background: #fff;
  border-radius: 22px;
  overflow: hidden;
  box-shadow: 0 18px 32px rgba(0, 0, 0, 0.1);
}

.space img {
  width: 100%;
  height: 200px;
  object-fit: cover;
}

.space__content {
  padding: 1.75rem;
}

.space__content h3 {
  margin-bottom: 0.75rem;
}

.space__content p {
  color: var(--color-muted-text);
}

.section--experiences {
  background: var(--color-background-soft);
}

.experiences {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
  gap: 1.75rem;
}

.experience {
  background: var(--color-surface);
  border-radius: 18px;
  padding: 2rem;
  border: 1px solid rgba(12, 41, 63, 0.08);
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.experience span {
  text-transform: uppercase;
  letter-spacing: 0.2em;
  font-size: 0.7rem;
  color: var(--color-accent);
}

.section__header--news {
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  gap: 1rem;
}

.news__all {
  text-transform: uppercase;
  letter-spacing: 0.25em;
  font-size: 0.75rem;
  color: var(--color-primary);
  text-decoration: none;
}

.news {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
  gap: 2rem;
}

.news__item {
  background: #fff;
  border-radius: 20px;
  padding: 2rem;
  border: 1px solid rgba(12, 41, 63, 0.08);
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.news__date {
  text-transform: uppercase;
  letter-spacing: 0.3em;
  font-size: 0.7rem;
  color: var(--color-muted-text);
}

.news__item a {
  color: var(--color-primary);
  text-decoration: none;
  font-weight: 600;
  letter-spacing: 0.08em;
}

.section--cta {
  background: linear-gradient(135deg, rgba(8, 19, 33, 0.9), rgba(8, 19, 33, 0.85));
  color: #fff;
}

.cta {
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 2rem;
}

.cta__actions {
  display: flex;
  gap: 1rem;
  flex-wrap: wrap;
}

.footer {
  background: var(--color-footer);
  color: rgba(255, 255, 255, 0.76);
  padding: 3rem 0 2rem;
}

.footer__content {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
  gap: 2.5rem;
  align-items: start;
}

.footer__logo {
  width: 52px;
  height: 52px;
  margin-bottom: 1rem;
}

.footer__info h3 {
  color: #fff;
  text-transform: uppercase;
  letter-spacing: 0.2em;
  font-size: 0.8rem;
  margin-bottom: 1rem;
}

.footer__info a {
  color: inherit;
  text-decoration: none;
}

.footer__legal {
  margin-top: 2rem;
  text-align: center;
  font-size: 0.8rem;
  letter-spacing: 0.1em;
}

@media (max-width: 960px) {
  .hero__content {
    grid-template-columns: 1fr;
  }

  .hero__card {
    margin-top: 2rem;
  }

  .cta {
    flex-direction: column;
    text-align: center;
  }
}

@media (max-width: 720px) {
  .nav {
    flex-direction: column;
  }

  .nav ul {
    flex-wrap: wrap;
    justify-content: center;
  }

  .hero {
    padding-bottom: 4rem;
  }

  .section__header--news {
    flex-direction: column;
    align-items: center;
  }
}
</style>
