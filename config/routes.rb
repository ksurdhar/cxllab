Cxllab::Application.routes.draw do
  root to: "site#root"
  devise_for :users, controllers: { registrations: "registrations" }


  resources :users, only: [:show] do
    collection do
      get 'sc_connect'
    end
  end

  namespace :api, :defaults => { :format => :json } do
    resources :users, only: [:index]
  end



end
