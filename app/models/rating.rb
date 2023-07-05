# app/models/rating.rb
class Rating < ApplicationRecord
    belongs_to :buyer
    belongs_to :product
  
    validates :value, presence: true, numericality: { greater_than_or_equal_to: 1, less_than_or_equal_to: 5 }
    validates :buyer_id, presence: true
    validates :product_id, presence: true
  end
  