class ProductsController < ApplicationController
end
# app/controllers/products_controller.rb
class ProductsController < ApplicationController
    before_action :set_product, only: [:show, :edit, :update, :destroy]
  
    def index
      @products = Product.all
      render json: @products
    end
  
    def show
      render json: @product
    end
  
    def new
      @product = Product.new
    end
  
    def create
      @product = Product.new(product_params)
      if @product.save
        render json: @product, status: :created
      else
        render json: @product.errors, status: :unprocessable_entity
      end
    end
  
    def edit
    end
  
    def update
      if @product.update(product_params)
        render json: @product
      else
        render json: @product.errors, status: :unprocessable_entity
      end
    end
  
    def destroy
      @product.destroy
      head :no_content
    end
  
    private
  
    def set_product
      @product = Product.find(params[:id])
    end
  
    def product_params
      params.require(:product).permit(:name, :description, :price, :category_id)
    end
  end
  