class AddWatchColToPipeline < ActiveRecord::Migration[5.2]
  def change
    add_column :properties, :watch, :boolean, default: false
  end
end
