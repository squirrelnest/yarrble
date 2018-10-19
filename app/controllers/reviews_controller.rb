class ReviewsController < ApplicationController

  def index

    # @reviews = Review.all
    # @location_ids = @reviews.pluck(:location_id)
    # @locations = Review.where(:location_id.in?(@location_ids))

    @reviews = Review.includes(:location).all

    # @reviews = Review.eager_load(:locations).all

    render json: @reviews, status: 200
  end

  def new
    @location = Location.find_by(id: params[:location_id]) || Location.new
    @review = Review.new
  end

  def create
    @review = Review.new(review_params)
    @location = Location.find_by(id: params[:location_id]) || Location.find_by(id: review_params["location_id"]) || Location.create(location_params)
    @review.location = @location
    # @review.user_id = current_user.id
    # if @review.valid?
      @review.save
      # redirect_to locations_path
    # else
      # flash[:message] = @location.errors.messages.values.flatten.join(" ") if @location.errors.any?
      # redirect_to locations_path
    # end
    @locations = Location.all
    render json: @locations, status: 200
  end

  def show
    @review = Review.find(params[:id])
    render json: @review, status: 200
  end

  def edit
    @review = Review.find(params[:id])
  end

  def update
    @review = Review.find(params[:id])
    # if @review.user_id == @user.id || current_user.admin
      @review.update(review_params)
      @review.save
      # redirect_to review_path(@review)
    # else
      # flash[:message] = "Can't touch what ain't yours."
      # redirect_to review_path(@review)
    # end
    @reviews = Review.all
    render json: @reviews, status: 200
  end

  def destroy
    @review = Review.find(params[:id])
    # if @review.user_id == @user.id || current_user.admin
      @review.destroy
      # redirect_to locations_url
    # else
      # flash[:message] = "Can't touch what ain't yours."
      # redirect_to locations_url
    @reviews = Review.all
    render json: @reviews, status: 200
  end

  private

  def review_params
    params.require(:review).permit(:content, :stability, :aesthetics, :safety, :date_visited, :location_id, :user_id)
  end

  def location_params
    params.permit(:nickname, :lon, :lat, :country, reviews_attributes: [:date_visited, :stability, :content])
  end

end
