# == Schema Information
#
# Table name: comments
#
#  id          :bigint           not null, primary key
#  comment_txt :string           not null
#  privileges  :string           not null
#  property_id :integer          not null
#  user_id     :integer          not null
#
require 'test_helper'

class CommentTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end
