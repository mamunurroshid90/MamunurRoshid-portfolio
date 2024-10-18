import React from "react";
import Title from "../layouts/Title";
import ProjectsCart from "./ProjectsCart";

const Projects = () => {
  return (
    <section
      id="projects"
      className=" w-full py-10 lg:py-20 border-b-[1px] border-b-black"
    >
      <div className=" flex justify-center items-center text-center">
        <Title
          title="visits my portfolio and keep your feedback"
          desc="my projects"
        />
      </div>
      <div className=" grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 xl:gap-14">
        <ProjectsCart
          title="Chatting app"
          desc=" I'm used this projects HTML, tailwind css, React, React router dom, Redux-toolkit, Firebase, vercel"
          src={"/projects/chattingApp.jpg"}
          gitHubLink={"https://github.com/mamunurroshid90/chatting-app"}
          liveLink={"https://chatting-app-rho-two.vercel.app/"}
        />
        <ProjectsCart
          title="Add to note app"
          desc=" I'm used this projects HTML, tailwind css, React, React router dom, Redux-toolkit, netlify"
          src={"/projects/add to notes.png"}
          gitHubLink={"https://github.com/mamunurroshid90/add-to-note-app"}
          liveLink={"https://add-to-note-app.netlify.app/"}
        />
        <ProjectsCart
          title="Nexcent app"
          desc="I'm used this projects HTML, tailwind css, React, vercel"
          src={"/projects/nexcent.png"}
          gitHubLink={
            "https://github.com/mamunurroshid90/nexcent-react-project"
          }
          liveLink={"https://nexcent-react-project.vercel.app/"}
        />
        <ProjectsCart
          title="Quiz app"
          desc=" I'm used this projects HTML, css, javaScript"
          src={"/projects/quiz app.png"}
          gitHubLink={"https://github.com/mamunurroshid90/Quiz-app-js"}
          liveLink={"https://mamunurroshid90.github.io/Quiz-app-js/"}
        />
        <ProjectsCart
          title=" Search image engine"
          desc="I'm used this projects HTML, css, javaScript"
          src={"/projects/search image engine.png"}
          gitHubLink={
            "https://github.com/mamunurroshid90/image-search-engine-js"
          }
          liveLink={"https://mamunurroshid90.github.io/image-search-engine-js/"}
        />
        <ProjectsCart
          title="Upland project"
          desc="I'm used this projects HTML, css, bootstrap, javaScript"
          src={"/projects/upland.png"}
          gitHubLink={
            "https://github.com/mamunurroshid90/upland-responsive-project"
          }
          liveLink={
            "https://mamunurroshid90.github.io/upland-responsive-project/"
          }
        />
      </div>
    </section>
  );
};

export default Projects;
