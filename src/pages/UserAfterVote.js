import React from "react";
import { PAGES } from "../constants";

import { getItemByKey } from "../utils/localStorageFunctions";

const UserAfterVote = ({ setPage }) => {
    const [landing] = PAGES;
    const votedUsers = getItemByKey("votedUsers");
    const loggedUser = getItemByKey("loggedInUser");
    let userMessage = "";

    const style = {
        height: "100vh",
        width: "100vw",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
    };
    const btnStyle = {
        width: "50%",
        height: "5rem",
        fontSize: "3rem",
        fontWeight: "bold",
    };

    const handleClick = () => {
        if (
            votedUsers.filter((user) => user.id === loggedUser[0].id).length ===
            0
        ) {
            votedUsers.push(loggedUser[0]);
            localStorage.setItem("votedUsers", JSON.stringify(votedUsers));
        }
        setPage(landing);
    };

    if (votedUsers.filter((user) => user.id === loggedUser[0].id).length >= 1) {
        userMessage = `${loggedUser[0].name}, You already voted in the past. Your vote will not be counted.`;
    } else {
        userMessage = `${loggedUser[0].name}, Thank You for Voting!!!`;
    }
    return (
        <div style={style} className="after-voting">
            <h1>{userMessage}</h1>
            <button style={btnStyle} onClick={handleClick}>
                Logout
            </button>
        </div>
    );
};

export default UserAfterVote;
