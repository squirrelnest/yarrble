class CreateLocationWinds < ActiveRecord::Migration[5.1]
  def change
    create_table :location_winds do |t|
      t.integer :location_id
      t.integer :wind_id

      t.timestamps
    end
  end
end
