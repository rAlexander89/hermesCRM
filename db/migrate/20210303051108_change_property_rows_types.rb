class ChangePropertyRowsTypes < ActiveRecord::Migration[5.2]
  def change
    change_column :properties, :listing_id, :string
  end
end
