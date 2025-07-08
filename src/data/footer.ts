import { IMenuItem, ISocials } from "@/types";

export const footerDetails: {
    subheading: string;
    quickLinks: IMenuItem[];
    email: string;
    telephone: string;
    socials: ISocials;
} = {
    subheading:
        "Empowering businesses with cutting-edge financial technology solutions.",
    quickLinks: [
        {
            text: "Features",
            url: "#features",
        },
        {
            text: "Pricing",
            url: "#pricing",
        },
        {
            text: "Testimonials",
            url: "#testimonials",
        },
    ],
    email: "contact@aghilas.fr",
    telephone: "+337 682 459",
    socials: {
        // github: 'https://github.com',
        x: "https://x.com/azzougaghiles",
        //twitter: 'https://x.com/azzougaghiles',
        facebook: "https://facebook.com/journalelmesmar",
        // youtube: 'https://youtube.com',
        linkedin: "https://www.linkedin.com/in/azzougaghilas/",
        threads: "https://aghilas.fr",
        instagram: "https://www.instagram.com/mr.photo_click",
    },
};
