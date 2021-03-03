class PreviousStatus < ActiveRecord::Migration[5.2]
  def change
    add_column :properties, :previous_status, :string
  end
end
