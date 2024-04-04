import { Button } from "@/components/ui/button"
import Image from "next/image"
import Navbar from "./navbar"
import Skilltag from "./ui/skill-tag"
import data, { about_me, education, project_detail } from "@/content/data"
import Icon from "./ui/icon"
import ProjectCard from "./card"
import MyPhoto from "./img/me.jpg"

export function HomePage() {
  return (
    <div className="min-h-screen max-w-5xl mx-auto px-6 py-4">
      <Navbar/>
      <main className="space-y-16 p-4">
        <section className="flex flex-col items-center space-y-4" id="hero">
          <Image
            alt="Your Photo"
            className="rounded-full my-6"
            height={600}
            src={MyPhoto}
            style={{
              aspectRatio: "200/200",
              objectFit: "cover",
            }}
            width={400}
          />
          <h1 className="text-3xl font-bold">Namaskar, I&rsquo;m a Programmer</h1>
        </section>
        <section className="2xl:container mx-auto">
            <div className="mx-auto">
              <div className="max-w-xs py-3 px-8 rounded-lg shadow-lg border flex bg-gray-100 mx-auto justify-around">
                <Icon iconName="github" href=""/>
                <Icon iconName="twitter" href=""/>
                <Icon iconName="gmail" href=""/>
                <Icon iconName="instagram" href=""/>
                <Icon iconName="linkedin" href=""/>
              </div>
            </div>
        </section>
        <section className="space-y-4" id="about">
          <h2 className="text-2xl font-bold" >About Me</h2>
          <p className="max-w-prose">{data.about_me}</p>
          <h3 className="text-xl font-bold" id="skills">Education</h3>
          <ul className="list-disc list-inside space-y-2">
            <p>{education.college}</p>
            <p>{education.degree}</p>
          </ul>
          <h3 className="text-xl font-bold" >Skills</h3>
          <div className="flex flex-wrap gap-2">
            {data.skills.map((skill, index) => <Skilltag key={index}>{skill}</Skilltag>)}
          </div>
        </section>
        <section className="space-y-4" id="projects">
          <h2 className="text-2xl font-bold">Projects</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {project_detail.map((project_info, index) => <ProjectCard key={index} {...project_info}/>)}
          </div>
        </section>
        <section className="space-y-4" id="contact">
          <h2 className="text-2xl font-bold">Contact</h2>
          <p className="max-w-prose">{"Email: " + data.contact.email}</p>
          {/* <Button className="w-full sm:w-auto text-black dark:text-slate-50 border dark:border-none" variant="resume">
            Download Resume
          </Button> */}
        </section>
      </main>
      <footer className="flex items-center justify-center py-4 border-t">
        <p className="text-sm text-gray-500 dark:text-slate-50">© 2024 Lakshya Khandelwal</p>
      </footer>
    </div>
  )
}
