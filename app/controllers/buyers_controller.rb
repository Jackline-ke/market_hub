# app/controllers/buyers_controller.rb
class BuyersController < ApplicationController
    before_action :set_buyer, only: [:show, :edit, :update, :destroy]
  
    def index
      @buyers = Buyer.all
      render json: @buyers
    end
  
    def show
      render json: @buyer
    end
  
    def new
      @buyer = Buyer.new
    end
  
    def create
      @buyer = Buyer.new(buyer_params)
      if @buyer.save
        render json: @buyer, status: :created
      else
        render json: @buyer.errors, status: :unprocessable_entity
      end
    end
  
    def edit
    end
  
    def update
      if @buyer.update(buyer_params)
        render json: @buyer
      else
        render json: @buyer.errors, status: :unprocessable_entity
      end
    end
  
    def destroy
      @buyer.destroy
      head :no_content
    end
  
    private
  
    def set_buyer
      @buyer = Buyer.find(params[:id])
    end
  
    def buyer_params
      params.require(:buyer).permit(:name, :email)
    end
  end
   