class UsersController < ApplicationController

  before_action :authenticate_user

  # def index
  #   @users = User.all
  # end

  def new
    @user = User.new
  end

  def create
    @user = User.new(user_params)
    if @user.save
      session[:user_id] = @user.id
      redirect_to '/locations'
    else
      flash[:message] = @user.errors.full_messages.join("/n") if @user.errors.any?
      redirect_to '/users/new'
    end
  end

  def reviews
    @reviews = @user.reviews
    render json: @reviews, status: 200
  end

  private

  def user_params
    params.permit(:username, :password)
  end

end
