import React from "react";

import run from "../assets/images/run.png";
import workout from "../assets/images/workout.png";
import yoga from "../assets/images/yoga.png";
import fat from "../assets/images/fat.png";

const VoteBox = ({ style, clickFunction, voteStyle }) => {
    let imageUrl = "";
    switch (style) {
        case "run":
            imageUrl = run;
            break;
        case "workout":
            imageUrl = workout;
            break;
        case "yoga":
            imageUrl = yoga;
            break;
        case "fat":
            imageUrl = fat;
            break;
        default:
    }

    const onStyleClick = () => {
        clickFunction();
        voteStyle(style);
    };
    const numberOFVotes = JSON.parse(localStorage.getItem(style)).length;
    return (
        <div className="vote-box" onClick={onStyleClick}>
            <img src={imageUrl} alt={style} />
            <h4>Total Votes: {numberOFVotes}</h4>
        </div>
    );
};

export default VoteBox;
