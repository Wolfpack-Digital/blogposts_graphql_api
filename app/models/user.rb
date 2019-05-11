class User < ApplicationRecord
  has_many :blogposts, dependent: :destroy
end
