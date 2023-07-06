class ReviewSerializer < ActiveModel::Serializer
  attributes :id, :content, buyer_id, product_id
  belongs_to :buyer
  belongs_to :product
end
