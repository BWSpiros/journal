class PostsController < ApplicationController
  def index
    @posts = Post.all

    respond_to do |format|
      format.html { render :index }
      format.json { render json: @posts }
    end

  end

  def destroy
    @post = Post.find(params[:id])
    @post.destroy

    render json: 'ok'
  end


  def create
    @post = Post.new(params[:post])

    if @post.save
      render json: @posts
    else
      # render something
    end
  end

  def show
    @post = Post.find(params[:id])
    render json: @post
  end
end
