import {
    FiBarChart2,
    FiBriefcase,
    FiDollarSign,
    FiLock,
    FiPieChart,
    FiShield,
    FiTarget,
    FiTrendingUp,
    FiUser,
} from "react-icons/fi";

import { IBenefit } from "@/types";

export const benefits: IBenefit[] = [
    {
        title: "Smart Budgeting",
        description:
            "Take the guesswork out of managing your money. BudgetApp uses AI to help you create a personalized budget that fits your lifestyle.",
        bullets: [
            {
                title: "Intelligent Categorization",
                description:
                    "Automatically sorts your transactions for crystal-clear insights.",
                icon: <FiBarChart2 size={26} />,
            },
            {
                title: "Customizable Goals",
                description:
                    "Set and track financial objectives that matter to you.",
                icon: <FiTarget size={26} />,
            },
            {
                title: "Predictive Analysis",
                description:
                    "Get ahead of your finances with spending forecasts and alerts.",
                icon: <FiTrendingUp size={26} />,
            },
        ],
        imageSrc: "/images/budget.png",
    },
    {
        title: "Simple reservation",
        description:
            "ReservApp makes booking appointments a breeze. Whether it's a haircut, doctor visit, or dinner reservation, manage your time effortlessly.",
        bullets: [
            {
                title: "Instant Booking",
                description:
                    "Reserve your spot in seconds with our user-friendly interface.",
                icon: <FiDollarSign size={26} />,
            },
            {
                title: "Smart Reminders",
                description:
                    "Never miss an appointment with automated reminders sent straight to your email aand phone.",
                icon: <FiBriefcase size={26} />,
            },
            {
                title: "Real-Time Performance",
                description:
                    "Track your reservations with easy-to-understand metrics and visuals.",
                icon: <FiPieChart size={26} />,
            },
        ],
        imageSrc: "/images/salle.png",
    },
    {
        title: "Stock Management",
        description:
            "Your inventory, organized and optimized. StockMaster helps you keep track of your products, sales, and suppliers with ease.",
        bullets: [
            {
                title: "Inventory Tracking",
                description:
                    "Monitor stock levels in real-time to avoid shortages and overstock.",
                icon: <FiLock size={26} />,
            },
            {
                title: "Supplier Management",
                description:
                    "Easily manage your suppliers and streamline your procurement process.",
                icon: <FiUser size={26} />,
            },
            {
                title: "Sales Analytics",
                description:
                    "Our system provides insights into your sales trends, helping you make informed decisions.",
                icon: <FiShield size={26} />,
            },
        ],
        imageSrc: "/images/stock.png",
    },

    {
        title: "Invoice Management",
        description:
            "Start managing your invoices like a pro. InvoiceApp simplifies the invoicing process, making it quick and efficient.",
        bullets: [
            {
                title: "Automated Invoicing",
                description:
                    "Create and send invoices in seconds, reducing manual work.",
                icon: <FiDollarSign size={26} />,
            },
            {
                title: "Customizable Templates",
                description:
                    "Design invoices that reflect your brand with our easy-to-use templates.",
                icon: <FiBriefcase size={26} />,
            },
            {
                title: "Real-Time Performance",
                description:
                    "Track your invoice status with easy-to-understand metrics and visuals.",
                icon: <FiPieChart size={26} />,
            },
        ],
        imageSrc: "/images/facture.png",
    },
    {
        title: "Manage and Kanban",
        description:
            "Your projects, organized and prioritized. CollabApp helps you visualize your workflow and boost productivity.",
        bullets: [
            {
                title: "Visual Task Management",
                description:
                    "Drag and drop tasks to easily manage your workflow.",
                icon: <FiLock size={26} />,
            },
            {
                title: "Collaboration Tools",
                description:
                    "Work together with your team in real-time, sharing updates and feedback.",
                icon: <FiUser size={26} />,
            },
            {
                title: "Performance Tracking",
                description:
                    "Monitor your team's progress with detailed analytics and reports.",
                icon: <FiShield size={26} />,
            },
        ],
        imageSrc: "/images/gestion.png",
    },

    {
        title: "waiting management",
        description:
            "Streamline your customer service with QueueApp. Manage waiting lists and appointments efficiently to enhance customer satisfaction.",
        bullets: [
            {
                title: "Efficient Queue Management",
                description:
                    "Organize and prioritize customer flow to reduce wait times.",
                icon: <FiDollarSign size={26} />,
            },
            {
                title: "Customer Notifications",
                description:
                    "Keep your customers informed with real-time updates on their queue status.",
                icon: <FiBriefcase size={26} />,
            },
            {
                title: "Performance Analytics",
                description:
                    "Analyze customer flow and service efficiency with detailed reports.",
                icon: <FiPieChart size={26} />,
            },
        ],
        imageSrc: "/images/inline.png",
    },
];
