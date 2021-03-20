# == Schema Information
#
# Table name: pipelines
#
#  id              :bigint           not null, primary key
#  contacted       :boolean          default(FALSE)
#  pipeline_status :string           default("Unassigned"), not null
#  created_at      :datetime         not null
#  updated_at      :datetime         not null
#  property_id     :integer          not null
#  user_id         :integer
#
class Pipeline < ApplicationRecord

    validates :pipeline_status, inclusion: [
        'Unassigned',
        'Contacted',
        'Counter Received',
        'Responded To Counter',
        'Under Contract',
        'Contingencies Removed',
        'Pending',
        'Closed',
    ]

    validates :property_id, presence: true

    belongs_to :property,
    foreign_key: :property_id,
    class_name: :Property

    belongs_to :user,
    optional: true,
    foreign_key: :user_id,
    class_name: :User

end
