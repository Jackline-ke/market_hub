# app/models/product.rb
class Product < ApplicationRecord
    belongs_to :category
    has_many :ratings
    has_many :reviews
  
    validates :name, presence: true
    validates :description, presence: true
    validates :price, presence: true, numericality: { greater_than_or_equal_to: 0 }
    validates :category_id, presence: true
  end
  