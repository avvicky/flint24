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
      name: "Flint'24",
      shortDesc: "A National Level Technical Symposium",
      titles: [
        "November 5'th",
        "Only 150 spots are available",
        "Register to confirm you spot",
      ],
      heroImage: "https://i.ibb.co/ZHLsw0j/flint-web-logo.png",
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
    socials: [],
    skills: [
      {
        name: "Paper Presentation",
        image: "https://i.ibb.co/HX8HpHZ/paper-presentation.jpg",
        category: "Technical",
      },
      {
        name: "Code-Duo",
        image: "https://i.ibb.co/tLB78rn/code-duo.jpg",
        category: "Technical",
      },
      {
        name: "Seminar",
        image: "https://i.ibb.co/Z1hCR2B/webinar.jpg",
        category: "Technical",
      },
      {
        name: "Advertisement",
        image: "https://i.ibb.co/qpQxTTq/add.jpg",
        category: "Non-Technical",
      },
      {
        name: "Memory Puzzle",
        image: "https://i.ibb.co/wr8Xwbh/meme.jpg",
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
        institute: "Will be Updated Soon",
        degree: "",
        startDate: "2020",
        endDate: "2022",
      },
    ],
    experiences: [
      {
        company: "Registration Started",
        position: "Live",
        startDate: "2020",
        endDate: "2022",
        desc: [],
      },
      {
        company: "Registration End Date",
        position: "03/11/2024",
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
