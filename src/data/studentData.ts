export interface Project {
  title: string;
  year: number | string;
  type: string;
  client: string;
  collaborators: string;
  about: string;
}

export interface Student {
  studentID: number;
  nfcID: string;
  surname: string;
  name: string;
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
      },
      {
        title: "Website XYZ 02",
        year: 2024,
        type: "UI Design Webdesign Development",
        client: "Fh Joanneum",
        collaborators: "Daniel Fabry Konrad Baumann",
        about:
          "A mobile app concept designed to help students manage creative projects collaboratively. The project focused on user research, wireframing, prototyping, and usability testing to create an intuitive interface that supports teamwork, clear workflows, and effective communication throughout the design process.",
      },
      {
        title: "Website XYZ 03",
        year: 2024,
        type: "UI Design Webdesign Development",
        client: "Fh Joanneum",
        collaborators: "Daniel Fabry Konrad Baumann",
        about:
          "A mobile app concept designed to help students manage creative projects collaboratively. The project focused on user research, wireframing, prototyping, and usability testing to create an intuitive interface that supports teamwork, clear workflows, and effective communication throughout the design process.",
      },
      {
        title: "Website XYZ 04",
        year: 2024,
        type: "UI Design Webdesign Development",
        client: "Fh Joanneum",
        collaborators: "Daniel Fabry Konrad Baumann",
        about:
          "A mobile app concept designed to help students manage creative projects collaboratively. The project focused on user research, wireframing, prototyping, and usability testing to create an intuitive interface that supports teamwork, clear workflows, and effective communication throughout the design process.",
      },
      {
        title: "Website XYZ 05",
        year: 2024,
        type: "UI Design Webdesign Development",
        client: "Fh Joanneum",
        collaborators: "Daniel Fabry Konrad Baumann",
        about:
          "A mobile app concept designed to help students manage creative projects collaboratively. The project focused on user research, wireframing, prototyping, and usability testing to create an intuitive interface that supports teamwork, clear workflows, and effective communication throughout the design process.",
      },
    ],
  },
  {
    studentID: 2,
    nfcID: "04:A3:2B:C2:5E:61:81",
    surname: "Jaqueline",
    name: "Boe",
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
      },
      {
        title: "Website XYZ 02",
        year: 2024,
        type: "UI Design Webdesign Development",
        client: "Fh Joanneum",
        collaborators: "Daniel Fabry Konrad Baumann",
        about:
          "A mobile app concept designed to help students manage creative projects collaboratively. The project focused on user research, wireframing, prototyping, and usability testing to create an intuitive interface that supports teamwork, clear workflows, and effective communication throughout the design process.",
      },
      {
        title: "Website XYZ 03",
        year: 2024,
        type: "UI Design Webdesign Development",
        client: "Fh Joanneum",
        collaborators: "Daniel Fabry Konrad Baumann",
        about:
          "A mobile app concept designed to help students manage creative projects collaboratively. The project focused on user research, wireframing, prototyping, and usability testing to create an intuitive interface that supports teamwork, clear workflows, and effective communication throughout the design process.",
      },
      {
        title: "Website XYZ 04",
        year: 2024,
        type: "UI Design Webdesign Development",
        client: "Fh Joanneum",
        collaborators: "Daniel Fabry Konrad Baumann",
        about:
          "A mobile app concept designed to help students manage creative projects collaboratively. The project focused on user research, wireframing, prototyping, and usability testing to create an intuitive interface that supports teamwork, clear workflows, and effective communication throughout the design process.",
      },
      {
        title: "Website XYZ 05",
        year: 2024,
        type: "UI Design Webdesign Development",
        client: "Fh Joanneum",
        collaborators: "Daniel Fabry Konrad Baumann",
        about:
          "A mobile app concept designed to help students manage creative projects collaboratively. The project focused on user research, wireframing, prototyping, and usability testing to create an intuitive interface that supports teamwork, clear workflows, and effective communication throughout the design process.",
      },
    ],
  },
];
