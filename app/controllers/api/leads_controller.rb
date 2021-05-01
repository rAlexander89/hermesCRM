require 'byebug'

class Api::LeadsController < ApplicationController
    before_action :require_login


    def create_lead(agent_hash, property_hash, pipeline_hash)
        
        @agent = Agent.new(agent_hash)
        
        if @agent.save!
            puts 'agent saved!'
            @property = Property.new(property_hash)

            if @property.save!
                @pipeline = Pipeline.new(property_id: @property.id, pipeline_status: 'Uncontacted', listing_status: pipeline_hash[:listing_status])

                if @pipeline.save!
                    lead = {
                        "property" => @property.id,
                        "pipeline" => @pipeline,
                        "agent" => @agent
                    }
                    render json: lead
                end
            else 
                redirect json: @property.errors.full_messages, status: 422
                puts 'property and pipeline did not save'
            end
        end

    end

     def create_property(property_hash, pipeline_hash)
        @property = Property.new(property_hash)
        if @property.save!
            @pipeline = Pipeline.new(property_id: @property.id, pipeline_status: 'Uncontacted', listing_status: pipeline_hash[:listing_status])
            if @pipeline.save!
                render json: @property
            end
        else 
            redirect json: @property.errors.full_messages, status: 422
            puts 'property and pipeline did not save'
        end
    end

    def create_agent(agent_hash)
        @agent = Agent.new(agent_hash)
        if @agent.save
            puts 'agent saved!'
        end
    end

    def create
        @lead = params

        property_hash = {
                address: @lead[:address], #
                city: @lead[:city], #
                zipcode: @lead[:zip],#
                house_number: @lead[:housenumber], #
                st_prefix: @lead[:street_prefix], #
                st_name: @lead[:street_name], #
                st_suffix: @lead[:street_suffix], #
                county: @lead[:county], #
                state: @lead[:state], #
                apn: @lead[:apn], #
                arv_offer: @lead[:ao], 
                list_arv: @lead[:la], 
                list_price: @lead[:listprice], #
                list_offer: @lead[:lo],
                offer_date_dash: @lead[:date],
                offer_date: @lead[:datetext],
                offer_text: @lead[:offertext], #///
                offer: @lead[:offer], #
                arv: @lead[:arv], #
                bac: @lead[:bac], #
                bed_count: @lead[:bed], #
                bath_count: @lead[:bath], #
                lot_area: @lead[:lot_area], #
                gla: @lead[:gla], #
                listing_id: @lead[:listing_id], #
                agent_id: @lead[:agentid] #
        }

        pipeline_hash = {
            listing_status: @lead[:status] #
        }

        # IO.write("../../log/failed_property_insert", @lead_hash.join(' ') + '\n, mode: 'a')

        agent_hash = {
                agent_first: @lead[:firstname], #
                agent_last: @lead[:lastname],# 
                agent_contact: @lead[:cell], #
                agent_email: @lead[:email], #
                agent_id: @lead[:agentid], #
                agent_broker: @lead[:officename], #
                agent_broker_id: @lead[:officeid] #
        }

        create_lead(agent_hash, property_hash, pipeline_hash)
    end

    private

    def lead_params
        params.permit!
    end
end
