class Api::LeadsController < ApplicationController
    before_action :require_login

     def create_property(property_hash, pipeline_hash)
        @property = Property.new(property_hash)
        if @property.save!
            @pipeline = Pipeline.new(property_id: @property.id, pipeline_status: 'Uncontacted', listing_status: pipeline_hash[:listing_status])
            if @pipeline.save!
                puts 'pipeline saved!'
            end
        else 
            render json: @property.errors.full_messages, status: 422
            puts 'property and pipeline did not save'
        end
    end

    def create_agent(agent_hash)
        @agent = Agent.new(agent_hash)
        if @agent.save
            puts 'agent saved!'
        end
    end

    def create
        @lead = lead_params[:data]
        debugger
        puts @lead

    end

    private

    def lead_params
        params.permit(:agent_hash, :pipeline_hash, :property_hash)
    end

end
