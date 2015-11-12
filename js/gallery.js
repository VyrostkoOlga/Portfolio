window.onload = function( ) {
    var modal = document.getElementById( 'full-view-modal' );
    
    window.addEventListener("keyup", function(e) { 
        if (e.keyCode == 27) { 
            document.getElementById('full-view-modal').style.display = 'none';
        }
        return false;
    });
                           
    showImage = function( event ) {
        var btn = event.target;
        if ( btn == undefined ) {
            btn = event.srcElement;
        }
    
        imageName = btn.getAttribute('image') + ".jpg";
        var imageWrapper = document.getElementById( 'full-view-image' );
        imageWrapper.src = "../resources/Gallery/" + imageName;

        var subscriptWrapper = document.getElementById( 'full-view-subscript-wrapper' );
        subscriptWrapper.textContent = btn.getAttribute( 'subscript' );

        document.getElementById('full-view-modal').style.display = 'block';
        return false;
    };

    makeFullViewInvisible = function( ) {
        document.getElementById( 'full-view-modal' ).style.display = 'none';
        return false;
    }                       
}