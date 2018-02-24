class AddSafetyAestheticsToReviews < ActiveRecord::Migration[5.1]
  def change
    add_column :reviews, :safety, :float
    add_column :reviews, :aesthetics, :float
    add_column :reviews, :amenities, :text
  end
end
