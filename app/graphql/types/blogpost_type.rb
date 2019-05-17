module Types
  class BlogpostType < Types::BaseObject
    field :id, ID, null: false
    field :title, String, null: true
    field :body, String, null: true
    field :body_short, String, null: true
    field :user_id, ID, null: false

    def body_short
      object.body&.truncate(20)
    end
  end
end
