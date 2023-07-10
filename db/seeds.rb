# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: "Star Wars" }, { name: "Lord of the Rings" }])
#   Character.create(name: "Luke", movie: movies.first)
# db/seeds.rb
require 'faker'

10.times do
  Buyer.create(
    name: Faker::Name.name,
    email: Faker::Internet.email
  )
end

5.times do
  Category.create(
    name: Faker::Commerce.unique.department
  )
end

10.times do
  product = Product.create(
    name: Faker::Commerce.product_name,
    description: Faker::Lorem.sentence,
    price: Faker::Commerce.price(range: 0..100.0),
    category_id: Category.pluck(:id).sample
  )
end

10.times do
  buyer_id = Buyer.pluck(:id).sample
  cart = Cart.create!(
    buyer_id: buyer_id
  )
end

10.times do
  review = Review.create(
    content: Faker::Lorem.sentence,
    product_id: Product.pluck(:id).sample,
    buyer_id: Buyer.pluck(:id).sample
  )
end

10.times do
  rating = Rating.create(
    value: Faker::Number.between(from: 1, to: 5),
    product_id: Product.pluck(:id).sample,
    buyer_id: Buyer.pluck(:id).sample
  )
end
puts "done seeding"