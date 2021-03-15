class AddDispositionToLeads < ActiveRecord::Migration[5.2]
  def change
    add_column :pipeline_joins, :pipeline, :text, null: false
  end
end
