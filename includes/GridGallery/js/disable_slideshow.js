

	CBPGridGallery.prototype._initEvents = function() {
		var self = this;

		// open the slideshow when clicking on the main grid items
		this.gridItems.forEach( function( item, idx ) {
			item.addEventListener( 'click', function() {
//				self._openSlideshow( idx );  //Commented-out to block opening of slideshow on click;
			} );
		} );

		// slideshow controls
		this.ctrlPrev.addEventListener( 'click', function() { self._navigate( 'prev' ); } );
		this.ctrlNext.addEventListener( 'click', function() { self._navigate( 'next' ); } );
		this.ctrlClose.addEventListener( 'click', function() { self._closeSlideshow(); } );

		// window resize
		window.addEventListener( 'resize', function() { self._resizeHandler(); } );

		// keyboard navigation events
		document.addEventListener( 'keydown', function( ev ) {
			if ( self.isSlideshowVisible ) {
				var keyCode = ev.keyCode || ev.which;

				switch (keyCode) {
					case 37:
						self._navigate( 'prev' );
						break;
					case 39:
						self._navigate( 'next' );
						break;
					case 27:
						self._closeSlideshow();
						break;
				}
			}
		} );

		// trick to prevent scrolling when slideshow is visible
//		window.addEventListener( 'scroll', function() {
//			if ( self.isSlideshowVisible ) {
//				window.scrollTo( self.scrollPosition ? self.scrollPosition.x : 0, self.scrollPosition ? self.scrollPosition.y : 0 );
//			}
//			else {
//				self.scrollPosition = { x : window.pageXOffset || docElem.scrollLeft, y : window.pageYOffset || docElem.scrollTop };
//			}
//		});
	};