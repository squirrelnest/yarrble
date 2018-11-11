class UsersController < ApplicationController

  before_action :authenticate_user, only: [:reviews]

  # def index
  #   @users = User.all
  # end

  def show
   render json: current_user.as_json(only: %i(id email))
  end

  def new
    @user = User.new
  end

  def create
    @user = User.new(user_params)
    if @user.save
      render json: @user, status: 200
    else
      redirect_to '/signup'
    end
  end

  def reviews
    @user = User.find_by(id: current_user.id)
    @reviews = @user.reviews
    # @reviews = Review.all
    render json: @reviews, status: 200
  end

  private

  def user_params
    params.require(:user).permit(:email, :username, :password)
  end

end
