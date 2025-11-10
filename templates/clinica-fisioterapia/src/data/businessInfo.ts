export const businessInfo = {
  name: 'Movimiento Integral',
  claim: 'Rehabilitación avanzada y entrenamiento terapéutico',
  tagline: 'Acompañamiento multidisciplinar para recuperar tu movimiento y prevenir recaídas.',
  navigation: [
    { label: 'Especialidades', href: '#especialidades' },
    { label: 'Método', href: '#metodo' },
    { label: 'Equipo', href: '#equipo' },
    { label: 'Testimonios', href: '#testimonios' },
    { label: 'Contacto', href: '#contacto' }
  ],
  hero: {
    eyebrow: 'CLÍNICA DE FISIOTERAPIA EN VALENCIA',
    title: 'Recupera tu mejor versión con un plan 360º',
    description:
      'Diseñamos programas personalizados combinando fisioterapia, ejercicio terapéutico y tecnología de última generación. Seguimiento constante, objetivos claros y resultados medibles.',
    primaryCta: { label: 'Solicitar valoración inicial', href: '#contacto' },
    secondaryCta: { label: 'Ver especialidades', href: '#especialidades' },
    stats: [
      { label: 'Pacientes recuperados', value: '+2.500' },
      { label: 'Índice de alta exitosa', value: '92%' },
      { label: 'Especialistas certificados', value: '12' }
    ]
  },
  assessment: {
    title: 'Agenda una valoración funcional',
    description:
      'Analizamos tu caso en 60 minutos: pruebas específicas, diagnóstico integral y plan de tratamiento con hitos medibles.',
    form: {
      nameLabel: 'Nombre y apellidos',
      namePlaceholder: 'Ej. Laura Martínez',
      needLabel: '¿Qué necesitas tratar?',
      options: ['Dolor lumbar', 'Lesión deportiva', 'Rehabilitación postquirúrgica', 'Suelo pélvico', 'Pediatría'],
      submit: 'Quiero mi plan personalizado'
    }
  },
  specialties: {
    eyebrow: 'PROGRAMAS ESPECIALIZADOS',
    title: 'Abordajes basados en evidencia y tecnología',
    description:
      'Integramos fisioterapia manual, readaptación y monitorización digital para garantizar una recuperación sostenible.',
    items: [
      {
        name: 'Rehabilitación deportiva',
        icon: '🏃‍♂️',
        description: 'Readaptación funcional con fuerza isoinercial, control de carga y prevención de recaídas.'
      },
      {
        name: 'Salud de la mujer',
        icon: '🌿',
        description: 'Unidad de suelo pélvico, preparación al parto y recuperación postparto con biofeedback.'
      },
      {
        name: 'Neurorehabilitación',
        icon: '🧠',
        description: 'Tratamientos neurológicos con realidad virtual terapéutica y estimulación eléctrica.'
      },
      {
        name: 'Clínica del dolor',
        icon: '✨',
        description: 'Enfoque interdisciplinar con fisioterapia invasiva, ejercicio y educación en dolor crónico.'
      }
    ]
  },
  method: {
    eyebrow: 'NUESTRO MÉTODO',
    title: 'Evaluamos, planificamos y medimos cada avance',
    description:
      'Combinamos sesiones presenciales con seguimiento digital para asegurarnos de que cada paciente progresa de forma segura.',
    steps: [
      {
        number: '01',
        title: 'Diagnóstico profundo',
        detail: 'Valoraciones funcionales, análisis biomecánico y pruebas complementarias para entender el origen real.'
      },
      {
        number: '02',
        title: 'Plan personalizado',
        detail: 'Sesiones combinadas de terapia manual, ejercicio supervisado y herramientas digitales para casa.'
      },
      {
        number: '03',
        title: 'Seguimiento inteligente',
        detail: 'Plataforma online, sesiones de revisión y ajustes en tiempo real según evolución y objetivos.'
      }
    ]
  },
  team: {
    eyebrow: 'EQUIPO',
    title: 'Profesionales certificados y coordinados',
    description:
      'Fisioterapeutas, readaptadores y especialistas en ejercicio terapéutico trabajando de forma coordinada en cada caso.',
    members: [
      {
        name: 'Marta Lozano',
        role: 'Directora clínica · Fisioterapeuta especializada en suelo pélvico',
        photo: 'https://images.unsplash.com/photo-1544723795-3fb6469f5b39?auto=format&fit=crop&w=500&q=80',
        highlights: ['Master en fisioterapia ginecológica', 'Docente universitaria', 'Miembro SEFIP']
      },
      {
        name: 'Álvaro Pons',
        role: 'Readaptador deportivo y fisioterapeuta',
        photo: 'https://images.unsplash.com/photo-1545239351-1141bd82e8a6?auto=format&fit=crop&w=500&q=80',
        highlights: ['Experto en control de carga', 'Especialista en isoinercial', 'Ex-fisioterapeuta ACB']
      }
    ]
  },
  testimonials: {
    eyebrow: 'CASOS REALES',
    title: 'Pacientes que ya han recuperado su ritmo',
    items: [
      {
        quote:
          'Tras la operación de cruzado no imaginaba volver a competir. El plan de readaptación me devolvió confianza y rendimiento.',
        author: 'Paula S.',
        detail: 'Jugadora de balonmano'
      },
      {
        quote:
          'La combinación de fisioterapia y ejercicio guiado ha sido clave para vivir sin dolor lumbar crónico.',
        author: 'Rafael G.',
        detail: 'Ingeniero industrial'
      }
    ]
  },
  cta: {
    eyebrow: '¿LISTO PARA AVANZAR?',
    title: 'Te acompañamos desde la primera sesión',
    description:
      'Agenda tu valoración presencial u online y recibe tu plan de tratamiento personalizado en menos de 24 horas.',
    primary: 'Llamar a la clínica',
    secondary: 'Escríbenos un correo'
  },
  contact: {
    phone: '+34 960 123 456',
    email: 'hola@movimientointegral.es',
    address: 'Carrer de Colón 45, Valencia',
    schedule: 'Lunes a viernes de 8:00 a 21:00 · Sábados de 9:00 a 14:00'
  }
};

export type BusinessInfo = typeof businessInfo;
