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
      <div class="hero__overlay"></div>
      <div class="hero__content container">
        <div class="hero__info">
          <img class="hero__logo" :src="logo" :alt="`${businessInfo.name} logo`" />
          <p class="hero__tagline">{{ businessInfo.tagline }}</p>
          <h1>{{ businessInfo.hero.title }}</h1>
          <p class="hero__subtitle">{{ businessInfo.hero.subtitle }}</p>
          <div class="hero__actions">
            <a class="btn btn--primary" href="#contacto">{{ businessInfo.hero.ctaPrimary }}</a>
            <a class="btn btn--ghost" href="#servicios">{{ businessInfo.hero.ctaSecondary }}</a>
          </div>
          <ul class="hero__highlights">
            <li v-for="highlight in businessInfo.highlights" :key="highlight.title">
              <h3>{{ highlight.title }}</h3>
              <p>{{ highlight.description }}</p>
            </li>
          </ul>
        </div>
        <div class="hero__card">
          <h2>Agenda tu valoración</h2>
          <p>Elige fecha y horario y te asignaremos al especialista más adecuado para ti.</p>
          <ul>
            <li>
              <span>📞</span>
              <span>{{ businessInfo.contact.phone }}</span>
            </li>
            <li>
              <span>✉️</span>
              <span>{{ businessInfo.contact.email }}</span>
            </li>
            <li>
              <span>📍</span>
              <span>{{ businessInfo.contact.address }}</span>
            </li>
            <li>
              <span>🕒</span>
              <span>{{ businessInfo.contact.schedule }}</span>
            </li>
          </ul>
        </div>
      </div>
    </header>

    <main>
      <section id="servicios" class="section container">
        <header class="section__header">
          <h2>Tratamientos y programas</h2>
          <p>
            Protocolos basados en evidencia para recuperar tu movilidad y mejorar tu rendimiento.
          </p>
        </header>
        <div class="grid">
          <article v-for="service in businessInfo.services" :key="service.name" class="card">
            <h3>{{ service.name }}</h3>
            <p>{{ service.description }}</p>
          </article>
        </div>
      </section>

      <section class="section section--dark">
        <div class="container">
          <header class="section__header">
            <h2>¿Qué nos diferencia?</h2>
            <p>Acompañamiento completo en cada etapa de tu recuperación.</p>
          </header>
          <div class="grid">
            <article
              v-for="feature in businessInfo.differentiators"
              :key="feature.title"
              class="card card--dark"
            >
              <h3>{{ feature.title }}</h3>
              <p>{{ feature.detail }}</p>
            </article>
          </div>
        </div>
      </section>

      <section class="section container">
        <header class="section__header">
          <h2>Personas que confían en nosotros</h2>
          <p>Experiencias reales de pacientes que recuperaron su bienestar.</p>
        </header>
        <div class="testimonials">
          <figure v-for="testimonial in businessInfo.testimonials" :key="testimonial.author">
            <blockquote>“{{ testimonial.quote }}”</blockquote>
            <figcaption>— {{ testimonial.author }}</figcaption>
          </figure>
        </div>
      </section>

      <section id="contacto" class="section section--accent">
        <div class="container cta">
          <div>
            <h2>{{ businessInfo.cta.title }}</h2>
            <p>{{ businessInfo.cta.description }}</p>
          </div>
          <a class="btn btn--surface" :href="`tel:${businessInfo.contact.phone}`">
            {{ businessInfo.cta.button }}
          </a>
        </div>
      </section>
    </main>

    <footer class="footer">
      <div class="container footer__content">
        <div>
          <img class="footer__logo" :src="logo" :alt="`${businessInfo.name} logo`" />
          <p>{{ businessInfo.tagline }}</p>
        </div>
        <ul>
          <li>{{ businessInfo.contact.address }}</li>
          <li>{{ businessInfo.contact.phone }}</li>
          <li>{{ businessInfo.contact.email }}</li>
        </ul>
      </div>
      <p class="footer__legal">© {{ new Date().getFullYear() }} {{ businessInfo.name }}. Todos los derechos reservados.</p>
    </footer>
  </div>
</template>

<style scoped>
.page {
  background: var(--color-background);
}

.container {
  width: min(1100px, 92vw);
  margin: 0 auto;
}

.hero {
  position: relative;
  padding: 6rem 0;
  background: linear-gradient(135deg, var(--color-secondary), var(--color-primary));
  color: #fff;
  overflow: hidden;
}

.hero__overlay {
  position: absolute;
  inset: 0;
  background: radial-gradient(circle at top right, rgba(56, 189, 248, 0.4), transparent 55%);
}

.hero__content {
  position: relative;
  display: grid;
  gap: 3rem;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  align-items: center;
}

.hero__logo {
  width: 160px;
  filter: drop-shadow(0 12px 28px rgba(8, 47, 73, 0.4));
}

.hero__tagline {
  letter-spacing: 0.1em;
  text-transform: uppercase;
  font-weight: 600;
  opacity: 0.85;
}

.hero h1 {
  font-size: clamp(2.4rem, 5vw, 3.4rem);
  line-height: 1.1;
  margin: 1.5rem 0 1rem;
}

.hero__subtitle {
  font-size: 1.1rem;
  max-width: 32rem;
  opacity: 0.9;
}

.hero__actions {
  display: flex;
  gap: 1rem;
  margin: 2rem 0;
  flex-wrap: wrap;
}

.hero__highlights {
  list-style: none;
  display: grid;
  gap: 1rem;
  margin-top: 2rem;
}

.hero__highlights li {
  background: rgba(12, 74, 110, 0.35);
  border: 1px solid rgba(186, 230, 253, 0.5);
  padding: 1rem 1.25rem;
  border-radius: 1.2rem;
  backdrop-filter: blur(8px);
}

.hero__card {
  background: rgba(255, 255, 255, 0.12);
  border: 1px solid rgba(56, 189, 248, 0.4);
  padding: 2.5rem 2rem;
  border-radius: 1.5rem;
  box-shadow: 0 25px 45px rgba(8, 47, 73, 0.35);
}

.hero__card h2 {
  font-size: 1.75rem;
  margin-bottom: 1rem;
}

.hero__card ul {
  list-style: none;
  display: grid;
  gap: 0.85rem;
  margin-top: 1.5rem;
}

.hero__card li {
  display: grid;
  grid-template-columns: 32px 1fr;
  align-items: center;
  gap: 0.75rem;
  padding: 0.75rem 1rem;
  border-radius: 1.2rem;
  background: rgba(12, 74, 110, 0.25);
}

.section {
  padding: 5rem 0;
}

.section__header {
  text-align: center;
  max-width: 640px;
  margin: 0 auto 3rem;
}

.section__header h2 {
  font-size: clamp(2rem, 4vw, 2.75rem);
  color: var(--color-secondary);
}

.section__header p {
  color: rgba(8, 47, 73, 0.75);
}

.grid {
  display: grid;
  gap: 1.75rem;
  grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
}

.card {
  background: var(--color-surface);
  border-radius: 1.25rem;
  padding: 2.2rem 2rem;
  box-shadow: 0 20px 40px rgba(12, 74, 110, 0.08);
  border: 1px solid rgba(186, 230, 253, 0.6);
}

.card h3 {
  color: var(--color-secondary);
  margin-bottom: 0.75rem;
}

.card--dark {
  background: rgba(255, 255, 255, 0.08);
  color: #e0f2fe;
  border: 1px solid rgba(56, 189, 248, 0.4);
}

.section--dark {
  background: linear-gradient(135deg, rgba(8, 47, 73, 0.95), rgba(12, 74, 110, 0.95));
  color: #e0f2fe;
}

.section--dark .section__header p {
  color: rgba(224, 242, 254, 0.75);
}

.testimonials {
  display: grid;
  gap: 1.5rem;
  grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
}

.testimonials figure {
  background: var(--color-surface);
  padding: 2rem;
  border-radius: 1.5rem;
  box-shadow: 0 12px 30px rgba(12, 74, 110, 0.12);
}

.testimonials blockquote {
  font-size: 1.05rem;
  margin-bottom: 1.25rem;
  color: var(--color-secondary);
}

.section--accent {
  background: var(--color-accent);
  color: #082f49;
}

.cta {
  display: flex;
  flex-direction: column;
  gap: 2rem;
  align-items: start;
}

@media (min-width: 768px) {
  .cta {
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
  }
}

.btn {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 0.9rem 1.85rem;
  border-radius: 999px;
  font-weight: 600;
  transition: transform 0.2s ease, box-shadow 0.2s ease;
}

.btn:hover {
  transform: translateY(-2px);
}

.btn--primary {
  background: var(--color-accent);
  color: var(--color-secondary);
  box-shadow: 0 18px 35px rgba(56, 189, 248, 0.45);
}

.btn--ghost {
  background: transparent;
  color: #fff;
  border: 1px solid rgba(255, 255, 255, 0.5);
}

.btn--surface {
  background: var(--color-surface);
  color: var(--color-secondary);
  box-shadow: 0 12px 25px rgba(12, 74, 110, 0.2);
}

.footer {
  background: var(--color-secondary);
  color: rgba(224, 242, 254, 0.85);
  padding: 3rem 0 2rem;
}

.footer__content {
  display: grid;
  gap: 2rem;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  align-items: center;
}

.footer__logo {
  width: 140px;
  margin-bottom: 1rem;
}

.footer__legal {
  text-align: center;
  margin-top: 2rem;
  font-size: 0.9rem;
  color: rgba(224, 242, 254, 0.65);
}
</style>
