class AddBacToProperties < ActiveRecord::Migration[5.2]
  def change
    add_column :properties, :bac, :string, null: false
  end
end
