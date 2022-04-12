import axios from 'axios';
import { useState } from 'react';
import styled from 'styled-components';

const ActionButton = styled.button`
    display: block;
    background: #fff;
    border: 1px solid #000;
    padding: 10px;
    margin: 10px auto;
    font-size: 1em;
    font-weight: bold;
    cursor: pointer;
`;

const Form = styled.form`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    row-gap: 20px;

    input {
        margin: 10px;
        width: 50%;
        display: block;
    }
`;

const Gifs = styled.img`
    display: block;
    margin: 0 auto;
`;

function SendPost() {
    const [data, setData] = useState({ title: '', body: '' });
    const [isSending, setIsSending] = useState(false);
    const [isSent, setIsSent] = useState(false);
    const [error, setError] = useState(false);

    const titleHandler = (e) => {
        setData((prevData) => {
            return {
                ...prevData,
                [e.target.name]: e.target.value,
            };
        });
    };

    const bodyHandler = (e) => {
        setData((prevData) => {
            return {
                ...prevData,
                [e.target.name]: e.target.value,
            };
        });
    };

    const submitHandler = (e) => {
        e.preventDefault();
        setIsSending(true);
        axios
            .post('https://jsonplaceholder.typicode.com/posts', data)
            .then((res) => {
                setIsSent(true);
                setIsSending(false);
                console.log(res);
            })
            .catch((err) => {
                setError(true);
                setIsSending(false);
                console.log(err);
            });
    };

    const sentHandler = () => {
        setTimeout(() => {
            setIsSent(false);
            setData({ title: '', body: '' });
        }
        , 1000);
    };

    return (
        <>
            {isSending ? (
                <Gifs
                    src="https://c.tenor.com/7Fa0cWtkMRAAAAAM/mail-download.gif"
                    alt="Sending ..."
                />
            ) : isSent ? (
                <Gifs
                    src="https://c.tenor.com/A-1z4jlGrXgAAAAi/onay2.gif"
                    alt="Sending ..." onLoad={sentHandler}
                />
            ) : error ? (
                <Gifs
                    src="https://c.tenor.com/2gdcdzl-xaoAAAAC/error-computer.gif"
                    alt="Loading ...."
                />
            ) : (
                <Form onSubmit={submitHandler}>
                    <input
                        type="text"
                        onChange={titleHandler}
                        name="title"
                        value={data.title}
                        placeholder="Title"
                    />
                    <input
                        type="text"
                        onChange={bodyHandler}
                        name="body"
                        value={data.body}
                        placeholder="Body"
                    />
                    <ActionButton type="submit">Submit</ActionButton>
                </Form>
            )}
        </>
    );
}

export default SendPost;
