class RatingSerializer < ActiveModel::Serializer
  attributes :id, :value, :buyer_id, :product_id
  belongs_to :buyer
  belongs_to :product
end
