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
      resources :csv do 
        collection { post :import }
      end
      resources :leads, only: [:create, :show, :destroy]
      resources :pipeline, only: [:index, :show, :create, :update, :destroy] do
         collection do 
          get 'fetch_pipeline'
          get 'fetch_lead_stats'
        end
      end
      resources :comments, only: [:create, :update, :destroy, :index]
      resources :agents, only: [:show, :create, :destroy, :index] do
        collection do 
          get 'fetch_agent_by_agent_license'
        end
      end
      resource :session, only: [:create, :destroy]
  end
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
