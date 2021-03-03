class AddListPriceToProperty < ActiveRecord::Migration[5.2]
  def change
    add_column :properties, :list_price, :string, null: false
  end
end
