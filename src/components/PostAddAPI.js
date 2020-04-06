import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getAPIData } from '../actions';
import APICard from './APICard';
import { Row, Col, Button } from 'reactstrap';

const PostAddAPI = props => {

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getAPIData());
    }, [props.isLoading])

    const apiPost = useSelector(state => state.posts);
    console.log("apiPost", apiPost);

    const returnBack = e => {
        e.preventDefault();
        props.history.push('/profile');
    }

    return(
        <Row>
            <Col md="4"></Col>
            <Col md="4">
            <h2>Add Post</h2>
                {apiPost.map(api => {
                return <APICard
                        key = {api.id}
                        id = {api.id}
                        title = {api.title}
                        img = {api.img}
                        url = {api.url}
                    />
                })}
            <br/>
            <Button onClick={returnBack}>Go Back</Button>
            </Col>
        </Row>
    )
}

export default PostAddAPI