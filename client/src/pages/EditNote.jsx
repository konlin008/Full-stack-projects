import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom';

const EditNote = () => {
    const navigate = useNavigate();
    const [title, setTitle] = useState("");
    const [content, setContent] = useState("");
    const params = useParams()
    const noteId = params.noteId

    useEffect(() => {

        const fetchData = async () => {
            const res = await axios.get(`http://localhost:8080/api/notes/fetch-note/${noteId}`)
            setTitle(res?.data.note.title)
            setContent(res?.data.note.content)
        }
        fetchData()
    }
        , [setTitle, setContent, noteId])
    const handelSubmit = async (e) => {
        e.preventDefault();
        const res = await axios.put(`http://localhost:8080/api/notes/${noteId}`, {
            title,
            content
        })
        if (res?.data.success) {
            alert(res?.data.msg)
            navigate("/", { state: { refresh: true } })
        }
    }
    const deleteNote = async () => {
        const result = await axios.delete(`http://localhost:8080/api/notes/delete/${noteId}`)
        if (result?.data.success) {
            alert(result?.data.msg)
            navigate("/", { state: { refresh: true } })
        }
    }
    return (
        <div className="max-w-7xl mx-auto my-15">
            <div className="w-full h-110 border-2 rounded-sm py-8 px-10">
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
                        className="border-2 py-1 px-5 mx-2 rounded-lg bg-black text-white"
                    >
                        Add
                    </button>
                </form>
                <button onClick={deleteNote} className='    border-2 py-1 px-5 mx-2 rounded-lg '>Delete</button>
            </div>
        </div>
    )
}

export default EditNote