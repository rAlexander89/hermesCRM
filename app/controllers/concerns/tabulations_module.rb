require 'active_support/concern'

module TabulationMethods
    extend ActiveSupport::Concern

    def gen_statistics(total_count, contacted_count, counter_received_count, counter_responded_count, under_contract_count, closed_count )

        stats = {
            "contacted" => float_to_perc_total(contacted_count, total_count),
            "countersReceived" => float_to_perc(counter_received_count, contacted_count),
            "countersResponded" => float_to_perc( counter_responded_count, counter_received_count),
            "underContract" => float_to_perc(under_contract_count,  counter_responded_count),
            "closed" => float_to_perc(closed_count , under_contract_count)
        }


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