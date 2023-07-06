# app/controllers/carts_controller.rb
class CartsController < ApplicationController
    before_action :set_buyer
    before_action :set_cart, only: [:show, :update]
  
    def show
      render json: @cart
    end
  
    def update
      if @cart.update(cart_params)
        render json: @cart
      else
        render json: @cart.errors, status: :unprocessable_entity
      end
    end
  
    private
  
    def set_buyer
      @buyer = Buyer.find(params[:buyer_id])
    end
  
    def set_cart
      @cart = @buyer.cart
    end
  
    def cart_params
      params.require(:cart).permit(:buyer_id)
    end
  end
  