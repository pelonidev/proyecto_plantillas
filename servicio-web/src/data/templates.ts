export interface TemplateShowcase {
  id: string;
  title: string;
  description: string;
  highlights: string[];
  demoPath: string;
}

export const templates: TemplateShowcase[] = [
  {
    id: 'taller-mecanico',
    title: 'Taller mecánico',
    description: 'Resalta servicios técnicos, testimonios y la facilidad para agendar citas en taller.',
    highlights: ['Agenda rápida', 'Servicios destacados', 'Testimonios con confianza'],
    demoPath: '../templates/taller-mecanico'
  },
  {
    id: 'peluqueria',
    title: 'Peluquería',
    description: 'Estilo boutique con protagonismo para las experiencias y la inspiración visual.',
    highlights: ['Rituales personalizados', 'Enfoque wellness', 'CTA a reservas'],
    demoPath: '../templates/peluqueria'
  },
  {
    id: 'restaurante',
    title: 'Restaurante',
    description: 'Cocina de autor con énfasis en el ambiente, carta de temporada y reservas.',
    highlights: ['Experiencia gastronómica', 'Maridajes', 'Reservas inmediatas'],
    demoPath: '../templates/restaurante'
  },
  {
    id: 'clinica-fisioterapia',
    title: 'Clínica de fisioterapia',
    description: 'Confianza sanitaria, descripción de tratamientos y contacto directo con especialistas.',
    highlights: ['Equipo multidisciplinar', 'Tecnología avanzada', 'Seguimiento digital'],
    demoPath: '../templates/clinica-fisioterapia'
  },
  {
    id: 'floristeria',
    title: 'Floristería',
    description: 'Estilo cálido y artesanal para mostrar catálogos, entregas y talleres creativos.',
    highlights: ['Entrega express', 'Diseños personalizados', 'Catálogo vivo'],
    demoPath: '../templates/floristeria'
  }
];
