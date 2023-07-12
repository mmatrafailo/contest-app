import { useEffect, useState } from "react";
import { getContests } from "../api-client";
import ContestPreview from "./ContestList/ContestPreview";
import Header from "./Header";

const ContestList = () => {
    const [contests, setContests] = useState([]);

    useEffect(() => {
        getContests().then((res) => {
            setContests(res);
        });

    }, []);
    return (
        <>
            <Header message="My Header" />
            <div className="contest-list">
                {
                    contests.map((contest) => (
                        <ContestPreview contest={contest} key={contest.id} />
                    ))
                }
            </div>
        </>
    )
}

export default ContestList;