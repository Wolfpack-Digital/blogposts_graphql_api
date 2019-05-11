# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#

5.times do
  user = User.create(
    email: Faker::Internet.unique.email,
    name: Faker::Movies::StarWars.unique.character
  )

  3.times do
    Blogpost.create(
      user: user,
      title: Faker::Movies::StarWars.quote,
      body: Faker::Lorem.paragraphs(rand(2..8)).join('.')
    )
  end
end
