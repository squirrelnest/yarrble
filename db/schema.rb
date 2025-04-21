# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# This file is the source Rails uses to define your schema when running `bin/rails
# db:schema:load`. When creating a new database, `bin/rails db:schema:load` tends to
# be faster and is potentially less error prone than running all of your
# migrations from scratch. Old migrations may fail to apply correctly if those
# migrations use external dependencies or application code.
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema[7.1].define(version: 2019_02_02_043056) do
  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"
  enable_extension "postgis"

  create_table "amenities", force: :cascade do |t|
    t.string "name", null: false
    t.integer "user_id"
    t.timestamptz "created_at", null: false
  end

  create_table "location_amenities", force: :cascade do |t|
    t.integer "location_id"
    t.integer "amenity_id"
    t.datetime "created_at", precision: nil, null: false
    t.datetime "updated_at", precision: nil, null: false
  end

  create_table "location_winds", force: :cascade do |t|
    t.integer "location_id"
    t.integer "wind_id"
    t.datetime "created_at", precision: nil, null: false
    t.datetime "updated_at", precision: nil, null: false
  end

  create_table "locations", force: :cascade do |t|
    t.string "nickname"
    t.geography "lonlat", limit: {srid: 4326, type: "st_point", geographic: true}, null: false
    t.text "country"
    t.float "depth"
  end

  create_table "reviews", force: :cascade do |t|
    t.text "content"
    t.integer "stability"
    t.timestamptz "date_visited", null: false
    t.timestamptz "created_at", null: false
    t.timestamptz "updated_at", null: false
    t.integer "location_id", null: false
    t.integer "user_id", null: false
    t.float "safety"
    t.float "aesthetics"
    t.text "amenities"
  end

  create_table "users", force: :cascade do |t|
    t.string "username"
    t.string "password_digest"
    t.timestamptz "created_at", null: false
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
