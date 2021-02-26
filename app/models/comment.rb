# == Schema Information
#
# Table name: comments
#
#  id          :bigint           not null, primary key
#  comment_txt :string           not null
#  property_id :integer          not null
#  user_id     :integer          not null
#
class Comment < ApplicationRecord
end
