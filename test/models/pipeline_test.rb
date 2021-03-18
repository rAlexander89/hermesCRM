# == Schema Information
#
# Table name: pipelines
#
#  id              :bigint           not null, primary key
#  pipeline_status :string           default("Unassigned"), not null
#  created_at      :datetime         not null
#  updated_at      :datetime         not null
#  property_id     :integer          not null
#  user_id         :integer
#
require 'test_helper'

class PipelineTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end
