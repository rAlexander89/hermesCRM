class AddContactToPipeline < ActiveRecord::Migration[5.2]
  def change
    add_column :pipelines, :contacted, :boolean, default: false
    remove_column :properties, :contacted
  end
end
