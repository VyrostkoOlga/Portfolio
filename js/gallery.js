endLoad = function( event ) {
    var image = event.target;
    if ( image == undefined ) {
        image = event.srcElement;
    }
    
    var loader = image.nextSibling;
    while ( loader.className != 'loader' ) {
        loader = loader.nextSibling;
    }
    console.log( loader );
    loader.style.display = "none";
    return false;
}

window.onload = function( ) {
    var modal = document.getElementById( 'full-view-modal' );
    var total = Number(document.getElementById( 'gallery-wrapper' ).getAttribute( 'total' ) );
    console.log( total );
    
    window.addEventListener("keyup", function(e) { 
        if (e.keyCode == 27) { 
            document.getElementById('full-view-modal').style.display = 'none';
            document.getElementById( 'help-modal' ).style.display = 'none';
        }
        else if ( e.keyCode == 39 ) {
            var imageName = Number(document.getElementById('full-view-modal').getAttribute( 'currentImage' ) );
            if ( imageName < total ) {
                imageName++;
                document.getElementById('full-view-modal').setAttribute( 'currentImage', imageName );
            }
            updateImage( imageName );
        }
        else if ( e.keyCode == 37 ) {
            var imageName = Number(document.getElementById('full-view-modal').getAttribute( 'currentImage' ) );
            if ( imageName > 1 ) {
                imageName--;
                document.getElementById('full-view-modal').setAttribute( 'currentImage', imageName );
            }
            updateImage( imageName );
        }
        else if ( e.keyCode == 112 ) {
            document.getElementById( 'help-modal' ).style.display = 'block';
            document.getElementById( 'help-modal' ).style.opacity = '1';
        }
        console.log( e.keyCode );
        return false;
    });
                           
    showImage = function( event ) {
        var btn = event.target;
        if ( btn == undefined ) {
            btn = event.srcElement;
        }
    
        var imageName = btn.getAttribute('image');
        document.getElementById('full-view-modal').setAttribute( 'currentImage', imageName );
        
        imageName = Number( imageName ); 
        updateImage( imageName );
        return false;
    };
    
    updateImage = function( imageName ) {
        var imageWrapper = document.getElementById( 'full-view-image' );
        imageWrapper.src = "../resources/Gallery/" + imageName + ".jpg";
        
        if ( imageName < total - 1 ) {
            var imageWrapperUndisp = document.getElementById( 'undisplay-full-view-image' );
            imageWrapperUndisp.src = "../resources/Gallery/" + ( imageName + 1 ) + ".jpg";
        }

        document.getElementById('full-view-modal').style.display = 'block';
    }

    makeFullViewInvisible = function( ) {
        document.getElementById( 'full-view-modal' ).style.display = 'none';
        return false;
    }   
    
    makeHelpInvisible = function( ) {
        document.getElementById( 'help-modal' ).style.display = 'none';
        return false;
    }
}