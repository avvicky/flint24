import { FaNodeJs } from "react-icons/fa";
import HomePage from "./HomePage";
// import { ref, get } from "firebase/database"
// import { database } from "@/firebase"

async function getData() {
  // return await (await get(ref(database))).val()

  // const DB_URL = process.env.NEXT_PUBLIC_FIREBASE_DATABASE_URL + "/.json";
  // const res = await fetch(DB_URL, { cache: "no-store" });
  const data_to_send = {
    main: {
      name: "Symposium'24",
      shortDesc: "A National Level Technical Symposium",
      titles: ["November first week", "Networking oppuritunity"],
      heroImage: "",
      techStackImages: [
        "https://i.ibb.co/tLB78rn/code-duo.jpg",
        "https://i.ibb.co/x5qRs20/code-debugging.jpg",
        "https://i.ibb.co/HX8HpHZ/paper-presentation.jpg",
        "https://i.ibb.co/Z1hCR2B/webinar.jpg",
      ],
    },
    about: {
      aboutImage:
        "https://img.freepik.com/free-psd/3d-illustration-person-with-sunglasses_23-2149436188.jpg",
      aboutImageCaption: "< I build stuff 🚀/>",
      title: "Full Stack Developer",
      about:
        "I am a Full-Stack developer based in Pune, India. I'm an Information Technology undergraduate from SPPU, and my journey in web development began during my first year of college. I'm passionate about creating beautiful, functional, and user-friendly websites and applications, and I'm constantly pushing myself to learn and grow as a developer. Love building full-stack clones and side projects.",
      callUrl: "",
      resumeUrl: "",
    },
    socials: [
      {
        name: "social",
        icon: "FaInstagram",
        link: "https://www.instagram.com/",
      },
    ],
    skills: [
      {
        name: "Paper Presentation",
        image: "https://i.ibb.co/HX8HpHZ/paper-presentation.jpg",
        category: "Technical",
      },
      {
        name: "Code-Debugging",
        image: "https://i.ibb.co/x5qRs20/code-debugging.jpg",
        category: "Technical",
      },
      {
        name: "Code-Duo",
        image: "https://i.ibb.co/tLB78rn/code-duo.jpg",
        category: "Technical",
      },
      {
        name: "Webinar",
        image: "https://i.ibb.co/Z1hCR2B/webinar.jpg",
        category: "Non-Technical",
      },
    ],
    projects: [
      {
        name: "Project Title",
        techstack: "HTML5, CSS3, JavaScript, jQuery",
        category: "MERN Stack",
        image:
          "https://media.geeksforgeeks.org/wp-content/cdn-uploads/20210114225740/10-Best-Web-Development-Project-Ideas-For-Beginners-in-2021.png",
        links: {
          code: "",
          video: "",
          visit: "",
        },
      },
      {
        name: "Project Title",
        techstack: "Flutter, Dart, Firebase",
        category: "Flutter",
        image:
          "https://media.geeksforgeeks.org/wp-content/cdn-uploads/20210114225740/10-Best-Web-Development-Project-Ideas-For-Beginners-in-2021.png",
        links: {
          code: "",
          video: "",
          visit: "",
        },
      },
      {
        name: "Project Title",
        techstack: "PHP, MySQL, HTML5, CSS3, Bootstrap, JavaScript",
        category: "LAMP Stack",
        image:
          "https://media.geeksforgeeks.org/wp-content/cdn-uploads/20210114225740/10-Best-Web-Development-Project-Ideas-For-Beginners-in-2021.png",
        links: {
          code: "",
          video: "",
          visit: "",
        },
      },
    ],
    educations: [
      {
        institute: "Inauguration",
        degree: "9:30AM - 10:15AM",
        startDate: "2020",
        endDate: "2022",
      },
      {
        institute: "Paper Presentation",
        degree: "10:45AM - 1:30PM",
        startDate: "2020",
        endDate: "2022",
      },
    ],
    experiences: [
      {
        company: "Registration Start Date",
        position: "21/10/24",
        startDate: "2020",
        endDate: "2022",
        desc: [],
      },
      {
        company: "Registration End Date",
        position: "dd/mm/yyyy",
        startDate: "2022",
        endDate: "present",
        desc: [],
      },
    ],
  };
  // const data = {}
  return data_to_send;
}

export default async function page() {
  const data = await getData();

  return (
    <>
      {data ? (
        <HomePage data={data} />
      ) : (
        <div className="h-screen w-screen flex flex-col items-center justify-center gap-5 text-violet-600 fixed z-30 bg-gray-100 dark:bg-grey-900">
          <FaNodeJs size={100} className="animate-pulse" />
          <p className="animate-pulse text-xl">Loading...</p>
        </div>
      )}
    </>
  );
}
