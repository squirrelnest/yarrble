class Wind < ApplicationRecord

  has_many :location_winds
  has_many :locations, through: :location_winds

end
