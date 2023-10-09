import styled from "styled-components";

const MainContainer = styled.main`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 3rem;
    margin: 0;
    padding: 2rem;
    background: linear-gradient(135deg, #FED328, #ECD716);
    font-family: 'Space Mono', monospace;  // <-- Changed Font
`;

const Title = styled.h1`
    font-size: 4rem;
    font-weight: bold;
    text-shadow: 3px 3px 10px rgba(0, 0, 0, 0.2);
    margin-bottom: 2rem;
    color: #222;
`;

const Card = styled.section`
    width: 100%;
    max-width: 800px;
    padding: 2rem;
    background-color: rgba(255, 255, 255, 0.1);
    backdrop-filter: blur(20px);
    border-radius: 20px;
    border: 1px solid rgba(0, 0, 0, 0.1);
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.2);  // More pronounced shadow
    transition: transform 0.3s;

    &:hover {
        transform: translateY(-10px);
    }

    ul {
        list-style: none;
        padding: 0;  // Remove default padding
    }

    li {
        font-size: 1.2rem;
        color: black;
        padding: 0.5rem 1rem;  // Added more padding for an airy look
        position: relative;
        padding-left: 2rem;
        margin-bottom: 0.5rem;
        border-radius: 0.5rem;

        &::before {
            content: '→';
            color: #FF0000;
            position: absolute;
            font-size: 2rem;
            left: 0;
            top: 50%;
            transform: translateY(-50%);
        }

        &:hover {
            background-color: rgba(255, 255, 255, 0.35);  // Subtle hover effect for list items
        }
    }
`;

const CardTitle = styled.h3`
    font-size: 2.5rem;
    font-weight: bold;
    color: #fff;
    text-shadow: 2px 2px 5px rgba(0, 0, 0, 0.2);
    margin-bottom: 1.5rem;
    background-color: rgba(0,0,0,0.85);
    padding: 0.5rem 1rem;     
    border-radius: 0.35em;
    backdrop-filter: blur(20px);
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.2);
    border: 1px solid rgba(244,244,244,0.2);
`;

const Paragraph = styled.p`
    font-size: 1.5rem;
    color: #000000;
    margin-bottom: 1.5rem;
`;

export { Paragraph, CardTitle, Card, Title, MainContainer };