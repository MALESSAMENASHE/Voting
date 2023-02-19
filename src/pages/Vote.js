import React from "react";
import { useState } from "react";
import { PAGES, styles } from "../constants";

import Wrapper from "../styles/styled/Vote.styled";
import { Logo, VoteBox } from "../components";
import { getItemByKey } from "../utils/localStorageFunctions";

const VotingPage = ({ setPage }) => {
    const [hiddenButton, setButton] = useState("none");
    const [voteStyle, setStyle] = useState("");
    const [, , userAfterVote, adminPage] = PAGES;

    const handleClick = () => {
        setButton("block");
    };
    const hideButton = () => {
        setButton("none");
    };

    const voteConfirm = () => {
        const votedUsers = getItemByKey("votedUsers");
        const loggedUser = getItemByKey("loggedInUser");
        const votedStyleArray = getItemByKey("voteStyle");

        if (
            votedUsers.filter((user) => user.id === loggedUser[0].id).length >=
                1 &&
            loggedUser[0].type === "user"
        ) {
            setPage(userAfterVote);
        } else if (
            votedUsers.filter((user) => user.id === loggedUser[0].id).length >=
                1 &&
            loggedUser[0].type === "admin"
        ) {
            setPage(adminPage);
        } else {
            if (
                votedStyleArray.filter((style) => style.id === loggedUser[0].id)
                    .length === 0
            ) {
                votedStyleArray.push(loggedUser[0]);
                localStorage.setItem(
                    voteStyle,
                    JSON.stringify(votedStyleArray)
                );
            }
            if (loggedUser[0].type === "user") {
                setPage(userAfterVote);
            } else {
                votedUsers.push(loggedUser[0]);
                localStorage.setItem("votedUsers", JSON.stringify(votedUsers));
                setPage(adminPage);
            }
        }
    };

    return (
        <Wrapper>
            <div className="logo">
                <Logo />
            </div>
            <h3>
                Hello, {getItemByKey("loggedInUser")[0].name}! Please, make your
                vote.
            </h3>
            <div className="vote-choice">
                {styles.map((style) => (
                    <VoteBox
                        styleName={style}
                        clickFunction={handleClick}
                        voteStyle={setStyle}
                        key={style}
                    />
                ))}
            </div>
            <div className="vote-buttons">
                <button
                    className="vote-button"
                    onClick={voteConfirm}
                    style={{ display: hiddenButton }}
                >
                    Confirm
                </button>
                <h2 style={{ display: hiddenButton }}>
                    You voted for {voteStyle} ?
                </h2>
                <button
                    className="vote-button"
                    style={{ display: hiddenButton }}
                    onClick={hideButton}
                >
                    Change
                </button>
            </div>
        </Wrapper>
    );
};

export default VotingPage;
