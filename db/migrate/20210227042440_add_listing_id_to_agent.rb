class AddListingIdToAgent < ActiveRecord::Migration[5.2]
  def change
    add_column :agents, :listing_id, :string, array: true, default: []
  end
end
