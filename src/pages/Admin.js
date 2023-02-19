import React from "react";
import { useState } from "react";
import { PAGES } from "../constants";

import Wrapper from "../styles/styled/Admin.styled";
import { UserTable } from "../components";
import { getItemByKey } from "../components";

const Admin = ({ setPage }) => {
    const [totalVotes, setTotalVotes] = useState(getItemByKey("votedUsers"));
    const [landing] = PAGES;

    const allUsers = getItemByKey("usersData");
    const votedUsers = getItemByKey("votedUsers");

    function isVoted(user) {
        if (votedUsers.filter((el) => el.id === user.id).length >= 1) {
            return true;
        } else return false;
    }

    const handleClick = () => {
        setPage(landing);
    };

    return (
        <Wrapper>
            <div className="user-vote-table">
                <div className="user-vote-box user-table-first-line">
                    <h5>User Name</h5>
                    <h5>User Email</h5>
                    <h5>User Vote Status</h5>
                </div>
                {allUsers.map((user) => {
                    const voted = isVoted(user);
                    return (
                        <UserTable
                            voted={voted}
                            user={user}
                            key={user.id}
                            updateVotes={setTotalVotes}
                        />
                    );
                })}
                <h3>Total Votes: {totalVotes.length}</h3>
            </div>

            <button onClick={handleClick}>Logout</button>
        </Wrapper>
    );
};

export default Admin;
