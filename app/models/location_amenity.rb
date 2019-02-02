class LocationAmenity < ApplicationRecord

  belongs_to :amenity
  belongs_to :location

end
