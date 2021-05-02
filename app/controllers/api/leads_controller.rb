
class Api::LeadsController < ApplicationController
    before_action :require_login
    require 'concerns/leads_module'
    include LeadCreationMethods

    def create
        @lead = params
        if create_lead(prep_agent(params), prep_property(params), prep_pipeline(params))
            puts 'lead created succesfully'
        else
            puts 'lead creation failed'
        end
    end

    private

    def lead_params
        params.permit!
    end
end
