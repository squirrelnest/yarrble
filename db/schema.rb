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

ActiveRecord::Schema.define(version: 20190202011528) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"
  enable_extension "postgis"

  create_table "chats", force: :cascade do |t|
    t.string "content"
  end

  create_table "location_winds", force: :cascade do |t|
    t.integer "location_id"
    t.integer "wind_id"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "locations", force: :cascade do |t|
    t.string "nickname"
    t.geography "lonlat", limit: {:srid=>4326, :type=>"st_point", :geographic=>true}, null: false
    t.text "country"
    t.float "depth"
  end

  create_table "notes", force: :cascade do |t|
    t.text "text"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "reviews", force: :cascade do |t|
    t.text "content"
    t.integer "stability"
    t.datetime "date_visited", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.integer "location_id", null: false
    t.integer "user_id", null: false
    t.float "safety"
    t.float "aesthetics"
    t.text "amenities"
  end

  create_table "users", force: :cascade do |t|
    t.string "username"
    t.string "password_digest"
    t.datetime "created_at", null: false
    t.boolean "admin", default: false
    t.string "email"
  end

  create_table "winds", force: :cascade do |t|
    t.boolean "N"
    t.boolean "S"
    t.boolean "E"
    t.boolean "W"
    t.boolean "NW"
    t.boolean "NE"
    t.boolean "SW"
    t.boolean "SE"
  end

end
