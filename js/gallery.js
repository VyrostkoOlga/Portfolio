endLoad = function( event ) {
    var image = event.target;
    if ( image == undefined ) {
        image = event.srcElement;
    }
    
    var loader = image.nextSibling;
    while ( loader.className != 'loader' ) {
        loader = loader.nextSibling;
    }
    loader.style.display = "none";
}

window.onload = function( ) {
    var modal = document.getElementById( 'full-view-modal' );
    var total = document.getElementById( 'gallery-wrapper' ).getAttribute( 'total' );
    
    showImage = function( event ) {
        var btn = event.target;
        if ( btn == undefined ) {
            btn = event.srcElement;
        }
        
        imageName = btn.getAttribute( 'image' );
        updateImage( imageName );
    }
    
    updateImage = function( imageName ) {
        var curModal = document.getElementById( 'full-view-modal?image=' + imageName );
        if ( curModal != null )
            return;
        
        var nModal = modal.cloneNode( true );
        nModal.id = "full-view-modal?image=" + imageName;
        
        var curImage = findNodeByClassName( nModal, 'image-full-view', true );
        if ( curImage != null ) {
            curImage.src = "../resources/Gallery/" + imageName + ".jpg";
            curImage.id = "full-view-image-" + imageName;
        }
        
        var left = findNodeByClassName( nModal, 'left-arrow', true );
        if ( left != null ) {
            //imageName = (Number) imageName;
            if ( imageName > 1 ) {
                //left.onclick = prevImage;
                left.href = "#full-view-modal?image=" + ( imageName - 1);
                left.style.visibility = 'visible';
            }
            else {
                left.style.visibility = 'hidden';
            }
        }
        
        var nextImage = findNodeByClassName( nModal, 'undisplay-image-full-view', true );
        if ( nextImage != null ) {
            var right = findNodeByClassName( nModal, 'right-arrow', true );
            imageName = Number( imageName );
            if ( imageName < total - 1 ) {
                var nextName = imageName + 1;
                console.log( nextName );
                nextImage.src = "../resources/Gallery/" + nextName + ".jpg";
                nextImage.id = "full-view-image-" + nextName;
                
                if ( right != null ) {
                    right.href = "#full-view-modal?image=" + nextName;
                    right.style.visibility = 'visible';
                }
            }
            else {
                right.style.visibility = 'hidden';
            }
        }
        document.body.appendChild( nModal );
    }
    
    var hash = window.location.hash;
    var idx = hash.indexOf( '?image=' );
    if ( idx != -1 ) {
        var imageName = hash.substring( hash.indexOf( '?image=' ) + 7, hash.length );
        updateImage( imageName );
        window.location.href = window.location.href;
    }
    
    nextImage = function( ) {
        var hash = window.location.hash;
        var imageName = hash.substring( hash.indexOf( '?image=' ) + 7, hash.length );
            
        imageName = Number( imageName );
        if ( imageName < total ) {
            imageName++;
            updateImage( imageName );
            window.location.hash = "#full-view-modal?image=" + imageName;
        }
    }
    
    prevImage = function( ) {
        var hash = window.location.hash;
        var imageName = hash.substring( hash.indexOf( '?image=' ) + 7, hash.length );
            
        imageName = Number( imageName );
        if ( imageName > 1 ) {
            imageName--;
            updateImage( imageName );
            window.location.hash = "#full-view-modal?image=" + imageName;
        }
    }
    
    window.addEventListener( 'keydown', function( event ) {
        if ( event.keyCode == 39 ) {
            nextImage( );
        }
        else if ( event.keyCode == 37 ) {
            prevImage( );
        }
        else if ( event.keyCode == 27 ) {
            window.location.hash = "#";
        }
        else if ( event.keyCode == 112 ) {
            document.location.hash = "#help-modal";
        }
    });
}