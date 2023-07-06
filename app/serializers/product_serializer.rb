class ProductSerializer < ActiveModel::Serializer
  attributes :id, :name, :price, :description, :category_id
  belongs_to :category
  has_many :ratings
  has_many :reviews
  
end
