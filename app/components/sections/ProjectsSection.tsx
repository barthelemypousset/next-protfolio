import React from "react";
import Image from "next/image";
import Card from "../Card";
import { Timeline, TimelineItem } from "../Timeline";
import { Wallpaper, Server, TabletSmartphone, Database } from "lucide-react";
import Link from "next/link";

const ProjectsSection: React.FC = () => {
  return (
    <div>
      <div className=" text-center p-3">
        <h2 className="text-2xl font-permanent">Projects and creations</h2>
      </div>

      <hr className="h-px m-6 bg-neutral-quaternary" />

      <div className="p-4 m-4 border-2 rounded-2xl border-stone-300">
        <div className="">
          <Card
            title="Murmure"
            thumbnail={
              <Image src="/projects/murmure-patchwork1.png" width={600} height={300} alt="screenshots murmure" />
            }
            elements={["React-native", "expo", "Next.js", "Redux"]}>
            <p className="text-justify mb-4">
              Murmure is a psychology application that aim to help the user learn more about himself and about how his
              mind works. <br />
              In murmure you will find multiple leçons organised by chapters to understand progressively the concepts as
              much as flashcards to review quickly each concepts. <br />
              You can find also different tools like Meditations with different modes and length and also a Breathing
              mode to help you relax your body. <br />
              Last but not least a tchat is present in the application to discuss about things you have on your mind or
              about the cursus. <br />
              <br />
              Try a live demo of this project: Live Demo
              <br />
              <br />
              View the source code for the Frontend:&nbsp;
              <Link href="https://github.com/barthelemypousset/Murmure-Front" className="text-blue-500 underline">
                GitHub
              </Link>
              <br />
              View the source code for the Backend:&nbsp;
              <Link href="https://github.com/barthelemypousset/Murmure-Back" className="text-blue-500 underline">
                GitHub
              </Link>
            </p>
          </Card>
          <Card
            title="Retrolove"
            thumbnail={
              <Image
                src="/projects/shipit-patchwork1.png"
                width={800}
                height={300}
                alt="screenshots shipit"
                className="rounded-lg shadow-lg"
              />
            }
            elements={["Python", "Pygame"]}>
            <p className="text-justify mb-4">
              Retrolove is a is a highly customizable scrolling space shooter. <br />
              The customization allow you to change different element of the game to shape it for different types of
              events (seminars, weddings, event). <br />
              The gameplay feature multiple levels where the goal is to survive for the longest and make the most points
              ! <br />
              Multiple weapons, multiple enemies and a sick soundtrack await you in this high paced game ! <br />
              <br />
              <br />
              View the source code of this project and try it yourself:&nbsp;
              <Link href="https://github.com/barthelemypousset/retrolove" className="text-blue-500 underline">
                GitHub
              </Link>
            </p>
          </Card>
          <Card
            title="Puzzle-Bricks"
            thumbnail={
              <Image
                src="/projects/puzzlebricks.png"
                width={500}
                height={300}
                alt="logo lacapsule"
                className="rounded-lg shadow-lg"
              />
            }
            elements={["Wordpress"]}>
            <p className="text-justify mb-4">
              Puzzle-bricks is a personnal project about brain teasers built out of Lego©. I designed them myself. Build
              them with the manual and try to find the solution for each !
              <br />
              <br />
              View the website of this project:&nbsp;
              <Link href="https://www.puzzle-bricks.fr" className="text-blue-500 underline">
                www.puzzle-bricks.fr
              </Link>
            </p>
          </Card>
          <Card
            title="Next Portfolio (This website !)"
            thumbnail={<Image src="/projects/portfolio.png" width={400} height={300} alt="logo lacapsule" />}
            elements={["React", "Next.js", "tailwind", "Vercel"]}>
            <p className="text-justify mb-4">
              Next portfolio is the very website you are scroling on right now :)
              <br />
              <br />
              View the source code of this project and try it yourself:&nbsp;
              <Link href="https://github.com/barthelemypousset/next-protfolio" className="text-blue-500 underline">
                GitHub
              </Link>
            </p>
          </Card>
          <Card
            title="Personnal Server stack"
            thumbnail={<Image src="/projects/proxmox.png" width={600} height={300} alt="logo lacapsule" />}
            elements={["Linux", "Proxmox", "PFsense", "IPtables", "Docker", "Terraform"]}>
            <p className="text-justify mb-4">
              I own and maintain a server to host my differents projects and customer application.{" "}
            </p>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default ProjectsSection;
