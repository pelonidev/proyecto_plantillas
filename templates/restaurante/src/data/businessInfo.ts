export const businessInfo = {
  name: 'Sabores del Barrio',
  tagline: 'Restaurante de cocina de mercado con productos frescos y locales.',
  hero: {
    title: 'Una experiencia gastronómica honesta',
    subtitle:
      'Platos de temporada, maridajes únicos y un ambiente acogedor que invita a quedarse.',
    ctaPrimary: 'Reservar mesa',
    ctaSecondary: 'Descubrir la carta'
  },
  highlights: [
    {
      title: 'Producto local',
      description: 'Proveedores de cercanía y carta que cambia según la temporada.'
    },
    {
      title: 'Maridajes artesanos',
      description: 'Carta de vinos boutique y cervezas artesanales seleccionadas.'
    },
    {
      title: 'Ambiente íntimo',
      description: 'Espacios pensados para cenas especiales y celebraciones.'
    }
  ],
  services: [
    {
      name: 'Menú degustación',
      description: 'Propuesta de 7 pases que recorre nuestras especialidades de temporada.'
    },
    {
      name: 'Carta a medida',
      description: 'Adaptamos platos a intolerancias, opciones veganas o preferencias especiales.'
    },
    {
      name: 'Eventos privados',
      description: 'Salón reservado para celebraciones con menú personalizado y música ambiente.'
    },
    {
      name: 'Delivery gourmet',
      description: 'Tus platos favoritos en casa con el mismo cuidado y emplatado que en sala.'
    }
  ],
  differentiators: [
    {
      title: 'Chef ejecutivo',
      detail: 'Más de 20 años en cocina creativa y experiencia en restaurantes Michelin.'
    },
    {
      title: 'Experiencia multisensorial',
      detail: 'Iluminación, música y aromas diseñados para potenciar cada plato.'
    },
    {
      title: 'Compromiso sostenible',
      detail: 'Política de residuo cero y envases biodegradables en todos los pedidos.'
    }
  ],
  testimonials: [
    {
      quote:
        'Cada visita es diferente y sorprendente. Se nota la dedicación en cada plato y el trato cercano.',
      author: 'Andrés Llopis'
    },
    {
      quote:
        'Un lugar imprescindible en la ciudad. Cocina honesta con una ejecución impecable.',
      author: 'Lucía Navarro'
    }
  ],
  contact: {
    phone: '+34 655 902 145',
    email: 'hola@saboresdelbarrio.es',
    address: 'Plaza Mayor 8, Zaragoza',
    schedule: 'Martes a domingo de 13:30 a 16:00 y de 20:00 a 23:30'
  },
  cta: {
    title: 'Celebra tus mejores momentos con nosotros',
    description: 'Reserva mesa online y déjate sorprender por el menú de esta semana.',
    button: 'Reservar ahora'
  }
};

export type BusinessInfo = typeof businessInfo;
