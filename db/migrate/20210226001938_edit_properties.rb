class EditProperties < ActiveRecord::Migration[5.2]
  def change
    #property data
    add_column :properties, :offer_date, :date, null: false
    add_column :properties, :house_number, :integer, null: false
    add_column :properties, :st_prefix, :string
    add_column :properties, :st_name, :string
    add_column :properties, :st_suffix, :string
    add_column :properties, :county, :string, null: false
    add_column :properties, :state, :string, null: false
    add_column :properties, :bed_count, :integer, null: false
    add_column :properties, :bath_count, :integer, null: false
    add_column :properties, :gla, :integer, null: false
    add_column :properties, :lot_area, :integer, null: false
    add_column :properties, :apn, :integer, null: false
    add_column :properties, :listing_id, :integer, null: false
    add_column :properties, :status, :text, null: false
    add_column :properties, :arv_offer, :string, null: false
    add_column :properties, :list_offer, :string, null: false
    add_column :properties, :list_arv, :string, null: false
    add_column :properties, :offer, :string, null: false
    add_column :properties, :offer_text, :string, null: false

    #agent data
    create_table :agents do  |t| # buying from
      t.string :agent_first
      t.string :agent_last
      t.string :agent_contact
      t.string :agent_email
      t.integer :agent_id
      t.string :agent_broker, null: false
      t.integer :agent_broker_id, null: false

      t.timestamps
    end

    create_table :coagents do |t|  # buying from
      t.string :coagent_first
      t.string :coagent_last
      t.string :coagent_contact
      t.string :coagent_email
      t.integer :coagent_id

      t.timestamps
    end

    create_table :pipeline_joins do |t|
      t.integer :user_id, null: false
      t.integer :property_id, null: false
      t.timestamps
    end

  end
end
