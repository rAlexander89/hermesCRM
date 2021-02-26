# == Schema Information
#
# Table name: properties
#
#  id           :bigint           not null, primary key
#  address      :string           not null
#  apn          :integer          not null
#  arv_offer    :string           not null
#  bath_count   :integer          not null
#  bed_count    :integer          not null
#  city         :string           not null
#  county       :string           not null
#  gla          :integer          not null
#  house_number :integer          not null
#  list_arv     :string           not null
#  list_offer   :string           not null
#  lot_area     :integer          not null
#  offer        :string           not null
#  offer_date   :date             not null
#  offer_text   :string           not null
#  st_name      :string
#  st_prefix    :string
#  st_suffix    :string
#  state        :string           not null
#  status       :text             not null
#  zipcode      :string           not null
#  created_at   :datetime         not null
#  updated_at   :datetime         not null
#  listing_id   :integer          not null
#
# Indexes
#
#  index_properties_on_address  (address)
#  index_properties_on_city     (city)
#  index_properties_on_zipcode  (zipcode)
#
require 'test_helper'

class PropertyTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end
