var localPad = (function ( localPad, window, document ) {

	function Pads () {

	};

	Pads.prototype.getAll = function () {

	};

	Pads.prototype.get = function ( id ) {

	};

	Pads.prototype.save = function ( id, title, content ) {

	};

	Pads.prototype.delete = function ( id ) {

	};

	localPad.pads = new Pads ();

	return localPad;
} ( localPad || {}, window, document) );
var localPad = (function ( localPad, window, document ) {
	if ( !window.localStorage ) {
		alert ( "Sorry, your browsers doesen't support localStorage :/ localPad can't run." );
		return;
	}

	// setup new DOM
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

	// obtain references to the elements we'll be working with
	var padsEl = document.getElementById ( 'pads' ),
		titleEl = document.getElementById ( 'title' ),
		contentEl = document.getElementById ( 'content' );

	// load existing pads
	// var padsIds = localStorage.getItem ( 'pads_ids' );
	// if ( padsIds === null ) {
	// 	// no existing pads
	// 	padsIds = [];
	// } else {
	// 	padsIds = JSON.parse ( padsIds );
	// 	for ( var i = 0; i < padsIds.length; i++ ) {
	// 		var padId = padsIds[i];
			
	// 	}
	// }

	return localPad;
} ( localPad, window, document) );