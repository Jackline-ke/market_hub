# app/controllers/ratings_controller.rb
class RatingsController < ApplicationController
    before_action :set_product
    before_action :set_rating, only: [:update, :destroy]
  
    def create
      @rating = @product.ratings.new(rating_params)
      if @rating.save
        render json: @rating, status: :created
      else
        render json: @rating.errors, status: :unprocessable_entity
      end
    end
  
    def update
      if @rating.update(rating_params)
        render json: @rating
      else
        render json: @rating.errors, status: :unprocessable_entity
      end
    end
  
    def destroy
      @rating.destroy
      head :no_content
    end
  
    private
  
    def set_product
      @product = Product.find(params[:product_id])
    end
  
    def set_rating
      @rating = @product.ratings.find(params[:id])
    end
  
    def rating_params
      params.require(:rating).permit(:value, :buyer_id)
    end
  end
  