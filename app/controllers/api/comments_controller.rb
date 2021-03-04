class Api::CommentsController < ApplicationController
  before_action :require_login
  

  def index
    @comments = Comment.all
    render :index
  end

   def create
    @comment = Comment.new(comment_params);
    debugger
    if @comment.save
      @comments = Comment.where(property_id: params[:comment][:property_id])
      render :index
    else
      render json: comment.errors.full_messages, status: 422 
    end
  end

  def show  # Doesn't show an individual comment. Shows comments that belong to an object.
    @comments = Comment.where(property_id: params[:property_id])
    render :index
  end

  def destroy
      @comment = Comment.find_by(id: params[:id])
      @comment.destroy
  end

  private

  def comment_params
    debugger
    params.require(:comment).permit(:comment_txt, :user_id, :property_id, :privileges)
  end

end