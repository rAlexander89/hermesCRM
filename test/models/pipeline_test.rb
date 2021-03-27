# == Schema Information
#
# Table name: pipelines
#
#  id              :bigint           not null, primary key
#  contacted       :boolean          default(FALSE)
#  listing_status  :string           default("Active"), not null
#  pipeline_status :string           default("Uncontacted"), not null
#  watched         :boolean          default(FALSE)
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
