class AddPiplelineStageToProperties < ActiveRecord::Migration[5.2]
  def change
    add_column :properties, :pipeline, :string, default: 'Unassigned'
  end
end
