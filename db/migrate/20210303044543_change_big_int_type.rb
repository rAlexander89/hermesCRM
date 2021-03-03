class ChangeBigIntType < ActiveRecord::Migration[5.2]
  def change
    change_column :properties, :apn, :bigint

  end
end
