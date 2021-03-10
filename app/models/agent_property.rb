# == Schema Information
#
# Table name: agent_properties
#
#  id          :bigint           not null, primary key
#  created_at  :datetime         not null
#  updated_at  :datetime         not null
#  agent_id    :integer          not null
#  listing_id  :string           not null
#  property_id :integer          not null
#  user_id     :integer
#
class AgentProperty < ApplicationRecord

    validates :agent_id, :property_id, :listing_id, presence: true
    validates :agent_id, uniqueness: {scope: [:property_id, :listing_id]}

    belongs_to :agent,
    foreign_key: :agent_id,
    class_name: :Agent

end
