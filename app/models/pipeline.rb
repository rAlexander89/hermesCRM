# == Schema Information
#
# Table name: pipelines
#
#  id              :bigint           not null, primary key
#  contacted       :boolean          default(FALSE)
#  listing_status  :string           default("Active"), not null
#  pipeline_status :string           default("Uncontacted"), not null
#  watched         :boolean          default(FALSE)
#  created_at      :datetime         not null
#  updated_at      :datetime         not null
#  property_id     :integer          not null
#  user_id         :integer
#
class Pipeline < ApplicationRecord

    validates :pipeline_status, inclusion:[
        'Uncontacted',
        'Counter Received',
        'Counter Responded',
        'Under Contract',
        'Trash',
        'Closed',
    ]

    validates :listing_status, inclusion: [
        'Coming Soon',
        'Active',
        'Under Contract',
        'Pending',
        'Hold',
        'Closed'
    ]

    validates :contacted, inclusion: { in: [ true, false ] }

    validates :property_id, presence: true

    belongs_to :property,
    foreign_key: :property_id,
    class_name: :Property

    belongs_to :user,
    optional: true,
    foreign_key: :user_id,
    class_name: :User

end
