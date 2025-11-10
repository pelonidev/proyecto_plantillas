export const businessInfo = {
  name: 'MotorLine Service',
  tagline: 'Mantenimiento integral, mecánica rápida y confianza garantizada.',
  navigation: [
    { label: 'Servicios', href: '#servicios' },
    { label: 'Garantías', href: '#garantias' },
    { label: 'Mantenimiento', href: '#mantenimiento' },
    { label: 'Opiniones', href: '#opiniones' },
    { label: 'Contacto', href: '#contacto' }
  ],
  hero: {
    eyebrow: 'TALLER OFICIAL MULTIMARCA',
    title: 'Tu coche siempre listo para seguir',
    description:
      'Diagnóstico avanzado, mecánicos certificados y piezas originales para que tu vehículo esté a punto en cada kilómetro.',
    primaryCta: { label: 'Pedir cita', href: 'tel:+34911022345' },
    secondaryCta: { label: 'Consultar servicios', href: '#servicios' },
    badges: ['Garantía 24 meses', 'Vehículo de cortesía', 'Financiación 0%']
  },
  booking: {
    title: 'Agenda rápida',
    description: 'Selecciona el servicio, elige fecha y confirma en menos de 2 minutos. Respuesta inmediata.',
    button: 'Reservar cita',
    slots: [
      { label: 'Disponibilidad hoy', value: '4 huecos' },
      { label: 'Próximo sábado', value: '8 huecos' },
      { label: 'Revisión ITV', value: 'Desde 59 €' }
    ]
  },
  services: {
    eyebrow: 'SERVICIOS DESTACADOS',
    title: 'Expertos en mantenimiento integral',
    description: 'Más de 30 años cuidando de vehículos turismo, SUV y furgonetas. Trabajamos con recambios oficiales y garantías extendidas.',
    items: [
      {
        title: 'Revisión completa 360º',
        description: 'Incluye diagnóstico electrónico, cambio de aceite y filtros, revisión de frenos y niveles.',
        icon: '🛠️'
      },
      {
        title: 'Neumáticos y alineado',
        description: 'Montaje, equilibrado y alineación con tecnología láser. Marcas premium y economía.',
        icon: '🚗'
      },
      {
        title: 'Climatización y confort',
        description: 'Carga de aire acondicionado, desinfección y cambio de filtro antipolen en una hora.',
        icon: '❄️'
      },
      {
        title: 'Frenos y suspensión',
        description: 'Sustitución de discos, pastillas y amortiguadores con pruebas en banco dinamométrico.',
        icon: '🛑'
      }
    ]
  },
  guarantees: {
    eyebrow: 'NUESTRAS GARANTÍAS',
    title: 'Compromiso MotorLine Service',
    description: 'Transparencia total y soluciones de movilidad para que no pares.',
    items: [
      { title: 'Presupuesto cerrado', detail: 'Sin sorpresas. Revisamos contigo el detalle del trabajo antes de empezar.' },
      { title: 'Recambios originales', detail: 'Piezas homologadas con dos años de garantía y certificación del fabricante.' },
      { title: 'Mecánicos certificados', detail: 'Formación continua y acreditación en híbridos, eléctricos y combustión.' }
    ]
  },
  maintenance: {
    eyebrow: 'PLAN DE MANTENIMIENTO',
    title: 'Así cuidamos tu vehículo',
    description: 'Metodología propia basada en protocolos oficiales y seguimiento digital de cada intervención.',
    steps: [
      {
        number: '01',
        title: 'Diagnóstico conectivo',
        detail: 'Escaneamos centralitas y realizamos checklist de seguridad en 30 minutos.'
      },
      {
        number: '02',
        title: 'Intervención experta',
        detail: 'Mecánica rápida y especializada con herramientas calibradas y recambios originales.'
      },
      {
        number: '03',
        title: 'Entrega y seguimiento',
        detail: 'Informe digital, recordatorios automáticos y asistencia en carretera 24/7.'
      }
    ]
  },
  reviews: {
    eyebrow: 'OPINIONES REALES',
    title: 'Clientes que confían en nosotros',
    items: [
      {
        quote: 'Revisión completa en tiempo récord y sin costes ocultos. Me entregaron el coche limpio y con informe digital.',
        author: 'Laura F.',
        vehicle: 'Audi Q3'
      },
      {
        quote: 'Cambiar los neumáticos fue facilísimo. Me ofrecieron coche de sustitución y financiación sin intereses.',
        author: 'Javier C.',
        vehicle: 'Peugeot 3008'
      }
    ]
  },
  cta: {
    eyebrow: '¿LISTO PARA VOLVER A LA CARRETERA?',
    title: 'Reserva tu cita en menos de un minuto',
    description:
      'Llámanos o escríbenos y un asesor técnico preparará tu presupuesto. Trabajamos con todas las aseguradoras y flotas.',
    primary: 'Llamar ahora',
    secondary: 'Solicitar presupuesto'
  },
  contact: {
    phone: '+34 911 022 345',
    email: 'contacto@motorlineservice.es',
    address: 'Av. de la Industria 42, Madrid',
    schedule: 'Lunes a viernes 8:00 - 19:30 · Sábados 9:00 - 14:00'
  }
};

export type BusinessInfo = typeof businessInfo;
