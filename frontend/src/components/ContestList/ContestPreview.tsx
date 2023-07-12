import * as React from "react";
import { useNavigate } from "react-router-dom";

const ContestPreview: React.FC<{ contest }> = ({ contest }) => {
    const navigate = useNavigate();
    const openContestPage = () => navigate(`/contest/${contest.id}`);
    return (
        <div className="contest-preview" onClick={openContestPage}>
            <div className="category">{contest.categoryName}</div>
            <div className="contest">{contest.contestName}</div>
        </div>
    )
};

export default ContestPreview;