Using ruhoh, sass and compass to build github pages.

During development, preview pages with rackup:

    $ bundle exec rackup -p 9292

Auto compile stylesheets with compass:

    $ bundle exec compass watch .


For production compile stylesheets with compass:

    $ bundle exec compass compile -e production -s compressed

Then compile static pages with rohuh:

    $ bundle exec ruhoh compile

Then move compiled site to master branch.
