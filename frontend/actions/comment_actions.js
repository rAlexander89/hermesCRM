import * as CommentAPIUtil from '../utils/api/comment_api_util'

export const RECEIVE_COMMENTS = "RECEIVE_COMMENTS";
export const RECEIVE_COMMENT = "RECEIVE_COMMENT";
export const REMOVE_COMMENT = "REMOVE_COMMENT";

export const receiveComments = comments => {
    return{
        type: RECEIVE_COMMENTS,
        comments
    }
}

export const receiveComment = data => {
    return {
        type: RECEIVE_COMMENT,
        property_id: data.property_id,
        user_id: data.user_id
    }
}

export const removeComment = commentID => ({
    type: REMOVE_COMMENT,
    commentID
})

export const fetchComments = propertyID => dispatch => {

    return CommentAPIUtil.fetchComments(propertyID)
        .then(comments => dispatch(receiveComments(comments))
        )
}

export const fetchPropertyComments = propertyID => dispatch => {
    return CommentAPIUtil.fetchPropertyComments(propertyID)
        .then(comments => dispatch(receiveComments(comments)))
}

export const fetchComment = commentId => dispatch => {
    return CommentAPIUtil.fetchComments(commentId)
        .then(comment => dispatch(receiveComments(comment))
        )
}


export const createComment = comment => dispatch => {
    return CommentAPIUtil.createComment(comment)
        .then(comment => dispatch(receiveComments(comment))
        )
}

export const updateComment = comment => dispatch => {
    return CommentAPIUtil.updateComment(comment)
        .then(comment => dispatch(receiveComment(comment))
        )
};

export const deleteComment = (commentId) => (dispatch) => {
    return CommentAPIUtil.deleteComment(commentId)
        .then(() => dispatch(removeComment(commentId))
        )
};