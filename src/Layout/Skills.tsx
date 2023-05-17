import { styled } from "styled-components";

const Wrapper = styled.div`
    display: grid;
    grid-template-rows: 1fr;
    grid-template-columns: 1fr 1fr;
    place-items: center;
    justify-items: start;
    height: 20rem;
`;

const Emphatic = styled.h3`
    font-size: 3.2rem;
`;
const Others = styled.p`
    font-size: 1.6rem;
    color: #6FBF4A;
`;

export default function Skills() {

    const SKILLS = ['Typescript', 'Vue', 'React'];

    const emphaticSkill = SKILLS[0];
    const otherSkills = SKILLS.slice(1);

    return (<Wrapper>
        <div>
            <Emphatic>{emphaticSkill}</Emphatic>
            <Others>{otherSkills.join(", ")}</Others>
        </div>
    </Wrapper>)
}