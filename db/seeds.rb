# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)

User.create!(email: "demo_user@gmail.com", password: "password", sc_username: "hopefully my employer", sc_permalink_url: "http://soundcloud.com/mynameisezra")
User.create!(email: "notreallytaku@gmail.com", password: "password", sc_username: "ta-ku", sc_permalink_url: "http://soundcloud.com/takugotbeats")
User.create!(email: "notreallyflume@gmail.com", password: "password", sc_username: "flume", sc_permalink_url: "http://soundcloud.com/flume")
User.create!(email: "notreallytycho@gmail.com", password: "password", sc_username: "tycho", sc_permalink_url: "http://soundcloud.com/tycho")
User.create!(email: "notreallychet@gmail.com", password: "password", sc_username: "chet faker", sc_permalink_url: "http://soundcloud.com/chet-faker")
User.create!(email: "notreallysam@gmail.com", password: "password", sc_username: "sam smith", sc_permalink_url: "http://soundcloud.com/samsmithworld")
User.create!(email: "notreallyellie@gmail.com", password: "password", sc_username: "ellie goulding", sc_permalink_url: "http://soundcloud.com/elliegoulding")
User.create!(email: "notreallygambino@gmail.com", password: "password", sc_username: "childish gambino", sc_permalink_url: "http://soundcloud.com/childish-gambino")

Relationship.create!(liked_user_id: 1, liker_id: 2, like: true)
Relationship.create!(liked_user_id: 1, liker_id: 4, like: true)
Relationship.create!(liked_user_id: 1, liker_id: 8, like: true)