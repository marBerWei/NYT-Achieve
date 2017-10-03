class UsersController < ApplicationController
  skip_before_action :authorized, only: [:create]


  def create
    user = User.new(email: params[:email], password: params[:password], first_name: params[:first_name], last_name: params[:last_name])
    if user.save
      token = encode_token({user_id: user.id})
      render json: {user: user, jwt: token}
    else
    end
  end

  def me
    if @user
      render json: {user: @user, articles: @user.articles}
    else
      render json: {message: "Error: User Not Found.."}
    end
  end

end
