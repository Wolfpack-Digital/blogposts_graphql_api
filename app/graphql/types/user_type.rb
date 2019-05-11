module Types
  class UserType < Types::BaseObject
    field :id, ID, null: false
    field :name, String, null: true
    field :email, String, null: true
    field :blogposts, [Types::BlogpostType], null: true
    field :blogposts_count, Integer, null: true

    def blogposts_count
      object.blogposts.count
    end
  end
end
