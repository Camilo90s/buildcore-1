// Contenido central del sitio. Edita aquí textos, datos de contacto y SEO.
// ⚠️ Los datos de contacto y dirección son de ejemplo: reemplázalos por los reales
//    (también alimentan el JSON-LD que lee Google).

export const site = {
  name: 'BuildCore Construction',
  shortName: 'BuildCore',
  title: 'BuildCore Construction | Residential, Commercial & Industrial Builders',
  description:
    'BuildCore Construction delivers quality residential, commercial and industrial construction and design & build services with integrity, precision and a commitment to excellence.',
  phone: '+1 (555) 014-2290',
  phoneHref: '+15550142290',
  email: 'hello@buildcore-construction.com',
  address: {
    street: '1250 Industrial Ave, Suite 300',
    city: 'Austin',
    region: 'TX',
    postalCode: '78701',
    country: 'US',
  },
  hours: 'Mon – Fri: 7:00 AM – 6:00 PM',
  foundingYear: 1998,
  social: [
    { label: 'Facebook', href: 'https://www.facebook.com/' },
    { label: 'Instagram', href: 'https://www.instagram.com/' },
    { label: 'LinkedIn', href: 'https://www.linkedin.com/' },
  ],
} as const;

export const nav = [
  { label: 'Home', href: '#home' },
  { label: 'About Us', href: '#about' },
  { label: 'Services', href: '#services' },
  { label: 'Projects', href: '#projects' },
  { label: 'Company', href: '#company' },
  { label: 'Contact', href: '#contact' },
] as const;

export type ServiceIcon = 'residential' | 'commercial' | 'industrial' | 'design';

export const services: { title: string; description: string; icon: ServiceIcon }[] = [
  {
    title: 'Residential',
    description: 'Custom homes, renovations and multi-family housing built to last.',
    icon: 'residential',
  },
  {
    title: 'Commercial',
    description: 'Offices, retail and mixed-use buildings delivered on time and on budget.',
    icon: 'commercial',
  },
  {
    title: 'Industrial',
    description: 'Warehouses, plants and logistics facilities engineered for performance.',
    icon: 'industrial',
  },
  {
    title: 'Design & Build',
    description: 'One team from concept and permits to the final walkthrough.',
    icon: 'design',
  },
];

export const stats = [
  { value: '25+', label: 'Years of experience' },
  { value: '850+', label: 'Projects completed' },
  { value: '120+', label: 'Skilled professionals' },
  { value: '98%', label: 'Client satisfaction' },
] as const;

export const aboutPoints = [
  'Licensed, bonded and fully insured',
  'Transparent budgets with no hidden costs',
  'Dedicated project manager on every job',
] as const;

// Las tarjetas usan recortes de la imagen del hero como marcador de posición.
// Sustitúyelos por fotos reales de cada proyecto en src/assets/.
export const projects = [
  {
    title: 'Hillside Modern Residence',
    category: 'Residential',
    location: 'Austin, TX',
    year: 2025,
    focus: '58% 78%',
  },
  {
    title: 'Riverside Office Complex',
    category: 'Commercial',
    location: 'Dallas, TX',
    year: 2024,
    focus: '45% 30%',
  },
  {
    title: 'Northgate Logistics Center',
    category: 'Industrial',
    location: 'San Antonio, TX',
    year: 2024,
    focus: '92% 40%',
  },
] as const;

export const features = [
  {
    title: 'Safety First',
    description: 'Rigorous site protocols and certified crews on every project.',
    icon: 'shield',
  },
  {
    title: 'On-Time Delivery',
    description: 'Detailed scheduling and weekly reporting keep you on track.',
    icon: 'clock',
  },
  {
    title: 'Quality Materials',
    description: 'We source trusted suppliers and inspect every phase of work.',
    icon: 'badge',
  },
  {
    title: 'Fixed Pricing',
    description: 'Clear, itemized proposals so you always know where you stand.',
    icon: 'tag',
  },
] as const;
