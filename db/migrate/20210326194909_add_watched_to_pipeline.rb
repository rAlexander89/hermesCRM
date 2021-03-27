class AddWatchedToPipeline < ActiveRecord::Migration[5.2]
  def change
    add_column :pipelines, :watched, :boolean, default: false
  end
end
