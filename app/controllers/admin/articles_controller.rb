class Admin::ArticlesController < ApplicationController
  before_action :authenticate_admin!
  before_action :set_article, only: [:show, :edit, :update, :destroy]

  def new
    @article = Article.new
  end

  def create
    @article = Article.new(article_params)
    if @article.save
      redirect_to articles_path
      flash[:notice] = "L'article a bien été créé avec succès."
    else
      render :new
      flash[:alert] = "L'article n'a pas pu être créé."
    end
  end

  def edit
    @article = Article.find(params[:id])
  end

  def update
    @article = Article.find(params[:id])
    @article.update(article_params)
    if @article.save
      redirect_to articles_path
      flash[:notice] = "L'article a bien été modifié avec succès."
    else
      render :edit
      flash[:alert] = "L'article n'a pas pu être modifié."
    end
  end

  def destroy
    @article = Article.find(params[:id])
    @article.destroy
  end

  private

  def article_params
    params.require(:article).permit(:title, :summary, :published_at, :content)
  end

  def set_article
    @article = Article.find(params[:id])
  end

end
