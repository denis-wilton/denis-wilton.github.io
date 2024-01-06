import { styled } from "styled-components";
import Corner from "./Components/Corner";
import Container from "./Layout/Container";
import Header from "./Layout/Header";
import Skills from "./Layout/Skills";
import Computer from "./assets/Computer.svg?react";
import { useEffect, useState } from "react";

const DetailBar = () => (
  <div className="bg-primary h-[12px] w-[230px] rounded-[20px] transform translate-x-[-50px] mt-5 mb-[-7.5px]" />
);

type JSONData = {
  updatedAt: string;
  data: {
    id: string;
    company: string;
    location: string;
    description: string;
    date: string;
    website: string;
    role: {
      name: string;
      time: string;
    }[];
  }[];
  education: {
    name: string;
    location: string;
    course: string;
    date: string;
  }[];
};

const Section = (props: { children: any; title: string }) => (
  <>
    <div className="shadow-lg">
      <Projects margin={50}>
        <h3 className="text-[2.5rem] text-neutral-900">{props.title}</h3>
        <DetailBar />

        <div className="w-full max-w-full overflow-hidden pt-10">
          {props.children}
        </div>
      </Projects>
    </div>
  </>
);

const Projects = styled.div<{ margin?: number }>`
  background: #fff;
  color: #000;
  padding: 2rem;
  border-radius: 1rem;
  width: 100%;
  margin-top: ${(props) => props.margin ?? 0}px;
`;

const Contact = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 1fr 1fr;
  text-align: center;
  margin-top: 1rem;
  margin-bottom: 1rem;

  span.call {
    font-size: 2.25rem;
    font-weight: 400;
  }

  span.mail {
    font-size: 2.5rem;
    font-weight: 700;
    color: #6fbf4a;
    line-height: normal;

    &:hover {
      color: #9fef7a;
      text-decoration: underline;
      cursor: pointer;
    }
  }
`;

function App() {
  const [data, setData] = useState<null | JSONData["data"]>(null);
  const [education, setEducation] = useState<null | JSONData["education"]>(
    null
  );

  useEffect(() => {
    (async () => {
      const d = (await (await fetch(`./exp.json`)).json()) as JSONData;
      setData(d.data);
      setEducation(d.education);
    })();
  }, []);

  return (
    <Container>
      <Header />
      <Skills />

      <Corner
        topRight={
          <div className="w-[200px] h-[200px]">
            <Computer className="w-full h-full"></Computer>
          </div>
        }
      >
        <Section title="Experience">
          {data ? (
            <div className="flex flex-col gap-10">
              {data.map((job) => (
                <div className="flex flex-col">
                  <div className="flex flex-row justify-between">
                    <span className="font-semibold text-neutral-900">
                      {job.company}
                      {" | "}
                      <span className="font-normal text-primary">
                        {job.role.toReversed()[0].name}
                      </span>
                    </span>

                    <span
                      className="text-neutral-400 underline cursor-pointer hover:text-primary"
                      onClick={() => window.open(job.website, "_blank")}
                    >
                      Visit website
                    </span>
                  </div>
                  <div className="flex flex-row justify-start gap-2 items-center">
                    <span className="text-neutral-500">{job.location}</span>
                    <span className="text-[1rem] text-neutral-400 transform translate-y-[-0.5px]">
                      |
                    </span>
                    <span className="text-[1rem] text-neutral-400 transform translate-y-[-0.5px]">
                      {job.date}
                    </span>
                  </div>
                  <div className="py-3 px-5 bg-primary/20 text-primary rounded-md mt-2">
                    {job.role
                      .toReversed()
                      .slice(0, -1)
                      .map((role) => (
                        <>
                          <div>
                            Promoted to{" "}
                            <span className="font-bold">{role.name}</span>
                          </div>
                        </>
                      ))}
                    <div>
                      Joined as{" "}
                      <span className="font-bold">
                        {job.role.toReversed().at(-1)!.name}
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="animate-pulse">Loading...</div>
          )}
        </Section>
      </Corner>

      <Section title="Articles and Projects">
        <div className="flex flex-col gap-0 justify-between">
          <span className="animate-pulse text-primary">Coming soon...</span>
        </div>
      </Section>

      <Section title="Education">
        <div className="flex flex-col gap-5 justify-between">
          {!education ? (
            <div className="animate-pulse">Loading...</div>
          ) : (
            <>
              {education.map((ed) => (
                <div className="flex flex-col">
                  <span className="font-bold">{ed.course}</span>
                  <span className="text-neutral-500">
                    {ed.name} - ({ed.location})
                  </span>
                  <span className="text-primary">{ed.date}</span>
                </div>
              ))}
            </>
          )}
        </div>
      </Section>

      <div className="bg-primary h-[12px] w-[330px] rounded-[20px] mx-auto my-20" />

      <Contact>
        <span className="call">Send me an e-mail</span>
        <span className="mail">deniswiltonpa@gmail.com</span>
      </Contact>
    </Container>
  );
}

export default App;
