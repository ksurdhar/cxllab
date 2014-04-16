class Relationship < ActiveRecord::Base

  belongs_to( 
  :liker,
  :class_name => "User",
  :foreign_key => :liker_id,
  :primary_key => :id)
  
  belongs_to(
  :liked_user,
  :class_name => "User",
  :foreign_key => :liked_user_id,
  :primary_key => :id)

end
