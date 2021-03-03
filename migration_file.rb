def change
    create_table :agents do |t|
        t.string "agent_first"
        t.string "agent_last"
        t.string "agent_contact"
        t.string "agent_email"
        t.integer "agent_id"
        t.string "agent_broker", null: false
        t.integer "agent_broker_id", null: false
        t.string "listing_id", default: [], array: true
        t.timestamps
    end

    create_table :coagents do |t|
        t.string "coagent_first"
        t.string "coagent_last"
        t.string "coagent_contact"
        t.string "coagent_email"
        t.integer "coagent_id"
        t.timestamps
    end

    create_table :comments do |t|
        t.string "comment_txt", null: false
        t.integer "user_id", null: false
        t.integer "property_id", null: false
    end

    create_table :pipeline_joins do |t|
        t.integer "user_id", null: false
        t.integer "property_id", null: false
        t.timestamps
    end

    create_table :properties do |t|
        t.string "address", null: false
        t.string "city", null: false
        t.string "zipcode", null: false
        t.datetime "created_at", null: false
        t.datetime "updated_at", null: false
        t.date "offer_date", null: false
        t.integer "house_number", null: false
        t.string "st_prefix"
        t.string "st_name"
        t.string "st_suffix"
        t.string "county", null: false
        t.string "state", null: false
        t.integer "bed_count", null: false
        t.integer "bath_count", null: false
        t.integer "gla", null: false
        t.integer "lot_area", null: false
        t.integer "apn", null: false
        t.integer "listing_id", null: false
        t.text "status", null: false
        t.string "arv_offer", null: false
        t.string "list_offer", null: false
        t.string "list_arv", null: false
        t.string "offer", null: false
        t.string "offer_text", null: false
        t.string "arv", null: false
        t.string "bac", null: false
        t.string "list_price", null: false
    end
    
    create_table :users do |t|
        t.string "email", null: false
        t.string "first_name", null: false
        t.string "last_name", null: false
        t.string "session_token", null: false
        t.string "password_digest", null: false
        t.string "privileges", null: false
        t.timestamps, null: false
    end
    add_index :properties, :address
    add_index :properties, :city
    add_index :properties, :zipcode
    add_index :users, :email, unique: true
    add_index :users, :first_name
    add_index :users, :last_name
    add_index :users, :session_token, unique: true
end