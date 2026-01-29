import React from "react";
import Image from "next/image";
import Card from "../Card";
import { Timeline, TimelineItem } from "../Timeline";

const AboutSection: React.FC = () => {
  return (
    <div>
      <div className="flex justify-evenly items-center rounded-lg p-3">
        <div className="">
          <h2 className="mb-4 text-xl font-permanent">Who am I ?</h2>
          <p className="text-3xl">Barthélémy POUSSET</p>
          <p className="text-2xl">Fullstack Developer - 7y Devops</p>
        </div>
        <div>
          <Image
            className="w-full rounded-full"
            src="/profil.jpeg"
            alt="Photo of the author"
            width="300"
            height="150"
          />
        </div>
      </div>

      <hr className="h-px m-6 bg-neutral-quaternary" />

      <div className="p-4 m-4 border-2 rounded-2xl border-stone-300">
        <h2 className="mb-4 text-2xl font-permanent">Presentation</h2>
        <p className="text-justify">
          After a 7-year career as a <b>DevOps Engineer</b>, I decided to pivot towards the world of{" "}
          <b>application development</b> with a sensibility for pretty and efficient user interface. <br />
          <br />I recently completed a Bachelor in Web & Mobile Development, focusing on the <b>React ecosystem</b>. My
          goal is to leverage my infrastructure knowledge to build robust and scalable mobile applications. <br />
          <br />I also emphasize self-training, I like to discover new tools and keep up to date with IT trends and
          news.
        </p>
      </div>

      <hr className="h-px m-10 bg-neutral-quaternary" />

      <div className="p-4 m-4 border-2 rounded-2xl border-stone-300">
        <h2 className="mb-4 text-2xl font-permanent">My work experience</h2>
        <Timeline>
          <TimelineItem date="mai 2024 - april 2025">
            <Card
              title="Devops / Cloud Engineer"
              icon={<Image src="/swisslife.jpeg" width={100} height={100} alt="logo swisslife" />}
              iconTitle="SwissLife"
              iconColor="bg-white">
              <p>
                <b>Infrastructure as Code</b> project using <b>Terraform</b> to provision a Distributed Jenkins
                Architecture used for an Internal Developper Portal
              </p>
              <ul className="list-disc list-inside pl-5 mt-4 space-y-2">
                <li>
                  Full infrastructure provisioning (network, servers, and services) using <b>Terraform</b> to ensure
                  reproducible and automated deployments.
                </li>
                <li>
                  Container Orchestration with <b>AWS ECS</b>: Implementation of a dedicated AWS ECS cluster to deploy,
                  manage, and scale the Jenkins application environment.
                </li>
                <li>
                  High Availability & Access with <b>AWS ELB</b>: Configuration of an Elastic Load Balancer to provide
                  secure, stable access and efficient traffic distribution for the Jenkins Master.
                </li>
                <li>
                  Containerization with <b>Docker</b>: Creation of custom Docker images, pre-configured with essential
                  plugins, security certificates, and environment settings.
                </li>
              </ul>
            </Card>
          </TimelineItem>
          <TimelineItem date="july 2019 - april 2024">
            <Card
              title="Devops / Cloud Engineer"
              icon={<Image src="/cleverconnect.jpeg" width={100} height={100} alt="logo cleverconnect" />}
              iconTitle="Cleverconnect"
              iconColor="bg-white">
              <p>
                <b>Automated Delivery of customized Turnkey Recruitment Platforms</b>
              </p>
              <ul className="list-disc list-inside pl-5 mt-4 space-y-2">
                <li>
                  Customized Turnkey Solutions: Automated the delivery of branded recruitment websites with in house
                  <b>Python</b> scripts.
                </li>
                <li>
                  Hybrid Infrastructure Management: Managed environments across On-premise <b>Debian</b>
                  servers and <b>Google Cloud Platform</b>.
                </li>
                <li>
                  Deployment Automation: Streamlined the delivery process using Python scripting and <b>GitLab CI/CD</b>
                  pipelines
                </li>
                <li>
                  CMS Orchestration: Provisioned and ensured the continuous maintenance of <b>WordPress CMS</b>
                  instances.
                </li>
                <li>
                  Cloud Modernization: Led the migration of <b>Docker</b> microservices to <b>Kubernetes</b> (GKE),
                  implementing <b>ArgoCD</b> for continuous deployment and GitOps best practices.
                </li>
              </ul>
            </Card>
          </TimelineItem>
          <TimelineItem date="November 2017 - June 2019">
            <Card
              title="Sysops Engineer"
              icon={<Image src="/decathlon.jpeg" width={100} height={100} alt="logo decathlon" />}
              iconTitle="Decathlon"
              iconColor="bg-white">
              <p>
                <b>Global Infrastructure Management:</b> Managed and maintained middleware servers and databases across
                Decathlon’s international retail network.
              </p>
              <ul className="list-disc list-inside pl-5 mt-4 space-y-2">
                <li>
                  <b>Automated Configuration:</b> Leveraged <b>Puppet</b> and <b>Foreman</b> for fleet-wide
                  configuration management and standardized Infrastructure as Code (IaC).
                </li>
                <li>
                  <b>Large-Scale Automation:</b> Developed and orchestrated <b>Bash and Python</b> scripts via{" "}
                  <b>Rundeck</b> to automate operational tasks across multiple servers.
                </li>
                <li>
                  <b>CI/CD & Artifact Management:</b> Streamlined application compilation and deployment using{" "}
                  <b>Jenkins</b> and <b>Nexus</b> repositories.
                </li>
                <li>
                  <b>Middleware Administration:</b> Configured and ensured the stability of high-traffic <b>Apache</b>{" "}
                  and <b>Tomcat</b> environments.
                </li>
                <li>
                  <b>Container Orchestration:</b> Administered <b>Docker</b> containers using the <b>Rancher</b>{" "}
                  orchestrator to manage application lifecycles.
                </li>
                <li>
                  <b>Cloud Operations (AWS):</b> Provisioned and managed cloud infrastructure, specifically <b>EC2</b>{" "}
                  instances and <b>RDS</b> databases.
                </li>
              </ul>
            </Card>
          </TimelineItem>
        </Timeline>
      </div>
    </div>
  );
};

export default AboutSection;
