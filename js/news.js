showArticle = function( event ) {
    var btn = event.target;
    if ( btn == undefined ) {
        btn = event.srcElement;
    }
    
    var parent = findParentByClass( btn, "row first-news-row", true );
    
    var textBlock = parent.nextElementSibling;
    if ( textBlock == undefined ) {
        textBlock = parent.nextSibling;
        while ( textBlock != null && textBlock != undefined && textBlock.className != undefined && textBlock.className.indexOf( "news-content" ) != -1 ) {
            console.log( textBlock.className );
            textBlock = textBlock.nextSibling;
        }
    }
    textBlock.style.display = "inline-block";
    
    console.log( findNodeByClassName( parent, "show-article-btn", true ) );
    findNodeByClassName( parent, "show-article-btn", true ).style.display = "none";
    findNodeByClassName( parent, "hide-article-btn", true ).style.display = "inline-block";
    //document.getElementById( "hide-article-btn" ).style.display = "inline-block";
}

hideArticle = function( event ) {
    var btn = event.target;
    if ( btn == undefined ) {
        btn = event.srcElement;
    }
    
    var parent = findParentByClass( btn, "row first-news-row", true );
    var textBlock = parent.nextElementSibling;
    if ( textBlock == undefined ) {
        textBlock = parent.nextSibling;
        while ( textBlock != null && textBlock != undefined && textBlock.className != undefined && textBlock.className.indexOf( "news-content" ) != -1 ) {
            console.log( textBlock.className );
            textBlock = textBlock.nextSibling;
        }
    }
    textBlock.style.display = "none";
    
    findNodeByClassName( parent, "hide-article-btn", true ).style.display = "none";
    findNodeByClassName( parent, "show-article-btn", true ).style.display = "inline-block";
}