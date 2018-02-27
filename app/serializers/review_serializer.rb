class ReviewSerializer < ActiveModel::Serializer
  attributes :id, :content, :stability, :aesthetics, :safety, :date_visited
  belongs_to :location
  # belongs_to :user
end
