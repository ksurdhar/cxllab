class User < ActiveRecord::Base
  # Include default devise modules. Others available are:
  # :confirmable, :lockable, :timeoutable and :omniauthable
  devise :database_authenticatable, :registerable,
         :recoverable, :rememberable, :trackable, :validatable
  has_one :sc_token


  has_many :liker_relationships, :foreign_key => :liker_id, :class_name => 'Relationship'
  has_many :liked_relationships, :foreign_key => :liked_user_id, :class_name => 'Relationship'

  has_many :liked_users, 
  through: :liked_relationships, 
  source: :liked_user

  has_many :likers, 
  through: :liker_relationships, 
  source: :liker
end
