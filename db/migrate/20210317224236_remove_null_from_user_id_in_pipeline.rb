class RemoveNullFromUserIdInPipeline < ActiveRecord::Migration[5.2]
  def change
    change_column_null :pipeline, :user_id, true
  end
end
