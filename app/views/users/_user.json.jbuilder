json.(user, :id, :email, :about, :genre, :producer, :sc_access_token, :sc_id)

json.relationships(user.relationships) do |relationship|
  json.partial!("relationships/relationship", :relationship => relationship)
end
