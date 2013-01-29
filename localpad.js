(function ( window, document ) {
	if ( !window.localStorage ) {
		alert ( "Sorry, your browsers doesen't support localStorage :/ localPad can't run." );
		return;
	}

	var html = '<!DOCTYPE html><html><head><title>untitled pad</title></head>'
		+ '<body><aside>aside</aside>'
		+ '<section></section></body></html>'
	;

	document.open ( 'text/html', 'replace' ).write ( html ).close ();
} ( window, document ) );