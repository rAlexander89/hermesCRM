class Api::CsvController < ApplicationController

    def create_property(property_hash, pipeline_hash)
        @property = Property.new(property_hash)
        if @property.save!
            @pipeline = Pipeline.new(property_id: @property.id, pipeline_status: 'Uncontacted', listing_status: pipeline_hash[:listing_status])
            if @pipeline.save!
                puts 'pipeline saved!'
            end
        else 
            render json: @property.errors.full_messages, status: 422
            puts 'property and pipeline did not save'
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

            property_hash = {
                    address: row[:address], #
                    city: row[:city], #
                    zipcode: row[:zip],#
                    house_number: row[:housenumber], #
                    st_prefix: row[:street_prefix], #
                    st_name: row[:street_name], #
                    st_suffix: row[:street_suffix], #
                    county: row[:county], #
                    state: row[:state], #
                    apn: row[:apn], #
                    arv_offer: row[:ao], 
                    list_arv: row[:la], 
                    list_price: row[:listprice], #
                    list_offer: row[:lo],
                    offer_date_dash: row[:date],
                    offer_date: row[:datetext],
                    offer_text: row[:offertext], #///
                    offer: row[:offer], #
                    arv: row[:arv], #
                    bac: row[:bac], #
                    bed_count: row[:bed], #
                    bath_count: row[:bath], #
                    lot_area: row[:lot_area], #
                    gla: row[:gla], #
                    listing_id: row[:listing_id], #
                    agent_id: row[:agentid], #
            }

            pipeline_hash = {
                listing_status: row[:status] #
            }

            # IO.write("../../log/failed_property_insert", row_hash.join(' ') + '\n, mode: 'a')

            agent_hash = 
                {
                    agent_first: row[:firstname], #
                    agent_last: row[:lastname],# 
                    agent_contact: row[:cell], #
                    agent_email: row[:email], #
                    agent_id: row[:agentid], #
                    agent_broker: row[:officename], #
                    agent_broker_id: row[:officeid], #
                }

            # Agent.create! agent_hash 
            # Property.create! property_hash
            create_agent(agent_hash)
            create_property(property_hash, pipeline_hash)
        end
    end

    private
    def csv_params
        params.permit(:csv)
    end
end
