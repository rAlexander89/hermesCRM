class AddCommentData < ActiveRecord::Migration[5.2]
  def change
    add_column :comments, :privileges, :string, null: false
  end
end
