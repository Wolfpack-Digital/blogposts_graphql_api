class User < ApplicationRecord
  has_many :blogposts, dependent: :destroy
  has_many :comments, dependent: :destroy

  validates_uniqueness_of :email
end
