Rails.application.routes.draw do
  post '/signup', to: 'users#create'
  post '/login', to: 'auth#create'
  post '/me', to: 'users#me'
end
