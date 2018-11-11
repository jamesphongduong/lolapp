class User < ApplicationRecord
  # Include default devise modules. Others available are:
  # :confirmable, :lockable, :timeoutable, :trackable and :omniauthable
  devise :database_authenticatable, :registerable,
         :recoverable, :rememberable, :validatable

  before_save :default_value

  enum type_of_user: {'customer': 0, 'admin': 1}
  
  # private 

  def default_value
    self.type_of_user = 0
  end

end
