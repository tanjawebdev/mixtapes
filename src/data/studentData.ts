export interface Project {
  title: string;
  year: number | string;
  type: string;
  client: string;
  collaborators: string;
  about: string;
  images: string[];
}

export interface Student {
  studentID: number;
  nfcID: string;
  surname: string;
  name: string;
  coverImg: string;
  aboutMe: string;
  skills: string[];
  portfolioLink: string;
  experiences: string[];
  projects: Project[];
}

export const students: Student[] = [
  {
    studentID: 1,
    nfcID: "04:A3:2B:C2:5E:61:80",
    surname: "John",
    name: "Doe",
    coverImg: "/assets/portfolio-projects/01-john-doe/cover.jpg",
    aboutMe:
      "Curious interaction design student passionate about human-centered solutions. I enjoy transforming research insights into intuitive digital experiences through prototyping, testing, and thoughtful visual storytelling, always aiming to create meaningful, accessible, and engaging interactions for diverse users.",
    skills: [
      "Visual Identity Design",
      "UX Design",
      "User Research",
      "Information Architecture",
      "Accessibility Design",
    ],
    portfolioLink: "joedoe-portfolio.com",
    experiences: [
      "Year: written 20xy or 20xy-xy Company up to 30 characters Position up to 34 characters",
      "2024-26 FH Joanneum Interaction Design Student",
      "2024 Company XYZ Visual Designer",
      "2023-ongoing Freelance UI UX Designer",
    ],
    projects: [
      {
        title: "Website XYZ",
        year: 2024,
        type: "UI Design Webdesign Development",
        client: "FH JOANNEUM",
        collaborators: "Daniel Fabry Konrad Baumann",
        about:
          "A mobile app concept designed to help students manage creative projects collaboratively. The project focused on user research, wireframing, prototyping, and usability testing to create an intuitive interface that supports teamwork, clear workflows, and effective communication throughout the design process.",
        images: [
          "/assets/portfolio-projects/01-john-doe/01-project/andre-benz-qK4bYq-ZToE-unsplash.jpg",
          "/assets/portfolio-projects/01-john-doe/01-project/andre-benz-qz7KZgeDmjU-unsplash.jpg",
          "/assets/portfolio-projects/01-john-doe/01-project/anthony-reungere-s6xt1mwF_iU-unsplash.jpg",
          "/assets/portfolio-projects/01-john-doe/01-project/josh-soto-0UeQGrB4xyM-unsplash.jpg",
        ],
      },
      {
        title: "Website XYZ 02",
        year: 2024,
        type: "UI Design Webdesign Development",
        client: "Fh Joanneum",
        collaborators: "Daniel Fabry Konrad Baumann",
        about:
          "A mobile app concept designed to help students manage creative projects collaboratively. The project focused on user research, wireframing, prototyping, and usability testing to create an intuitive interface that supports teamwork, clear workflows, and effective communication throughout the design process.",
        images: [
          "/assets/portfolio-projects/01-john-doe/02-project/andre-benz-g8Sq1d9Lm98-unsplash.jpg",
          "/assets/portfolio-projects/01-john-doe/02-project/davi-rezende-KVvcUjYqTII-unsplash.jpg",
          "/assets/portfolio-projects/01-john-doe/02-project/vek-labs-e8ofKlNHdsg-unsplash.jpg",
          "/assets/portfolio-projects/01-john-doe/02-project/zarif-ali-MM92ZvKB8L0-unsplash.jpg",
        ],
      },
      {
        title: "Website XYZ 03",
        year: 2024,
        type: "UI Design Webdesign Development",
        client: "Fh Joanneum",
        collaborators: "Daniel Fabry Konrad Baumann",
        about:
          "A mobile app concept designed to help students manage creative projects collaboratively. The project focused on user research, wireframing, prototyping, and usability testing to create an intuitive interface that supports teamwork, clear workflows, and effective communication throughout the design process.",
        images: [
          "/assets/portfolio-projects/01-john-doe/03-project/hillie-chan-KtM6y3pUI0w-unsplash.jpg",
          "/assets/portfolio-projects/01-john-doe/03-project/lawless-capture-49BU_TEFzOg-unsplash.jpg",
          "/assets/portfolio-projects/01-john-doe/03-project/nobiur-rahman-zMefv9AslR4-unsplash.jpg",
          "/assets/portfolio-projects/01-john-doe/03-project/thanos-pal-7MzOHv6CJrU-unsplash.jpg",
        ],
      },
      {
        title: "Website XYZ 04",
        year: 2024,
        type: "UI Design Webdesign Development",
        client: "Fh Joanneum",
        collaborators: "Daniel Fabry Konrad Baumann",
        about:
          "A mobile app concept designed to help students manage creative projects collaboratively. The project focused on user research, wireframing, prototyping, and usability testing to create an intuitive interface that supports teamwork, clear workflows, and effective communication throughout the design process.",
        images: [
          "/assets/portfolio-projects/01-john-doe/04-project/doina-gavrilov-BYItYXtulpQ-unsplash.jpg",
          "/assets/portfolio-projects/01-john-doe/04-project/jose-ribamar-nftTYsOlzrI-unsplash.jpg",
          "/assets/portfolio-projects/01-john-doe/04-project/kamal-uddin-6ST911WxsAU-unsplash.jpg",
          "/assets/portfolio-projects/01-john-doe/04-project/kamal-uddin-uOvXGr3WdR0-unsplash.jpg",
        ],
      },
      {
        title: "Website XYZ 05",
        year: 2024,
        type: "UI Design Webdesign Development",
        client: "Fh Joanneum",
        collaborators: "Daniel Fabry Konrad Baumann",
        about:
          "A mobile app concept designed to help students manage creative projects collaboratively. The project focused on user research, wireframing, prototyping, and usability testing to create an intuitive interface that supports teamwork, clear workflows, and effective communication throughout the design process.",
        images: [
          "/assets/portfolio-projects/01-john-doe/05-project/dandi-nurdiansyah-xuJ-rK6HpA4-unsplash.jpg",
          "/assets/portfolio-projects/01-john-doe/05-project/tamas-pap-_BVPbT6niR0-unsplash.jpg",
          "/assets/portfolio-projects/01-john-doe/05-project/tudor-baciu-b2u9dUSGom0-unsplash.jpg",
        ],
      },
    ],
  },
];
