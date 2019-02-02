class CreateWinds < ActiveRecord::Migration[5.1]
  def change
    create_table :winds do |t|
      t.boolean :N
      t.boolean :S
      t.boolean :E  
      t.boolean :W 
      t.boolean :NW
      t.boolean :NE
      t.boolean :SW
      t.boolean :SE    
    end
  end
end
