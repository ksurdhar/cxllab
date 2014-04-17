Cxllab::Application.routes.draw do
  root to: "site#root"
  devise_for :users, controllers: { registrations: "registrations" }


  namespace :api do
    resources :users, only: [:show] do
      collection do
        get 'sc_connect'
      end
    end
  end

  namespace :api, :defaults => { :format => :json } do
    resources :users, only: [:index]
    resources :relationships, only: [:create]
  end



end
