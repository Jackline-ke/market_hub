# app/models/cart.rb
class Cart < ApplicationRecord
    belongs_to :buyer
  
    validates :buyer_id, presence: true
  end
  