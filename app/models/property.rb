# == Schema Information
#
# Table name: properties
#
#  id         :bigint           not null, primary key
#  address    :string           not null
#  city       :string           not null
#  zipcode    :string           not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#
# Indexes
#
#  index_properties_on_address  (address)
#  index_properties_on_city     (city)
#  index_properties_on_zipcode  (zipcode)
#
class Property < ApplicationRecord

    validates :address, presnce: true
    validates :city, presence: true
    validates :zipcode, presence: true
    
end
