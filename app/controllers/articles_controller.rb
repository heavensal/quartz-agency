class ArticlesController < ApplicationController


  def index
    @articles = Article.select(:id, :title, :summary, :published_at).order(published_at: :desc).with_attached_image
  end

  def show
    @article = Article.find(params[:id])
  end

end
