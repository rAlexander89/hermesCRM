Rails.application.routes.draw do
  root to: 'static_pages#root'
    namespace :api, defaults: { format: :json } do
      resources :users, only: [:index, :create, :show] 
      resources :properties, only: [:index, :show, :create, :update, :destroy ] do 
        resource :comments, only: [:show]
      end
      resources :properties do ## current method of importing properties
        collection { post :import }
      end
      resources :csv do 
        collection { post :import }
      end
      resources :pipeline, only: [:index, :show, :create, :update, :destroy] do
         collection do 
          get 'fetch_unassigned_properties'
          get 'fetch_contacted_properties'
          get 'fetch_counter_received_properties'
          get 'fetch_responded_to_counter_properties'
          get 'fetch_under_contract_properties'
          get 'fetch_contingencies_removed_properties'
          get 'fetch_closed_properties'
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
