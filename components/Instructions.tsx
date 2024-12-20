import SectionWrapper from "./SectionWrapper";

const Instructions = () => {
  return (
    <SectionWrapper id="instructions" className="mb-16 mx-4 lg:mx-0">
      <div className="w-full lg:w-5/6 2xl:w-3/4 mx-auto flex flex-col gap-6 rounded-xl bg-gray-50 dark:bg-gray-800 p-6">
        <h1 className="text-xl md:text-3xl font-semibold text-center text-violet-600">
          Instructions
        </h1>
        <div className="mb-6">
          <h1 className="text-lg md:text-xl font-semibold text-center">
            Paper Presentation
          </h1>
          <p className="text-sm md:text-base text-gray-600 dark:text-gray-300 mt-2 text-center">
            Participants should email their presentation slides to{" "}
            <span className="font-medium">flint2k24@gmail.com</span>. Please
            submit the PowerPoint file by{" "}
            <span className="font-medium">03/11/2024</span>.
          </p>
          <div className="text-center pt-10">
            <p>Example Mail format</p>
            <p className="text-sm md:text-base text-gray-600 dark:text-gray-300 mt-2 text-center">
              <ul className="list-none text-start">
                <li>Name:</li>
                <li>Team Member Name:</li>
                <li>Contact No:</li>
                <li>Alternate Contact No:</li>
                <li>Topic:</li>
                <li>PPT file Name:</li>
              </ul>
            </p>
            <p className="pt-5 text-sm md:text-base text-gray-600 dark:text-gray-300 mt-2 text-left">
              Should Attach PPT file
            </p>
          </div>
        </div>

        <div>
          <h1 className="text-lg md:text-xl font-semibold text-center">
            CodeDuo
          </h1>
          <p className="text-sm md:text-base text-gray-600 dark:text-gray-300 mt-2 text-center">
            This event is for teams of two members and consists of three rounds,
            focusing on computer fundamentals, code debugging, and basic data
            structures and algorithms (DSA). Only Java, C, C++, and Python are
            allowed.
          </p>
          <ul className="text-sm md:text-base list-disc list-inside mt-4 space-y-2 text-gray-600 dark:text-gray-300">
            <li>
              <strong>Round 1:</strong> Participants will answer 15
              multiple-choice questions on computer applications and basic
              computing concepts.
            </li>
            <li>
              <strong>Round 2:</strong> Teams will be assigned to designated
              systems, where they must debug two programs in any of the allowed
              languages (Java, C, C++, or Python).{" "}
              <strong>Difficulty Level: Easy</strong>
            </li>
            <li>
              <strong>Round 3:</strong> Participants will solve two questions on
              basic DSA, using any of the allowed languages (Java, C, C++, or
              Python). <strong>Difficulty Level: Easy</strong>
            </li>
            <li>Quastions mostly asked from String and Array.</li>
          </ul>
        </div>
        <div>
          <h1 className="text-lg md:text-xl font-semibold text-center">
            Seminor
          </h1>
          <p className="text-sm md:text-base text-gray-600 dark:text-gray-300 mt-2 text-left">
            <ul className="list-none flex flex-col gap-1">
              <li>
                <span className="font-semibold">Seminar Title:</span> Green
                Technology Innovations: Shaping a Sustainable Future
              </li>
              {/* <li className="font-semibold">Description:</li>
              <li>
                {" "}
                Discover the latest in green technology driving sustainable
                change. This seminar covers innovations in renewable energy,
                carbon reduction, and eco-friendly practices, presented by
                industry experts. Learn about the real-world impact of these
                advancements and explore solutions for a greener, resilient
                future. Perfect for professionals, students, and sustainability
                enthusiasts.
              </li> */}
            </ul>
          </p>
        </div>
      </div>
    </SectionWrapper>
  );
};

export default Instructions;
