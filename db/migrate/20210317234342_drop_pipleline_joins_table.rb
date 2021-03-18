class DropPiplelineJoinsTable < ActiveRecord::Migration[5.2]
  def change
    drop_table :pipeline_joins
  end
end
