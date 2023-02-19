import styled from "styled-components";

const Wrapper = styled.div`
    height: 100%;
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    .user-vote-table {
        width: 100%;
        height: 100%;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }

    .user-vote-box {
        width: 60%;
        display: flex;
        flex-direction: row;
        justify-content: space-between;
    }

    h5 {
        margin: auto 1rem;
    }

    .user-voted {
        background-color: #faeab1;
    }

    .user-not-voted {
        background-color: #c58940;
    }

    .user-table-first-line {
        background-color: #e97777;
    }

    .vote-status {
        display: flex;
        flex-direction: row;
    }

    button {
        height: 4rem;
        width: 10rem;
        margin: 1rem 0;
        font-size: 2.5rem;
        text-align: center;
    }

    .remove-btn {
        height: 2rem;
        width: 8rem;
        font-size: 1rem;
        margin-right: 1rem;
    }
`;
export default Wrapper;
