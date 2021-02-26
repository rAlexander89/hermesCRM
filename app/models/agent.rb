class Agent < ApplicationRecord

    validates :agent_first, :agent_last, :agent_contact, :agent_email, :agent_id, :agent_broker, :agent_broker_id,

    has_many :listings, foreign_key: :property_id, class_name: :Property


end