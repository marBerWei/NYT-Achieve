Rails.application.routes.draw do
  post '/Signup', to: 'users#create'
  post '/Login', to: 'auth#create'
  post '/Me', to: 'users#me'
end
