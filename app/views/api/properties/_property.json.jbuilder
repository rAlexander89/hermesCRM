json.properties do 
    json.extract! @property, 
    :address, 
    :agent_id, 
    :city, 
    :contacted,
    :zipcode, 
    :st_prefix,
    :st_name,
    :st_suffix,
    :county,
    :state,
    :gla,
    :lot_area,
    :apn,
    :listing_id,
    :status,
    :list_offer,
    :list_arv,
    :offer,
    :offer_text,
    :arv,
    :bac,
    :list_price,
    :created_at, 
    :updated_at, 
    :offer_date_dash
end