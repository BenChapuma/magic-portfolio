import { Logo } from "@once-ui-system/core";

const person = {
  firstName: "Ben",
  lastName: "Chapuma",
  get name() {
    return `${this.firstName} ${this.lastName}`;
  },
  role: "Systems Developer",
  avatar: "/images/facebook8.jpg",
  email: "benchapuma77@gmail.com",
  location: "Africa/Blantyre", // Expecting the IANA time zone identifier, e.g., 'Europe/Vienna'
  languages: ["English", "Chichewa"], // optional: Leave the array empty if you don't want to display languages
};

const newsletter = {
  display: true,
  title: <>Subscribe to {person.firstName}'s Newsletter</>,
  description: (
    <>
      I occasionally write about systems development, software engineering, and share thoughts on the intersection of
      creativity and engineering.
    </>
  ),
};

const social = [
  // Links are automatically displayed.
  // Import new icons in /once-ui/icons.ts
  {
    name: "GitHub",
    icon: "github",
    link: "https://github.com/BenChapuma",
  },
  {
    name: "LinkedIn",
    icon: "linkedin",
    link: "https://www.linkedin.com/in/benchapuma",
  },
  {
    name: "Threads",
    icon: "threads",
    link: "https://www.threads.net/@benchapuma",
  },
  {
    name: "Email",
    icon: "email",
    link: `mailto:${person.email}`,
  },
];

const home = {
  path: "/",
  image: "/images/og/image2.jpg",
  label: "Home",
  title: `${person.name}'s Portfolio`,
  description: `Portfolio website showcasing my work as a ${person.role}`,
  headline: <>Building bridges between human and code</>,
  featured: {
    display: true,
    title: <>Recent project: <strong className="ml-4">Acme Dashboard</strong></>,
    href: "https://nextjs-dashboard-plum-seven-2498o684ti.vercel.app/",
  },
  subline: (
    <>
      I'm Ben, a Computer engineer at MUBAS, where I craft intuitive
      <br /> user experiences. After hours, I build my own projects.
    </>
  ),
};

const about = {
  path: "/about",
  label: "About",
  title: `About – ${person.name}`,
  description: `Meet ${person.name}, ${person.role} from ${person.location}`,
  tableOfContent: {
    display: true,
    subItems: false,
  },
  avatar: {
    display: true,
  },
  calendar: {
    display: true,
    link: "https://cal.com",
  },
  intro: {
    display: true,
    title: "Introduction",
    description: (
      <>
        Ben is a dedicated Electronics & Computer Engineering student,
        driven by a profound passion for programming and developing innovative solutions.
        Thriving at the intersection of hardware and software,
        always eager to understand how things work and, more importantly,
        how to build them better. 
        Excited by opportunities to contribute to cutting-edge technology and solve real-world problems.
        Let's connect if you're building the future!
      </>
    ),
  },
  work: {
    display: true, // set to false to hide this section
    title: "Work Experience",
    experiences: [
      {
        company: "Rydberg Starck",
        timeframe: "Jul 2025 - Present",
        role: "Systems Development Intern",
        achievements: [
          <>
            Developed a Human Resource Management System that manages employees
            data, including list of all employees, registering a new employee, 
            as well as editing and deleting an employee record.
          </>,
          <>
            Designed a quotation system that tracks customer quotations, records the total number of customers,
            records total number of quotations, creates new quotations and employes live updates, as well as
            the capacity to edit and delete a quotation among other functionalities.
          </>,
        ],
        images: [
          // optional: leave the array empty if you don't want to display images
          {
            src: "/images/projects/project-01/image3.png",
            alt: " Rydberg Starck Limited",
            width: 16,
            height: 9,
          },
        ],
      },
      {
        company: "MUBAS KAI LAB",
        timeframe: "Sept 2023 - May 2024",
        role: "Data Analysis Assistant",
        achievements: [
          <>
            Conducted comprehensive field surveys, collecting physical data for
             SMS Fraud Detection project.
          </>,
          <>
            Performed critical testing of Machine Learning and Artificial Intelligence tools, 
            contributing to IntelSurv project deployment.
          </>,
          <>
            Managed efficient data entry processes, maintaining high standards of data integrity.
          </>,
          <>
            Facilitated seamless data translation between English and Chichewa, 
            ensuring clear communication and accurancy
          </>,
          <>
            Led enganging dissemination and awareness sessions,
            effectively communicating information to diverse audiences.
          </>,
        ],
        images: [
          // optional: leave the array empty if you don't want to display images
          {
            src: "/images/projects/project-01/kailab.jpg",
            alt: " SMS Fraud Detection dissemination session",
            width: 16,
            height: 9,
          },
        ],
      },
    ],
  },
  studies: {
    display: true, // set to false to hide this section
    title: "Studies",
    institutions: [
      {
        name: "Malawi University of Business and Applied Sciences",
        description: <>Studied Electronics and Computer Engineering.</>,
      },
    ],
  },
  technical: {
    display: true, // set to false to hide this section
    title: "Technical skills",
    skills: [
      {
        title: "Object-Oriented Programming",
        description: <>Able to design and develop complex systems using multiple programming languages.</>,
        // optional: leave the array empty if you don't want to display images
        images: [
          {
            src: "/images/projects/project-01/vscode-pic.png",
            alt: "Project image",
            width: 16,
            height: 9,
          },
          {
            src: "/images/projects/project-01/github-profile.png",
            alt: "GitHub profile picture",
            width: 16,
            height: 9,
          },
        ],
      },
      {
        title: "Next.js",
        description: <>Building next gen apps with Next.js + ShadCN + TailwindCSS + PostgresSQL.</>,
        // optional: leave the array empty if you don't want to display images
        images: [
          {
            src: "/images/projects/project-01/vercel-profile.png",
            alt: "Vercel profile picture",
            width: 16,
            height: 9,
          },
        ],
      },
    ],
  },
};

const blog = {
  path: "/blog",
  label: "Blog",
  title: "Writing about Engineering and tech...",
  description: `Read what ${person.name} has been up to recently`,
  // Create new blog posts by adding a new .mdx file to app/blog/posts
  // All posts will be listed on the /blog route
};

const work = {
  path: "/work",
  label: "Work",
  title: `Projects – ${person.name}`,
  description: `Design and dev projects by ${person.name}`,
  // Create new project pages by adding a new .mdx file to app/blog/posts
  // All projects will be listed on the /home and /work routes
};

const gallery = {
  path: "/gallery",
  label: "Gallery",
  title: `Photo gallery – ${person.name}`,
  description: `A photo collection by ${person.name}`,
  // Images by https://lorant.one
  // These are placeholder images, replace with your own
  images: [
    {
      src: "/images/gallery/facebook1.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/facebook5.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/facebook3.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/facebook4.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/facebook10.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/facebook6.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/facebook7.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/facebook8.jpg",
      alt: "image",
      orientation: "vertical",
    },
  ],
};

export { person, social, newsletter, home, about, blog, work, gallery };
