# app/controllers/reviews_controller.rb
class ReviewsController < ApplicationController
    before_action :set_product
    before_action :set_review, only: [:update, :destroy]
  
    def create
      @review = @product.reviews.new(review_params)
      if @review.save
        render json: @review, status: :created
      else
        render json: @review.errors, status: :unprocessable_entity
      end
    end
  
    def update
      if @review.update(review_params)
        render json: @review
      else
        render json: @review.errors, status: :unprocessable_entity
      end
    end
  
    def destroy
      @review.destroy
      head :no_content
    end
  
    private
  
    def set_product
      @product = Product.find(params[:product_id])
    end
  
    def set_review
      @review = @product.reviews.find(params[:id])
    end
  
    def review_params
      params.require(:review).permit(:content, :buyer_id)
    end
  end
  