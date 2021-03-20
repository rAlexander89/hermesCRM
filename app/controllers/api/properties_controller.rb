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
        @property = Property.new(property_params)
        if @property.save 
            if Pipeline.create(property_id: @property.id)
            render :index
            end
        else
            render json: @property.errors.full_messages, status: 422
        end
    end

    def import
        Property.import(params[:csv])
        render :index
    end

    def update
        @property = Property.find_by(id: params[:id])
        if @property && @property.update(property_params)
                render :show
        else
            render json: @property.errors.full_messages, status: 422
        end
    end

    def destroy
        @property = Property.find_by(id: params[:id])
        if @property && @property.destroy
                render json: @property.id
        else
                render json: @property.errors.full_messages, status: 422
        end
    end

    def property_params
        params.require(:property)
            .permit(
                :address, 
                :agent_id, 
                :apn, 
                :bac, 
                :arv,
                :arv_offer, 
                :bath_count, 
                :bed_count, 
                :city, 
                :county, 
                # :contacted,
                :gla, 
                :house_number, 
                :list_arv, 
                :list_offer, 
                :list_price, 
                :lot_area, 
                :offer, 
                :offer_date_dash, 
                :offer_text, 
                :state, 
                :status, 
                :st_name, 
                :st_prefix, 
                :st_suffix, 
                :zipcode, 
                :listing_id, 
                :csv
        )
    end
end
