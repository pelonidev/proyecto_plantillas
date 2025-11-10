export const businessInfo = {
  name: 'Aurora Flowers',
  tagline: 'Flores premium a domicilio y decoración floral para eventos inolvidables.',
  navigation: [
    { label: 'Colecciones', href: '#colecciones' },
    { label: 'Servicios', href: '#servicios' },
    { label: 'Destacados', href: '#destacados' },
    { label: 'Club Aurora', href: '#club' }
  ],
  hero: {
    eyebrow: 'ENVÍO EN EL DÍA · TODA ESPAÑA',
    title: 'Emociones que llegan en forma de flores',
    description:
      'Bouquets diseñados por floristas expertos, con la combinación perfecta de flores de temporada, packaging exclusivo y entrega profesional en menos de 3 horas en la ciudad.',
    primaryCta: { label: 'Comprar ahora', href: '#colecciones' },
    secondaryCta: { label: 'Ver catálogo empresarial', href: '#servicios' },
    benefits: ['Entregas en 3 horas en Madrid y Barcelona', 'Seguimiento en tiempo real', 'Atención personalizada por WhatsApp'],
    collections: [
      {
        name: 'Bouquet Aurora',
        tag: 'Edición limitada',
        image: 'https://images.unsplash.com/photo-1509043759401-136742328bb3?auto=format&fit=crop&w=600&q=80'
      },
      {
        name: 'Caja de peonías',
        tag: 'Primavera',
        image: 'https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?auto=format&fit=crop&w=600&q=80'
      }
    ]
  },
  collections: {
    eyebrow: 'COLECCIONES DESTACADAS',
    title: 'Diseños exclusivos para cada momento',
    description:
      'Flores frescas seleccionadas diariamente y dispuestas a mano en nuestro taller para sorprender en cualquier ocasión.',
    items: [
      {
        title: 'Ramo Golden Hour',
        tag: 'Novedad',
        description: 'Ramo asimétrico en tonos dorados y neutros con rosas inglesas, proteas y follaje seco.',
        linkLabel: 'Comprar desde 69 €',
        href: '#',
        image: 'https://images.unsplash.com/photo-1474625342403-5cabe81e0a5b?auto=format&fit=crop&w=800&q=80'
      },
      {
        title: 'Centro Signature',
        tag: 'Eventos',
        description: 'Centro floral para mesas imperiales con flores preservadas y velas perfumadas.',
        linkLabel: 'Solicitar propuesta',
        href: '#',
        image: 'https://images.unsplash.com/photo-1468327768560-75b778cbb551?auto=format&fit=crop&w=800&q=80'
      }
    ]
  },
  services: {
    eyebrow: 'SERVICIOS PROFESIONALES',
    title: 'Creamos experiencias florales memorables',
    items: [
      {
        title: 'Suscripciones corporativas',
        description: 'Renovamos tus espacios con flores frescas cada semana y diseño a medida para tu marca.',
        badge: 'Desde 129 €/mes'
      },
      {
        title: 'Decoración de bodas',
        description: 'Diseñamos ceremonias, centros de mesa y rincones especiales con un equipo dedicado.',
        badge: 'Consultoría personalizada'
      },
      {
        title: 'Eventos y retail',
        description: 'Instalaciones efímeras, escaparates y experiencias inmersivas para lanzamientos.',
        badge: 'Producción integral'
      }
    ]
  },
  highlights: {
    eyebrow: 'LO MÁS VENDIDO',
    title: 'Colecciones icónicas de Aurora',
    items: [
      {
        name: 'Caja Verona',
        description: 'Flores preservadas con rosas champagne y hortensias en caja de terciopelo.',
        price: '89 €',
        image: 'https://images.unsplash.com/photo-1520256862855-398228c41684?auto=format&fit=crop&w=700&q=80'
      },
      {
        name: 'Bouquet Essential',
        description: 'Ramo clásico en tonos rosados con rosas, lisianthus y eucalipto.',
        price: '59 €',
        image: 'https://images.unsplash.com/photo-1470162656305-6f429ba817bf?auto=format&fit=crop&w=700&q=80'
      },
      {
        name: 'Signature Deluxe',
        description: 'Combinación de flores exóticas con entrega premium y tarjeta manuscrita.',
        price: '109 €',
        image: 'https://images.unsplash.com/photo-1519681393784-d120267933ba?auto=format&fit=crop&w=700&q=80'
      }
    ]
  },
  club: {
    eyebrow: 'CLUB AURORA',
    title: 'Recibe flores cada mes con envíos incluidos',
    description:
      'Escoge la frecuencia, la gama cromática y el estilo. Nuestro equipo de floristas crea un diseño exclusivo y lo entrega con instrucciones de cuidado.',
    benefits: ['Prioridad en lanzamientos y colecciones limitadas', 'Atención personalizada 24/7', 'Descuentos exclusivos para miembros'],
    cta: { label: 'Unirme al club', href: '#' },
    image: 'https://images.unsplash.com/photo-1503389152951-9f343605f61e?auto=format&fit=crop&w=800&q=80'
  },
  contact: {
    phone: '+34 910 123 789',
    email: 'hola@auroraflowers.es',
    address: 'Calle Serrano 112, Madrid',
    schedule: 'Lunes a sábado de 9:00 a 21:00 · Domingos de 10:00 a 14:00'
  }
};

export type BusinessInfo = typeof businessInfo;
