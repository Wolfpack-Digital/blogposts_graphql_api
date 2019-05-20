# README

 ```
  rails new blogposts_graphql_api --skip-test --api
```

```
> rails g model User email:string name:string
> rails g model Blogpost user:belongs_to title:string body:text
```

- add dependencies

- install them
```
  rails generate graphql:install
  bundle
  rails generate graphql:object user
  rails generate graphql:object blogpost
```


- add faker gem
- bundle
- add seeds
- rails db:seed


### Query

```
  query {
    users {
      name
      id
      blogpostsCount
      blogposts {
        id
        title
        bodyShort
        body
      }
    }
  }
```

```
  mutation {
    createUser(input: {
      name: "Florin Ionce",
      email: "florin@wolfpack-digital.com"
    }) {
      user {
        id
        name
        email
      }
      errors
    }
  }
```

- add unique validation on user email
```
  rails g migration add_unique_index_to_user_email
```


- how do we handle n+1 queries?

- https://github.com/salsify/goldiloader
