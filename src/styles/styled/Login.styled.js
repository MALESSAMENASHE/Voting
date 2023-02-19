import styled from "styled-components";

const Wrapper = styled.section`
    .info {
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        align-items: center;
    }
    .form {
        max-width: 400px;
        border-top: 5px solid var(--blue-dark);
    }

    h3 {
        text-align: center;
        font-size: 2rem;
    }

    p {
        margin: 0;
        margin-top: 1rem;
        text-align: center;
    }
    .btn {
        margin-top: 1rem;
    }

    .btn-light {
        background: var(--white);
        color: var(--blue-dark);
    }

    .btn-light:hover {
        background: var(--grey-50);
        color: var(--black);
    }

    .member-btn {
        background: transparent;
        border: transparent;
        color: var(--blue-dark);
        cursor: pointer;
        letter-spacing: var(--letterSpacing);
    }
`;
export default Wrapper;
