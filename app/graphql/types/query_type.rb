module Types
  class QueryType < Types::BaseObject
    field :users, [Types::UserType], null: false

    field :user, Types::UserType, null: false do
      argument :id, ID, required: true
    end

    field :blogpost, Types::BlogpostType, null: false do
      argument :id, ID, required: true
    end

    def users
      User.all
    end

    def user(id:)
      User.find(id)
    end

    def blogpost(id:)
      Blogpost.find(id)
    end
  end
end
