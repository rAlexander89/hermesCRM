class Api::CsvController < ApplicationController


    def create_property(property_hash)
        @property = Property.new(property_hash)
        if @property.save
            @pipeline = Pipeline.new(property_id: @property.id, pipeline_status: 'Unassigned')
            if @pipeline.save!
                puts 'pipeline saved!'
            end
        end
    end

    def create_agent(agent_hash)
        @agent = Agent.new(agent_hash)
        if @agent.save
            puts 'agent saved!'
        end
    end

    def import
        CSV.foreach(params[:csv].path, headers: true, :header_converters => :symbol, skip_blanks: true, encoding:'iso-8859-1:utf-8') do |row, i|

            property_hash = 
                {
                    offer_date_dash: row[:date],
                    offer_date: row[:datetext],
                    address: row[:address], 
                    apn: row[:apn],
                    arv_offer: row[:ao],
                    list_arv: row[:la],
                    list_price: row[:listprice],
                    list_offer: row[:lo],
                    arv: row[:arv],
                    offer: row[:offer],
                    offer_text: row[:offertext],
                    bac: row[:bac],
                    house_number: row[:housenumber],
                    st_prefix: row[:street_prefix],
                    st_name: row[:street_name],
                    st_suffix: row[:street_suffix],
                    city: row[:city],
                    state: row[:state],
                    county: row[:county],
                    zipcode: row[:zip],
                    bed_count: row[:bed],
                    bath_count: row[:bath],
                    lot_area: row[:lot_area],
                    gla: row[:gla],
                    listing_id: row[:listing_id],
                    status: row[:status],
                    previous_status: row[:previous_status],
                    agent_id: row[:agentid],

                }

            # IO.write("../../log/failed_property_insert", row_hash.join(' ') + '\n, mode: 'a')

            agent_hash = 
                {
                    agent_first: row[:firstname],
                    agent_last: row[:lastname],
                    agent_contact: row[:cell],
                    agent_email: row[:email],
                    agent_id: row[:agentid],
                    agent_broker: row[:officename],
                    agent_broker_id: row[:officeid],
                }


            # Agent.create! agent_hash 
            # Property.create! property_hash
            create_agent(agent_hash)
            create_property(property_hash)
        end
    end

    private
    def csv_params
        params.permit(:csv)
    end
end
