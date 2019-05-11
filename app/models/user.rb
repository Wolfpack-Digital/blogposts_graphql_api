class User < ApplicationRecord
  has_many :blogposts, dependent: :destroy

  validates_uniqueness_of :email
end
