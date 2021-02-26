@agents.each do |agent|
    json.set! agent.id do
        json.partial! "agent", agent: agent
    end
end