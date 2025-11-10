export const businessInfo = {
  name: 'Mirador Mediterráneo',
  tagline: 'Cocina marinera de Cambrils con el Mediterráneo como inspiración diaria.',
  navigation: [
    { label: 'La casa', href: '#casa' },
    { label: 'Carta', href: '#carta' },
    { label: 'Experiencias', href: '#experiencias' },
    { label: 'Galería', href: '#galeria' },
    { label: 'Reservas', href: '#reservas' }
  ],
  hero: {
    pretitle: 'RESTAURANTE EN CAMBRILS',
    title: 'Sabores marineros con alma mediterránea',
    description:
      'Una casa familiar frente al puerto donde el pescado del día, el arroz a la leña y los vinos de la zona se encuentran para crear momentos inolvidables.',
    primaryCta: { label: 'Reservar mesa', href: 'tel:+34655902145' },
    secondaryCta: { label: 'Ver carta degustación', href: '#carta' },
    highlights: [
      {
        title: 'Vista al puerto',
        description: 'Salones acristalados con luz natural y brisa marina durante todo el año.'
      },
      {
        title: 'Producto diario',
        description: 'Seleccionamos lonja de Cambrils cada mañana para garantizar frescura absoluta.'
      },
      {
        title: 'Servicio cercano',
        description: 'Equipo bilingüe y sumiller propio para recomendar el maridaje perfecto.'
      }
    ],
    backgroundImage:
      'https://images.unsplash.com/photo-1528605248644-14dd04022da1?auto=format&fit=crop&w=1400&q=80'
  },
  story: {
    eyebrow: 'DESDE 1987',
    title: 'Una familia dedicada al mar y la mesa',
    paragraphs: [
      'Nuestra cocina nace de la tradición marinera de Cambrils y de los recuerdos de sobremesa frente al puerto. Cada plato celebra el producto de proximidad y la artesanía de nuestros productores.',
      'Contamos con vivero propio para mariscos, huerto ecológico y una bodega con más de 200 referencias seleccionadas por nuestro sumiller.'
    ],
    details: [
      { label: 'MENÚ DEGUSTACIÓN', value: '65 €' },
      { label: 'AFORO', value: '80 comensales' },
      { label: 'EVENTOS', value: 'Bodas íntimas y celebraciones' }
    ],
    image:
      'https://images.unsplash.com/photo-1559339352-11d035aa65de?auto=format&fit=crop&w=1200&q=80'
  },
  menu: {
    eyebrow: 'LA CARTA',
    title: 'El mar en tres actos',
    description:
      'Propuestas creadas en base al producto de temporada y a la pesca del día. Adaptamos cada menú a intolerancias y preferencias especiales.',
    categories: [
      {
        title: 'Entradas del puerto',
        subtitle: 'Selección fría y caliente para compartir',
        items: [
          { name: 'Ostras del Delta', description: 'Natural o gratinadas, emulsión cítrica', price: '18 €' },
          {
            name: 'Canelón de bogavante',
            description: 'Bechamel ligera de coral y crumble de almendra',
            price: '16 €'
          },
          {
            name: 'Arroz meloso de nécora',
            description: 'Arroz bomba, fumet de roca y alioli de azafrán',
            price: '22 €'
          }
        ]
      },
      {
        title: 'Del fuego a la mesa',
        subtitle: 'Segundos elaborados al horno Josper',
        items: [
          {
            name: 'Rodaballo salvaje',
            description: 'Mantequilla noisette, hinojo asado y jugo de cítricos',
            price: '26 €'
          },
          {
            name: 'Calamar de potera',
            description: 'Relleno de butifarra negra, cebolla confitada y jugo de sus cabezas',
            price: '21 €'
          },
          {
            name: 'Entrecot madurado',
            description: 'Patatas trufadas, pimientos al carbón y salsa bordelesa',
            price: '27 €'
          }
        ]
      },
      {
        title: 'Final dulce',
        subtitle: 'Postres artesanos de nuestro obrador',
        items: [
          {
            name: 'Torrija caramelizada',
            description: 'Helado de nata fresca y praliné de avellana',
            price: '8 €'
          },
          {
            name: 'Cítricos del huerto',
            description: 'Crema de limón, merengue italiano y crumble de romero',
            price: '7 €'
          },
          {
            name: 'Chocolate y sal marina',
            description: 'Texturas de cacao 70% con aceite de Siurana',
            price: '9 €'
          }
        ]
      }
    ]
  },
  experiences: {
    eyebrow: 'EXPERIENCIAS',
    title: 'Vive Mirador Mediterráneo',
    description:
      'Celebraciones íntimas frente al mar, catas privadas y excursiones gastronómicas a la lonja de Cambrils.',
    items: [
      {
        title: 'Sunset Tasting',
        description: 'Cata guiada al atardecer con maridaje de vinos de la DO Tarragona y aperitivos de la casa.',
        badge: 'Plazas limitadas'
      },
      {
        title: 'Lonja & Cocina',
        description: 'Visita a la subasta de pescado junto a nuestro chef y elaboración del menú con el producto escogido.',
        badge: 'Sábados'
      },
      {
        title: 'Celebraciones boutique',
        description: 'Espacios privados, decoración floral mediterránea y menú personalizado para bodas y aniversarios.',
        badge: 'Hasta 50 pax'
      }
    ]
  },
  gallery: {
    eyebrow: 'GALERÍA',
    title: 'Postales del Mediterráneo',
    images: [
      {
        src: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=700&q=80',
        alt: 'Mesa frente al mar',
        caption: 'Comedor acristalado con vistas al puerto'
      },
      {
        src: 'https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=700&q=80',
        alt: 'Plato de marisco',
        caption: 'Nuestros clásicos del mar con producto de lonja'
      },
      {
        src: 'https://images.unsplash.com/photo-1447078806655-40579c2520d6?auto=format&fit=crop&w=700&q=80',
        alt: 'Detalle de copa de vino',
        caption: 'Más de 200 referencias en nuestra bodega'
      },
      {
        src: 'https://images.unsplash.com/photo-1520209268518-34fad45aedec?auto=format&fit=crop&w=700&q=80',
        alt: 'Servicio en mesa',
        caption: 'Equipo profesional y atento en sala'
      }
    ]
  },
  reservations: {
    eyebrow: 'RESERVAS',
    title: 'Reserva tu mesa junto al mar',
    description:
      'Llámanos o escríbenos por correo para coordinar tu visita. Para grupos ofrecemos menús personalizados y atención prioritaria.',
    callLabel: 'Llamar ahora',
    viewMenuLabel: 'Consultar la carta',
    bookingText: 'Reservas online 24/7'
  },
  contact: {
    phone: '+34 655 902 145',
    email: 'hola@miradormediterraneo.com',
    address: 'Passeig Marítim 12, Cambrils',
    schedule: 'Martes a domingo de 13:00 a 16:00 y de 20:00 a 23:30'
  }
};

export type BusinessInfo = typeof businessInfo;
