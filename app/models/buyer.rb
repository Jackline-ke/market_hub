# app/models/buyer.rb
class Buyer < ApplicationRecord
    has_one :cart
    has_many :ratings
    has_many :reviews
  
    validates :name, presence: true
    validates :email, presence: true, uniqueness: true

end
