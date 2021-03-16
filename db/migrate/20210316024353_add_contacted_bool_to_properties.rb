class AddContactedBoolToProperties < ActiveRecord::Migration[5.2]
  def change
    add_column :properties, :contacted, :boolean, default: false
  end
end
