import styled from 'styled-components';
import { FlexBox } from '../Components/Common/FlexBox';

const CardWrapper = styled(FlexBox)`
    background-color: #fff;
    border-radius: 4px;
    box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06);
    padding: 20px;
    width: 20%;
    text-align: center;

    p {
        margin: 0;
    }
    p:first-child {
        font-size: 1.5em;
        font-weight: bold;
    }
    p:last-child {
        font-size: 1em;
    }
`;

function Card({ post }) {
    return (
        <CardWrapper justify="center" align="center" column rowGap="20px">
            <p>{post.title}</p>
            <p>{post.body}</p>
        </CardWrapper>
    );
}

export default Card;
