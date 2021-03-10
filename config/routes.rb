Rails.application.routes.draw do
  root to: 'static_pages#root'
    namespace :api, defaults: { format: :json } do
      resources :users, only: [:index, :create, :show] 
      resources :properties, only: [:index, :show, :create, :update, :destroy ] do 
        resource :comments, only: [:show]
      end
      resources :properties do 
        collection { post :import }
      end
      resources :comments, only: [:create, :update, :destroy, :index]
      resources :agents, only: [:show, :create, :destroy, :index] do
        collection do 
          get 'find_by_listing_id'
        end
      end
      resources :agent_properties, only: [:create, :show]
      resource :session, only: [:create, :destroy]
  end
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
