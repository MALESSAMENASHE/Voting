import styled from "styled-components";

const Wrapper = styled.div`
    .info {
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        align-items: center;
    }
    nav {
        width: var(--fluid-width);
        max-width: var(--max-width);
        margin: auto auto;
        height: var(--nav-height);
        display: flex;
        align-items: center;
        justify-content: center;
    }
    .page {
        height: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
        margin-top: 1rem;
    }
    h1 {
        font-weight: 700;
        span {
            color: var(--blue-dark);
        }
    }
    p {
        color: #030303;
        font-size: 1.5rem;
        font-weight: bold;
    }
    .main-img {
        display: block;
        align-self: flex-start;
    }
    @media (min-width: 992px) {
        .page {
            grid-template-columns: 1fr 1fr;
            column-gap: 3rem;
        }
        .main-img {
            display: block;
        }
    }
`;
export default Wrapper;
