# == Schema Information
#
# Table name: properties
#
#  id              :bigint           not null, primary key
#  address         :string           not null
#  apn             :bigint           not null
#  arv             :string           not null
#  arv_offer       :string           not null
#  bac             :string           not null
#  bath_count      :integer          not null
#  bed_count       :integer          not null
#  city            :string           not null
#  county          :string           not null
#  gla             :integer          not null
#  house_number    :integer          not null
#  list_arv        :string           not null
#  list_offer      :string           not null
#  list_price      :string           not null
#  lot_area        :integer          not null
#  offer           :string           not null
#  offer_date      :date             not null
#  offer_date_dash :string
#  offer_text      :string           not null
#  st_name         :string
#  st_prefix       :string
#  st_suffix       :string
#  state           :string           not null
#  watch           :boolean          default(FALSE)
#  zipcode         :string           not null
#  created_at      :datetime         not null
#  updated_at      :datetime         not null
#  agent_id        :string           not null
#  listing_id      :string           not null
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

    validates :address, 
    :agent_id,
    :apn, 
    :bac, 
    :arv, 
    :arv_offer, 
    :bath_count, 
    :bed_count, 
    :city, #x
    :county, 
    :gla, 
    :house_number, #x
    :arv, 
    :arv_offer, 
    :list_arv, 
    :list_offer, 
    :list_price, 
    :lot_area, 
    :offer, 
    :offer_date, 
    :offer_text, 
    :state, 
    :st_name, #x
    :zipcode, #x
    :listing_id, 
    presence: true

    has_many :comments, 
    foreign_key: :user_id,
    class_name: :Comment

    belongs_to :agent,
    optional: true,
    foreign_key: :agent_id,
    class_name: :Agent

    has_one :pipeline,
    foreign_key: :property_id,
    class_name: :Pipeline

end
