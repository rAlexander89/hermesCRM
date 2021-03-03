class RemoveNullFromColumns < ActiveRecord::Migration[5.2]
  def change
    change_column_null :agents, :agent_broker, true
    change_column_null :agents, :agent_broker_id, true
  end
end
