import { useEffect, useState } from "react";
import { addNewNameToContest, getContest } from "../api-client";
import Header from "./Header";
import { Link, useParams } from "react-router-dom";

const Contest = () => {
    const { contestId } = useParams();
    const [contest, setContest] = useState([]);

    useEffect(() => {
        getContest(contestId).then((contest) => {
            setContest(contest);
        });
    }, [contestId]);

    const handleNewNameSubmit = async (event) => {
        event.preventDefault();
        const newNameInput = event.target.new_name;
        const newContest = await addNewNameToContest({ contestId: contestId, newNameValue: newNameInput.value })
        setContest(newContest);
    };

    return (contest &&
        <>
            <Header message={(contest as any).contestName} />
            <div className="contest">
                <div className="title">Contest Description:</div>
                <div className="description">{(contest as any).description}</div>
                <div className="title">Propsed Names:</div>
                <div className="body">
                    <div className="list">
                        {(contest as any).names?.length > 0 && (contest as any).names.map((item) => {
                            return <div key={item.id} className="item">{item.name}</div>
                        })}
                    </div>
                </div>

                <div className="title">Propose New Name:</div>
                <div className="body">
                    <form onSubmit={handleNewNameSubmit}>
                        <input type="text" name="new_name" placeholder="Enter the name..." />
                        <button type="submit">Submit</button>
                    </form>
                </div>
            </div>
            <Link to="/contests">Contest List</Link>
        </>
    );
}

export default Contest