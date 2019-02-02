class LocationSerializer < ActiveModel::Serializer
  attributes :id, :nickname, :lonlat, :country, :lat, :lon, :depth
  has_many :reviews
  has_many :winds
  has_many :amenities
  # has_many :users, through: :reviews
end
