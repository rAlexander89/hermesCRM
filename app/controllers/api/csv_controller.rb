class Api::CsvController < ApplicationController
    
    require 'concerns/leads_module'
    include LeadCreationMethods

 
    def import
        CSV.foreach(params[:csv].path, headers: true, :header_converters => :symbol, skip_blanks: true, encoding:'iso-8859-1:utf-8') do |params, i|

            if import_leads(prep_agent(params), prep_property(params), prep_pipeline(params))
                puts 'leads succesfully imported'
            else 
                puts 'property and pipeline did not save'
            end

        end
    end

    private
    def csv_params
        params.permit(:csv)
    end
end