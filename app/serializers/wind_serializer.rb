class WindSerializer < ActiveModel::Serializer
  attributes :N, :S, :E, :W, :NW, :NE, :SW, :SE
  has_many :location_winds
  has_many :locations, through: :location_winds
end
