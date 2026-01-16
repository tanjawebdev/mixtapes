import type { Student } from "../types";

/**
 * Student portfolio data
 *
 * This is the central data source for all student information.
 * TypeScript provides compile-time type checking to ensure data validity.
 */
export const studentsData: Student[] = [
    {
        studentID: 1,
        nfcID: "04:A3:2B:C2:5E:61:80",
        surname: "John",
        name: "Doe",
        major: "Interaction Design",
        aboutMe: "Curious interaction design student passionate about human-centered solutions. I enjoy transforming research insights into intuitive digital experiences through prototyping, testing, and thoughtful visual storytelling, always aiming to create meaningful, accessible, and engaging interactions for diverse users.",
        skills: [
            "Visual Identity Design",
            "UX Design",
            "User Research",
            "Information Architecture",
            "Accessibility Design"
        ],
        portfolioLink: "joedoe-portfolio.com",
        experiences: [
            {
                years: "2025-new",
                company: "pixelart",
                position: "Visual Designer",
            },
            {
                years: "2024",
                company: "test",
                position: "Information",
            },
            {
                years: "2023",
                company: "gowest",
                position: "Visual",
            },
            {
                years: "2022",
                company: "test",
                position: "Information",
            }
        ],
        projects: [
            {
                title: "Website XYZ",
                year: 2024,
                type: "UI Design Webdesign Development",
                client: "FH JOANNEUM",
                collaborators: "Daniel Fabry Konrad Baumann",
                about: "A mobile app concept designed to help students manage creative projects collaboratively. The project focused on user research, wireframing, prototyping, and usability testing to create an intuitive interface that supports teamwork, clear workflows, and effective communication throughout the design process."
            },
            {
                title: "Website XYZ 02",
                year: 2024,
                type: "UI Design Webdesign Development",
                client: "Fh Joanneum",
                collaborators: "Daniel Fabry Konrad Baumann",
                about: "A mobile app concept designed to help students manage creative projects collaboratively. The project focused on user research, wireframing, prototyping, and usability testing to create an intuitive interface that supports teamwork, clear workflows, and effective communication throughout the design process."
            },
            {
                title: "Website XYZ 03",
                year: 2024,
                type: "UI Design Webdesign Development",
                client: "Fh Joanneum",
                collaborators: "Daniel Fabry Konrad Baumann",
                about: "333 A mobile app concept designed to help students manage creative projects collaboratively. The project focused on user research, wireframing, prototyping, and usability testing to create an intuitive interface that supports teamwork, clear workflows, and effective communication throughout the design process."
            },
            {
                title: "Website XYZ 04",
                year: 2024,
                type: "UI Design Webdesign Development",
                client: "Fh Joanneum",
                collaborators: "Daniel Fabry Konrad Baumann",
                about: "A mobile app concept designed to help students manage creative projects collaboratively. The project focused on user research, wireframing, prototyping, and usability testing to create an intuitive interface that supports teamwork, clear workflows, and effective communication throughout the design process."
            },
            {
                title: "Website XYZ 05",
                year: 2024,
                type: "UI Design Webdesign Development",
                client: "Fh Joanneum",
                collaborators: "Daniel Fabry Konrad Baumann",
                about: "A mobile app concept designed to help students manage creative projects collaboratively. The project focused on user research, wireframing, prototyping, and usability testing to create an intuitive interface that supports teamwork, clear workflows, and effective communication throughout the design process."
            }
        ]
    },
    {
        studentID: 2,
        nfcID: "04:A3:2B:C2:5E:61:81",
        surname: "Jaqueline",
        name: "Boe",
        major: "Interaction Design",
        aboutMe: "Curious interaction design student passionate about human-centered solutions. I enjoy transforming research insights into intuitive digital experiences through prototyping, testing, and thoughtful visual storytelling, always aiming to create meaningful, accessible, and engaging interactions for diverse users.",
        skills: [
            "Visual Identity Design",
            "UX Design",
            "User Research",
            "Information Architecture",
            "Accessibility Design"
        ],
        portfolioLink: "joedoe-portfolio.com",
        experiences: [
            {
                years: "2025-new",
                company: "pixelart",
                position: "Visual Designer",
            },
            {
                years: "2024",
                company: "gowest",
                position: "Visual Designer",
            },
            {
                years: "2023",
                company: "test",
                position: "Visual Designer",
            },
        ],
        projects: [
            {
                title: "Website XYZ",
                year: 2024,
                type: "UI Design Webdesign Development",
                client: "FH JOANNEUM",
                collaborators: "Daniel Fabry Konrad Baumann",
                about: "A mobile app concept designed to help students manage creative projects collaboratively. The project focused on user research, wireframing, prototyping, and usability testing to create an intuitive interface that supports teamwork, clear workflows, and effective communication throughout the design process."
            },
            {
                title: "Website XYZ 02",
                year: 2024,
                type: "UI Design Webdesign Development",
                client: "Fh Joanneum",
                collaborators: "Daniel Fabry Konrad Baumann",
                about: "A mobile app concept designed to help students manage creative projects collaboratively. The project focused on user research, wireframing, prototyping, and usability testing to create an intuitive interface that supports teamwork, clear workflows, and effective communication throughout the design process."
            },
            {
                title: "Website XYZ 03",
                year: 2024,
                type: "UI Design Webdesign Development",
                client: "Fh Joanneum",
                collaborators: "Daniel Fabry Konrad Baumann",
                about: "A mobile app concept designed to help students manage creative projects collaboratively. The project focused on user research, wireframing, prototyping, and usability testing to create an intuitive interface that supports teamwork, clear workflows, and effective communication throughout the design process."
            },
            {
                title: "Website XYZ 04",
                year: 2024,
                type: "UI Design Webdesign Development",
                client: "Fh Joanneum",
                collaborators: "Daniel Fabry Konrad Baumann",
                about: "A mobile app concept designed to help students manage creative projects collaboratively. The project focused on user research, wireframing, prototyping, and usability testing to create an intuitive interface that supports teamwork, clear workflows, and effective communication throughout the design process."
            },
            {
                title: "Website XYZ 05",
                year: 2024,
                type: "UI Design Webdesign Development",
                client: "Fh Joanneum",
                collaborators: "Daniel Fabry Konrad Baumann",
                about: "A mobile app concept designed to help students manage creative projects collaboratively. The project focused on user research, wireframing, prototyping, and usability testing to create an intuitive interface that supports teamwork, clear workflows, and effective communication throughout the design process."
            }
        ]
    }
];
