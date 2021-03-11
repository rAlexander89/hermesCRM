class Api::AgentsController < ApplicationController
    
    def index
        @agents = Agent.all 
        render :index
    end

    def show
        @agent = Agent.find_by(id: params[:id].to_i)
        render :show
    end

    def fetch_agent_by_agent_license
        @agent = Agent.find_by(agent_id: params[:agent_id])
        render json: @agent
    end

    def create
        @agent = Agent.new(agent_params)
        # @agent.properties.build
        if @agent.save
            login!(@agent)
            render json: @agent
        else
            render json: @agent.errors.full_messages, status: 422
        end
    end

    private
    def agent_params
        params.require(:agent)
            .permit(
                :agent_first, 
                :agent_last,
                :agent_contact,
                :agent_email,
                :agent_id,
                :agent_broker,
                :agent_broker_id,
                :listing_id
            )
    end
end