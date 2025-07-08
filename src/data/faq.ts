import { IFAQ } from "@/types";
import { siteDetails } from "./siteDetails";

export const faqs: IFAQ[] = [
    {
        question: `Is ${siteDetails.siteName} secure?`,
        answer: "Absolutely. We use bank-level encryption to protect your data and never store your login information. Plus, our biometric authentication adds an extra layer of security.",
    },
    {
        question: `Can I use ${siteDetails.siteName} on multiple devices?`,
        answer: "Absolutely! Your Finwise account syncs seamlessly across all your devices - smartphone, tablet, and computer.",
    },
    {
        question: "Can I invite my team to collaborate on projects?",
        answer: `Yes! ${siteDetails.siteName} supports team collaboration. You can invite team members to join your projects, share tasks, and work together in real-time.`,
    },
    {
        question: "Can I invite my team to book appointments?",
        answer: "Yes, you can invite team members to manage appointments and customer queues. Each member can have their own login and access specific features based on their role.",
    },
    {
        question: "What if I need help using ${siteDetails.siteName}?",
        answer: "We offer 24/7 customer support via email and live chat. Our help center also has a wealth of resources, including tutorials and FAQs to assist you.",
    },
];
