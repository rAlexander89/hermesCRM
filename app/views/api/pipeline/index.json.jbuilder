@pipelines.each do |pipeline|
    json.set! pipeline.id do #this sets an object and uses pipeline.id as a key
        # json.extract! lead,
        #     :id,
        #     :pipeline_status,
        #     :property_id,
        #     :user_id,
        #     :contacted,
        #     :listing_status,
        #     :watched
        json.partial! 'pipeline', pipeline: pipeline
        # json.partial! '/api/pipeline/pipeline', pipeline: lead
    end
end
