Cxllab::Application.routes.draw do
  root to: "site#root"
  devise_for :users

  resources :users, only: [] do
    collection do
      get 'sc_connect'
    end
  end

end
