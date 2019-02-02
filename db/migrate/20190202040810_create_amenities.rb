class CreateAmenities < ActiveRecord::Migration[5.1]

  def self.up
    create_table :amenities do |t|
      t.string :name, null: false
      t.integer :user_id
      t.column :created_at, :timestamptz, null: false
    end
    # Populate amenities list with default data
    Amenity.create!(name: 'Fuel', user_id: 3)
    Amenity.create!(name: 'Water', user_id: 3)
    Amenity.create!(name: 'Laundry', user_id: 3)
    Amenity.create!(name: 'Surfing', user_id: 3)
    Amenity.create!(name: 'Paddleboarding', user_id: 3)
    Amenity.create!(name: 'Windsurfing', user_id: 3)
    Amenity.create!(name: 'Kiteboarding', user_id: 3)
    Amenity.create!(name: 'Snorkeling', user_id: 3)
    Amenity.create!(name: 'Diving', user_id: 3)
    Amenity.create!(name: 'Fishing', user_id: 3)
    Amenity.create!(name: 'Grocery', user_id: 3)    
    Amenity.create!(name: 'Hospital', user_id: 3)
  end

  def self.down
    drop_table :amenities
  end

end
