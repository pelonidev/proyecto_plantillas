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
              <small>{{ businessInfo.claim }}</small>
            </div>
          </a>
          <ul>
            <li v-for="link in businessInfo.navigation" :key="link.label">
              <a :href="link.href">{{ link.label }}</a>
            </li>
          </ul>
        </nav>

        <div class="hero__content" id="inicio">
          <div class="hero__text">
            <p class="hero__eyebrow">{{ businessInfo.hero.eyebrow }}</p>
            <h1>{{ businessInfo.hero.title }}</h1>
            <p>{{ businessInfo.hero.description }}</p>
            <div class="hero__actions">
              <a class="btn btn--primary" :href="businessInfo.hero.primaryCta.href">
                {{ businessInfo.hero.primaryCta.label }}
              </a>
              <a class="btn btn--ghost" :href="businessInfo.hero.secondaryCta.href">
                {{ businessInfo.hero.secondaryCta.label }}
              </a>
            </div>
            <dl class="hero__stats">
              <div v-for="stat in businessInfo.hero.stats" :key="stat.label">
                <dt>{{ stat.value }}</dt>
                <dd>{{ stat.label }}</dd>
              </div>
            </dl>
          </div>
          <div class="hero__card">
            <h2>{{ businessInfo.assessment.title }}</h2>
            <p>{{ businessInfo.assessment.description }}</p>
            <form class="hero__form">
              <label>
                <span>{{ businessInfo.assessment.form.nameLabel }}</span>
                <input type="text" :placeholder="businessInfo.assessment.form.namePlaceholder" />
              </label>
              <label>
                <span>{{ businessInfo.assessment.form.needLabel }}</span>
                <select>
                  <option v-for="option in businessInfo.assessment.form.options" :key="option" :value="option">
                    {{ option }}
                  </option>
                </select>
              </label>
              <button type="button" class="btn btn--surface">{{ businessInfo.assessment.form.submit }}</button>
            </form>
            <div class="hero__contact">
              <a :href="`tel:${businessInfo.contact.phone}`">📞 {{ businessInfo.contact.phone }}</a>
              <a :href="`mailto:${businessInfo.contact.email}`">✉️ {{ businessInfo.contact.email }}</a>
            </div>
          </div>
        </div>
      </div>
      <div class="hero__background"></div>
    </header>

    <main>
      <section id="especialidades" class="section">
        <div class="container">
          <div class="section__header">
            <p class="section__eyebrow">{{ businessInfo.specialties.eyebrow }}</p>
            <h2>{{ businessInfo.specialties.title }}</h2>
            <p>{{ businessInfo.specialties.description }}</p>
          </div>
          <div class="specialties">
            <article v-for="specialty in businessInfo.specialties.items" :key="specialty.name" class="specialty">
              <span>{{ specialty.icon }}</span>
              <h3>{{ specialty.name }}</h3>
              <p>{{ specialty.description }}</p>
            </article>
          </div>
        </div>
      </section>

      <section id="metodo" class="section section--method">
        <div class="container method">
          <div class="method__intro">
            <p class="section__eyebrow">{{ businessInfo.method.eyebrow }}</p>
            <h2>{{ businessInfo.method.title }}</h2>
            <p>{{ businessInfo.method.description }}</p>
          </div>
          <ol class="method__steps">
            <li v-for="step in businessInfo.method.steps" :key="step.title">
              <span>{{ step.number }}</span>
              <div>
                <h3>{{ step.title }}</h3>
                <p>{{ step.detail }}</p>
              </div>
            </li>
          </ol>
        </div>
      </section>

      <section id="equipo" class="section section--team">
        <div class="container">
          <div class="section__header">
            <p class="section__eyebrow">{{ businessInfo.team.eyebrow }}</p>
            <h2>{{ businessInfo.team.title }}</h2>
            <p>{{ businessInfo.team.description }}</p>
          </div>
          <div class="team">
            <article v-for="member in businessInfo.team.members" :key="member.name" class="team__member">
              <img :src="member.photo" :alt="member.name" />
              <div>
                <h3>{{ member.name }}</h3>
                <p>{{ member.role }}</p>
                <ul>
                  <li v-for="highlight in member.highlights" :key="highlight">{{ highlight }}</li>
                </ul>
              </div>
            </article>
          </div>
        </div>
      </section>

      <section id="testimonios" class="section section--testimonials">
        <div class="container">
          <div class="section__header">
            <p class="section__eyebrow">{{ businessInfo.testimonials.eyebrow }}</p>
            <h2>{{ businessInfo.testimonials.title }}</h2>
          </div>
          <div class="testimonials">
            <article v-for="testimonial in businessInfo.testimonials.items" :key="testimonial.author">
              <p>“{{ testimonial.quote }}”</p>
              <footer>
                <strong>{{ testimonial.author }}</strong>
                <span>{{ testimonial.detail }}</span>
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
  width: min(1120px, 92vw);
  margin: 0 auto;
}

.hero {
  position: relative;
  padding: 3rem 0 5rem;
  background: linear-gradient(160deg, var(--color-hero-start), var(--color-hero-end));
  color: #fff;
  overflow: hidden;
}

.hero__background {
  position: absolute;
  inset: 0;
  background: radial-gradient(circle at 20% 20%, rgba(255, 255, 255, 0.25), transparent 45%),
    radial-gradient(circle at 85% 20%, rgba(255, 255, 255, 0.15), transparent 50%);
  opacity: 0.6;
  pointer-events: none;
}

.nav {
  position: relative;
  z-index: 1;
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
  color: inherit;
  font-weight: 600;
}

.nav__brand img {
  width: 56px;
  height: 56px;
  object-fit: contain;
}

.nav ul {
  list-style: none;
  display: flex;
  gap: 1.5rem;
  font-weight: 500;
}

.hero__content {
  position: relative;
  z-index: 1;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 3rem;
}

.hero__text h1 {
  font-family: var(--font-display);
  font-size: clamp(2.4rem, 4vw, 3.4rem);
  margin-bottom: 1.25rem;
}

.hero__text p {
  font-size: 1.1rem;
  line-height: 1.7;
}

.hero__eyebrow {
  letter-spacing: 0.32em;
  text-transform: uppercase;
  font-size: 0.75rem;
  margin-bottom: 1.5rem;
  color: rgba(255, 255, 255, 0.7);
}

.hero__actions {
  margin: 2.5rem 0 2rem;
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
}

.hero__stats {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(120px, 1fr));
  gap: 1.5rem;
  margin-top: 2rem;
}

.hero__stats div {
  background: rgba(255, 255, 255, 0.12);
  border-radius: 16px;
  padding: 1.25rem;
  text-align: center;
}

.hero__stats dt {
  font-size: 1.8rem;
  font-weight: 700;
}

.hero__stats dd {
  font-size: 0.9rem;
  opacity: 0.8;
}

.hero__card {
  background: #fff;
  color: var(--color-text);
  border-radius: 24px;
  padding: 2.5rem;
  box-shadow: 0 25px 45px rgba(18, 48, 69, 0.2);
  display: grid;
  gap: 1.5rem;
}

.hero__card h2 {
  font-size: 1.6rem;
}

.hero__form {
  display: grid;
  gap: 1rem;
}

.hero__form label {
  display: grid;
  gap: 0.5rem;
}

.hero__form span {
  font-weight: 600;
  color: var(--color-text-muted);
}

.hero__form input,
.hero__form select {
  border-radius: 12px;
  border: 1px solid var(--color-border);
  padding: 0.75rem 1rem;
  font: inherit;
  background: #f8fbfd;
}

.hero__contact {
  display: flex;
  flex-direction: column;
  gap: 0.6rem;
  font-weight: 600;
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
  letter-spacing: 0.32em;
  text-transform: uppercase;
  font-size: 0.72rem;
  color: var(--color-primary);
  margin-bottom: 1rem;
}

.specialties {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
  gap: 1.5rem;
}

.specialty {
  background: #fff;
  border-radius: 20px;
  padding: 2rem;
  box-shadow: 0 18px 30px rgba(18, 70, 98, 0.08);
  display: grid;
  gap: 1rem;
}

.specialty span {
  font-size: 2rem;
}

.section--method {
  background: var(--color-section-muted);
}

.method {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
  gap: 3rem;
  align-items: start;
}

.method__steps {
  list-style: none;
  display: grid;
  gap: 1.5rem;
}

.method__steps li {
  display: grid;
  grid-template-columns: auto 1fr;
  gap: 1.5rem;
  align-items: start;
}

.method__steps span {
  width: 48px;
  height: 48px;
  display: grid;
  place-items: center;
  background: var(--color-primary);
  color: #fff;
  border-radius: 16px;
  font-weight: 700;
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
  background: var(--color-section-muted);
  border-radius: 24px;
  padding: 2rem;
}

.team__member img {
  width: 100%;
  max-width: 220px;
  border-radius: 20px;
  object-fit: cover;
}

.team__member ul {
  margin-top: 1rem;
  display: grid;
  gap: 0.4rem;
  color: var(--color-text-muted);
}

.section--testimonials {
  background: linear-gradient(160deg, #f7fbff, #eef5ff);
}

.testimonials {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
  gap: 1.5rem;
}

.testimonials article {
  background: #fff;
  border-radius: 18px;
  padding: 2rem;
  box-shadow: 0 20px 35px rgba(22, 70, 104, 0.08);
  display: grid;
  gap: 1rem;
}

.testimonials footer {
  display: grid;
  gap: 0.2rem;
  color: var(--color-text-muted);
}

.section--cta {
  background: var(--color-primary);
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
  border-radius: 999px;
  padding: 0.9rem 1.8rem;
  font-weight: 600;
  transition: transform 0.2s ease, box-shadow 0.2s ease;
}

.btn:hover {
  transform: translateY(-2px);
  box-shadow: 0 15px 20px rgba(0, 0, 0, 0.12);
}

.btn--primary {
  background: #fff;
  color: var(--color-primary);
}

.btn--ghost {
  border: 1px solid rgba(255, 255, 255, 0.6);
  color: #fff;
}

.btn--surface {
  background: var(--color-primary);
  color: #fff;
  border-radius: 12px;
  padding: 0.85rem 1.4rem;
}

.footer {
  background: #06192a;
  color: #fff;
  padding: 3rem 0 2rem;
}

.footer__content {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 2rem;
  align-items: start;
}

.footer img {
  width: 56px;
}

.footer a {
  color: inherit;
}

.footer__legal {
  margin-top: 2rem;
  text-align: center;
  color: rgba(255, 255, 255, 0.68);
  font-size: 0.85rem;
}

@media (max-width: 720px) {
  .nav ul {
    display: none;
  }

  .hero {
    padding-bottom: 4rem;
  }
}
</style>
