# app/models/rating.rb
class Rating < ApplicationRecord
    belongs_to :buyer
    belongs_to :product
  end
  