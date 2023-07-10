class ProductSerializer < ActiveModel::Serializer
  attributes :id, :name, :price, :description, :category_id, :image_url
  belongs_to :category
  has_many :ratings
  has_many :reviews
  
end
