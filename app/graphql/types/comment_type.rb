
module Types
  class CommentType < Types::BaseObject

    field :id, ID, null: false
    field :body, String, null: true
    field :blogpost, Types::BlogpostType, null: true
    field :user, Types::UserType, null: true
  end
end
