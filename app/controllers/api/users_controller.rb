
class Api::UsersController < ApplicationController
    
    def index
        @users = User.all 
        render :index
    end

    def show
        @user = User.find_by(id: params[:id])
        render :show
    end

    def create
        @user = User.new(user_params)
        # if @user.create
        if @user.save(:validate => false)
        # if @user.send(:create_without_callbacks)
            render json: @user
        else
            render json: @user.errors.full_messages, status: 422
        end
    end

    private
    def user_params
        params.require(:user).permit(:first_name, :last_name, :password, :email, :privileges)
    end
end
