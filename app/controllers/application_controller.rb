class ApplicationController < ActionController::Base
    skip_before_action :verify_authenticity_token

    helper_method :current_user, :require_login, :logged_in?, :create_property, :create_agent

    def current_user
        @current_user ||= User.find_by(session_token: session[:session_token])
    end

    def login!(user)
        session[:session_token] = user.reset_session_token!
    end

    def logged_in?
        !!current_user
    end

    def logout!
        current_user.reset_session_token! if logged_in?
        session[:session_token] = nil
        current_user = nil
    end

    def require_login
        redirect_to new_session_url unless logged_in?
    end

    # def create_property(property_hash, pipeline_hash)
    #     @property = Property.new(property_hash)
    #     if @property.save!
    #         @pipeline = Pipeline.new(property_id: @property.id, pipeline_status: 'Uncontacted', listing_status: pipeline_hash[:listing_status])
    #         if @pipeline.save!
    #             puts 'pipeline saved!'
    #         end
    #     else 
    #         render json: @property.errors.full_messages, status: 422
    #         puts 'property and pipeline did not save'
    #     end
    # end

    # def create_agent(agent_hash)
    #     @agent = Agent.new(agent_hash)
    #     if @agent.save
    #         puts 'agent saved!'
    #     end
    # end

    
end
