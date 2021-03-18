class Api::PipelineController < ApplicationController

    helper_method :create

    def index
        @pipelines = Pipeline.all
        render :index
    end

    def show
        @pipeline = Pipeline.all.where(pipeline_status: params[:pipeline_status])
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
        @pipeline = Property.find_by(id: params[:id])
        if @pipeline && @pipeline.update(pipeline_params)
            render :show
        else
            render json: @pipeline.errors.full_messages, status: 422
        end
    end

    private

    def pipeline_params
        params.require(:pipeline).permit(:pipeline_status, :property_id, :user_id)
    end
end
