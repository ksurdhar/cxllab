Cxllab::Application.routes.draw do
  root to: "site#root"
  devise_for :users, controllers: { registrations: "registrations" }

  namespace :api do
    resources :users, only: [] do
      collection do
        get 'sc_connect'
      end
    end
    resources :emails, only: [] do
      get 'send', to: 'emails#show'
    end
  end
  
  namespace :api, :defaults => { :format => :json } do
    resources :users, only: [:index, :show] do
      collection do
        get 'potentials'
        get 'currentuser'
      end
    end
    resources :relationships, only: [:create, :index]
    resources :emails, :only => [:create, :index] 
  end

  

end
