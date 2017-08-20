# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)
Post.destroy_all
15.times do
  body_title = "<h2>" + Faker::MostInterestingManInTheWorld.quote + "</h2>"
  body_copy = "<p>" + Faker::HitchhikersGuideToTheGalaxy.quote + "</p>"
  Post.create(title: Faker::Superhero.name, body: body_title + body_copy)
end
