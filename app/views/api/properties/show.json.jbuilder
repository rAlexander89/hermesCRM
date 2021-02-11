
json.property do
    json.extract! @property, :id, :address, :city, :zipcode, :created_at
end