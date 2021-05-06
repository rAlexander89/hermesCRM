require 'active_support/concern'

module TabulationMethods
    extend ActiveSupport::Concern

    def gen_statistics(total_count, contacted_count, counter_received_count, counter_responded_count, under_contract_count, closed_count )

        # stats = Hash.new(0)


        # contacted = 0
        # total = count.length
        # counter_received = 0
        # counter_responded = 0
        # under_contract = 0
        # closed = 0

        # count.each do |lead| 
        #     debugger
        #     counter[lead[:pipeline_status]] += 1
        #     debugger
        #     lead[:contacted] ? counter['Contacted'] += 1 :  null
        #     debugger
        # end

        stats = {
            "contacted" => float_to_perc_total(contacted_count, total_count),
            "countersReceived" => float_to_perc(counter_received_count, contacted_count),
            "countersResponded" => float_to_perc( counter_responded_count, counter_received_count),
            "underContract" => float_to_perc(under_contract_count,  counter_responded_count),
            "closed" => float_to_perc(closed_count , under_contract_count)
        }

        
            # stats[:contacted] = float_to_perc_total(contacted_count, total_count),
            # stats[:countersReceived] = float_to_perc(counter_received_count, contacted_count)
            # debugger
            # stats[:counterResponded] = float_to_perc( counter_responded_count, counter_received_count)
            # stats[:underContract] = float_to_perc(under_contract_count,  counter_responded_count)
            # stats[:closed] = float_to_perc(closed_count , under_contract_count)


        return stats
    end

    def float_to_perc(num1, num2)
        return nil if ( num2 == 0 && num1 == 0 )
        total = num1 + num2
        stat_in_decimal = num1 / (num1 + num2).to_f * 100
        stat_to_int = stat_in_decimal.to_i
        return stat_to_int.to_s
    end

    def float_to_perc_total(numerator, denominator)
        return nil if ( numerator == 0 && denominator == 0 )
        stat_in_decimal = numerator / denominator.to_f * 100
        stat_to_int = stat_in_decimal.to_i
        return stat_to_int.to_s
    end


end