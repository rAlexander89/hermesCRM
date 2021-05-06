class Api::PipelineController < ApplicationController

    require 'concerns/tabulations_module'
    include TabulationMethods

    def index
        @pipelines = Pipeline.all
        render :index
    end

    def show
        @pipeline = Pipeline.where(id: params[:id])
        if @pipeline
            render json: @pipeline
        else
            render json: @pipeline.errors.full_messages, status: 422
        end
    end

    def fetch_pipeline

        status = params[:pipeline_status]



        if (status == 'Contacted')
            @pipelines = Pipeline.where(contacted: true)
            render :index
        # elsif (status == 'stats')
        #     @pipelines = Pipeline.all
        #     render :index
        elsif (!!status)
            @pipelines = Pipeline.where(pipeline_status: params[:pipeline_status])
            render :index
        else
            render json: @pipeline.errors.full_messages, status: 422
        end
    end

    def fetch_lead_stats
        total_count = Pipeline.all.count
        contacted_count = Pipeline.where(contacted: true).count
        counter_received_count = Pipeline.where(pipeline_status: 'Counter Received').count
        counter_responded_count = Pipeline.where(pipeline_status: 'Counter Responded').count
        under_contract_count = Pipeline.where(pipeline_status: 'Under Contract').count
        closed_count = Pipeline.where(pipeline_status: 'Closed').count

        @sorted_stats = gen_statistics(
            total_count, 
            contacted_count,  
            counter_received_count,
            counter_responded_count,
            under_contract_count,
            closed_count
        ) 

        render json: @sorted_stats
    end

    # def fetch_uncontacted_properties
    #     # @pipeline = Pipeline.where(pipeline_status: 'Uncontacted').or(Pipeline.where(pipeline_status: 'Active')).where.not(contacted: true)
    #     @pipelines = Pipeline.where(pipeline_status: 'Uncontacted').or(Pipeline.where(pipeline_status: 'Active')).where.not(contacted: true)
    #     debugger
    #     render :index
    # end
    
    # def fetch_contacted_properties
    #     @pipelines = Pipeline.where(contacted: true)
    #     # @pipeline = Pipeline.where(contacted: true)
    #     render :index
    # end

    # def fetch_watched_properties
    #     @pipeline = Pipeline.where(watched: true)
    #     render :index
    # end

    # def fetch_counter_received_properties
    #     @pipeline = Pipeline.where(pipeline_status: 'Counter Received')
    #     render :index
    # end

    # def fetch_counter_responded_properties
    #     @pipeline = Pipeline.where(pipeline_status: 'Counter Responded')
    #     render :index
    # end

    # def fetch_under_contract_properties
    #     @pipeline = Pipeline.where(pipeline_status: 'Under Contract')
    #     render :index
    # end

    # def fetch_contingencies_removed_properties
    #     @pipeline = Pipeline.where(pipeline_status: 'Contingencies Removed')
    #     render :index
    # end

    # def fetch_closed_properties
    #     @pipeline = Pipeline.where(pipeline_status: 'Closed')
    #     render :index
    # end

    def create
        @pipeline = Pipeline.new(pipeline_params)
        if @pipeline.save
            puts 'new pipeline item created'
        else
            puts 'nooooo create'
        end
    end

    def update
        @pipeline = Pipeline.find_by(id: params[:id])
        if @pipeline && @pipeline.update(pipeline_params)
            render :show
        else
            render json: @pipeline.errors.full_messages, status: 422
        end
    end

    private

    def pipeline_params
        params.require(:pipeline).permit(:pipeline_status, :listing_status, :property_id, :user_id, :contacted, :watched)
    end
end
