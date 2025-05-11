import {
  AcademicCapIcon,
  ArrowDownTrayIcon,
  BuildingOffice2Icon,
  CalendarIcon,
  FlagIcon,
  MapIcon,
  SparklesIcon,
} from '@heroicons/react/24/outline';

import GithubIcon from '../components/Icon/GithubIcon';
import LinkedInIcon from '../components/Icon/LinkedInIcon';
import heroImage from '../images/header-background.jpeg';
import bridgeImage from '../images/portfolio/bridge.png';
import degenSentimentImage from '../images/portfolio/degen.jpeg';
import fuelswitchImage from '../images/portfolio/fuelswitch.png';
import openBlockExplorerImage from '../images/portfolio/obe.png';
import tswapsImage from '../images/portfolio/t-swaps.png';
import teloscanImage from '../images/portfolio/teloscan.png';
import walnutImage from '../images/portfolio/walnut.png';
import profilepic from '../images/profilepic.jpeg';
import testimonialImage from '../images/testimonial.webp';
import {
  About,
  ContactSection,
  ContactType,
  Hero,
  HomepageMeta,
  PortfolioItem,
  SkillGroup,
  Social,
  TestimonialSection,
  TimelineItem,
} from './dataDef';

/**
 * Page meta data
 */
export const homePageMeta: HomepageMeta = {
  title: 'Wikus Kriek - Full Stack Developer',
  description: 'Full Stack Developer specializing in React, Node.js, and blockchain technologies',
};

/**
 * Section definition
 */
export const SectionId = {
  Hero: 'hero',
  About: 'about',
  Contact: 'contact',
  Portfolio: 'portfolio',
  Resume: 'resume',
  Skills: 'skills',
  Stats: 'stats',
  Testimonials: 'testimonials',
} as const;

export type SectionId = (typeof SectionId)[keyof typeof SectionId];

/**
 * Hero section
 */
export const heroData: Hero = {
  imageSrc: heroImage,
  name: `I'm Wikus Kriek.`,
  description: (
    <>
      <p className="prose-sm text-stone-200 sm:prose-base lg:prose-lg">
        I'm a South Africa based <strong className="text-stone-100">Full Stack Software Engineer</strong>, currently working
        at <strong className="text-stone-100">Y-Knot Blockchain</strong> helping build a modern, blockchain-based, 
        platform for the next generation of developers.
      </p>
      <p className="prose-sm text-stone-200 sm:prose-base lg:prose-lg">
        In my free time time, you can catch me training in <strong className="text-stone-100">Muay Thai</strong>,
        plucking my <strong className="text-stone-100">banjo</strong>, or exploring beautiful{' '}
        <strong className="text-stone-100">Vancouver Island</strong>.
      </p>
    </>
  ),
  actions: [
    {
      href: '/assets/resume.pdf',
      text: 'Resume',
      primary: true,
      Icon: ArrowDownTrayIcon,
    },
    {
      href: `#${SectionId.Contact}`,
      text: 'Contact',
      primary: false,
    },
  ],
};

/**
 * About section
 */
export const aboutData: About = {
  profileImageSrc: profilepic,
  description: `I am a passionate Full Stack Developer with expertise in React, Node.js, and blockchain technologies. With experience in both frontend and backend development, I specialize in creating robust, scalable applications. I'm particularly interested in blockchain technology and have contributed to several blockchain-related projects.`,
  aboutItems: [
    {label: 'Location', text: 'Potchefstroom, SA', Icon: MapIcon},
    {label: 'Age', text: '28', Icon: CalendarIcon},
    {label: 'Nationality', text: 'South African', Icon: FlagIcon},
    {label: 'Interests', text: 'Canoeing, Swimming, Running, Gym', Icon: SparklesIcon},
    {label: 'Study', text: 'North-West University', Icon: AcademicCapIcon},
    {label: 'Employment', text: 'Y-Knot Blockchain', Icon: BuildingOffice2Icon},
  ],
};

/**
 * Skills section
 */
export const skills: SkillGroup[] = [
  {
    name: 'Spoken languages',
    skills: [
      {
        name: 'English',
        level: 10,
      },
      {
        name: 'Afrikaans',
        level: 10,
      },
    ],
  },
  {
    name: 'Frontend development',
    skills: [
      {
        name: 'React',
        level: 9,
      },
      {
        name: 'Typescript',
        level: 7,
      },
      {
        name: 'GraphQL',
        level: 6,
      },
      {
        name: 'Next.js',
        level: 9,
      },
    ],
  },
  {
    name: 'Backend development',
    skills: [
      {
        name: 'Node.js',
        level: 9,
      },
      {
        name: 'Python',
        level: 8,
      },
      {
        name: 'C#',
        level: 6,
      }
    ],
  },
  {
    name: 'Mobile development',
    skills: [
      {
        name: 'React Native',
        level: 8,
      },
      {
        name: 'Flutter',
        level: 5,
      },
      {
        name: 'Java',
        level: 5,
      },
    ],
  },
];

/**
 * Portfolio section
 */
export const portfolioItems: PortfolioItem[] = [
  {
    title: 'Walnut',
    description: 'A banking and budgeting app',
    url: 'https://app.walnut.co.za/',
    image: walnutImage,
  },
  {
    title: 'Fuelswitch',
    description: 'We have created an exchange for willing buyers and sellers of renewable energy attributes. This replaced a very inefficient process and provides transparency, accountability and immutable proof of authenticity back to source.',
    url: 'https://www.fuelswitch.io/',
    image: fuelswitchImage,
  },
  {
    title: 'Teloscan',
    description: 'Telos EVM block explorer',
    url: 'https://www.teloscan.io/',
    image: teloscanImage,
  },
  {
    title: 'Open Block Explorer',
    description: 'Antelope Native Block Explorer',
    url: 'https://explorer.telos.net/network',
    image: openBlockExplorerImage,
  },
  {
    title: 'T Swaps',
    description: 'A decentralized exchange for the Telos EVM and Telos Native',
    url: 'https://tswaps.com/swap/',
    image: tswapsImage,
  },
  {
    title: 'Telos Bridge',
    description: 'The bridge makes it easier for capital to make its way onto Telos. It increases cross-chain interoperability to Telos EVM with a lower barrier to entry than the alternatives.',
    url: 'https://taikai.network/telos-foundation/hackathons/telosevm/projects/cl1d8564a3750490rtok48z4wz1/idea',
    image: bridgeImage,
  },
  {
    title: 'Degen sentiment',
    description: 'A crypto market sentiment website with real-time updates using React, Redux, WebSockets, Node.js, and Express.',
    url: '',
    image: degenSentimentImage,
  },
];

/**
 * Resume section -- TODO: Standardize resume contact format or offer MDX
 */
export const education: TimelineItem[] = [
  {
    date: '2013 - 2016',
    location: 'North-West University',
    title: 'BSc Computer Science',
    content: <p>Graduated with a Bachelor's degree in Computer Science, focusing on software development and computer systems.</p>,
  },
];

export const experience: TimelineItem[] = [
  {
    date: '2021 - Present',
    location: 'Y-Knot Blockchain',
    title: 'Full Stack Developer',
    content: (
      <p>
        Leading development of blockchain-based applications using React, Node.js, and blockchain technologies.
        Specializing in creating decentralized applications and smart contracts.
      </p>
    ),
  },
  {
    date: '2019 - 2021',
    location: 'Walnut',
    title: 'Full Stack Developer',
    content: (
      <p>
        Developed and maintained banking and budgeting applications using React and Node.js.
        Implemented real-time features and optimized application performance.
      </p>
    ),
  },
  {
    date: '2017 - 2019',
    location: 'Fuelswitch',
    title: 'Junior Developer',
    content: (
      <p>
        Contributed to the development of fuel price comparison platform.
        Gained experience in full stack development and API integration.
      </p>
    ),
  },
];

/**
 * Testimonial section
 */
export const testimonial: TestimonialSection = {
  imageSrc: testimonialImage,
  testimonials: [
    {
      name: 'John Smith',
      text: 'Wikus is an exceptional developer who consistently delivers high-quality code. His expertise in blockchain technology and full-stack development has been invaluable to our team.',
      image: 'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/169.jpg',
    },
    {
      name: 'Sarah Johnson',
      text: 'Working with Wikus was a pleasure. His attention to detail and problem-solving skills helped us overcome complex technical challenges in our blockchain project.',
      image: 'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/14.jpg',
    },
  ],
};

/**
 * Contact section
 */

export const contact: ContactSection = {
  headerText: 'Get in touch.',
  description: 'Feel free to reach out if you have any questions or opportunities.',
  items: [
    {
      type: ContactType.Email,
      text: 'wikus.kriek.2w@gmail.com',
      href: 'mailto:wikus.kriek.2w@gmail.com',
    },
    {
      type: ContactType.Location,
      text: 'Potchefstroom, South Africa',
      href: 'https://www.google.com/maps/place/Potchefstroom',
    },
    {
      type: ContactType.Github,
      text: 'WikusKriek',
      href: 'https://github.com/WikusKriek',
    },
  ],
};

/**
 * Social items
 */
export const socialLinks: Social[] = [
  {label: 'Github', Icon: GithubIcon, href: 'https://github.com/WikusKriek'},
  {label: 'LinkedIn', Icon: LinkedInIcon, href: 'https://www.linkedin.com/in/wikus-kriek-8b1433147/'},
];
