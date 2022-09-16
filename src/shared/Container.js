import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    flex-direction: ${props => props.direction?props.direction:"row"};
    align-items: center;
    justify-content: ${props => props.content?props.content:"center"};
    width: 100%;
    height: ${props => props.height};
    background-color: var(${props => props.backColor});
    color: var(${props => props.color});
`