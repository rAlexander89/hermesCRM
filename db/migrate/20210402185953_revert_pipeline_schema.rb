class RevertPipelineSchema < ActiveRecord::Migration[5.2]
  def change
    change_column :pipelines, :pipeline_status, :string, :default => "Uncontacted"
  end
end
