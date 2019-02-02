class CreateLocationAmenities < ActiveRecord::Migration[5.1]
  def change
    create_table :location_amenities do |t|
      t.integer :location_id
      t.integer :amenity_id

      t.timestamps
    end
  end
end
