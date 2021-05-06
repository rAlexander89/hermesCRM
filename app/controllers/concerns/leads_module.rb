require 'active_support/concern'

module LeadCreationMethods
    
    extend ActiveSupport::Concern

    def prep_agent(params)
        @lead = params

        agent_hash = {
                agent_first: @lead[:firstname], #
                agent_last: @lead[:lastname],# 
                agent_contact: @lead[:cell], #
                agent_email: @lead[:email], #
                agent_id: @lead[:agentid], #
                agent_broker: @lead[:officename], #
                agent_broker_id: @lead[:officeid] #
        }

        return agent_hash

    end

    def prep_property(params)
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
                offer_text: @lead[:offertext], 
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

        return property_hash

    end

    def prep_pipeline(params)

        @lead = params

        pipeline_hash = {
            listing_status: @lead[:status] #
        }

        return pipeline_hash

    end

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

    def import_leads(agent_hash, property_hash, pipeline_hash)
        
        @agent = Agent.new(agent_hash)
        @property = Property.new(property_hash)

        if @agent.save!
            puts 'agent saved!'
            if @property.save!
                puts 'property saved'
                @pipeline = Pipeline.new(property_id: @property.id, pipeline_status: 'Uncontacted', listing_status: pipeline_hash[:listing_status])
                @pipeline.save!
                puts 'pipeline saved'
            else 
                redirect json: @property.errors.full_messages, status: 422
                puts 'property and pipeline did not save'
            end
        end
    end

    # def gen_statistics(count)
    #     # debugger

    #     counter = Hash.new(0)


    #     # contacted = 0
    #     # total = @count.length
    #     # counter_received = 0
    #     # counter_responded = 0
    #     # under_contract = 0
    #     # closed = 0

    #     count.each do |lead| 
    #         counter[lead.pipeline_status] += 1
    #         lead.contacted ? counter['Contacted'] += 1 :  null
    #     end

    #     debugger

    #     stats = {
    #         contacted => float_to_perc_total(counter['Contacted'], count.length),
    #         countersReceived => float_to_perc(counter['Counter Received'], counter['Contacted']),
    #         counterResponded => float_to_perc(counter['Counter Responded'], counter['Counter Received']),
    #         underContract => float_to_perc(counter['Counter Responded'], counter['Counter Received']),
    #         closed => float_to_perc(counter['Closed'], counter['Under Contract'])
    #     }

    #     debugger

    #     return stats
    # end

    # def float_to_perc(num1, num2)
    #     return nil if ( num2 == 0 && num1 == 0 )
    #     total = num1 + num2
    #     stat_in_decimal = num1 / (num1 + num2).to_f * 100
    #     stat_to_int = stat_in_decimal.to_i
    #     return stat_to_int.to_s
    # end

    # def float_to_perc_total(numerator, denominator)
    #     return nil if ( numerator == 0 && denominator == 0 )
    #     stat_in_decimal = numerator / denominator.to_f * 100
    #     stat_to_int = stat_in_decimal.to_i
    #     return stat_to_int.to_s
    # end


end