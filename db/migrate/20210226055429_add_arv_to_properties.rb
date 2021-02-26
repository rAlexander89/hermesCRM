class AddArvToProperties < ActiveRecord::Migration[5.2]
  def change
    add_column :properties, :arv, :string, null: false
  end
end
