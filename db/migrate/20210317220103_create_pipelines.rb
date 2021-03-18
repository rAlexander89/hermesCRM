class CreatePipelines < ActiveRecord::Migration[5.2]
  def change
    create_table :pipelines do |t|
      t.string :pipeline, default: 'Unassigned', null: false
      t.integer :property_id, null: false
      t.integer :user_id, null: false

      t.timestamps
    end

    remove_column :properties, :pipeline
  end
end
