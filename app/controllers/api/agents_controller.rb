class Api::AgentsController < ApplicationController
    
    def index
        @agents = Agent.all 
        render :index
    end

    def show
        @agent = Agent.find_by(id: params[:id])
        render :show
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

    def find_by_listing_id
        debugger
        @agent = Agent.where (":listing_id = ANY (listing_id)")
        if @agent
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
                :agent_broker_id,
                :listing_id
            )
    end
end
