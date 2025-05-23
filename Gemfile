source 'https://rubygems.org'

git_source(:github) do |repo_name|
  repo_name = "#{repo_name}/#{repo_name}" unless repo_name.include?("/")
  "https://github.com/#{repo_name}.git"
end

ruby File.read(".ruby-version").strip

# Enable JWT authentication
gem 'knock'
# Create seed file from previous databases
gem 'seed_dump', '~> 3.2', '>= 3.2.4'
# Foreman utility for managing multiple servers (Webpack dev server, Rails API server, etc.)
gem 'foreman', '~> 0.88.1'
# Load environment variables from .env
gem 'dotenv', '~> 2.2', '>= 2.2.1'
# dotenv-Rails
gem 'dotenv-rails'
# use omniauth for user authentication
# gem 'omniauth'
# # omniauth-facebook
# gem 'omniauth-facebook'
# ActiveModel Serializer
gem 'active_model_serializers'
# Pry for debugging
gem 'pry'
# Bundle edge Rails instead: gem 'rails', github: 'rails/rails'
gem 'rails', '~> 7.1.1'
# Use Postgres as the database for Active Record
gem 'pg'
# Use PostGIS adapter for Active Record
gem 'activerecord-postgis-adapter'
# proj4 converts coordinates from text files or directly from user input
gem "rgeo-proj4"
# Use Puma as the app server
gem "puma", "~> 6.6.0"
# Build JSON APIs with ease. Read more: https://github.com/rails/jbuilder
gem 'jbuilder', '~> 2.5'

# Use Redis adapter to run Action Cable in production
# gem 'redis', '~> 4.0'

# Use ActiveModel has_secure_password
gem 'bcrypt', '~> 3.1.7'

# Use Capistrano for deployment
# gem 'capistrano-rails', group: :development

# Use Rack CORS for handling Cross-Origin Resource Sharing (CORS), making cross-origin AJAX possible
gem 'rack-cors', :require => 'rack/cors'

group :test do
  gem 'rake'
end

group :development, :test do
  # Call 'byebug' anywhere in the code to stop execution and get a debugger console
  gem 'byebug', platforms: [:mri, :mingw, :x64_mingw]
  # Prettify rails console output
  gem 'awesome_print', :require => 'ap'
end

group :development do
  gem 'listen', '>= 3.0.5', '< 3.6'
  # Spring speeds up development by keeping your application running in the background. Read more: https://github.com/rails/spring
  gem 'spring'
  gem 'spring-watcher-listen', '~> 2.0.0'
end

# Windows does not include zoneinfo files, so bundle the tzinfo-data gem
gem 'tzinfo-data', platforms: [:mingw, :mswin, :x64_mingw, :jruby]

# add gems deprecated from default library since Ruby 3.4
gem "base64", "~> 0.2.0"
gem "bigdecimal", "~> 3.1"
gem "mutex_m"
