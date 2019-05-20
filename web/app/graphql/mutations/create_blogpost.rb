module Mutations
  class CreateBlogpost < BaseMutation
    argument :user_id, ID, required: true
    argument :title, String, required: true
    argument :body, String, required: true

    field :blogpost, Types::BlogpostType, null: true
    field :errors, [String], null: true

    def resolve(user_id:, title:, body:)
      blogpost = Blogpost.new(user_id: user_id, title: title, body: body)
      if blogpost.save
        {
          blogpost: blogpost,
          errors: []
        }
      else
        # Failed save, return the errors to the client
        {
          blogpost: nil,
          errors: blogpost.errors.full_messages
        }
      end
    end
  end
end
