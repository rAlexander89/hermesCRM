# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# Note that this schema.rb definition is the authoritative source for your
# database schema. If you need to create the application database on another
# system, you should be using db:schema:load, not running all the migrations
# from scratch. The latter is a flawed and unsustainable approach (the more migrations
# you'll amass, the slower it'll run and the greater likelihood for issues).
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 2021_03_15_012459) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "agents", force: :cascade do |t|
    t.string "agent_first"
    t.string "agent_last"
    t.string "agent_contact"
    t.string "agent_email"
    t.integer "agent_id"
    t.string "agent_broker"
    t.integer "agent_broker_id"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "coagents", force: :cascade do |t|
    t.string "coagent_first"
    t.string "coagent_last"
    t.string "coagent_contact"
    t.string "coagent_email"
    t.integer "coagent_id"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "comments", force: :cascade do |t|
    t.string "comment_txt", null: false
    t.integer "user_id", null: false
    t.integer "property_id", null: false
    t.string "privileges", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "pipeline_joins", force: :cascade do |t|
    t.integer "user_id", null: false
    t.integer "property_id", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.text "pipeline", null: false
  end

  create_table "properties", force: :cascade do |t|
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
    t.bigint "apn", null: false
    t.string "listing_id", null: false
    t.text "status", null: false
    t.string "arv_offer", null: false
    t.string "list_offer", null: false
    t.string "list_arv", null: false
    t.string "offer", null: false
    t.string "offer_text", null: false
    t.string "arv", null: false
    t.string "bac", null: false
    t.string "list_price", null: false
    t.string "offer_date_dash"
    t.string "previous_status"
    t.string "agent_id", null: false
    t.string "pipeline", default: "Unassigned"
    t.index ["address"], name: "index_properties_on_address"
    t.index ["city"], name: "index_properties_on_city"
    t.index ["zipcode"], name: "index_properties_on_zipcode"
  end

  create_table "users", force: :cascade do |t|
    t.string "email", null: false
    t.string "first_name", null: false
    t.string "last_name", null: false
    t.string "session_token", null: false
    t.string "password_digest", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.string "privileges", null: false
    t.index ["email"], name: "index_users_on_email", unique: true
    t.index ["first_name"], name: "index_users_on_first_name"
    t.index ["last_name"], name: "index_users_on_last_name"
    t.index ["session_token"], name: "index_users_on_session_token", unique: true
  end

end
