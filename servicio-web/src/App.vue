<script setup lang="ts">
import { computed } from 'vue';
import { useTheme } from './theme/useTheme';
import { usePlanStore } from './stores/planStore';
import { templates } from './data/templates';

useTheme();

const planStore = usePlanStore();
const logo = computed(() => new URL('./assets/logo.svg', import.meta.url).href);
</script>

<template>
  <div class="page">
    <header class="hero">
      <div class="container hero__content">
        <div class="hero__text">
          <img class="hero__logo" :src="logo" alt="Presencia Local logo" />
          <h1>Lleva tu negocio local al siguiente nivel</h1>
          <p>
            Diseñamos y mantenemos páginas web a medida para negocios de barrio que quieren llegar a
            más personas sin complicarse. Inversión inicial baja, suscripción clara y resultados
            medibles.
          </p>
          <div class="hero__actions">
            <a class="btn btn--primary" href="#planes">Ver planes</a>
            <a class="btn btn--ghost" href="#templates">Ver plantillas</a>
          </div>
          <ul class="hero__bullets">
            <li>Dominio, hosting y mantenimiento incluidos</li>
            <li>Soporte cercano y actualizaciones rápidas</li>
            <li>Optimizado para captar clientes desde el primer día</li>
          </ul>
        </div>
        <div class="hero__card">
          <p class="hero__card-tag">Servicio integral</p>
          <h2>Tu web lista en 10 días</h2>
          <p>
            Nos encargamos de todo: copywriting, diseño adaptable, configuración legal y métricas.
          </p>
          <ul>
            <li>Briefing inicial y estrategia</li>
            <li>Personalización de plantilla</li>
            <li>Entrega + formación express</li>
          </ul>
          <a class="btn btn--surface" href="#contacto">Solicitar llamada</a>
        </div>
      </div>
    </header>

    <main>
      <section class="section" id="proceso">
        <div class="container">
          <header class="section__header">
            <h2>Proceso claro y acompañado</h2>
            <p>Trabajamos contigo paso a paso para lanzar tu web sin sobresaltos.</p>
          </header>
          <div class="timeline">
            <article class="timeline__item">
              <span class="timeline__badge">1</span>
              <h3>Descubrimiento</h3>
              <p>
                Reunión de 45 minutos para entender tu negocio, recopilar materiales y fijar objetivos
                medibles.
              </p>
            </article>
            <article class="timeline__item">
              <span class="timeline__badge">2</span>
              <h3>Diseño & contenido</h3>
              <p>
                Adaptamos la plantilla elegida, redactamos textos persuasivos y definimos llamadas a la
                acción.
              </p>
            </article>
            <article class="timeline__item">
              <span class="timeline__badge">3</span>
              <h3>Lanzamiento</h3>
              <p>
                Configuración técnica, analítica, SEO básico y formación de 30 minutos para gestionar
                tus solicitudes.
              </p>
            </article>
          </div>
        </div>
      </section>

      <section class="section section--muted" id="planes">
        <div class="container">
          <header class="section__header">
            <h2>Planes pensados para negocios locales</h2>
            <p>Empieza con una inversión inicial reducida y mantenimiento adaptado a tus necesidades.</p>
          </header>
          <div class="plans">
            <article
              v-for="plan in planStore.plans"
              :key="plan.id"
              class="plan"
              :class="{ 'plan--active': plan.id === planStore.selectedPlanId }"
              @mouseenter="planStore.selectPlan(plan.id)"
            >
              <header class="plan__header">
                <h3>{{ plan.name }}</h3>
                <p>{{ plan.description }}</p>
              </header>
              <p class="plan__price">
                <span class="plan__setup">{{ plan.setupPrice }}€ de alta</span>
                <span class="plan__monthly">{{ plan.monthlyPrice }}€ / mes</span>
              </p>
              <p class="plan__best">Ideal para: {{ plan.bestFor }}</p>
              <ul class="plan__features">
                <li v-for="feature in plan.features" :key="feature.label" :class="{ highlight: feature.highlight }">
                  {{ feature.label }}
                </li>
              </ul>
              <a class="btn btn--outline" href="#contacto">Quiero este plan</a>
            </article>
          </div>
        </div>
      </section>

      <section class="section" id="templates">
        <div class="container">
          <header class="section__header">
            <h2>Plantillas listas para personalizar</h2>
            <p>Cada plantilla se adapta a tu marca cambiando colores, textos y fotografías.</p>
          </header>
          <div class="templates">
            <article v-for="template in templates" :key="template.id" class="templates__card">
              <h3>{{ template.title }}</h3>
              <p>{{ template.description }}</p>
              <ul>
                <li v-for="highlight in template.highlights" :key="highlight">{{ highlight }}</li>
              </ul>
              <a class="templates__link" :href="template.demoPath" target="_blank" rel="noopener">
                Ver demo
              </a>
            </article>
          </div>
        </div>
      </section>

      <section class="section section--muted" id="faq">
        <div class="container">
          <header class="section__header">
            <h2>Preguntas frecuentes</h2>
            <p>Transparencia total para que sepas qué esperar de nuestro servicio.</p>
          </header>
          <div class="faq">
            <article>
              <h3>¿Cuánto tardáis en lanzar la web?</h3>
              <p>
                El plazo habitual es de 7 a 10 días desde la reunión inicial. Si necesitas algo urgente,
                priorizamos tu proyecto con el Plan Premium.
              </p>
            </article>
            <article>
              <h3>¿Qué incluye el mantenimiento mensual?</h3>
              <p>
                Actualizaciones de seguridad, copias de seguridad, optimización de rendimiento y las
                modificaciones incluidas en tu plan. También monitorizamos formularios y métricas.
              </p>
            </article>
            <article>
              <h3>¿Podré solicitar cambios adicionales?</h3>
              <p>
                Sí. Si superas las modificaciones de tu plan, ofrecemos bonos de horas o puedes pasar al
                plan superior cuando lo necesites.
              </p>
            </article>
          </div>
        </div>
      </section>

      <section class="section section--cta" id="contacto">
        <div class="container cta">
          <div>
            <h2>Hablemos de tu proyecto</h2>
            <p>
              Cuéntanos tu negocio, el plan que te interesa y agenda una videollamada sin compromiso.
            </p>
          </div>
          <div class="cta__contact">
            <a class="btn btn--primary" href="mailto:hola@presencialocal.com">hola@presencialocal.com</a>
            <a class="btn btn--outline" href="https://wa.me/34655111222" target="_blank" rel="noopener">
              Escríbenos por WhatsApp
            </a>
          </div>
        </div>
      </section>
    </main>

    <footer class="footer">
      <div class="container footer__content">
        <div>
          <img class="footer__logo" :src="logo" alt="Presencia Local" />
          <p>Webs estratégicas para negocios locales con soporte continuo.</p>
        </div>
        <ul>
          <li><strong>Email:</strong> hola@presencialocal.com</li>
          <li><strong>Teléfono:</strong> +34 655 111 222</li>
          <li><strong>Horario:</strong> Lunes a viernes de 9:00 a 18:00</li>
        </ul>
      </div>
      <p class="footer__legal">© {{ new Date().getFullYear() }} Presencia Local. Todos los derechos reservados.</p>
    </footer>
  </div>
</template>

<style scoped>
.page {
  background: var(--color-background);
}

.container {
  width: min(1120px, 92vw);
  margin: 0 auto;
}

.hero {
  background: linear-gradient(135deg, rgba(29, 78, 216, 0.95), rgba(30, 58, 138, 0.95));
  color: #fff;
  padding: 6rem 0 5rem;
  position: relative;
  overflow: hidden;
}

.hero::after {
  content: '';
  position: absolute;
  inset: -20% 50% auto -10%;
  background: radial-gradient(circle, rgba(245, 158, 11, 0.4), transparent 65%);
  transform: rotate(12deg);
}

.hero__content {
  display: grid;
  gap: 3rem;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  position: relative;
  z-index: 1;
}

.hero__logo {
  width: 160px;
  margin-bottom: 1.5rem;
}

.hero__text h1 {
  font-size: clamp(2.6rem, 5vw, 3.6rem);
  line-height: 1.08;
  margin-bottom: 1.5rem;
}

.hero__text p {
  font-size: 1.1rem;
  opacity: 0.92;
}

.hero__actions {
  display: flex;
  gap: 1rem;
  flex-wrap: wrap;
  margin: 2rem 0 1.5rem;
}

.hero__bullets {
  list-style: none;
  display: grid;
  gap: 0.75rem;
  margin-top: 1.5rem;
}

.hero__card {
  background: rgba(255, 255, 255, 0.12);
  border: 1px solid rgba(224, 231, 255, 0.35);
  border-radius: 1.75rem;
  padding: 2.5rem 2rem;
  box-shadow: 0 25px 45px rgba(15, 23, 42, 0.35);
  backdrop-filter: blur(8px);
  align-self: center;
}

.hero__card-tag {
  display: inline-flex;
  padding: 0.4rem 1rem;
  border-radius: 999px;
  background: rgba(240, 249, 255, 0.2);
  color: #e0f2fe;
  font-size: 0.85rem;
  letter-spacing: 0.08em;
  text-transform: uppercase;
}

.hero__card h2 {
  font-size: 1.9rem;
  margin: 1.25rem 0 1rem;
}

.hero__card ul {
  list-style: none;
  display: grid;
  gap: 0.85rem;
  margin: 1.5rem 0 2rem;
}

.section {
  padding: 5.5rem 0;
}

.section__header {
  text-align: center;
  max-width: 640px;
  margin: 0 auto 3rem;
}

.section__header h2 {
  font-size: clamp(2.1rem, 4vw, 2.9rem);
  color: var(--color-secondary);
}

.section__header p {
  color: rgba(15, 23, 42, 0.7);
}

.section--muted {
  background: var(--color-muted);
}

.timeline {
  display: grid;
  gap: 1.5rem;
  grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
}

.timeline__item {
  background: var(--color-surface);
  padding: 2.25rem 2rem;
  border-radius: 1.5rem;
  box-shadow: 0 18px 45px rgba(15, 23, 42, 0.08);
  border: 1px solid rgba(224, 231, 255, 0.7);
}

.timeline__badge {
  width: 42px;
  height: 42px;
  display: grid;
  place-items: center;
  border-radius: 999px;
  background: var(--color-accent);
  color: var(--color-secondary);
  font-weight: 700;
  margin-bottom: 1.25rem;
}

.plans {
  display: grid;
  gap: 2rem;
  grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
}

.plan {
  background: var(--color-surface);
  border-radius: 1.75rem;
  padding: 2.5rem 2rem;
  border: 1px solid rgba(30, 58, 138, 0.1);
  box-shadow: 0 20px 45px rgba(15, 23, 42, 0.08);
  transition: transform 0.2s ease, box-shadow 0.2s ease, border 0.2s ease;
  display: flex;
  flex-direction: column;
  gap: 1.25rem;
}

.plan:hover,
.plan--active {
  transform: translateY(-4px);
  border-color: rgba(245, 158, 11, 0.45);
  box-shadow: 0 24px 55px rgba(15, 23, 42, 0.15);
}

.plan__header h3 {
  font-size: 1.45rem;
  color: var(--color-secondary);
}

.plan__price {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  font-size: 1.1rem;
  color: var(--color-secondary);
}

.plan__setup {
  font-weight: 600;
}

.plan__monthly {
  font-size: 1.35rem;
  font-weight: 700;
}

.plan__best {
  font-size: 0.95rem;
  color: rgba(15, 23, 42, 0.7);
}

.plan__features {
  list-style: none;
  display: grid;
  gap: 0.75rem;
  padding: 0;
}

.plan__features li {
  padding: 0.75rem 0.85rem;
  border-radius: 0.9rem;
  background: rgba(224, 231, 255, 0.55);
}

.plan__features li.highlight {
  background: rgba(245, 158, 11, 0.2);
  border: 1px solid rgba(245, 158, 11, 0.4);
}

.templates {
  display: grid;
  gap: 1.5rem;
  grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
}

.templates__card {
  background: var(--color-surface);
  border-radius: 1.5rem;
  padding: 2rem;
  border: 1px solid rgba(224, 231, 255, 0.7);
  box-shadow: 0 20px 40px rgba(15, 23, 42, 0.08);
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.templates__card ul {
  list-style: disc;
  padding-left: 1.1rem;
  color: rgba(15, 23, 42, 0.75);
}

.templates__link {
  align-self: flex-start;
  color: var(--color-secondary);
  font-weight: 600;
}

.faq {
  display: grid;
  gap: 1.5rem;
  grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
}

.faq article {
  background: var(--color-surface);
  border-radius: 1.4rem;
  padding: 2rem;
  box-shadow: 0 15px 35px rgba(15, 23, 42, 0.08);
  border: 1px solid rgba(224, 231, 255, 0.7);
}

.section--cta {
  background: linear-gradient(135deg, rgba(30, 64, 175, 0.95), rgba(37, 99, 235, 0.95));
  color: #fff;
}

.cta {
  display: flex;
  flex-direction: column;
  gap: 2rem;
}

@media (min-width: 768px) {
  .cta {
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
  }
}

.cta__contact {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.btn {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 0.85rem 1.75rem;
  border-radius: 999px;
  font-weight: 600;
  transition: transform 0.2s ease, box-shadow 0.2s ease, background 0.2s ease, color 0.2s ease;
}

.btn:hover {
  transform: translateY(-2px);
}

.btn--primary {
  background: var(--color-accent);
  color: var(--color-secondary);
  box-shadow: 0 18px 35px rgba(245, 158, 11, 0.35);
}

.btn--ghost {
  background: transparent;
  border: 1px solid rgba(255, 255, 255, 0.6);
  color: #fff;
}

.btn--surface {
  background: var(--color-surface);
  color: var(--color-secondary);
  box-shadow: 0 18px 35px rgba(15, 23, 42, 0.25);
}

.btn--outline {
  background: transparent;
  border: 1px solid rgba(29, 78, 216, 0.35);
  color: var(--color-secondary);
}

.footer {
  background: var(--color-secondary);
  color: rgba(226, 232, 240, 0.8);
  padding: 3.5rem 0 2.5rem;
}

.footer__content {
  display: grid;
  gap: 2rem;
  grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
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
  color: rgba(226, 232, 240, 0.6);
}
</style>
