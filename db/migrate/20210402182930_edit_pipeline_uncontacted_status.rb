class EditPipelineUncontactedStatus < ActiveRecord::Migration[5.2]
  def change
    change_column :pipelines, :pipeline_status, :string, :default => null
  end
end
