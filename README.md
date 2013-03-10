Using ruhoh, sass and compass to build github pages.

During development, preview pages with rackup:

    $ rackup -p 9292

Auto compile stylesheets with compass:

    $ compass watch .


For production compile stylesheets with compass:

    $ compass compile -e production -s compressed

Then compile static pages with rohuh:

    $ ruhoh compile

Then move compiled site to master branch.
