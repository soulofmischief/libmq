const
  o = require( 'ospec' ),
  libmq = require( '../lib' )

const
  q = libmq.query,
  w = libmq.screenWidths

/**
 * Window width & height should be 0 in Node.
 */

o.spec( 'bigDesktopUp', function () {
  o( 'empty', function () {
    o( q.bigDesktopUp()).equals( false )
  })

  o( 'parameter -> true', function () {
    o( q.bigDesktopUp( w.bigDesktopUp )).equals( true )
  })

  o( 'parameter -> false', function () {
    o( q.bigDesktopUp( w.bigDesktopUp - 1)).equals( false )
  })
})


o.spec( 'desktopUp', function () {
  o( 'empty', function () {
    o( q.desktopUp()).equals( false )
  })

  o( 'parameter -> true', function () {
    o( q.desktopUp( w.desktopUp )).equals( true )
  })

  o( 'parameter -> false', function () {
    o( q.bigDesktopUp( w.desktopUp - 1)).equals( false )
  })
})


o.spec( 'phoneOnly', function () {
  o( 'empty', function () {
    o( q.phoneOnly()).equals( true )
  })

  o( 'parameter -> true', function () {
    o( q.phoneOnly( w.phoneOnly )).equals( true )
  })

  o( 'parameter -> false', function () {
    o( q.bigDesktopUp( w.phoneOnly + 1)).equals( false )
  })
})


o.spec( 'tabletPortraitDown', function () {
  o( 'empty', function () {
    o( q.tabletPortraitDown()).equals( true )
  })

  o( 'parameter -> true', function () {
    o( q.tabletPortraitDown( w.tabletPortraitDown )).equals( true )
  })

  o( 'parameter -> false', function () {
    o( q.bigDesktopUp( w.tabletPortraitDown + 1 )).equals( false )
  })
})


o.spec( 'tabletPortraitUp', function () {
  o( 'empty', function () {
    o( q.tabletPortraitUp()).equals( false )
  })

  o( 'parameter -> true', function () {
    o( q.tabletPortraitUp( w.tabletPortraitUp )).equals( true )
  })

  o( 'parameter -> false', function () {
    o( q.tabletPortraitUp( w.tabletPortraitUp - 1)).equals( false )
  })
})


o.spec( 'tabletLandscapeDown', function () {
  o( 'empty', function () {
    o( q.tabletLandscapeDown()).equals( true )
  })

  o( 'parameter -> true', function () {
    o( q.tabletLandscapeDown( w.tabletLandscapeDown )).equals( true )
  })

  o( 'parameter -> false', function () {
    o( q.tabletLandscapeDown( w.tabletLandscapeDown + 1)).equals( false )
  })
})


o.spec( 'tabletLandscapeUp', function () {
  o( 'empty', function () {
    o( q.tabletLandscapeUp()).equals( false )
  })

  o( 'parameter -> true', function () {
    o( q.tabletLandscapeUp( w.tabletLandscapeUp )).equals( true )
  })

  o( 'parameter -> false', function () {
    o( q.tabletLandscapeUp( w.tabletLandscapeUp - 1)).equals( false )
  })
})


o.spec( 'tabletPortraitUp', function () {
  o( 'empty', function () {
    o( q.tabletPortraitUp()).equals( false )
  })

  o( 'parameter -> true', function () {
    o( q.tabletPortraitUp( w.tabletPortraitUp )).equals( true )
  })

  o( 'parameter -> false', function () {
    o( q.tabletPortraitUp( w.tabletPortraitUp - 1)).equals( false )
  })
})


o.spec( 'landscape', function () {
  o( 'empty', function () {
    o( q.landscape()).equals( true )
  })

  o( 'parameter -> true', function () {
    o( q.landscape( 1 )).equals( true )
  })

  o( 'parameter -> false', function () {
    o( q.landscape( -1 )).equals( false )
  })
})


o.spec( 'portrait', function () {
  o( 'empty', function () {
    o( q.portrait()).equals( false )
  })

  o( 'parameter -> true', function () {
    o( q.portrait( -1 )).equals( true )
  })

  o( 'parameter -> false', function () {
    o( q.portrait( 1 )).equals( false )
  })
})
