import axios from 'axios';
import { useEffect, useState } from 'react';
import styled from 'styled-components';
import Card from './Card';
import { FlexBox } from '../Components/Common/FlexBox';

const AllCards = styled(FlexBox)`
    width: 95%;
    margin: 0 auto;
`;

const Heading = styled.h1`
    font-size: 2em;
    font-weight: bold;
    text-align: center;
`;

const Gifs = styled.img`
    margin: 0 auto;
`;

function PostList() {
    const [posts, setPosts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);

    useEffect(() => {
        axios
            .get('https://jsonplaceholder.typicode.com/posts')
            .then((res) => {
                setPosts(res.data);
                setLoading(false);
            })
            .catch((err) => {
                console.log(err);
                setError(true);
                setLoading(false);
            });
    }, []);

    return (
        <>
            <Heading>List of Post</Heading>
            <AllCards
                justify="space-between"
                align="center"
                wrap="wrap"
                rowGap="20px"
            >
                {loading ? (
                    <Gifs
                        src="https://miro.medium.com/max/1400/1*CsJ05WEGfunYMLGfsT2sXA.gif"
                        alt="Loading ...."
                    />
                ) : error ? (
                    <Gifs
                        src="https://c.tenor.com/2gdcdzl-xaoAAAAC/error-computer.gif"
                        alt="Error ...."
                    />
                ) : (
                    posts.map((post) => <Card key={post.id} post={post} />)
                )}
            </AllCards>
        </>
    );
}

export default PostList;
