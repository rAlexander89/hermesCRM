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
class Property < ApplicationRecord

    require 'activerecord-import/base'
    require 'activerecord-import/active_record/adapters/postgresql_adapter'

    validates 
        :address, 
        :address, 
        :apn, 
        :bac,
        :arv,
        :arv_offer, 
        :bath_count, 
        :bed_count, 
        :city, 
        :county, 
        :gla, 
        :house_number,
        :arv,
        :list_arv,
        :list_offer,
        :lot_area,
        :offer,
        :offer_date,
        :offer_text,
        :state,
        :status,
        :st_prefix,
        :st_suffix,
        :zipcode,
        :created_at,
        :updated_at,
        :listing_id, #active, #under contract - with us, - not us, pending - with us, pending - without us, fell out - active, closed - with us, closed - without us
        presence: true
    validates :status, inclusion: [
                                    'active', 
                                    'under contract - with us', 
                                    'under contract - without us', 
                                    'pending - with us', 
                                    'pending - without us', 
                                    'fell out - active', 
                                    'closed - with us', 
                                    'closed - without us'
                                ]

    def self.import(csv)
        CSV.foreach(csv.path, headers: true, :header_converters => :symbol,  encoding:'iso-8859-1:utf-8') do |row|
            property_hash = row.to_hash
            Property.create! property_hash

        end
    end


    has_many :comments, 
    foreign_key: :user_id,
    class_name: :Comment

    belongs_to :listing_agent,
    foreign_key: :agent_id,
    class_name: :Agent

end
