import { styled } from "styled-components";
import { animated, useSpring } from 'react-spring';
import { useEffect, useRef, useState } from "react";

const Image = styled.img`
    pointer-events: none;
    transform-origin: center;
`;

const Floating = styled(animated.div)``

export default function FloatingImage(props: { image?: any, intensity?: number, children?: React.ReactNode }) {

    const mouseAcc = useMouseAcceleration();

    const spring = useSpring({
        x: mouseAcc.x / (props.intensity ?? 1),
        y: mouseAcc.y / (props.intensity ?? 1),
    })

    return <>
        <Floating style={{ ...spring }}>
            {props.children ?? <Image src={props.image} width={200} height={200}></Image>}
        </Floating>
    </>
}


function useMouseAcceleration() {
    const timeout = useRef<NodeJS.Timeout>();
    const [mouseAcceleration, setMouseAcceleration] = useState({ x: 0, y: 0 });
    useEventListener('mousemove', (event: MouseEvent) => {
        setMouseAcceleration({ x: event.movementX, y: event.movementY });
    });

    useEffect(() => {
        clearTimeout(timeout.current!);
        timeout.current = setTimeout(() => {
            setMouseAcceleration({ x: 0, y: 0 });
        }, 100)
    }, [mouseAcceleration]);

    return mouseAcceleration;
}

function useEventListener(event: string, callback: (event: any) => void) {
    useEffect(() => {
        window.addEventListener(event, callback);
        return () => {
            window.removeEventListener(event, callback);
        }
    }, [])
}