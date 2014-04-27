json.array!(@emails) do |email|
  json.partial!("emails/email", :email=> email)
end