
@properties.each do |property|
    json.set! property.id do #this sets an object and uses property.id as a key
        json.extract! property, :id, :address, :city, :zipcode
    end
end

