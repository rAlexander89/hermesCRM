class EditAgentTableCreateAgentPropertyJoinsTable < ActiveRecord::Migration[5.2]
  def change
    create_table :agent_properties do |t|
      t.integer :agent_id
      t.integer :property_id
      t.string :listing_id

      t.timestamps
    end

    remove_column :agents, :listing_id
  end
end
