import Nav from "../components/Nav";
import me from "../assets/PaulCropped.webp";

export default function About() {
  return (
    <div className="px-2 sm:h-[auto] md:h-auto md:w-dvw pb-20 pt-20 bg-img-container">
      <Nav />

      <div className="flex flex-col md:gap-8 gap-4 md:flex-row w-full mt-8 md:px-8 px-4 py-4">
        <div className="flex flex-col gap-4 mt-4">
          <img
            src={me}
            alt="Paul Vera - Front-End Developer"
            className="w-[100%] rounded-md"
            width="20"
            height="20"
          />
          <ul className="text-white flex flex-row flex-nowrap gap-4 justify-start">
            <li className="py-1 px-2 bg-slate-600 rounded-md w-[100%] text-center">
              paul88vera@gmail.com
            </li>
            <li className="py-1 px-2 bg-slate-600 rounded-md w-[100%] text-center">
              San Antonio, Texas
            </li>
          </ul>
        </div>
        <div className="text-white text-[1.2rem] md:text-xl md:w-[60%] md:font-stretch-120% font-mono text-center md:text-left mt-2">
          <h1 className="text-5xl font-bold pb-2">Hi, I'm Paul Vera.</h1>
          <p>
            I am a React developer who has a passion for creating responsive and
            functional websites. I have a strong background in diverse creative
            occupations and have experience with a variety of programming
            languages, including HTML, CSS, JavaScript, and Python. I am skilled
            in front-end development, and have strong knowledge in frameworks
            like React, TailwindCSS, and JQuery.
          </p>
          <br />
          <p>
            In my previous roles, I have successfully designed, and developed
            various web and mobile applications. I am eager to learn new
            technologies and am committed to keeping up with the latest
            developments in the field, such as developing in Typescript,
            Next.js, and using different development stacks to hone my skills.
          </p>
          <br />
          <p>
            In my spare time, I enjoy utilizing Linux operating systems and
            Virtual Private Networks in HackTheBox to continue my cybersecurity,
            and technical knowledge base. I am excited to bring my skills and
            experience to a forward-thinking team. I am eager to help develop
            innovative software solutions that will meet the needs of many
            users.
          </p>
        </div>
      </div>
    </div>
  );
}
