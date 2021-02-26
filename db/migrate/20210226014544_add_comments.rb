class AddComments < ActiveRecord::Migration[5.2]
  def change
    
    add_column :comments, :comment_txt, :text, null: false
    add_column :comments, :user_id, :integer, null: false
    add_column :comments, :property_id, :integer, null: false


  end
end
