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
          <h2>Reserva tu momento</h2>
          <p>Selecciona tu servicio favorito y te confirmaremos la cita con la estilista ideal.</p>
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
          <h2>Experiencias destacadas</h2>
          <p>
            Creamos rituales que combinan técnica, tendencia y bienestar para que tu cabello hable por
            ti.
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
            <h2>Un salón pensado para ti</h2>
            <p>Un ambiente cálido con un equipo atento a cada detalle de tu visita.</p>
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
          <h2>Lo que dicen nuestras clientas</h2>
          <p>Testimonios de mujeres que confiaron su imagen a nuestro equipo.</p>
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
  background: linear-gradient(135deg, var(--color-primary), var(--color-secondary));
  color: #fff;
  overflow: hidden;
}

.hero__overlay {
  position: absolute;
  inset: 0;
  background: radial-gradient(circle at top right, rgba(244, 114, 182, 0.45), transparent 55%);
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
  filter: drop-shadow(0 10px 25px rgba(59, 7, 100, 0.35));
}

.hero__tagline {
  letter-spacing: 0.12em;
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
  max-width: 30rem;
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
  background: rgba(147, 51, 234, 0.25);
  border: 1px solid rgba(245, 208, 254, 0.6);
  padding: 1rem 1.25rem;
  border-radius: 1.2rem;
  backdrop-filter: blur(8px);
}

.hero__card {
  background: rgba(255, 255, 255, 0.12);
  border: 1px solid rgba(244, 114, 182, 0.4);
  padding: 2.5rem 2rem;
  border-radius: 1.75rem;
  backdrop-filter: blur(10px);
  box-shadow: 0 25px 45px rgba(107, 33, 168, 0.35);
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
  border-radius: 1.25rem;
  background: rgba(147, 51, 234, 0.2);
}

.section {
  padding: 5rem 0;
}

.section__header {
  text-align: center;
  max-width: 600px;
  margin: 0 auto 3rem;
}

.section__header h2 {
  font-size: clamp(2rem, 4vw, 2.75rem);
  color: var(--color-secondary);
}

.section__header p {
  color: rgba(59, 7, 100, 0.7);
}

.grid {
  display: grid;
  gap: 1.75rem;
  grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
}

.card {
  background: var(--color-surface);
  border-radius: 1.5rem;
  padding: 2.25rem 2rem;
  box-shadow: 0 18px 40px rgba(147, 51, 234, 0.1);
  border: 1px solid rgba(244, 114, 182, 0.25);
}

.card h3 {
  color: var(--color-secondary);
  margin-bottom: 0.75rem;
}

.card--dark {
  background: rgba(255, 255, 255, 0.12);
  color: #fdf4ff;
  border: 1px solid rgba(244, 114, 182, 0.4);
}

.section--dark {
  background: linear-gradient(135deg, rgba(147, 51, 234, 0.95), rgba(107, 33, 168, 0.95));
  color: #fdf4ff;
}

.section--dark .section__header p {
  color: rgba(253, 244, 255, 0.75);
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
  box-shadow: 0 12px 30px rgba(244, 114, 182, 0.15);
}

.testimonials blockquote {
  font-size: 1.05rem;
  margin-bottom: 1.25rem;
  color: var(--color-secondary);
}

.section--accent {
  background: var(--color-accent);
  color: #3b0764;
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
  box-shadow: 0 18px 35px rgba(244, 114, 182, 0.4);
}

.btn--ghost {
  background: transparent;
  color: #fff;
  border: 1px solid rgba(255, 255, 255, 0.55);
}

.btn--surface {
  background: var(--color-surface);
  color: var(--color-secondary);
  box-shadow: 0 12px 28px rgba(147, 51, 234, 0.18);
}

.footer {
  background: var(--color-secondary);
  color: rgba(253, 244, 255, 0.85);
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
  color: rgba(253, 244, 255, 0.65);
}
</style>
