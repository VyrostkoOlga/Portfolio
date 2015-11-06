showNameTitle = function( ) {
    document.getElementById('name-header').style.display = "inline-block";
    document.getElementById('page-header').style.display = "none";
    return false;
}
    
showPageTitle = function( ) {
    //document.getElementById('name-header').delay(1000).animate({ display: none; }, 700);
    //document.getElementById('page-header').delay(1000).animate({ display: block; }, 700);
    
    document.getElementById('name-header').style.display = "none";
    document.getElementById('page-header').style.display = "inline-block";
    
    return false;
}

showMenu = function( ) {
    var menu = document.getElementById( "shown-menu" );
    menu.style.display = "block";
    document.getElementById( "show-menu-action" ).style.display = "none";
    document.getElementById( "hide-menu-action" ).style.display = "inline-block";
    
    document.getElementById( 'page-header' ).style.display = "inline-block";
    
    return false;
}

hideMenu = function( ) {
    var menu = document.getElementById( "shown-menu" );
    menu.style.display = "none";
    document.getElementById( "show-menu-action" ).style.display = "inline-block";
    document.getElementById( "hide-menu-action" ).style.display = "none";
    
    return false;
}

makeLoginVisible = function( ) {
    var modal = document.getElementById( "log-in-modal" );
    modal.style.display = "block";
}

makeLoginInvisible = function( ) {
    var modal = document.getElementById( "log-in-modal" );
    modal.style.display = "none";
}


/* Функции для поиска элементов */
findNode = function( parent, name, rec ) {
    var children = parent.childNodes;
    
    for ( var i=0; i<children.length; i++ ) {
        var el = children[i];
        if ( el.name == name ) {
            return el;
        }
    }
    
    if ( !rec ) {
        return null;
    }
    
    
    for ( var i=0; i<children.length; i++ ) {
        var result = findNode( children[i], name, rec );
        if ( result != null ) {
            return result;
        }
    }
    return null;
}

findNodeByTagName = function( parent, name, rec ) {
    var children = parent.childNodes;
    
    for ( var i=0; i<children.length; i++ ) {
        var el = children[i];
        if ( el.tagName == name ) {
            return el;
        }
    }
    
    if ( !rec ) {
        return null;
    }
    
    
    for ( var i=0; i<children.length; i++ ) {
        var result = findNode( children[i], name, rec );
        if ( result != null ) {
            return result;
        }
    }
    return null;
}

findNodeById = function( parent, name, rec ) {
    var children = parent.childNodes;
    
    for ( var i=0; i<children.length; i++ ) {
        var el = children[i];
        if ( el.id == name ) {
            return el;
        }
    }
    
    if ( !rec ) {
        return null;
    }
    
    
    for ( var i=0; i<children.length; i++ ) {
        var result = findNode( children[i], name, rec );
        if ( result != null ) {
            return result;
        }
    }
    return null;
}

findNodeByClassName = function( parent, name, rec ) {
    var children = parent.childNodes;
    
    for ( var i=0; i<children.length; i++ ) {
        var el = children[i];
        if ( el.className != undefined ) {
            if ( el.className.indexOf( name ) != -1 ) {
                return el;
            }
        }
    }
    
    if ( !rec ) {
        return null;
    }
    
    
    for ( var i=0; i<children.length; i++ ) {
        var result = findNodeByClassName( children[i], name, rec );
        if ( result != null ) {
            return result;
        }
    }
    return null;
}

findParentById = function( node, id, rec ) {
    var parent = node.parentNode;
    
    if ( parent == null )
        return null;
    if ( parent.id == id )
        return parent;
    
    if ( rec )
        return findParentById( parent, id, rec );
    return null;
}

findParentByClass = function( node, className, rec ) {
    //console.log( node );
    var parent = node.parentNode;
    
    if ( parent == null )
        return null;
    if ( parent.className == className )
        return parent;
    
    if ( rec ) {
        return result = findParentByClass( parent, className, rec );
    }
    
    return null;
}

findSiblingById = function( node, id ) {
    var sibl = node.nextElementSibling;
    
    while ( sibl != null ) {
        console.log( sibl );
        sibl = sibl.nextElementSibling;
    }
}