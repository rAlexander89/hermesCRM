require 'byebug'

class Api::PropertiesController < ApplicationController
    before_action :require_login

    def index
        @properties = Property.all
        render :index
    end

    def show
        @property = Property.find_by(id: params[:id])
        if @property
            render :show
        else
            render json: @property.errors.full_messages, status: 422
        end
    end

    def create
        @property = Property.create(property_params)
        if @property.save
            render :index
        else
            render json: @property.errors.full_messages, status: 422
        end
    end

    def import
        Property.import(params[:csv])
        render :index
        # @properties = Property.import(params[:csv])
        # if @properties.save
        #     render :index
        # else
        #     render json: @properties.errors.full_messages, status: 422
        # end
    end
    


    # def update
    #     @property = Property.find_by(id: params[:id])
    #     if @property && @property.author_id == current_user.id
    #         if @property.update(property_params)
    #             render :show
    #         else
    #             render json: @property.errors.full_messages, status: 422
    #         end
    #     else
    #         render json: @property.errors.full_messages, status: 422
    #     end
    # end

    def destroy
        @property = Property.find_by(id: params[:id])
        if @property && @property.author_id == current_user.id
            if @property.destroy
                render json: @property.id
            else
                render json: @property.errors.full_messages, status: 422
            end
        end
    end


    def property_params
        params.require(:property)
            .permit(
                :address,
                :city,
                :zipcode,
                :offer_date,
                :house_number
                :st_prefix,
                :st_suffix,
                :county,
                :state,
                :bed_count,
                :bath_count,
                :gla,
                :lot_area,
                :apn,
                :listing_id,
                :status,
                :arv,
                :arv_offer,
                :list_offer,
                :list_arv,
                :offer,
                :offer_text,
                :bac, #remember to add this to schema
                :csv,
                )
        # params.require(:property).permit(:csv)
    end
end
