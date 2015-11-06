window.onload = function() {
    
    colorImages = function( ) {
        var els = document.getElementsByClassName( "grey" );
        
        for ( var i=0; i<els.length; i++ ) {
            var el = els[i];
            el.style.display = 'none';
        }
        
        els = document.getElementsByClassName( "colored" );
        
        for ( var i=0; i<els.length; i++ ) {
            var el = els[i];
            el.style.display = 'block';
        }
    }
    
    discolorImages = function( ) {
        var els = document.getElementsByClassName( "colored" );
        
        for ( var i=0; i<els.length; i++ ) {
            var el = els[i];
            el.style.display = 'none';
        }
        
        els = document.getElementsByClassName( "grey" );
        
        for ( var i=0; i<els.length; i++ ) {
            var el = els[i];
            el.style.display = 'block';
        }
    }
}