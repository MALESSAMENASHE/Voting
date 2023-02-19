import React from "react";
import { useState, useEffect } from "react";
import { styles } from "../constants";
import { getItemByKey } from "../utils/localStorageFunctions";

const UserTable = ({ voted, user, updateVotes }) => {
    const [nameClass, setName] = useState("");
    const [isVoted, setVote] = useState("");
    const [display, setDisplay] = useState("block");

    const userName = user.name;
    const email = user.email;

    useEffect(() => {
        if (voted) {
            setName("user-voted user-vote-box");
            setVote("✔");
        } else {
            setName("user-not-voted user-vote-box");
            setVote("❌");
            setDisplay("none");
        }
    }, [voted]);

    const deleteVote = () => {
        styles.forEach((style) => {
            const votesOfStyle = getItemByKey(style);
            if (votesOfStyle.length > 0) {
                const allVotedUsers = getItemByKey("votedUsers");
                const newUsersArr = allVotedUsers.filter(
                    (obj) => obj.id !== user.id
                );
                const newStyleArr = votesOfStyle.filter(
                    (obj) => obj.id !== user.id
                );
                setName("user-not-voted user-vote-box");
                setVote("❌");
                setDisplay("none");
                localStorage.setItem(style, JSON.stringify(newStyleArr));
                localStorage.setItem("votedUsers", JSON.stringify(newUsersArr));
                updateVotes(getItemByKey("votedUsers"));
            }
        });
    };

    return (
        <div className={nameClass}>
            <h5>{userName}</h5>
            <h5>{email}</h5>
            <div className="vote-status">
                <h5>{isVoted}</h5>
                <button
                    style={{ display: display }}
                    className="remove-btn"
                    onClick={deleteVote}
                >
                    Remove Vote
                </button>
            </div>
        </div>
    );
};

export default UserTable;
