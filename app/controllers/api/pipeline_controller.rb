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

        if status == 'Contacted'
            @pipelines = Pipeline.where(contacted: true)
            render :index
        elsif status == 'Watched'
            @pipelines = Pipeline.where(watched: true)
            render :index
        elsif !!status
            @pipelines = Pipeline.where(pipeline_status: params[:pipeline_status])
            render :index
        else
            render json: @pipeline.errors.full_messages, status: 422
        end
    end

    def fetch_lead_stats

        @sorted_stats = gen_statistics(
            total_count = Pipeline.all.count,
            contacted_count = Pipeline.where(contacted: true).count,
            counter_received_count = Pipeline.where(pipeline_status: 'Counter Received').count,
            counter_responded_count = Pipeline.where(pipeline_status: 'Counter Responded').count,
            under_contract_count = Pipeline.where(pipeline_status: 'Under Contract').count,
            closed_count = Pipeline.where(pipeline_status: 'Closed').count
        )

        render json: @sorted_stats
    end


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
        debugger
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
