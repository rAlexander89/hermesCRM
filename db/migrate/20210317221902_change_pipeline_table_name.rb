class ChangePipelineTableName < ActiveRecord::Migration[5.2]
  def change
    rename_column :pipelines, :pipeline, :pipeline_status
    rename_table :pipelines, :pipeline
  end
end
