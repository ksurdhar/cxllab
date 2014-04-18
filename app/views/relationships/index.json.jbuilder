json.array!(@relationships) do |relationship|
  json.partial!("relationships/relationship", :relationship=> relationship)
end