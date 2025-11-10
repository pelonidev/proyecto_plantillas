export const businessInfo = {
  name: 'Equilibrio Fisio',
  tagline: 'Clínica de fisioterapia avanzada y readaptación deportiva.',
  hero: {
    title: 'Recupera tu bienestar en manos expertas',
    subtitle:
      'Valoraciones personalizadas, tecnología de última generación y programas que se adaptan a tu ritmo.',
    ctaPrimary: 'Reservar valoración',
    ctaSecondary: 'Conocer tratamientos'
  },
  highlights: [
    {
      title: 'Evaluación integral',
      description: 'Estudio funcional, ecografía musculoesquelética y plan personalizado.'
    },
    {
      title: 'Equipo multidisciplinar',
      description: 'Fisioterapeutas, readaptadores y especialistas en suelo pélvico.'
    },
    {
      title: 'Seguimiento digital',
      description: 'App con ejercicios guiados, recordatorios y seguimiento de objetivos.'
    }
  ],
  services: [
    {
      name: 'Fisioterapia traumatológica',
      description: 'Recuperación de lesiones musculares, ligamentosas y postquirúrgicas.'
    },
    {
      name: 'Readaptación deportiva',
      description: 'Programas progresivos con control de carga y prevención de recaídas.'
    },
    {
      name: 'Fisioterapia de suelo pélvico',
      description: 'Tratamientos para embarazo, postparto e incontinencia con biofeedback.'
    },
    {
      name: 'Wellness corporativo',
      description: 'Planes para empresas con talleres ergonómicos y consultas in situ.'
    }
  ],
  differentiators: [
    {
      title: 'Tecnología avanzada',
      detail: 'Ondas de choque, diatermia, ecógrafos y cabinas privadas.'
    },
    {
      title: 'Metodología científica',
      detail: 'Protocolos basados en evidencia con revisiones mensuales del equipo clínico.'
    },
    {
      title: 'Horarios flexibles',
      detail: 'Abrimos de lunes a sábado con opciones de citas tempranas y nocturnas.'
    }
  ],
  testimonials: [
    {
      quote:
        'Gracias al plan personalizado volví a correr sin dolor antes de lo esperado. El trato es excelente.',
      author: 'Pedro Martín'
    },
    {
      quote:
        'Me ayudaron muchísimo tras el embarazo. Te acompañan en cada fase con empatía y profesionalidad.',
      author: 'Elena Ríos'
    }
  ],
  contact: {
    phone: '+34 678 901 234',
    email: 'citas@equilibriofisio.es',
    address: 'Avenida Salud 22, Sevilla',
    schedule: 'Lunes a viernes de 8:00 a 21:00 · Sábados de 9:00 a 14:00'
  },
  cta: {
    title: 'Da el primer paso hacia tu recuperación',
    description: 'Reserva una valoración inicial y recibe un plan diseñado para ti.',
    button: 'Agenda tu cita'
  }
};

export type BusinessInfo = typeof businessInfo;
