class AddUserIdColumnToAgentProperty < ActiveRecord::Migration[5.2]
  def change
    add_column :agent_properties, :user_id, :integer
    change_column_null :agent_properties, :agent_id, false
    change_column_null :agent_properties, :property_id, false
    change_column_null :agent_properties, :listing_id, false
  end
end
