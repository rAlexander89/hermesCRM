class EditPropertyAndPipelineSchema < ActiveRecord::Migration[5.2]
  def change
        remove_column :properties, :status
        remove_column :properties, :previous_status
        add_column :pipelines, :listing_status, :string, default: 'Active', null: false

  end
end
