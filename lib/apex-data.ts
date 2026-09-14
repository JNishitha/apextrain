import {
  Users,
  GraduationCap,
  Building2,
  ClipboardCheck,
  type LucideIcon,
} from 'lucide-react'

export type Service = {
  id: string
  label: string
  short: string
  description: string
  focus: string[]
  icon: LucideIcon
  image: string
  imageAlt: string
  cta: string
}

export const services: Service[] = [
  {
    id: 'teacher-training',
    label: 'Teacher Training',
    short: 'For educators',
    description:
      'Helping educators manage stress, regulate emotions, strengthen classroom dynamics, and create healthier learning environments.',
    focus: [
      'Stress management',
      'Emotional regulation',
      'Classroom dynamics',
      'Educator wellbeing',
      'Adaptive soft skills',
    ],
    icon: Users,
    image: '/sessions/teacher-training-pollocks.jpeg',
    imageAlt: 'Apex Training facilitator leading a teacher training session',
    cta: 'Discuss teacher training',
  },
  {
    id: 'student-training',
    label: 'Student Training',
    short: 'For students',
    description:
      'Helping students build emotional resilience, self-awareness, confidence, and practical coping mechanisms.',
    focus: [
      'Emotional resilience',
      'Self-awareness',
      'Confidence',
      'Coping mechanisms',
      'Real-world challenges',
    ],
    icon: GraduationCap,
    image: '/sessions/student-session.jpeg',
    imageAlt: 'Students attending an Apex Training resilience workshop',
    cta: 'Discuss student training',
  },
  {
    id: 'corporate-training',
    label: 'Corporate Training',
    short: 'For organizations',
    description:
      'Helping organizations strengthen emotional intelligence, leadership, workplace wellbeing, stress management, and organizational resilience.',
    focus: [
      'Workplace stress management',
      'Emotional intelligence',
      'Leadership',
      'Communication',
      'Organizational resilience',
    ],
    icon: Building2,
    image: '/sessions/breathing-reset.jpeg',
    imageAlt: 'Apex Training facilitator running a workplace wellbeing session',
    cta: 'Discuss corporate training',
  },
  {
    id: 'institutional-audits',
    label: 'Institutional Audits',
    short: 'For institutions',
    description:
      'Helping schools identify operational, cultural, and instructional gaps and develop actionable improvement pathways.',
    focus: [
      'Operational assessment',
      'Cultural assessment',
      'Instructional assessment',
      'Gap identification',
      'Actionable improvement pathways',
    ],
    icon: ClipboardCheck,
    image: '/sessions/hidden-crisis-talk.jpeg',
    imageAlt: 'Apex Training presenting institutional findings to an audience',
    cta: 'Book a school audit',
  },
]

export const audiences = [
  {
    title: 'Schools',
    description:
      'For educators, students, leadership teams, and institutions seeking meaningful development and improvement.',
  },
  {
    title: 'Students & Educators',
    description:
      'Interactive programs designed around real emotional, academic, and classroom challenges.',
  },
  {
    title: 'Corporate Organizations',
    description:
      'Practical programs focused on people, leadership, workplace wellbeing, and organizational resilience.',
  },
]

export const methodSteps = [
  {
    number: '01',
    title: 'Understand',
    description: 'Identify real challenges.',
  },
  {
    number: '02',
    title: 'Connect',
    description: 'Turn concepts into relatable stories and situations.',
  },
  {
    number: '03',
    title: 'Engage',
    description: 'Make learning interactive rather than passive.',
  },
  {
    number: '04',
    title: 'Apply',
    description: 'Turn learning into practical everyday behavior.',
  },
]

export type Engagement = {
  school: string
  work: string[]
  image?: string
  imageAlt?: string
}

export const engagements: Engagement[] = [
  {
    school: 'Kashmir Harvard School',
    work: ['Teacher training', 'Student training', 'Comprehensive institutional audit'],
    image: '/sessions/kashmir-harvard-group.jpeg',
    imageAlt: 'Apex Training with students and staff at Kashmir Harvard Educational Institute',
  },
  {
    school: 'Vidyala School',
    work: ['Large-scale teacher training', 'Educator wellbeing program'],
    image: '/sessions/vidyala-school.jpeg',
    imageAlt: 'Teachers gathered after an Apex Training program at Vidyala School',
  },
  {
    school: 'Pollocks School',
    work: ['Student training', 'Stress and resilience workshops'],
    image: '/sessions/pollocks-school.jpeg',
    imageAlt: 'Apex Training student session on reasons for stress at Pollocks School',
  },
  {
    school: 'Nirmala School',
    work: ['Student training', 'Mental health awareness session'],
    image: '/sessions/nirmala-school.jpeg',
    imageAlt: 'Apex Training presenting on the hidden mental health crisis at Nirmala School',
  },
  {
    school: 'Holy Spirit School',
    work: ['Teacher training', 'Institutional engagement'],
    image: '/sessions/holy-spirit-school.jpeg',
    imageAlt: 'Apex Training at a Holy Spirit School event with school leadership',
  },
  {
    school: 'Bhavans Public School',
    work: ['Teacher training', 'Coping strategies workshops'],
    image: '/sessions/bhavans-school.jpeg',
    imageAlt: 'Apex Training coping strategies workshop at Bhavans Public School',
  },
  {
    school: 'Ideal Public School, Kolkata',
    work: ['Student training', 'Teacher training'],
    image: '/sessions/ideal-public-kolkata.jpeg',
    imageAlt: 'Apex Training addressing students and staff at Ideal Public School, Kolkata',
  },
]

export const stats = [
  { value: 100, suffix: '+', label: 'Teachers per program' },
  { value: 300, suffix: '+', label: 'Students per program' },
  { value: null, display: 'Multiple', label: 'School & institutional engagements' },
] as const

export const bookingTypes = [
  {
    id: 'training-consultation',
    label: 'Training Consultation',
    description: 'A general conversation about the right program for your team.',
  },
  {
    id: 'school-audit',
    label: 'School Audit Discussion',
    description: 'Explore an operational, cultural, and instructional audit.',
  },
  {
    id: 'corporate-training',
    label: 'Corporate Training Discussion',
    description: 'Leadership, wellbeing, and organizational resilience programs.',
  },
  {
    id: 'student-teacher-enquiry',
    label: 'Student / Teacher Training Enquiry',
    description: 'Programs for students and educators.',
  },
  {
    id: 'general-enquiry',
    label: 'General Enquiry',
    description: 'Anything else you would like to discuss with us.',
  },
]

export const roleOptions = [
  'Principal / Head of School',
  'School Administrator',
  'Teacher / Educator',
  'HR / People Leader',
  'Corporate Decision-Maker',
  'Parent',
  'Student',
  'Other',
]

// Phone is a placeholder — replace with the real Apex Training number.
export const contactInfo = {
  email: 'nafisa.6soft@gmail.com',
  phone: '+91 00000 00000',
  location: 'India',
  timezone: 'Asia/Kolkata',
}
