Rails.application.routes.draw do

  root 'pages#home'

  # envoyer un mail
  post 'contact_form', to: 'contacts#create', as: 'contact_form'

  # mode admin géré par devise pour administrer les articles
  devise_for :admins

  namespace :admin do
    resources :articles
  end

  # en tant qu'user je peux juste voir les articles
  resources :articles, only: [:index, :show]

  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Reveal health status on /up that returns 200 if the app boots with no exceptions, otherwise 500.
  # Can be used by load balancers and uptime monitors to verify that the app is live.
  get "up" => "rails/health#show", as: :rails_health_check

  # Defines the root path route ("/")
  # root "posts#index"
end
