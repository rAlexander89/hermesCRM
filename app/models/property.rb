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
#  previous_status :string
#  st_name         :string
#  st_prefix       :string
#  st_suffix       :string
#  state           :string           not null
#  status          :text             not null
#  zipcode         :string           not null
#  created_at      :datetime         not null
#  updated_at      :datetime         not null
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
    :arv_offer, 
    :list_arv, 
    :list_offer, 
    :list_price, 
    :lot_area, 
    :offer, 
    :offer_date, 
    :offer_text, 
    :state, 
    :status, 
    :st_name, 
    :zipcode, 
    :listing_id, 
    presence: true

    validates :status, inclusion: [
                                    'Coming Soon', 
                                    'Active', 
                                    'Active Under Contract', 
                                    'Hold', 
                                    'Pending', 
                                    'Fell out - Active', 
                                    'Closed', 
                                ]

    has_many :comments, 
    foreign_key: :user_id,
    class_name: :Comment


    # belongs_to :board, polymorphic: true

    belongs_to :agent,
    optional: true,
    foreign_key: :agent_id,
    class_name: :Agent


    def self.import(csv)
        CSV.foreach(csv.path, headers: true, :header_converters => :symbol, skip_blanks: true,  encoding:'iso-8859-1:utf-8') do |row, i|
            row_hash = row.to_hash

            # row_hash.each.with_index do |k,v, i|
            #     puts i, k,v
            # end
            property_hash = 
                {
                    offer_date_dash: row[:date],
                    offer_date: row[:datetext],
                    address: row[:address], 
                    apn: row[:apn],
                    arv_offer: row[:ao],
                    list_arv: row[:la],
                    list_price: row[:listprice],
                    list_offer: row[:lo],
                    arv: row[:arv],
                    offer: row[:offer],
                    offer_text: row[:offertext],
                    bac: row[:bac],
                    house_number: row[:housenumber],
                    st_prefix: row[:street_prefix],
                    st_name: row[:street_name],
                    st_suffix: row[:street_suffix],
                    city: row[:city],
                    state: row[:state],
                    county: row[:county],
                    zipcode: row[:zip],
                    bed_count: row[:bed],
                    bath_count: row[:bath],
                    lot_area: row[:lot_area],
                    gla: row[:gla],
                    listing_id: row[:listing_id],
                    status: row[:status],
                    previous_status: row[:previous_status]
                }


            # IO.write("../../log/failed_property_insert", row_hash.join(' ') + '\n, mode: 'a')

            agent_hash = 
                {
                    agent_first: row[:firstname],
                    agent_last: row[:lastname],
                    agent_contact: row[:cell],
                    agent_email: row[:email],
                    agent_id: row[:agentid],
                    agent_broker: row[:officename],
                    agent_broker_id: row[:officeid],
                    listing_id: [row[:listing_id]]
                }

            Agent.create! agent_hash
            Property.create! property_hash
        end
    end

end
