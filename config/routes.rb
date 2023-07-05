Rails.application.routes.draw do
  resources :ratings
  resources :reviews
  resources :carts
  resources :products
  resources :categories
  resources :buyers
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Defines the root path route ("/")
  # root "articles#index"
end
