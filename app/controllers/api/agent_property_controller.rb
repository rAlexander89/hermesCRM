class Api::AgentPropertyController < ApplicationController
    before_action :require_login

    def create
        @agent_property = AgentProperty.new(agent_property_params)

        if @agent_property.save
            render json: @agent_property
        else 
            render json: @agent_property.errors.full_messages, status: 422
        end
    end


    def show
        agent_id = params[:params]
        property_id = params[:params]

        @agent_properties = AgentProperty.where(agent_id: agent_id, property_id: property_id)

        render :show
    end


    private

    def agent_property_params
        params.require(:agent_property).permit(:agent_id, :property_id, :listing_id, :user_id)
    end

end
