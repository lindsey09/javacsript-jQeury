"use strict";

$(document).ready( function(e) {

    $('div[w3-include-header]').load( $('div[w3-include-header]').attr('w3-include-header') );
    $('div[w3-include-footer]').load( $('div[w3-include-footer]').attr('w3-include-footer') );

    // set toggle event at search bar
    $('body').on( 'click', '#btn1', function(e){
        $('#content').toggle();
    });
    
    
    console.log( $('ul.main_menu') );
    
    // menu hover event
    $('body').on("mouseover", "ul.main_menu li", function(e){
        //$(this).children('ul').show();
    }).on("mouseout", "ul.main_menu li", function(e){
        //$(this).children('ul').hide();
    });
});
