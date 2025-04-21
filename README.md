# README

Yarrble is a web (and soon mobile) app that enables sailors to find anchorages and share reviews. It's like Yelp for anchorages.

# Demo

https://www.youtube.com/watch?v=U5X_Ggbzc9I

# Configuration

- Frontend: React and Redux ([recently refactored away from jQuery](https://medium.com/@mikkanthrope/migrating-to-react-5536447f5b67))
- Backend: Ruby 3.4.2, Rails 8, Postgres, PostGIS
- Infrastructure: AWS (EC2, RDS), Packer AMI

# System dependencies

Mapbox API
rack-cors
activerecord

# Deployment instructions

1) Clone this repo
2) Install PostgreSQL
3) Install PostGIS
4) Install chruby and ruby-install or your favorite Ruby version manager
5) Install Ruby 3.4.2
6) Install Bundler gem
7) Install gems
8) Install Node.js
9) Install npm modules
10) Switch to /client directory: ´cd client´
11) Run ´npm install´
12) Return to root directory: ´cd ../´
13) Start Postgres database server: ´brew services start postgresql´
14) Run ´rails db:create´
15) Connect to database ´\connect yarrble_development;´
16) Create postgis extension with ´CREATE EXTENSION postgis;´
17) Run ´rails db:migrate´ then ´rails db:seed´
18) Run `rake start` (starts both frontend and backend servers)

# Contributions

Contributions are welcome! Just make a pull request and we'll review it shortly.
