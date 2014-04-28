json.(user, :id, :email, :about, :genre, :producer, :sc_access_token, :sc_id, :sc_username, :sc_permalink, :sc_permalink_url, :sc_uri)

json.relationships(user.liked_relationships) do |relationship|
  json.partial!("relationships/relationship", :relationship => relationship)
end
