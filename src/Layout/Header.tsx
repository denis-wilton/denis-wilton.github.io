import { styled } from "styled-components";

const Wrapper = styled.div`
    display: grid;
    grid-template-rows: auto auto;
    grid-template-columns: 1fr;
    place-items: center;
`;

const Circle = styled.div`
    grid-row: 1/3;
    grid-column: 1/2;
    justify-self: end;
    
    width: 320px;
    height: 320px;

    border-radius: 50%;
    background: #232323;
`;

const Name = styled.h1`
    grid-row: 1/2;
    grid-column: 1/2;
    justify-self: start;    
    align-self: end;

    font-size: 10.4rem;
    line-height: 80%;

`;
const Role = styled.p`
    grid-row: 2/3;   
    grid-column: 1/2;
    justify-self: start;
    align-self: start;

    font-size: 3.6rem;
    line-height: 100%;

    color: #6FBF4A;
`;

export default function Header() {

    const NAME = 'Denis Azevedo';
    const ROLE = 'Front-end developer';

    return (<Wrapper>
        <Circle />
        <Name>{NAME}</Name>
        <Role>{ROLE}</Role>
    </Wrapper>)
}