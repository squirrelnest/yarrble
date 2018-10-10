module Types
  class QueryType < GraphQL::Schema::Object
    description "The query root of this schema"

    # field signatures

    field :users, [Types::UserType], null: true

    field :user, UserType, null: true do
      description "Find a user by ID"
      argument :id, ID, required: true
    end

    field :locations, [Types::LocationType], null: true

    # implementations

    def users
      User.all
    end

    def user(id:)
      User.find(id)
    end

    def locations
      Location.all
    end

  end
end

# OLD SYNTAX
# Types::QueryType = GraphQL::ObjectType.define do
#   name 'allUsers'
#
#   # queries are just represented as fields
#   field :users, types[Types::UserType] do
#     # resolve would be called in order to fetch data for that field
#     resolve -> (obj, args, ctx) { User.all }
#   end
# end
