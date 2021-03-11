
json.property do
    json.extract! @property, :id, :address, :agent_id, :city, :zipcode, :created_at
end