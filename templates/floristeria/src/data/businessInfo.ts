export const businessInfo = {
  name: 'FloraViva',
  tagline: 'Floristería artesanal con composiciones únicas y entrega en el día.',
  hero: {
    title: 'Flores que cuentan historias',
    subtitle:
      'Ramos, centros y decoración floral creada a medida para cada ocasión y persona.',
    ctaPrimary: 'Hacer un pedido',
    ctaSecondary: 'Ver catálogo'
  },
  highlights: [
    {
      title: 'Diseños personalizados',
      description: 'Creamos arreglos únicos adaptados a tus colores, estilo y presupuesto.'
    },
    {
      title: 'Entrega express',
      description: 'Servicio propio de reparto en menos de 3 horas en la ciudad.'
    },
    {
      title: 'Flores de temporada',
      description: 'Trabajamos con productores locales para garantizar frescura y durabilidad.'
    }
  ],
  services: [
    {
      name: 'Ramos a medida',
      description: 'Diseños personalizados para regalo, aniversarios o momentos especiales.'
    },
    {
      name: 'Bodas & eventos',
      description: 'Decoración integral de espacios, ramos de novia y prendidos artesanales.'
    },
    {
      name: 'Suscripciones florales',
      description: 'Entrega semanal o quincenal para hogares, hoteles y oficinas.'
    },
    {
      name: 'Workshops creativos',
      description: 'Talleres de arreglos florales para grupos y empresas.'
    }
  ],
  differentiators: [
    {
      title: 'Atelier floral',
      detail: 'Espacio abierto para ver el proceso y elegir flores en directo.'
    },
    {
      title: 'Packaging sostenible',
      detail: 'Materiales reciclados, compostables y mensajes personalizados.'
    },
    {
      title: 'Atención 7 días',
      detail: 'Asesoría por WhatsApp y entregas todos los días del año.'
    }
  ],
  testimonials: [
    {
      quote:
        'Encargué el ramo de mi boda y superaron cualquier expectativa. Detalles cuidados al máximo.',
      author: 'Carla Domínguez'
    },
    {
      quote:
        'Las flores duran muchísimo y siempre tienen propuestas diferentes. Atención cercana y rápida.',
      author: 'Irene Campos'
    }
  ],
  contact: {
    phone: '+34 645 778 900',
    email: 'hola@floraviva.es',
    address: 'Calle Jardín 3, Granada',
    schedule: 'Lunes a domingo de 9:00 a 21:00'
  },
  cta: {
    title: 'Sorprende con flores inolvidables',
    description: 'Haz tu pedido en línea o consúltanos por WhatsApp para crear algo único.',
    button: 'Encargar ahora'
  }
};

export type BusinessInfo = typeof businessInfo;
