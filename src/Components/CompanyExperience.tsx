import { useState } from "react";
import styled from "styled-components";

type Experience = {
  id: string;
  company: string;
  role: {
    name: string;
    time: string;
  }[];
  description: string;
  location: string;
  date: string;
};

const Company = {
  Wrapper: styled.div`
    padding: 0px 0 0 0;
    width: 100%;
  `,

  Title: styled.h2`
    font-size: 2rem;
    font-weight: 700;
    line-height: normal;
  `,

  Location: styled.h4`
    font-size: 1.2rem;
    font-weight: 400;
    color: #b5b5b5;
    line-height: normal;
    padding: 5px 0;
  `,

  Date: styled.h4`
    font-size: 1.2rem;
    font-weight: 400;
    color: #898989;
    line-height: normal;
    padding: 5px 0;
  `,

  Role: styled.h3`
    color: #418621;
    font-size: 1.2rem;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
  `,

  Description: styled.div<{ more: boolean }>`
    color: #a8a8a8;
    text-overflow: ellipsis;
    font-size: 1.1rem;
    font-style: normal;
    font-weight: 400;
    line-height: 100%;

    margin-top: 5px;

    display: -webkit-box;
    max-width: 100%;
    -webkit-line-clamp: ${(props) => (props.more ? 100 : 2)};
    -webkit-box-orient: vertical;
    transition: max-height 0.2s ease-in-out;
    overflow: hidden;
  `,

  MoreDescription: styled.div`
    color: #1a1a1a;
    display: inline-block;
    padding: 5px 0;
    font-size: 0.9rem;
    cursor: pointer;

    &:hover {
      text-decoration: underline;
      color: #6fbf4a;
    }
  `,
};

export default function CompanyExperience(props: { company: Experience }) {
  const [isExpanded, setExpanded] = useState(false);

  function getStyle(index: number) {
    if (index === 0) return {};

    return {
      color: `grey`,
    };
  }

  return (
    <Company.Wrapper>
      <Company.Title>{props.company.company}</Company.Title>
      <div style={{ display: `flex`, gap: 5 }}>
        <Company.Location>{props.company.location}</Company.Location>
        <Company.Location>|</Company.Location>
        <Company.Date>{props.company.date}</Company.Date>
      </div>
      {[...props.company.role].reverse().map((role, index) => {
        return (
          <Company.Role style={getStyle(index)}>
            {role.name} ({role.time})
          </Company.Role>
        );
      })}
      <Company.Description more={isExpanded}>
        {props.company.description}
      </Company.Description>
      <Company.MoreDescription onClick={() => setExpanded((curr) => !curr)}>
        {isExpanded ? `-` : `+`} Read {isExpanded ? "less" : "more"}
      </Company.MoreDescription>
    </Company.Wrapper>
  );
}
