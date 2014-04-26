class Email < ActiveRecord::Base

  belongs_to( 
  :sender,
  :class_name => "User",
  :foreign_key => :sender_id,
  :primary_key => :id)
  
  belongs_to(
  :reciever,
  :class_name => "User",
  :foreign_key => :reciever_id,
  :primary_key => :id)
end
