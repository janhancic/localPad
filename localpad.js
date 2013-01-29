(function ( window, document ) {
	if ( !window.localStorage ) {
		alert ( "Sorry, your browsers doesen't support localStorage :/ localPad can't run." );
		return;
	}

	var html = '<!DOCTYPE html><html><head>'
		+ '<title>untitled pad</title>'
		+ '<style>'
		+ 'html, body { height: 100%; position: relative; margin: 0; padding: 0 }'
		+ 'aside { position: absolute; left: 0; top: 0; width: 150px; height: 100%; border-right: 1px solid #ccc; }'
		+ 'section { margin-left: 160px; height: 100%; }'
		+ '#title { width: 99%; }'
		+ '#content { width: 99%; height: 91%; }'
		+ '</style>'
		+ '</head><body>'
		+ '<aside id="pads">test</aside>'
		+ '<section><input type="text" id="title" /><textarea id="content"></textarea></section>'
		+ '</body></html>'
	;

	var newDocument = document.open ( 'text/html', 'replace' );
	newDocument.write ( html );
	newDocument.close ();

	// var padsEl = document.getElementById ( 'pads' );
	// var titleEl = document.getElementById ( 'title' );
	// var contentEl = document.getElementById ( 'content' );
} ( window, document ) );