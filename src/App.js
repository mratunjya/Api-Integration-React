import { useState } from 'react';
import styled from 'styled-components';
import PostList from './API/PostList';
import SendPost from './API/SendPost';

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

function App() {
    const [viewPost, setViewPost] = useState(false);
    const [viewForm, setViewForm] = useState(false);

    const fetchPost = () => {
        setViewPost(true);
        setViewForm(false);
    };

    const sendPost = () => {
        setViewForm(true);
        setViewPost(false);
    };

    return (
        <>
            {!viewPost && (
                <ActionButton onClick={fetchPost}>Fetch Posts</ActionButton>
            )}
            {!viewForm && (
                <ActionButton onClick={sendPost}>Send a Post</ActionButton>
            )}
            {viewPost && <PostList />}
            {viewForm && <SendPost />}
        </>
    );
}

export default App;
