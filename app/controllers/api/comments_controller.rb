class Api::CommentsController < ApplicationController

    def show
        @comment = Comment.find_by(id: params[:id])
        render :show
    end

    def create
        @comment = Comment.new(comment_params)
        if @comment.save
            render json: @comment
        else
            render json: @comment.errors.full_messages, status: 422
        end
    end

    def update
        @comment = Comment.find_by(id: params[:id])
        if @comment && @comment.update(comment_params)
            render json: @comment
        else
            render json: @comment.errors.full_messages, status: 422
        end
    end

    def destroy
        @comment = Comment.find_by(id: params[:id])
        @comment.destroy unless @comment.nil?
    end

    private
    def comment_params
        params.require(:comment).permit(:user_id, :property_id, :comment_txt)
    end
end
