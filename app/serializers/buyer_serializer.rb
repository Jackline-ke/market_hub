class BuyerSerializer < ActiveModel::Serializer
  attributes :id, :name, :email
  has_one :cart
  has_many :ratings
  has_many :reviews
  
end
