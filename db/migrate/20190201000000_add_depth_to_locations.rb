class AddDepthToLocations < ActiveRecord::Migration[5.1]
  def change
    add_column :locations, :depth, :float
  end
end