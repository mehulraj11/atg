import Action1 from "../assets/action1.png";
import Action2 from "../assets/action2.png";
import Action3 from "../assets/action3.png";
import user1 from "../assets/user1.png"
import user2 from "../assets/user2.png"
import user3 from "../assets/user3.png"
import user4 from "../assets/user4.png"
import article from "../assets/Article.png"
import education from "../assets/education.png"
import meet from "../assets/Meetup.png"
import job from "../assets/Job.png"
const articles = [
    {
        id: 1,
        image: Action1,
        title: "What if famous brands had regular fonts? Meet RegulaBrands!",
        description:
            "I've worked in UX for the better part of a decade. From now on, I plan to rel...",
        author: "Sarthak Kamra",
        views: "1.4K",
        type: "Article",
        user: user1,
        logo: article
    },
    {
        id: 2,
        image: Action2,
        title:
            "Tax Benefits for Investment under National Pension Scheme launched by Government",
        description:
            "I've worked in UX for the better part of a decade. From now on, I plan to rel...",
        author: "Sarah West",
        views: "1.4K",
        type: "Education",
        user: user2,
        logo: education
    },
    {
        id: 3,
        image: Action3,
        title: "Finance & Investment Elite Social Mixer @Lujiazui",
        description: "Ahmedabad, India", // This will be used as location for meetup
        author: "Ronal Jones",
        views: "1.4K",
        date: "Fri, 12 Oct, 2018", // This will be used as date for meetup
        type: "Meetup",
        user: user3,
        logo: meet
    },
    {
        id: 4,
        image: null, // No image for job post
        title: "Software Developer - II",
        description: "Innovaccer Analytics Private Ltd.", // This will be used as company name for job
        author: "Joseph Gray",
        views: "1.4K",
        date: "Noida, India", // This will be used as location for job
        type: "Job",
        user: user4,
        logo: job
    },
];
export default articles