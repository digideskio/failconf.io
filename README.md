# jsist 2014 JavaScript Conference
## Official Website

### September 27, 2014 - İstanbul

http://jsist.org

# Install

  Use `rvm` or `rbenv` and version `2.1.0`

    bundle install --path vendor/bundle

    # to preview / run
    bundle exec middleman

# Deployment

Do not forget to create `credentials.rb` file on project root and add your
server credentials like:

    DEPLOY_USER = "YOUR_USERNAME"
    DEPLOY_HOST = "example.com"
    DEPLOY_PATH = "/path/to/your/static_app/your_site"

then;

    bundle exec middleman deploy

enjoy!
