class RemoveListingIdFromAgent < ActiveRecord::Migration[5.2]
  def change
    add_column :properties, :agent_id, :string, null: false
    drop_table :agent_properties
  end
end
