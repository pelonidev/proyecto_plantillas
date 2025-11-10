export const businessInfo = {
  name: 'Brillo & Estilo',
  tagline: 'Peluquería boutique especializada en imagen y bienestar capilar.',
  hero: {
    title: 'Tu estilo, nuestra pasión',
    subtitle:
      'Tratamientos personalizados, coloraciones de tendencia y rituales de cuidado para un cabello radiante.',
    ctaPrimary: 'Reserva una cita',
    ctaSecondary: 'Ver servicios'
  },
  highlights: [
    {
      title: 'Asesoría personalizada',
      description: 'Diagnóstico de imagen y rituales adaptados a tu cabello y estilo de vida.'
    },
    {
      title: 'Color orgánico',
      description: 'Coloraciones veganas y libres de amoníaco con resultados de larga duración.'
    },
    {
      title: 'Espacio wellness',
      description: 'Ambiente relajante con aromaterapia, música y bebidas de cortesía.'
    }
  ],
  services: [
    {
      name: 'Corte & Styling Signature',
      description: 'Cortes de autor y peinados de ocasión con técnicas contemporáneas.'
    },
    {
      name: 'Color Dream',
      description: 'Babylights, balayage y coloración global con productos premium.'
    },
    {
      name: 'Rituales de hidratación',
      description: 'Tratamientos intensivos con keratina, ácido hialurónico y nutritivos botánicos.'
    },
    {
      name: 'Novias & eventos',
      description: 'Pruebas de peinado, maquillaje aliado y acompañamiento el día del evento.'
    }
  ],
  differentiators: [
    {
      title: 'Equipo creativo',
      detail: 'Estilistas formados en academias internacionales y actualización constante.'
    },
    {
      title: 'Productos exclusivos',
      detail: 'Marcas profesionales y sostenibles disponibles también para la venta en salón.'
    },
    {
      title: 'Programas VIP',
      detail: 'Bonos trimestrales y membresías con ventajas preferentes para clientes frecuentes.'
    }
  ],
  testimonials: [
    {
      quote:
        'Siempre salgo encantada. Me asesoran con honestidad y mi cabello luce más sano que nunca.',
      author: 'Marta Gil'
    },
    {
      quote:
        'Mi boda fue perfecta gracias al equipo. Se encargaron de cada detalle con mucha calma.',
      author: 'Paula Romero'
    }
  ],
  contact: {
    phone: '+34 698 112 233',
    email: 'hola@brilloyestilo.es',
    address: 'Calle Primavera 12, Valencia',
    schedule: 'Martes a sábado de 10:00 a 20:00 · Lunes con cita previa'
  },
  cta: {
    title: 'Haz realidad el look que imaginas',
    description: 'Reserva tu experiencia en nuestro salón y déjate sorprender por los resultados.',
    button: 'Agendar visita'
  }
};

export type BusinessInfo = typeof businessInfo;
