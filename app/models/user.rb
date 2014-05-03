class User < ActiveRecord::Base
  # Include default devise modules. Others available are:
  # :confirmable, :lockable, :timeoutable and :omniauthable
  devise :database_authenticatable, :registerable,
         :recoverable, :rememberable, :trackable, :validatable, :timeoutable
  has_one :sc_token

  def timeout_in
    15.minutes
  end


  has_many :liker_relationships, :foreign_key => :liked_user_id, :class_name => 'Relationship'
  has_many :liked_relationships, :foreign_key => :liker_id, :class_name => 'Relationship'

  has_many :liked_users, 
  through: :liked_relationships, 
  source: :liked_user

  has_many :likers, 
  through: :liker_relationships, 
  source: :liker

  has_many :sent_emails, :foreign_key => :sender_id, :class_name => 'Email'
  has_many :recieved_emails, :foreign_key => :reciever_id, :class_name => 'Email'

  has_many :senders, 
  through: :recieved_emails, 
  source: :sender

  has_many :recievers, 
  through: :sent_emails, 
  source: :reciever 

  
end
