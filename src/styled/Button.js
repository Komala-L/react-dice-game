import styled from "styled-components";

export const Button = styled.button`
    background-color: #000;
    color: #fff;
    padding: 10px 20px;
    min-width: 220px;
    border: 2px solid #000;
    border-radius: 5px;
    font-size: 16px;
    cursor: pointer;
    transition: background-color 0.4s ease;

    &:hover {
    background-color: #fff;
    color: #000;
    cursor: pointer;
    transition: background-color 0.3s ease;
    }
`;

export const OutlineButton = styled(Button)`
    background-color: #fff;
    color: #000;
    border: 2px solid #000;
    &:hover {
    background-color: #000;
    color: #fff;
    border: 2px solid transparent;
    }
`;