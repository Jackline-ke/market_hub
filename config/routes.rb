Rails.application.routes.draw do
  resources :buyers do
    resource :cart, only: [:show, :update]
  end

  resources :carts, only: [:show, :update]

  resources :products do
    resources :ratings, except: [:index, :show]
    resources :reviews, except: [:index, :show]
  end

  resources :categories

  resources :ratings, only: [:update, :destroy]
  resources :reviews, only: [:update, :destroy]

end
