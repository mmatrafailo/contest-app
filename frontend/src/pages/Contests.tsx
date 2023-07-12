import AddNewContest from "../components/AddNewContest";
import ContestList from "../components/ContestList";
import HomeLink from "../components/Links/HomeLink";

const Contests = () => {
    return (
        <>
            <HomeLink />
            <ContestList />
            <AddNewContest />
        </>
    );
}

export default Contests