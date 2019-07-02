import React, { Component } from 'react';
import CommentItem from './CommentItem';

class CommentFeed extends Component {
    render() {

        const { comments, postId } = this.props;
        console.log(comments)

        return comments.map(comment => <CommentItem key={comment._id} comment={comment} postId={postId} />)

    }
}

export default CommentFeed;