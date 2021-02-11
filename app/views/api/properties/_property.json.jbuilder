json.properties do 
    json.extract! @property, :address, :city, :zipcode, :created_at
end