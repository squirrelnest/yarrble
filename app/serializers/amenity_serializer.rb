class AmenitySerializer < ActiveModel::Serializer
  attributes :name
  has_many :location_amenities
  has_many :locations, through: :location_amenities
end
