Cxllab::Application.routes.draw do
  root to: "site#root"
  devise_for :users

end
