export const businessInfo = {
  name: 'MotorCare Taller',
  tagline: 'Servicio integral para el mantenimiento y reparación de vehículos.',
  hero: {
    title: 'Cuidamos tu vehículo como si fuera nuestro',
    subtitle:
      'Especialistas en diagnóstico, mantenimiento preventivo y reparaciones rápidas con garantía.',
    ctaPrimary: 'Reserva una cita',
    ctaSecondary: 'Solicita presupuesto'
  },
  highlights: [
    {
      title: 'Atención en 24h',
      description: 'Recepción inmediata y comunicación constante durante todo el servicio.'
    },
    {
      title: 'Garantía extendida',
      description: 'Todas las reparaciones incluyen garantía y seguimiento post-servicio.'
    },
    {
      title: 'Mecánicos certificados',
      description: 'Equipo con más de 15 años de experiencia en mecánica multimarca.'
    }
  ],
  services: [
    {
      name: 'Mantenimiento completo',
      description: 'Cambio de aceite, filtros, revisión de frenos y más con piezas de calidad OEM.'
    },
    {
      name: 'Diagnóstico electrónico',
      description: 'Equipos de última generación para detectar fallos en sistemas eléctricos y electrónicos.'
    },
    {
      name: 'Pre-ITV',
      description: 'Revisión y preparación integral para superar la ITV sin sorpresas.'
    },
    {
      name: 'Neumáticos y alineado',
      description: 'Venta, montaje y alineado con las principales marcas del mercado.'
    }
  ],
  differentiators: [
    {
      title: 'Flota de cortesía',
      detail: 'Vehículos disponibles para que sigas con tu rutina mientras cuidamos del tuyo.'
    },
    {
      title: 'Atención transparente',
      detail: 'Presupuestos claros, fotografías del proceso y aprobación previa de cada intervención.'
    },
    {
      title: 'Tecnología avanzada',
      detail: 'Actualizamos constantemente nuestras herramientas para trabajar con vehículos modernos.'
    }
  ],
  testimonials: [
    {
      quote:
        'Solucionaron una avería compleja en tiempo récord y me mantuvieron informada en todo momento. 100% recomendados.',
      author: 'Laura Fernández'
    },
    {
      quote:
        'Confío en ellos desde hace años. Son sinceros, rápidos y el coche siempre queda perfecto.',
      author: 'Javier Sánchez'
    }
  ],
  contact: {
    phone: '+34 612 345 678',
    email: 'contacto@motorcare.es',
    address: 'Calle Talleres 45, Madrid',
    schedule: 'Lunes a viernes de 8:00 a 19:00 · Sábados de 9:00 a 13:00'
  },
  cta: {
    title: '¿Listo para darle a tu vehículo el mejor cuidado?',
    description: 'Reserva tu cita online o pídenos un presupuesto personalizado en minutos.',
    button: 'Contactar ahora'
  }
};

export type BusinessInfo = typeof businessInfo;
