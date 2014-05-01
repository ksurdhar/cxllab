# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)

User.create!(email: "guest123@gmail.com", password: "password", sc_username: "guest123", sc_permalink_url: "http://soundcloud.com/mynameisezra")
User.create!(email: "flume@gmail.com", password: "password", sc_username: "flume", sc_permalink_url: "http://soundcloud.com/flume")
User.create!(email: "chetf@gmail.com", password: "password", sc_username: "chet faker", sc_permalink_url: "http://soundcloud.com/chet-faker")
User.create!(email: "sammysmith@gmail.com", password: "password", sc_username: "sam smith", sc_permalink_url: "http://soundcloud.com/samsmithworld")
User.create!(email: "ellieg@gmail.com", password: "password", sc_username: "ellie goulding", sc_permalink_url: "http://soundcloud.com/elliegoulding")

Relationship.create!(liked_user_id: 1, liker_id: 2, like: true)
Relationship.create!(liked_user_id: 1, liker_id: 4, like: true)