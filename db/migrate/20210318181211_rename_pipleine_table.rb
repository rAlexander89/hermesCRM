class RenamePipleineTable < ActiveRecord::Migration[5.2]
  def change
    rename_table :pipeline, :pipelines
  end
end
