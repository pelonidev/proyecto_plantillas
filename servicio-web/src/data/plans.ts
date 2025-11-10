export interface PlanFeature {
  label: string;
  highlight?: boolean;
}

export interface Plan {
  id: 'esencial' | 'plus' | 'premium';
  name: string;
  setupPrice: number;
  monthlyPrice: number;
  description: string;
  bestFor: string;
  features: PlanFeature[];
}

export const plans: Plan[] = [
  {
    id: 'esencial',
    name: 'Plan Esencial',
    setupPrice: 150,
    monthlyPrice: 29,
    description: 'Landing page con dominio y hosting incluidos. Ideal para empezar con presencia online controlada.',
    bestFor: 'Negocios que quieren validar su presencia digital sin complicaciones.',
    features: [
      { label: 'Landing page de alto impacto' },
      { label: 'Dominio .com o .es incluido' },
      { label: 'Hosting administrado' },
      { label: '1 actualización mensual incluida' },
      { label: 'Copias de seguridad automáticas' }
    ]
  },
  {
    id: 'plus',
    name: 'Plan Plus',
    setupPrice: 250,
    monthlyPrice: 49,
    description: 'Sitio web de 3–4 secciones con formulario de contacto y mantenimiento proactivo.',
    bestFor: 'Negocios que necesitan explicar servicios y captar solicitudes desde la web.',
    features: [
      { label: 'Hasta 4 secciones personalizadas' },
      { label: 'Formulario de contacto integrado' },
      { label: '3 modificaciones mensuales', highlight: true },
      { label: 'Optimización de velocidad básica' },
      { label: 'Integración con Google Analytics' }
    ]
  },
  {
    id: 'premium',
    name: 'Plan Premium',
    setupPrice: 350,
    monthlyPrice: 79,
    description: 'Web completa con blog o sistema de reservas, SEO avanzado y soporte prioritario.',
    bestFor: 'Negocios que quieren posicionarse y automatizar reservas o contenido.',
    features: [
      { label: 'Estructura multipágina + blog o reservas' },
      { label: 'Modificaciones ilimitadas', highlight: true },
      { label: 'SEO on-page avanzado y analítica' },
      { label: 'Campañas trimestrales de contenidos' },
      { label: 'Integración con herramientas externas' }
    ]
  }
];
