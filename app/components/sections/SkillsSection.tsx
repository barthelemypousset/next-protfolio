import React from "react";
import Image from "next/image";
import Card from "../Card";
import { Timeline, TimelineItem } from "../Timeline";
import { Wallpaper, Server, TabletSmartphone, Database } from "lucide-react";

const SkillsSection: React.FC = () => {
  return (
    <div>
      <div className=" text-center p-3">
        <h2 className="text-2xl font-permanent">Skills and Education</h2>
      </div>

      <hr className="h-px m-6 bg-neutral-quaternary" />

      <div className="skills-shit p-4 m-4 border-2 rounded-2xl border-stone-300">
        <h2 className="pb-4 text-2xl font-permanent">My Skills</h2>
        <div className="lg:grid lg:grid-cols-2">
          <Card
            title="Frontend Development"
            icon={<Wallpaper size={24} strokeWidth={1.75} color="#ffffff" />}
            elements={["React", "JavaScript", "TypeScript", "Next.js", "Tailwind CSS", "Vue.js", "Redux"]}
            iconColor="bg-blue-400"
          />
          <Card
            title="Backend Development"
            icon={<Server size={24} strokeWidth={1.75} color="#ffffff" />}
            elements={["Node.js", "Express.js", "PostgreSQL", "MongoDB", "Rest API"]}
            iconColor="bg-emerald-500"
          />
          <Card
            title="Mobile Development"
            icon={<TabletSmartphone size={24} strokeWidth={1.75} color="#ffffff" />}
            elements={["React native", "Expo", "Flutter"]}
            iconColor="bg-pink-500"
          />
          <Card
            title="Devops Enginering"
            icon={<Database size={24} strokeWidth={1.75} color="#ffffff" />}
            elements={["Linux", "Shell scripting", "Python Scripting", "AWS", "Docker", "Terraform", "Ansible"]}
            iconColor="bg-amber-500"
          />
        </div>
      </div>

      <hr className="h-px m-10 bg-neutral-quaternary" />

      <div className="Education-shit p-4 m-4 border-2 rounded-2xl border-stone-300">
        <h2 className="pb-4 text-2xl font-permanent">My Education</h2>
        <Timeline>
          <TimelineItem date="Oct 2026 - Dec 2026">
            <Card
              title="Designer and Developer of Web and Mobile applications"
              icon={<Image src="/corp/lacapsule.png" width={100} height={100} alt="logo LaCapsule" />}
              iconTitle="LaCapsule"
              text="Bachelor - EQF level 6"
              elements={["Backend Developpement", "Frontend Developpement", "Mobile Developement"]}
              iconColor="bg-white"
            />
          </TimelineItem>
          <TimelineItem date="Sept 2016 - June 2017">
            <Card
              title="Devops and Cloud Engineer"
              icon={<Image src="/corp/ynov.png" width={100} height={100} alt="logo Ynov" />}
              iconTitle="Campus Ynov"
              text="Master - EQF level 7"
              elements={["Cloud administration", "CI/CD automation", "Devops Methodology"]}
              iconColor="bg-white"
            />
          </TimelineItem>
          <TimelineItem date="Sept 2014 - June 2016">
            <Card
              title="Network and Datacenter Administrator"
              icon={<Image src="/corp/cesi.png" width={100} height={100} alt="logo Cesi" />}
              iconTitle="Cesi"
              text="Bachelor - EQF level 6"
              elements={["Datacenter administration", "network administration", "Infrastructure maintenance"]}
              iconColor="bg-white"
            />
          </TimelineItem>
          <TimelineItem date="Sept 2012 - June 2014">
            <Card
              title="Management and maintenance of IT equipment"
              icon={<Image src="/corp/cesi.png" width={100} height={100} alt="logo Cesi" />}
              iconTitle="Cesi"
              text="License - EQF level 5"
              elements={["IT Support", "Employee Formation", "Employee assitance"]}
              iconColor="bg-white"
            />
          </TimelineItem>
        </Timeline>
      </div>
    </div>
  );
};

export default SkillsSection;
