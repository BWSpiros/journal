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
      redirect_to post_url(@post)
    else
      redirect_to root_url
    end
  end

  def show
    @post = Post.find(params[:id])
  end
end
