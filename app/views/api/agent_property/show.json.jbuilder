@agent_properties.each do |agent_property|
    json.set! agent_property.id do
        json.partial! "agent_property", agent_property: agent_property
    end
end