class ReviewSerializer < ActiveModel::Serializer
  attributes :id, :content, :stability, :aesthetics, :safety, :date_visited, :updated_at
  belongs_to :location
  # belongs_to :user
end
