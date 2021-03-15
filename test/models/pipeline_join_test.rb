# == Schema Information
#
# Table name: pipeline_joins
#
#  id          :bigint           not null, primary key
#  pipeline    :text             not null
#  created_at  :datetime         not null
#  updated_at  :datetime         not null
#  property_id :integer          not null
#  user_id     :integer          not null
#
require 'test_helper'

class PipelineJoinTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end
