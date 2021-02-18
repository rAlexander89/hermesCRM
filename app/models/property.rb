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

    require 'activerecord-import/base'
    require 'activerecord-import/active_record/adapters/postgresql_adapter'

    validates :address, presence: true
    validates :city, presence: true
    validates :zipcode, presence: true

    def self.import(csv)
        CSV.foreach(csv.path, headers: true, :header_converters => :symbol,  encoding:'iso-8859-1:utf-8') do |row|
            property_hash = row.to_hash
            Property.create! property_hash
        end
    end
end
