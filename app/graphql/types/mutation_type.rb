module Types
  class MutationType < Types::BaseObject
    field :create_user, mutation: Mutations::CreateUser
    field :create_blogpost, mutation: Mutations::CreateBlogpost
    field :create_comment, mutation: Mutations::CreateComment
  end
end
