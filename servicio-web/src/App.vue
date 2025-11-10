<script setup lang="ts">
import { computed } from 'vue';
import { storeToRefs } from 'pinia';
import { useTheme } from './theme/useTheme';
import { usePlanStore } from './stores/planStore';
import { templates } from './data/templates';

useTheme();

const planStore = usePlanStore();
const { plans, selectedPlanId, selectedPlan } = storeToRefs(planStore);

const featuredPlan = computed(() => selectedPlan.value ?? plans.value[0]);
const featuredPlanFeatures = computed(() => featuredPlan.value?.features.slice(0, 3) ?? []);

const serviceHighlights = [
  {
    id: 'support',
    title: 'Soporte proactivo',
    description: 'Resolvemos incidencias y peticiones de contenido en menos de 24 horas laborables.'
  },
  {
    id: 'seo',
    title: 'SEO Local optimizado',
    description: 'Implementamos estructuración, reseñas y analítica para aparecer donde te buscan.'
  },
  {
    id: 'automation',
    title: 'Automatizaciones',
    description: 'Conecta tu web con reservas, CRM y campañas para medir cada contacto recibido.'
  }
];

const metrics = [
  { id: 'time', value: '10 días', label: 'Tiempo medio de lanzamiento' },
  { id: 'updates', value: '∞ cambios', label: 'Actualizaciones incluidos en Plan Premium' },
  { id: 'satisfaction', value: '97%', label: 'Clientes que renuevan su suscripción anual' }
];

const logo = computed(() => new URL('./assets/logo.svg', import.meta.url).href);
</script>

<template>
  <div class="page">
    <aside class="sidebar">
      <div class="sidebar__brand">
        <img class="sidebar__logo" :src="logo" alt="Presencia Local logo" />
        <span>Presencia Local</span>
      </div>
      <nav class="sidebar__nav">
        <a href="#inicio">Inicio</a>
        <a href="#proceso">Metodología</a>
        <a href="#panel">Capacidades</a>
        <a href="#planes">Planes</a>
        <a href="#templates">Plantillas</a>
        <a href="#faq">FAQ</a>
        <a href="#contacto">Contacto</a>
      </nav>
      <div class="sidebar__footer">
        <p>¿Prefieres que te guiemos? Agendamos una videollamada sin compromiso.</p>
        <a class="sidebar__cta" href="mailto:hola@presencialocal.com">hola@presencialocal.com</a>
        <a class="sidebar__cta sidebar__cta--ghost" href="https://wa.me/34655111222" target="_blank" rel="noopener">
          Hablar por WhatsApp
        </a>
      </div>
    </aside>

    <div class="layout">
      <header class="topbar">
        <span class="topbar__badge">Presencia Local Studio</span>
        <div class="topbar__meta">
          <span>Suscripciones flexibles para negocios locales</span>
          <a class="topbar__contact" href="tel:+34655111222">+34 655 111 222</a>
        </div>
      </header>

      <main>
        <section class="hero" id="inicio">
          <div class="hero__grid">
            <div class="hero__copy">
              <p class="hero__eyebrow">Tu estudio digital de proximidad</p>
              <h1>Webs inteligentes para negocios con alma local</h1>
              <p>
                Transformamos tu presencia online con diseños inspirados en tu sector, copywriting que conecta
                y un equipo que se ocupa del mantenimiento continuo. Sin sustos, con métricas que demuestran
                resultados.
              </p>
              <div class="hero__cta">
                <a class="btn btn--primary" href="#planes">Ver suscripciones</a>
                <a class="btn btn--ghost" href="#templates">Explorar plantillas</a>
              </div>
              <dl class="hero__metrics">
                <div v-for="metric in metrics" :key="metric.id" class="metric">
                  <dt>{{ metric.value }}</dt>
                  <dd>{{ metric.label }}</dd>
                </div>
              </dl>
            </div>
            <div class="hero__preview">
              <div class="hero__screen">
                <header class="screen__header">
                  <span class="screen__title">{{ featuredPlan.name }}</span>
                  <span class="screen__price">{{ featuredPlan.monthlyPrice }}€ / mes</span>
                </header>
                <p class="screen__description">{{ featuredPlan.description }}</p>
                <ul class="screen__list">
                  <li v-for="feature in featuredPlanFeatures" :key="feature.label">{{ feature.label }}</li>
                </ul>
                <a class="screen__cta" href="#planes">Comparar planes</a>
              </div>
              <div class="hero__status">
                <article v-for="highlight in serviceHighlights" :key="highlight.id" class="status">
                  <h3>{{ highlight.title }}</h3>
                  <p>{{ highlight.description }}</p>
                </article>
              </div>
            </div>
          </div>
        </section>

        <section class="section" id="proceso">
          <div class="section__header">
            <h2>Metodología inmersiva y ágil</h2>
            <p>
              Trabajamos contigo como parte del equipo para lanzar una web que refleje la esencia de tu negocio y
              genere oportunidades desde el primer día.
            </p>
          </div>
          <div class="process">
            <article class="process__card">
              <span class="process__step">1</span>
              <h3>Descubrimiento estratégico</h3>
              <p>
                Reunión de 45 minutos para entender tu negocio, recopilar materiales y fijar objetivos medibles.
                Entregamos un briefing visual para que valides el enfoque.
              </p>
            </article>
            <article class="process__card">
              <span class="process__step">2</span>
              <h3>Diseño & contenido</h3>
              <p>
                Adaptamos la plantilla elegida, redactamos textos persuasivos y definimos llamadas a la acción.
                Entregamos versiones navegables para recibir feedback.
              </p>
            </article>
            <article class="process__card">
              <span class="process__step">3</span>
              <h3>Lanzamiento guiado</h3>
              <p>
                Configuramos dominio, analítica y SEO básico. En una sesión express de 30 minutos te enseñamos a
                gestionar leads y solicitudes.
              </p>
            </article>
          </div>
        </section>

        <section class="section section--panel" id="panel">
          <div class="panel">
            <header class="panel__header">
              <h2>Capacidades que nos diferencian</h2>
              <p>
                Más allá del diseño: automatizaciones, posicionamiento local y soporte que evoluciona contigo.
              </p>
            </header>
            <div class="panel__grid">
              <article v-for="highlight in serviceHighlights" :key="`panel-${highlight.id}`" class="panel__card">
                <h3>{{ highlight.title }}</h3>
                <p>{{ highlight.description }}</p>
              </article>
            </div>
          </div>
        </section>

        <section class="section" id="planes">
          <div class="section__header section__header--left">
            <h2>Suscripciones con inversión inicial reducida</h2>
            <p>Selecciona el plan que mejor se ajusta a tu ritmo de crecimiento.</p>
          </div>
          <div class="plans">
            <article
              v-for="plan in plans"
              :key="plan.id"
              class="plan"
              :class="{ 'plan--active': plan.id === selectedPlanId }"
              @mouseenter="planStore.selectPlan(plan.id)"
              @focus="planStore.selectPlan(plan.id)"
              tabindex="0"
            >
              <header class="plan__header">
                <div>
                  <p class="plan__label">{{ plan.name }}</p>
                  <h3>{{ plan.description }}</h3>
                </div>
                <p class="plan__price">
                  <span>{{ plan.setupPrice }}€ alta</span>
                  <strong>{{ plan.monthlyPrice }}€ / mes</strong>
                </p>
              </header>
              <p class="plan__best">Ideal para: {{ plan.bestFor }}</p>
              <ul class="plan__features">
                <li v-for="feature in plan.features" :key="feature.label" :class="{ highlight: feature.highlight }">
                  {{ feature.label }}
                </li>
              </ul>
              <a class="plan__cta" href="#contacto">Quiero este plan</a>
            </article>
          </div>
        </section>

        <section class="section section--muted" id="templates">
          <div class="section__header">
            <h2>Plantillas para cada tipo de negocio</h2>
            <p>Cambia colores, tipografías e imágenes desde un único fichero de tema.</p>
          </div>
          <div class="templates">
            <article v-for="template in templates" :key="template.id" class="templates__card">
              <header class="templates__header">
                <h3>{{ template.title }}</h3>
                <p>{{ template.description }}</p>
              </header>
              <ul class="templates__list">
                <li v-for="highlight in template.highlights" :key="highlight">{{ highlight }}</li>
              </ul>
              <a class="templates__link" :href="template.demoPath" target="_blank" rel="noopener">Ver demo</a>
            </article>
          </div>
        </section>

        <section class="section" id="faq">
          <div class="section__header">
            <h2>Preguntas frecuentes</h2>
            <p>Transparencia total para que sepas qué esperar de nuestro servicio.</p>
          </div>
          <div class="faq">
            <article class="faq__item">
              <h3>¿Cuánto tardáis en lanzar la web?</h3>
              <p>
                El plazo habitual es de 7 a 10 días desde la reunión inicial. Si necesitas algo urgente, priorizamos
                tu proyecto con el Plan Premium.
              </p>
            </article>
            <article class="faq__item">
              <h3>¿Qué incluye el mantenimiento mensual?</h3>
              <p>
                Actualizaciones de seguridad, copias de seguridad, optimización de rendimiento y las modificaciones
                incluidas en tu plan. También monitorizamos formularios y métricas.
              </p>
            </article>
            <article class="faq__item">
              <h3>¿Podré solicitar cambios adicionales?</h3>
              <p>
                Sí. Si superas las modificaciones de tu plan, ofrecemos bonos de horas o puedes pasar al plan superior
                cuando lo necesites.
              </p>
            </article>
          </div>
        </section>

        <section class="section section--cta" id="contacto">
          <div class="cta">
            <div class="cta__copy">
              <h2>Hablemos de tu proyecto</h2>
              <p>
                Cuéntanos tu negocio, el plan que te interesa y agenda una videollamada. Te enviaremos una propuesta
                personalizada en 24 horas.
              </p>
            </div>
            <div class="cta__actions">
              <a class="btn btn--primary" href="mailto:hola@presencialocal.com">hola@presencialocal.com</a>
              <a class="btn btn--outline" href="https://wa.me/34655111222" target="_blank" rel="noopener">
                Escríbenos por WhatsApp
              </a>
            </div>
          </div>
        </section>
      </main>

      <footer class="footer">
        <div class="footer__content">
          <div class="footer__brand">
            <img class="footer__logo" :src="logo" alt="Presencia Local" />
            <p>Webs estratégicas para negocios locales con soporte continuo.</p>
          </div>
          <ul class="footer__info">
            <li><strong>Email:</strong> hola@presencialocal.com</li>
            <li><strong>Teléfono:</strong> +34 655 111 222</li>
            <li><strong>Horario:</strong> Lunes a viernes de 9:00 a 18:00</li>
          </ul>
        </div>
        <p class="footer__legal">© {{ new Date().getFullYear() }} Presencia Local. Todos los derechos reservados.</p>
      </footer>
    </div>
  </div>
</template>

<style scoped>
.page {
  display: flex;
  min-height: 100vh;
  background: radial-gradient(circle at top right, rgba(52, 211, 200, 0.15), transparent 55%),
    linear-gradient(160deg, #f1f5f9 0%, #e6f7f6 35%, #f9f5ff 100%);
  color: var(--color-text);
}

.sidebar {
  width: 260px;
  background: linear-gradient(180deg, rgba(15, 23, 42, 0.95) 0%, rgba(12, 74, 110, 0.9) 100%);
  color: #f8fafc;
  border-radius: 28px;
  padding: 2.5rem 2rem;
  margin: 1.5rem;
  display: flex;
  flex-direction: column;
  gap: 2.5rem;
  position: sticky;
  top: 1.5rem;
  height: calc(100vh - 3rem);
  box-shadow: 0 25px 60px rgba(15, 23, 42, 0.35);
}

.sidebar__brand {
  display: flex;
  align-items: center;
  gap: 1rem;
  font-size: 1.1rem;
  font-weight: 600;
}

.sidebar__logo {
  width: 48px;
  height: 48px;
}

.sidebar__nav {
  display: grid;
  gap: 0.75rem;
  font-weight: 500;
}

.sidebar__nav a {
  padding: 0.65rem 0.9rem;
  border-radius: 999px;
  transition: background 0.2s ease, transform 0.2s ease;
  color: inherit;
}

.sidebar__nav a:hover {
  background: rgba(94, 234, 212, 0.18);
  transform: translateX(4px);
}

.sidebar__footer {
  margin-top: auto;
  display: grid;
  gap: 0.75rem;
  font-size: 0.95rem;
  color: rgba(226, 232, 240, 0.8);
}

.sidebar__cta {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 0.75rem 1.25rem;
  border-radius: 12px;
  background: rgba(45, 212, 191, 0.25);
  color: #ecfeff;
  font-weight: 600;
  text-align: center;
}

.sidebar__cta--ghost {
  background: transparent;
  border: 1px solid rgba(148, 163, 184, 0.3);
}

.layout {
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 2rem;
  padding: 1.5rem 1.5rem 3rem 0;
}

.topbar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1.25rem 1.75rem;
  border-radius: 24px;
  background: rgba(255, 255, 255, 0.9);
  backdrop-filter: blur(18px);
  border: 1px solid rgba(15, 23, 42, 0.05);
  box-shadow: 0 18px 40px rgba(15, 23, 42, 0.08);
}

.topbar__badge {
  font-weight: 600;
  color: var(--color-secondary);
  letter-spacing: 0.04em;
}

.topbar__meta {
  display: flex;
  gap: 1rem;
  align-items: center;
  font-size: 0.95rem;
  color: rgba(15, 23, 42, 0.65);
}

.topbar__contact {
  font-weight: 600;
  color: var(--color-secondary);
}

.hero {
  position: relative;
  overflow: hidden;
  border-radius: 36px;
  padding: 3.5rem;
  background: linear-gradient(140deg, #0f172a 0%, #1e3a8a 40%, #2dd4bf 100%);
  color: #f8fafc;
  box-shadow: 0 30px 70px rgba(15, 23, 42, 0.3);
}

.hero::before {
  content: '';
  position: absolute;
  width: 320px;
  height: 320px;
  background: radial-gradient(circle, rgba(236, 254, 255, 0.5), transparent 65%);
  top: -120px;
  right: -80px;
  filter: blur(0.5px);
}

.hero::after {
  content: '';
  position: absolute;
  inset: 40% -40% -60% 55%;
  background: linear-gradient(135deg, rgba(255, 255, 255, 0.08), rgba(255, 255, 255, 0));
  border-radius: 32px;
  transform: rotate(-8deg);
}

.hero__grid {
  position: relative;
  z-index: 1;
  display: grid;
  gap: 3rem;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  align-items: center;
}

.hero__copy h1 {
  font-size: clamp(2.6rem, 5vw, 3.4rem);
  line-height: 1.05;
  margin: 1.25rem 0;
}

.hero__copy p {
  font-size: 1.05rem;
  color: rgba(248, 250, 252, 0.82);
  max-width: 540px;
}

.hero__eyebrow {
  display: inline-flex;
  padding: 0.45rem 1.2rem;
  border-radius: 999px;
  background: rgba(15, 118, 110, 0.3);
  font-size: 0.85rem;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  font-weight: 600;
}

.hero__cta {
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
  margin: 2.5rem 0 2rem;
}

.hero__metrics {
  display: grid;
  gap: 1.5rem;
  grid-template-columns: repeat(auto-fit, minmax(120px, 1fr));
}

.metric dt {
  font-size: 1.6rem;
  font-weight: 700;
  color: #ecfeff;
}

.metric dd {
  margin-top: 0.35rem;
  color: rgba(241, 245, 249, 0.75);
  font-size: 0.92rem;
}

.hero__preview {
  display: grid;
  gap: 1.5rem;
}

.hero__screen {
  background: rgba(15, 23, 42, 0.85);
  border: 1px solid rgba(148, 163, 184, 0.25);
  border-radius: 24px;
  padding: 2rem;
  backdrop-filter: blur(12px);
  box-shadow: 0 25px 65px rgba(15, 23, 42, 0.45);
}

.screen__header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1.5rem;
  font-weight: 600;
}

.screen__title {
  color: #a5f3fc;
}

.screen__price {
  color: #fef3c7;
}

.screen__description {
  color: rgba(226, 232, 240, 0.85);
  margin-bottom: 1.25rem;
  line-height: 1.6;
}

.screen__list {
  list-style: none;
  display: grid;
  gap: 0.75rem;
  margin-bottom: 1.5rem;
}

.screen__list li {
  padding: 0.75rem 1rem;
  border-radius: 14px;
  background: rgba(37, 99, 235, 0.16);
  border: 1px solid rgba(59, 130, 246, 0.25);
  color: rgba(224, 231, 255, 0.9);
}

.screen__cta {
  display: inline-flex;
  padding: 0.7rem 1.4rem;
  background: linear-gradient(120deg, #22d3ee, #2dd4bf);
  border-radius: 999px;
  color: #0f172a;
  font-weight: 600;
}

.hero__status {
  display: grid;
  gap: 1rem;
}

.status {
  padding: 1.5rem;
  border-radius: 18px;
  background: rgba(15, 118, 110, 0.18);
  border: 1px solid rgba(45, 212, 191, 0.3);
  color: #ecfeff;
  backdrop-filter: blur(6px);
}

.status h3 {
  font-size: 1.05rem;
  margin-bottom: 0.5rem;
}

.section {
  margin-top: 3rem;
  padding: 0 1.75rem;
}

.section__header {
  text-align: center;
  max-width: 720px;
  margin: 0 auto 2.75rem;
  display: grid;
  gap: 1rem;
}

.section__header h2 {
  font-size: clamp(2rem, 4vw, 2.6rem);
  color: var(--color-secondary);
}

.section__header p {
  color: rgba(15, 23, 42, 0.68);
}

.section__header--left {
  text-align: left;
  margin-left: 0;
}

.process {
  display: grid;
  gap: 1.5rem;
  grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
}

.process__card {
  background: rgba(255, 255, 255, 0.9);
  border-radius: 24px;
  padding: 2.25rem 2rem;
  border: 1px solid rgba(148, 163, 184, 0.2);
  box-shadow: 0 20px 45px rgba(15, 23, 42, 0.1);
}

.process__step {
  display: inline-flex;
  width: 48px;
  height: 48px;
  align-items: center;
  justify-content: center;
  border-radius: 16px;
  background: linear-gradient(120deg, #2dd4bf, #38bdf8);
  color: #0f172a;
  font-weight: 700;
  margin-bottom: 1.5rem;
}

.section--panel {
  padding: 0 1.75rem;
}

.panel {
  background: linear-gradient(135deg, rgba(15, 23, 42, 0.92), rgba(8, 47, 73, 0.92));
  color: #f8fafc;
  border-radius: 32px;
  padding: 3rem;
  box-shadow: 0 28px 60px rgba(15, 23, 42, 0.35);
  border: 1px solid rgba(148, 163, 184, 0.15);
}

.panel__header {
  display: grid;
  gap: 0.75rem;
  text-align: center;
  max-width: 640px;
  margin: 0 auto 2.5rem;
}

.panel__grid {
  display: grid;
  gap: 1.25rem;
  grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
}

.panel__card {
  padding: 1.75rem;
  border-radius: 22px;
  background: rgba(15, 118, 110, 0.22);
  border: 1px solid rgba(94, 234, 212, 0.25);
  color: rgba(224, 242, 254, 0.92);
  backdrop-filter: blur(8px);
}

.plans {
  display: grid;
  gap: 1.75rem;
  grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
}

.plan {
  position: relative;
  border-radius: 28px;
  padding: 2.5rem 2rem;
  background: rgba(255, 255, 255, 0.88);
  border: 1px solid transparent;
  box-shadow: 0 22px 45px rgba(15, 23, 42, 0.08);
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  transition: transform 0.2s ease, box-shadow 0.2s ease, border 0.2s ease;
}

.plan:focus {
  outline: none;
  transform: translateY(-6px);
}

.plan:hover {
  transform: translateY(-6px);
}

.plan--active {
  border-color: rgba(34, 211, 238, 0.8);
  box-shadow: 0 28px 55px rgba(45, 212, 191, 0.25);
}

.plan__header {
  display: flex;
  justify-content: space-between;
  gap: 1.5rem;
  align-items: flex-start;
}

.plan__label {
  text-transform: uppercase;
  letter-spacing: 0.08em;
  font-weight: 600;
  color: var(--color-secondary);
  font-size: 0.9rem;
}

.plan__price {
  display: grid;
  gap: 0.4rem;
  text-align: right;
  font-size: 0.95rem;
  color: rgba(15, 23, 42, 0.65);
}

.plan__price strong {
  font-size: 1.4rem;
  color: var(--color-secondary);
}

.plan__best {
  color: rgba(15, 23, 42, 0.65);
}

.plan__features {
  list-style: none;
  display: grid;
  gap: 0.75rem;
}

.plan__features li {
  padding: 0.8rem 1rem;
  border-radius: 16px;
  background: rgba(226, 232, 240, 0.55);
}

.plan__features li.highlight {
  background: rgba(45, 212, 191, 0.2);
  border: 1px solid rgba(34, 197, 94, 0.35);
}

.plan__cta {
  align-self: flex-start;
  padding: 0.8rem 1.5rem;
  border-radius: 999px;
  font-weight: 600;
  background: rgba(37, 99, 235, 0.1);
  color: var(--color-secondary);
}

.section--muted {
  background: linear-gradient(180deg, rgba(203, 213, 225, 0.2), rgba(226, 232, 240, 0));
  border-radius: 32px;
  padding-bottom: 3.5rem;
}

.templates {
  display: grid;
  gap: 1.5rem;
  grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
}

.templates__card {
  background: rgba(255, 255, 255, 0.9);
  border-radius: 24px;
  padding: 2rem;
  border: 1px solid rgba(148, 163, 184, 0.18);
  box-shadow: 0 20px 40px rgba(15, 23, 42, 0.08);
  display: grid;
  gap: 1.25rem;
}

.templates__list {
  list-style: none;
  display: grid;
  gap: 0.65rem;
  color: rgba(15, 23, 42, 0.72);
}

.templates__link {
  color: var(--color-secondary);
  font-weight: 600;
}

.faq {
  display: grid;
  gap: 1.5rem;
  grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
}

.faq__item {
  background: rgba(255, 255, 255, 0.92);
  border-radius: 22px;
  padding: 2rem;
  border: 1px solid rgba(148, 163, 184, 0.18);
  box-shadow: 0 18px 38px rgba(15, 23, 42, 0.08);
}

.section--cta {
  padding: 0 1.75rem 3rem;
}

.cta {
  background: linear-gradient(135deg, rgba(15, 23, 42, 0.95), rgba(45, 212, 191, 0.25));
  border-radius: 28px;
  padding: 3rem;
  display: flex;
  flex-direction: column;
  gap: 2rem;
  color: #f8fafc;
  border: 1px solid rgba(94, 234, 212, 0.2);
  box-shadow: 0 30px 60px rgba(15, 23, 42, 0.28);
}

@media (min-width: 768px) {
  .cta {
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
  }
}

.cta__actions {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.btn {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 0.85rem 1.8rem;
  border-radius: 999px;
  font-weight: 600;
  transition: transform 0.2s ease, box-shadow 0.2s ease, background 0.2s ease, color 0.2s ease;
}

.btn:hover {
  transform: translateY(-2px);
}

.btn--primary {
  background: linear-gradient(120deg, #22d3ee, #2dd4bf);
  color: #0f172a;
  box-shadow: 0 20px 35px rgba(45, 212, 191, 0.35);
}

.btn--ghost {
  background: transparent;
  border: 1px solid rgba(248, 250, 252, 0.7);
  color: #f8fafc;
}

.btn--outline {
  background: transparent;
  border: 1px solid rgba(94, 234, 212, 0.6);
  color: #ecfeff;
}

.footer {
  margin-top: auto;
  padding: 2.5rem 1.75rem 1.5rem;
  color: rgba(15, 23, 42, 0.7);
}

.footer__content {
  display: grid;
  gap: 2rem;
  grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
  background: rgba(255, 255, 255, 0.85);
  border-radius: 24px;
  padding: 2rem;
  border: 1px solid rgba(148, 163, 184, 0.18);
  box-shadow: 0 18px 40px rgba(15, 23, 42, 0.08);
}

.footer__logo {
  width: 120px;
  margin-bottom: 1rem;
}

.footer__legal {
  margin-top: 1.5rem;
  text-align: center;
  font-size: 0.85rem;
  color: rgba(15, 23, 42, 0.55);
}

@media (max-width: 1024px) {
  .page {
    flex-direction: column;
    padding: 1.5rem;
  }

  .sidebar {
    position: static;
    width: 100%;
    height: auto;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    gap: 1.5rem;
  }

  .sidebar__nav {
    grid-auto-flow: column;
    grid-auto-columns: 1fr;
    overflow-x: auto;
    padding-bottom: 0.5rem;
  }

  .sidebar__footer {
    display: none;
  }

  .layout {
    padding: 0;
  }

  .section {
    padding: 0;
  }

  .section--panel,
  .section--muted,
  .section--cta {
    padding: 0;
  }
}

@media (max-width: 640px) {
  .hero {
    padding: 2.5rem;
  }

  .topbar {
    flex-direction: column;
    gap: 0.75rem;
    align-items: flex-start;
  }

  .sidebar {
    flex-direction: column;
    align-items: flex-start;
  }

  .cta {
    padding: 2rem;
  }
}
</style>
