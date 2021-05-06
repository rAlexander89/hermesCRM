class Api::AgentsController < ApplicationController
    before_action :require_login

    helper_method :create
    
    def index
        @agents = Agent.all 
        render :index
    end

    def show #this gets an agent by their active record id 
        @agent = Agent.find_by(id: params[:id].to_i)
        render :show
    end

    def fetch_agent_by_agent_license #this gets an agent by their mls id
        @agent = Agent.find_by(agent_id: params[:agent_id])
        render json: @agent
    end

    def create
        @agent = Agent.new(agent_params)
        if @agent.save
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