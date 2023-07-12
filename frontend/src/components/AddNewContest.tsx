import { useState } from "react";
import { addNewContest } from "../api-client";
import { useNavigate } from "react-router-dom";

const AddNewContest = () => {
    const [formDisplayed, setFormDisplayed] = useState(false)
    const navigate = useNavigate();

    const handleOpenForm = (event) => {
        event.preventDefault();
        setFormDisplayed(true);
    };

    const handleContestSubmit = async (event) => {
        event.preventDefault();
        const { name, category, description } = event.target;
        const { data } = await addNewContest({
            data: {
                contestName: name.value,
                categoryName: category.value,
                description: description.value
            }
        });

        if (data.id) {
            navigate(`/contest/${data.id}`)
        }
    }
    return (
        <div className="add-new-contest">
            {!formDisplayed && <a href="" onClick={handleOpenForm} className="link">Add New Contest</a>}

            {formDisplayed && (
                <>
                    <div className="body">
                        <form onSubmit={handleContestSubmit}>
                            <input type="text" name="name" placeholder="Contest Name" />
                            <input type="text" name="category" placeholder="Contest Category" />
                            <textarea name="description" placeholder="Contest Description"></textarea>
                            <button type="submit">Submit</button>
                        </form>
                    </div>
                </>
            )
            }
        </div>
    );
}

export default AddNewContest