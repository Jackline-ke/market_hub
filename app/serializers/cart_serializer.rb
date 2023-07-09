class CartSerializer < ActiveModel::Serializer
  attributes :id, :buyer_id
  belongs_to :buyer
end
