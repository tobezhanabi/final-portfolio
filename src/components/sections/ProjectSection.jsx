import {
  ProjectDescription,
  ProjectImageContainer,
  SingleProject,
  SlantedCard,
  StyledProjectsSection,
  Tags,
} from "../styles/sections/ProjectSection.styled";
import { FaGithub, FaLink } from "react-icons/fa";
import { SectionHeading } from "../styles/common/SectionHeading.styled";
import { Projects } from "../../data/Projects";
export const ProjectSection = () => {
  return (
    <>
      <StyledProjectsSection>
        <SectionHeading>
          <h1>Projects</h1>
          <p>These are some cool projects that I have made </p>
        </SectionHeading>
        <div>
          {Projects &&
            Projects.map((project, index) => (
              <SingleProject key={index}>
                <ProjectImageContainer
                  href={project.projectLink}
                  target="_blank"
                >
                  <img src={project.thumbnail} alt={project.title} />
                  <SlantedCard />
                </ProjectImageContainer>
                <ProjectDescription>
                  <h1>{project.title}</h1>
                  <Tags>
                    {project.tags &&
                      project.tags.map((tag, index) => (
                        <span key={index}>{tag}</span>
                      ))}
                  </Tags>
                  <p>{project.Paragraph}</p>
                  <div>
                    <a href={project.codelink} target="_blank" rel="noreferrer">
                      <FaGithub />
                      <span>View Code</span>
                    </a>
                    <a
                      href={project.projectLink}
                      target="_blank"
                      rel="noreferrer"
                    >
                      <FaLink />
                      <span>View Project</span>
                    </a>
                  </div>
                </ProjectDescription>
              </SingleProject>
            ))}
        </div>
      </StyledProjectsSection>
      <hr />
    </>
  );
};
