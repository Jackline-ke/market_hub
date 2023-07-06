# app/models/review.rb
class Review < ApplicationRecord
    belongs_to :buyer
    belongs_to :product
  
    validates :content, presence: true
    validates :buyer_id, presence: true
    validates :product_id, presence: true
  end
  