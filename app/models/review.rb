# app/models/review.rb
class Review < ApplicationRecord
    belongs_to :buyer
    belongs_to :product
  end
  