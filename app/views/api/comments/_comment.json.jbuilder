json.extract! comment, :id, :comment_txt, :user_id, :property_id, :privileges
json.first_name comment.commenter.first_name
json.last_name comment.commenter.last_name
# json.user_id comment.commenter.id