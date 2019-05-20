module Mutations
  class CreateComment < BaseMutation
    argument :user_id, ID, required: true
    argument :blogpost_id, ID, required: true
    argument :body, String, required: true

    field :comment, Types::CommentType, null: true
    field :errors, [String], null: true

    def resolve(user_id:, blogpost_id:, body:)
      comment = Comment.new(user_id: user_id, blogpost_id: blogpost_id, body: body)
      if comment.save
        {
          comment: comment,
          errors: []
        }
      else
        # Failed save, return the errors to the client
        {
          comment: nil,
          errors: comment.errors.full_messages
        }
      end
    end
  end
end
