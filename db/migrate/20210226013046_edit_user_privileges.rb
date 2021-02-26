class EditUserPrivileges < ActiveRecord::Migration[5.2]
  def change
    add_column :users, :privileges, :string, null: false
  end
end
