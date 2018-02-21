# class ApplicationController < ActionController::API
# end

class ApplicationController < ActionController::API

  protect_from_forgery with: :exception
  before_action :current_user
  helper_method :current_user

  def current_user
    @user = User.find_by(id: session[:user_id])
    @user
  end

end
