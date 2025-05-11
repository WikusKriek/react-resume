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
        I'm a South Africa based <strong className="text-stone-100">Full Stack Software Engineer</strong>, currently
        working at <strong className="text-stone-100">Y-Knot Blockchain</strong> helping build a modern,
        blockchain-based, platform for the next generation of developers.
      </p>
      <p className="prose-sm text-stone-200 sm:prose-base lg:prose-lg">
        In my free time, you can catch me exploring rivers while <strong className="text-stone-100">canoeing</strong>,
        enjoying the outdoors <strong className="text-stone-100">camping</strong>, or staying active with{' '}
        <strong className="text-stone-100">running and gym workouts</strong>.
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
  description: `Software engineer with experience building distributed systems, full-stack web applications, and backend services using
    JavaScript, TypeScript, and C#. Skilled in designing and implementing web APIs, mobile applications, and real-time data
    systems. Focused on creating reliable, maintainable codebases and delivering end-to-end solutions across multiple platforms,
    including web, mobile, and embedded environments. Experienced in collaborating with open-source communities and
    internal development teams to improve product stability, usability, and performance.`,
  aboutItems: [
    {label: 'Location', text: 'Potchefstroom, SA', Icon: MapIcon},
    {label: 'Age', text: '28', Icon: CalendarIcon},
    {label: 'Nationality', text: 'South African', Icon: FlagIcon},
    {label: 'Interests', text: 'Canoeing, Running, Gym, Fintech', Icon: SparklesIcon},
    {label: 'Study', text: 'BEng Computer Engineering', Icon: AcademicCapIcon},
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
      },
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
    title: 'T Swaps',
    description: 'A decentralized exchange for the Telos EVM and Telos Native',
    url: 'https://tswaps.com/swap/',
    image: tswapsImage,
  },
  {
    title: 'Fuelswitch',
    description:
      'We have created an exchange for willing buyers and sellers of renewable energy attributes. This replaced a very inefficient process and provides transparency, accountability and immutable proof of authenticity back to source.',
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
    title: 'Telos Bridge',
    description:
      'The bridge makes it easier for capital to make its way onto Telos. It increases cross-chain interoperability to Telos EVM with a lower barrier to entry than the alternatives.',
    url: 'https://taikai.network/telos-foundation/hackathons/telosevm/projects/cl1d8564a3750490rtok48z4wz1/idea',
    image: bridgeImage,
  },
  {
    title: 'Degen sentiment',
    description:
      'A crypto market sentiment website with real-time updates using React, Redux, WebSockets, Node.js, and Express.',
    url: '',
    image: degenSentimentImage,
  },
];

/**
 * Resume section -- TODO: Standardize resume contact format or offer MDX
 */
export const education: TimelineItem[] = [
  { 
    date: '2020',
    location: 'North-West University',
    title: 'BEng Computer and Electronic Engineering',
    content: (
      <p>
        Graduated with a Bachelor's degree in Computer and Electronic Engineering, focusing on software development and computer systems.
      </p>
    ),
  },
];

export const experience: TimelineItem[] = [
  {
    date: '2022 - Present',
    location: 'Y-Knot Blockchain Solutions — Centurion, Gauteng',
    title: 'Software Engineer',
    content: (
      <p>
        • Built distributed web applications using React, Node.js, and TypeScript, handling frontend development, backend
        API integration, and system architecture for real-time data retrieval and secure transaction handling.<br/>
        • Designed backend services to manage large volumes of user and transactional data, ensuring efficient retrieval, state
        updates, and secure client-server communication across multiple systems.<br/>
        • Developed and maintained automation tools for real-time data normalization, event-driven workflows, and cross-
        network system operations, improving the speed and accuracy of internal processes.<br/>
        • Managed a team of four developers by coordinating project sprints, allocating tasks based on technical strengths,
        and providing hands-on support in resolving frontend, backend, and deployment-related technical issues.
      </p>
    ),
  },
  {
    date: '2020 - 2022',
    location: 'WIM Technologies — Johannesburg',
    title: 'Full Stack / Mobile Developer',
    content: (
      <p>
        • Developed and maintained backend services using C#, .NET, and Django to process raw telecommunications
        messages, decode network signals, and deliver structured outputs to internal monitoring dashboards.<br/>
        • Updated Android and web applications by enhancing functionality with Java, JavaScript, HTML, and CSS,
        improving operational workflows for field engineers and internal users by reducing application downtime and
        interface friction.<br/>
        • Created network infrastructure REST APIs and built automated testing scripts to assist QA teams with early
        detection of integration errors and backend performance bottlenecks.
      </p>
    ),
  },
  {
    date: '2018 - 2020',
    location: 'Jericho Systems Pty Ltd — Potchefstroom ',
    title: 'Engineering Intern',
    content: (
      <p>
        • Contributed to firmware development and PC software integration for embedded sensor systems by building C++
        and Python components that improved sensor calibration accuracy and reduced firmware update times.<br/>
        • Designed and trained a Python-based machine learning model to assess image quality, helping automate the filtering
        process for internal datasets used in computer vision research and hardware validation.<br/>
        • Supported mechanical prototyping by creating and revising designs in FreeCAD, assisting in fit testing, prototype
        assembly, and documenting mechanical changes for engineering validation reports.
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
      name: 'Alec Averienos',
      text: 'Wikus is a dependable excellent contributor to the team.',
      image:
        'https://media.licdn.com/dms/image/v2/D4D03AQFltO6d4YlUEw/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1669201889107?e=1752710400&v=beta&t=wQm8-osz6JVAs88jvscII6JuwFw8uTIlhCOUwJiFNDU',
    },
    {
      name: 'Anika van den Berg',
      text: 'Wikus you are an anchor. You make people calm and bring a sense of certainty and security. You are a great team player and a valuable asset to the team.',
      image:
        'https://media.licdn.com/dms/image/v2/D4D03AQHL1XyJKKa2Rg/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1727764978067?e=1752710400&v=beta&t=g7T52xYSHpU-PsFwMtSPk1w7jR7L9L0M84SFXXRg6Yw',
    },
    {
      name: 'Jacques Beukes',
      text: 'Thank you for being so honest and realistic. We value your participation in team work. And I value our good conversations.',
      image:
        'https://media.licdn.com/dms/image/v2/D4D03AQFIFuITBgWJPw/profile-displayphoto-shrink_400_400/B4DZV.vxB7GkAo-/0/1741588206253?e=1752710400&v=beta&t=7XhX-ucGJfTfQZTcI01-_0xzFpskdyHN2yamN8_uTKs',
    },
    {
      name: 'Johan Bloem',
      text: 'Wikus thank you for your steadiness and efficiency. You provide solutions that is fast and effective on any difficulty.',
      image:
        'https://media.licdn.com/dms/image/v2/D4D03AQEIY9hSdi2kcQ/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1676274615956?e=1752710400&v=beta&t=jEqG1qA6ykCVrHvEMleX4koRloFqPD6kSDFE0yDhVyE',
    },
    {
      name: 'Dewald Krynauw',
      text: 'Wikus has a curiosity and drive to learn new things. He always seems to be at the forefront of new technologies and innovative solutions, thats the adventurous spirit we need in the team.',
      image:
        'https://media.licdn.com/dms/image/v2/D4D03AQFrr_1dzDiwjw/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1704270166061?e=1752710400&v=beta&t=B6cjLHenQJ_o2oK4GajuPp-TTjX7CIzRIT5pbMZ5gNQ',
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
