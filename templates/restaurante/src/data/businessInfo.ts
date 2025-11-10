export const businessInfo = {
  name: 'Mirador Mediterráneo',
  tagline: 'Cocina marinera de Cambrils donde el mar, la bodega y la hospitalidad se encuentran.',
  navigation: [
    { label: 'Cocina', href: '#cocina' },
    { label: 'Filosofía', href: '#filosofia' },
    { label: 'Menús', href: '#menus' },
    { label: 'Espacios', href: '#espacios' },
    { label: 'Experiencias', href: '#experiencias' },
    { label: 'Actualidad', href: '#actualidad' },
    { label: 'Reservas', href: '#reservas' }
  ],
  hero: {
    kicker: 'RESTAURANTE EN CAMBRILS',
    title: 'Mediterranean fine dining',
    subtitle: 'junto al puerto pesquero',
    description:
      'Una experiencia gastronómica abierta al mar con producto de lonja, bodega propia y un servicio que mima cada detalle de tu visita.',
    primaryCta: { label: 'Reservar mesa', href: 'tel:+34655902145' },
    secondaryCta: { label: 'Ver menú degustación', href: '#menus' },
    highlights: [
      { label: 'Servicio', value: 'Equipo bilingüe y sumiller' },
      { label: 'Producto', value: 'Selección diaria de lonja' },
      { label: 'Ubicación', value: 'Frente al puerto de Cambrils' }
    ],
    card: {
      title: 'Atención personalizada',
      description: 'Coordinamos reservas privadas, menús para grupos y propuestas a medida con confirmación en menos de 24 h.',
      details: [
        { label: 'Horarios', value: '13:00 – 16:00 · 20:00 – 23:30' },
        { label: 'Descanso', value: 'Lunes' },
        { label: 'Dirección', value: 'Passeig Marítim 12' }
      ]
    },
    backgroundImage: 'https://images.unsplash.com/photo-1528605248644-14dd04022da1?auto=format&fit=crop&w=1400&q=80'
  },
  identity: {
    eyebrow: 'DESDE 1987',
    title: 'Una casa marinera con alma contemporánea',
    paragraphs: [
      'La familia Martí abre las puertas de Mirador Mediterráneo para compartir una cocina honesta y elegante que evoluciona con las mareas. Nuestro chef reinterpreta recetas clásicas con técnicas actuales sin perder la esencia de la mesa mediterránea.',
      'Trabajamos con lonja de Cambrils, huerto propio y productores cercanos que garantizan la frescura de cada plato. La bodega alberga más de 200 referencias seleccionadas por nuestro sumiller y un cuidado por la hospitalidad que se siente desde la bienvenida.'
    ],
    quote: '“Queremos que cada servicio sea un viaje al Mediterráneo más auténtico, con el mar como telón de fondo.”',
    image: 'https://images.unsplash.com/photo-1559339352-11d035aa65de?auto=format&fit=crop&w=1200&q=80'
  },
  cuisine: {
    eyebrow: 'FILOSOFÍA',
    title: 'Cocina de autor arraigada al Mediterráneo',
    description:
      'Tres pilares nos definen: producto fresco de proximidad, técnica respetuosa y servicio que anticipa cada deseo. Elaboramos menús que varían según la temporada y las capturas del día.',
    pillars: [
      {
        title: 'Lonja & Huerto',
        description: 'Seleccionamos pescado salvaje, mariscos vivos y verduras de proximidad para preservar textura y sabor.'
      },
      {
        title: 'Brasa y tradición',
        description: 'El horno Josper y el fuego de leña aportan matices ahumados que elevan arroces, pescados y carnes.'
      },
      {
        title: 'Bodega curada',
        description: 'Una carta líquida con DO Tarragona, Priorat y champagnes boutique recomendados por nuestro sumiller.'
      }
    ]
  },
  menus: {
    eyebrow: 'MENÚS',
    title: 'Degustaciones pensadas para compartir',
    description:
      'Disponibles mediodía y noche con opción vegetariana. Adaptamos el recorrido a intolerancias con aviso previo.',
    items: [
      {
        name: 'Menú Delta',
        price: '65 €',
        description: 'Un viaje por los arroces melosos, pescados de roca y postres cítricos inspirados en la costa.',
        courses: ['Snacks de bienvenida', 'Tres pases salados', 'Arroz meloso de nécora', 'Pre-postre y postre'],
        linkLabel: 'Descargar PDF',
        href: '#'
      },
      {
        name: 'Menú Lonja',
        price: '85 €',
        description: 'Selección del chef con maridaje opcional y producto premium de la lonja de Cambrils.',
        courses: ['Aperitivos en mesa', 'Cinco pases salados', 'Pescado del día a la brasa', 'Postre del obrador'],
        linkLabel: 'Consultar maridaje',
        href: '#'
      },
      {
        name: 'Experiencia Mirador',
        price: '110 €',
        description: 'Degustación completa con platos fuera de carta, maridaje exclusivo y mesa junto al ventanal.',
        courses: ['Cava de bienvenida', 'Seis pases salados', 'Selección de quesos', 'Dulces artesanos'],
        linkLabel: 'Solicitar propuesta',
        href: 'mailto:hola@miradormediterraneo.com'
      }
    ],
    note: 'Los menús pueden variar según la temporada y la disponibilidad diaria de la lonja.'
  },
  spaces: {
    eyebrow: 'ESPACIOS',
    title: 'Ambientes pensados para cada momento',
    description: 'Salones con luz natural, terraza panorámica y reservado privado para eventos boutique.',
    items: [
      {
        name: 'Salón Mirador',
        description: 'Ventanales de suelo a techo con vistas al puerto y capacidad para 60 comensales.',
        image: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=900&q=80'
      },
      {
        name: 'Terraza Marina',
        description: 'Espacio chill-out para aperitivos al atardecer y servicio de cocktails signature.',
        image: 'https://images.unsplash.com/photo-1466978913421-dad2ebd01d17?auto=format&fit=crop&w=900&q=80'
      },
      {
        name: 'Reserva Private Dining',
        description: 'Salón íntimo con servicio personalizado, ideal para celebraciones de hasta 14 personas.',
        image: 'https://images.unsplash.com/photo-1520209268518-34fad45aedec?auto=format&fit=crop&w=900&q=80'
      }
    ]
  },
  experiences: {
    eyebrow: 'EXPERIENCIAS',
    title: 'Más allá de la mesa',
    description: 'Propuestas exclusivas que conectan nuestra cocina con el territorio y la cultura marinera.',
    items: [
      {
        name: 'Sunset Tasting',
        description: 'Cata guiada al atardecer con maridaje de vinos DO Tarragona y aperitivos de autor.',
        detail: 'Viernes · 12 plazas'
      },
      {
        name: 'Lonja & Cocina',
        description: 'Acompaña al chef a la subasta de pescado y disfruta un menú elaborado con tu selección.',
        detail: 'Sábados · Bajo reserva'
      },
      {
        name: 'Celebraciones boutique',
        description: 'Decoración floral mediterránea, música en vivo y menú personalizado para eventos especiales.',
        detail: 'Hasta 50 invitados'
      }
    ]
  },
  news: {
    eyebrow: 'ACTUALIDAD',
    title: 'La vida en Mirador Mediterráneo',
    moreLink: { label: 'Ver todas las noticias', href: '#' },
    articles: [
      {
        date: 'ABR 2024',
        title: 'Nueva carta de primavera con producto de lonja',
        description: 'Presentamos una propuesta renovada con espardeñas, gamba roja y verduras del Baix Camp.',
        linkLabel: 'Leer más',
        href: '#'
      },
      {
        date: 'MAR 2024',
        title: 'Cenas maridaje con bodegas invitadas',
        description: 'Cada mes invitamos a una bodega catalana para crear un recorrido de seis pases y maridaje exclusivo.',
        linkLabel: 'Reservar plaza',
        href: '#'
      },
      {
        date: 'FEB 2024',
        title: 'Reconocimiento en la Guía Gastronómica 2024',
        description: 'Mirador Mediterráneo entra en la selección de restaurantes imprescindibles de la Costa Daurada.',
        linkLabel: 'Descubrir la reseña',
        href: '#'
      }
    ]
  },
  reservations: {
    eyebrow: 'RESERVAS',
    title: 'Tu mesa junto al Mediterráneo',
    description: 'Llámanos o escríbenos y diseñaremos la experiencia ideal para tu visita. Atención prioritaria para grupos.',
    callLabel: 'Llamar ahora',
    secondaryCta: { label: 'Escribir al concierge', href: 'mailto:hola@miradormediterraneo.com' }
  },
  contact: {
    phone: '+34 655 902 145',
    email: 'hola@miradormediterraneo.com',
    address: 'Passeig Marítim 12, Cambrils',
    schedule: 'Martes a domingo de 13:00 a 16:00 y de 20:00 a 23:30'
  }
};

export type BusinessInfo = typeof businessInfo;
