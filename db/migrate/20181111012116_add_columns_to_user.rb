class AddColumnsToUser < ActiveRecord::Migration[5.2]
  def change
    add_column :users, :username, :string
    add_column :users, :type_of_user, :integer
  end
end
