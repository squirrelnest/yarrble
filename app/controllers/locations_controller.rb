class LocationsController < ApplicationController

  require 'net/http'

  before_action :authenticate_user, only: [:destroy]

  def by_country
    @locations = Location.where(country: params[:country])
    render json: { locations: @locations.map {|location| LocationSerializer.new(location) } }
  end

  def mapbox_token
    render json: ENV['MAPBOX_MAP_TOKEN'].to_json
  end

  def geojson
    @locations = Location.all
    render json: { locations: @locations.map(&:to_geojson) }
  end

  def get_country
    lon = params[:lon]
    lat = params[:lat]
    uri = URI("https://api.mapbox.com/geocoding/v5/mapbox.places/" + lon + "," + lat + ".json?types=country&access_token=#{ENV['MAPBOX_GEOCODING_TOKEN']}")
    res = Net::HTTP.get_response(uri)
    render json: res.body
  end

  def index
    @location = Location.new
    @locations = Location.all
    render json: @locations, status: 200
  end

  def new
    @location = Location.find_by(id: params[:location_id])
    @review = Review.new
  end

  def create
    @location = Location.create(location_params)
    # add wind protection if exists
    @wind = Wind.create()
    params[:windProtection].each do |wind|
      @wind.update(wind => true) unless wind == "" 
    end
    @location.winds << @wind
    # add amenities if exists
    params[:amenities].each do |amenity|
      @amenity = Amenity.find_by(name: amenity)
      @location.amenities << @amenity
    end
    # throw errors if any
    if @location.errors.any?
      render json: { errors: @location.errors.full_messages }
    else
      render json: @location, status: 200
    end
  end

  def show
    @location = Location.find(params[:id])
    # @reviews = Review.find(location_id: @location.id)
    render json: @location, status: 200
  end

  def edit
    @location = Location.find(params[:id])
  end

  def update
    if current_user.admin
      @location = Location.find(params[:id])
      @location.update(location_params)
      redirect_to location_path(@location)
    else
      # flash[:message] = "Only admins can do that."
      redirect_to location_path(@location)
    end
  end

  def destroy
    if current_user && current_user.admin
      @locations = Location.all
      Location.find(params[:id]).destroy
      render json: @locations, status: 200
    else
      redirect_to locations_path
    end
  end

  def nearby
    @current_lon = params[:lon].to_f
    @current_lat = params[:lat].to_f
    distance = 1000000  # meters
    @locations = Location.nearby(@current_lat, @current_lon, distance)
    render json: @locations, status: 200
  end

  private

  def location_params
    params.require(:location).permit(
      :nickname,
      :lon,
      :lat,
      :country,
      :depth,
      reviews_attributes: [:date_visited, :stability, :content, :aesthetics, :safety, :user_id]
    )
  end

end
