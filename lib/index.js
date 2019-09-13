const
  // Node compatibility.
  self =
    typeof window === 'object'
      ? window
      : { innerHeight: 0, innerWidth: 0 },

  // Screen sizes in ascending order.
  w = {
    phoneOnly: 599,
    tabletPortraitDown: ( 899 ),
    tabletPortraitUp: 600,
    tabletLandscapeDown: 1199,
    tabletLandscapeUp: 900,
    desktopUp: 1200,
    bigDesktopUp: 1800,
  }

// Could be useful.
exports.screenWidths = w

// Collection of media query functions.
exports.query = {
  bigDesktopUp:         ( q ) =>
    ( q || self.innerWidth ) >= w.bigDesktopUp,
  desktopUp:            ( q ) =>
    ( q || self.innerWidth ) >= w.desktopUp,
  phoneOnly:            ( q ) =>
    ( q || self.innerWidth ) <= w.phoneOnly,
  tabletPortraitDown:   ( q ) =>
    ( q || self.innerWidth ) <= w.tabletPortraitDown,
  tabletPortraitUp:     ( q ) =>
    ( q || self.innerWidth ) >= w.tabletPortraitUp,
  tabletLandscapeDown:  ( q ) =>
    ( q || self.innerWidth ) <= w.tabletLandscapeDown,
  tabletLandscapeUp:    ( q ) =>
    ( q || self.innerWidth ) >= w.tabletLandscapeUp,
  landscape:            ( q ) =>
    ( q || self.innerWidth ) >= self.innerHeight,
  portrait:             ( q ) =>
    ( q || self.innerWidth ) < self.innerHeight,
}
