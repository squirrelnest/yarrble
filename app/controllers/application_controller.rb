class ApplicationController < ActionController::API

  include ActionController::Helpers

  include Knock::Authenticable

end
