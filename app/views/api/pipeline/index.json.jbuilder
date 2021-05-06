@pipelines.each do |pipeline|
    json.set! pipeline.id do #this sets an object and uses pipeline.id as a key
        json.partial! 'pipeline', pipeline: pipeline
    end
end
