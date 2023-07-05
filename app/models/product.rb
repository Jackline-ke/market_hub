# app/models/product.rb
class Product < ApplicationRecord
    belongs_to :category
    has_many :ratings
    has_many :reviews
  end
  