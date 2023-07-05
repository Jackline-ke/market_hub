class Buyer < ApplicationRecord
    has_one :cart
    has_many :ratings
    has_many :reviews
  end
  