json.extract! comment, :id, :comment_txt, :user_id, :property_id
json.username comment.commenter.username
# json.user_id comment.commenter.id