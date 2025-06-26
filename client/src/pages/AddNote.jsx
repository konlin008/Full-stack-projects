import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const AddNote = () => {
    const navigate = useNavigate();
    const [title, setTitle] = useState("");
    const [content, setContent] = useState("");
    const handelSubmit = async (e) => {
        e.preventDefault();
        if (title === "" || content === "") {
            alert("All Fields Are Required");
            return;
        }
        const res = await axios.post(
            `http://localhost:8080/api/notes/add-new-note`,
            {
                title: title,
                content: content,
            }
        );

        if (res.data.success) {
            alert("Note Added Successfully");
            navigate("/", { state: { refresh: true } });
        }
    };
    return (
        <div className="max-w-7xl mx-auto my-15">
            <div className="w-full h-100 border-2 rounded-sm py-8 px-10">
                <form onSubmit={handelSubmit}>
                    <label className="font-semibold" htmlFor="title">
                        Title:
                    </label>
                    <input
                        id="title"
                        type="text"
                        className="border w-full h-10 mb-7 rounded "
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                    />
                    <label htmlFor="content" className="font-semibold">
                        Content:
                    </label>
                    <textarea
                        id="content"
                        rows="6"
                        cols="50"
                        className="border w-full p-2 rounded mb-3"
                        value={content}
                        onChange={(e) => setContent(e.target.value)}
                    />
                    <button
                        type="submit"
                        className="border-2 py-1 px-5 rounded-lg bg-black text-white"
                    >

                        Add
                    </button>
                </form>
            </div>
        </div>
    );
};

export default AddNote;
