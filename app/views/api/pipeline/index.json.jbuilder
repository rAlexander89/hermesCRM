@pipeline.each do |lead|
    json.set! lead.id do #this sets an object and uses lead.id as a key
        json.extract! lead,
            :id,
            :user_id,
            :property_id,
            :listing_status,
            :pipeline_status,
            :contacted,
            :watched
    end
end
