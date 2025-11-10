export const businessInfo = {
  name: 'Barrio Grooming Club',
  tagline: 'Barbería tradicional con técnicas contemporáneas, café de cortesía y buen ambiente.',
  navigation: [
    { label: 'Servicios', href: '#servicios' },
    { label: 'Experiencia', href: '#experiencia' },
    { label: 'Equipo', href: '#equipo' },
    { label: 'Reserva', href: '#reserva' }
  ],
  hero: {
    eyebrow: 'BARBERÍA · MADRID',
    title: 'Cortes clásicos y looks contemporáneos',
    description:
      'Un espacio donde la barbería tradicional se une con la música, el café y la cultura urbana. Agenda tu cita y vive la experiencia completa.',
    secondaryCta: { label: 'Ver carta de servicios', href: '#servicios' },
    details: [
      { label: 'HORARIO', value: 'Martes a sábado · 10h – 20h' },
      { label: 'DIRECCIÓN', value: 'Calle Velarde 23, Madrid' },
      { label: 'CONTACTO', value: '+34 910 456 789' }
    ]
  },
  booking: { label: 'Reserva online', href: 'https://calendly.com/barrio-grooming' },
  services: {
    eyebrow: 'SERVICIOS',
    title: 'Nuestros rituales de barbería',
    description: 'Cada servicio incluye diagnóstico, ritual de toallas calientes y productos premium.',
    items: [
      {
        name: 'Corte + estilo',
        description: 'Corte personalizado, lavado y peinado con asesoría de productos.',
        price: '28 €'
      },
      {
        name: 'Arreglo de barba',
        description: 'Perfilado a navaja, tratamiento hidratante y acabado con aceites esenciales.',
        price: '19 €'
      },
      {
        name: 'Afeitado clásico',
        description: 'Experiencia tradicional con toalla caliente, aceites pre shave y bálsamo calmante.',
        price: '24 €'
      }
    ]
  },
  experience: {
    eyebrow: 'EXPERIENCIA',
    title: 'Más que un corte, un ritual',
    description: 'Queremos que cada visita sea un momento de pausa. Música seleccionada, bebida de cortesía y productos artesanales.',
    steps: [
      { title: 'Bienvenida', description: 'Te recibimos con un espresso o cerveza artesanal y escuchamos lo que buscas.' },
      {
        title: 'Corte y barbería',
        description: 'Técnica clásica con tijera y navaja, terminando con styling para que puedas replicarlo en casa.'
      },
      {
        title: 'Aftercare',
        description: 'Recomendaciones personalizadas de productos y recordatorio de tu próxima cita.'
      }
    ]
  },
  team: {
    eyebrow: 'EL EQUIPO',
    title: 'Barberos con personalidad propia',
    members: [
      {
        name: 'Luis “Lucho” Herrera',
        role: 'Master barber · Especialista en fades',
        photo: 'https://images.unsplash.com/photo-1585747860715-2ba37e788b70?auto=format&fit=crop&w=600&q=80',
        highlights: ['Campeón Barber Battle 2022', 'Formador internacional', '10 años de experiencia']
      },
      {
        name: 'Sara Campos',
        role: 'Barber stylist · Cortes con tijera',
        photo: 'https://images.unsplash.com/photo-1593702176126-90b76e1e1bc7?auto=format&fit=crop&w=600&q=80',
        highlights: ['Especialista en cabello rizado', 'Coloración masculina', 'Experiencia en moda editorial']
      }
    ]
  },
  cta: {
    eyebrow: 'RESERVA',
    title: 'Tu silla te espera',
    description: 'Agenda online o llámanos para reservar tu próximo corte. También atendemos walk-ins según disponibilidad.'
  },
  contact: {
    phone: '+34 910 456 789',
    email: 'hola@barriogrooming.com',
    address: 'Calle Velarde 23, Madrid',
    schedule: 'Martes a sábado de 10:00 a 20:00 · Domingos para eventos privados'
  }
};

export type BusinessInfo = typeof businessInfo;
