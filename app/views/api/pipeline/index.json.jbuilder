@pipeline.each do |lead|
    json.set! lead.id do #this sets an object and uses lead.id as a key
        json.extract! lead,
            :id,
            :user_id,
            :property_id,
            :pipeline_status
    end
end
