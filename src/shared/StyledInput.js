import styled from "styled-components";

export const StyledInput = styled.input`
    min-width: 100%;
    padding: 11px 13px;
    background: var(--color-grey-lighter);
    color: var(--color-black);
    margin-bottom: 0.9rem;
    border-radius: 4px;
    outline: 0;
    border: 1px solid rgba(245, 245, 245, 0.7);
    font-size: 14px;
    transition: all 0.3s ease-out;
    box-shadow: 0 0 3px rgba(0, 0, 0, 0.1), 0 1px 1px rgba(0, 0, 0, 0.1);
    :focus,
    :hover {
        box-shadow: 0 0 3px rgba(0, 0, 0, 0.15), 0 1px 5px rgba(0, 0, 0, 0.1);
    }
`;