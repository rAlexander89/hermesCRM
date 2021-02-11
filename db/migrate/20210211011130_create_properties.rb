class CreateProperties < ActiveRecord::Migration[5.2]
  def change
    create_table :properties do |t|
      t.string :address, null: false
      t.string :city, null: false
      t.string :zipcode, null: false
      t.timestamps
    end

  add_index :properties, :address
  add_index :properties, :zipcode
  add_index :properties, :city
  end
end
