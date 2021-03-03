# == Schema Information
#
# Table name: agents
#
#  id              :bigint           not null, primary key
#  agent_broker    :string           not null
#  agent_contact   :string
#  agent_email     :string
#  agent_first     :string
#  agent_last      :string
#  created_at      :datetime         not null
#  updated_at      :datetime         not null
#  agent_broker_id :integer          not null
#  agent_id        :integer
#  listing_id      :string           default([]), is an Array
#
class Agent < ApplicationRecord

    validates :agent_first, :agent_last, :agent_contact, :agent_email, :agent_id, :agent_broker, :agent_broker_id

    has_many :listings, foreign_key: :property_id, class_name: :Property


end
