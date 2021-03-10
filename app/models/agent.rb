# == Schema Information
#
# Table name: agents
#
#  id              :bigint           not null, primary key
#  agent_broker    :string
#  agent_contact   :string
#  agent_email     :string
#  agent_first     :string
#  agent_last      :string
#  created_at      :datetime         not null
#  updated_at      :datetime         not null
#  agent_broker_id :integer
#  agent_id        :integer
#  listing_id      :string           default([]), is an Array
#
class Agent < ApplicationRecord

    validate :agent_first, :agent_last, :agent_contact, :agent_email, :agent_id, :agent_broker, :agent_broker_id, :listing_id


    # has_many :properties, 
    # foreign_key: :property_id, 
    # class_name: :Property

    has_many :properties, 
    foreign_key: :listing_id, 
    class_name: :Property
    
    #this line is new. helps to create nested forms
    # accepts_nested_attributes_for :properties


end
