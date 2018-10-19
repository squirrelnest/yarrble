class LocationSerializer < ActiveModel::Serializer
  attributes :id, :nickname, :lonlat, :country, :lat, :lon
  has_many :reviews
  # has_many :users, through: :reviews
  def review
    Review.find(object.review_id)
  end
end
