Using ruhoh, sass and compass to build github pages.

For production compile stylesheets with compass:

    $ compass compile -e production -s compressed

Then compile static pages with rohuh:

    $ ruhoh compile

Then move compiled site to master branch.
