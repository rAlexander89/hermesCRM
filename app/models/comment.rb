# == Schema Information
#
# Table name: comments
#
#  id          :bigint           not null, primary key
#  comment_txt :string           not null
#  privileges  :string           not null
#  created_at  :datetime         not null
#  updated_at  :datetime         not null
#  property_id :integer          not null
#  user_id     :integer          not null
#
class Comment < ApplicationRecord
    validates :comment_txt, :user_id, :property_id, :privileges, presence: true

    belongs_to :user, 
    foreign_key: :user_id, 
    class_name: :User
    
    belongs_to :property, 
    foreign_key: :property_id, 
    class_name: :Property

end
