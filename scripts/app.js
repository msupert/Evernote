$(document).ready(function(){
    
    //GET ELEMENTS
    var black = $('.black');
    var evernote = $('.evernote');
    var profile = $('.profile');
    var features = $('.features');
    var search = $('.search');
    var landing = $('.landing');
    var menu = $('.menu');
    var project = $('.project');
    var design = $('.design');
    var reading = $('.reading');
    var pdf = $('.pdf');
    var note1 = $('.note1');
    var note2 = $('.note2');
    var note3 = $('.note3');
    var note4 = $('.note4');
    var note5 = $('.note5');
    var note6 = $('.note6');
    var note7 = $('.note7');
    var note = $('.note');
    var tacos = $('.tacos');
    var recipe = $('.recipe');
    var options = $('.options');
    var trash = $('.trash');
    var note = $('.note');
    var edit =$('.edit');
    var add =$('.add');
    
    var screenW = 270;
    var screenH = 480;

    //SETUP   
    TweenLite.set(note, { x:screenW });
    TweenLite.set(features, {autoAlpha:0});
    TweenLite.set(search, {autoAlpha:0});
    TweenLite.set(note1, {autoAlpha:0, x:screenW });
    TweenLite.set(note2, {autoAlpha:0, x:screenW });
    TweenLite.set(note3, {autoAlpha:0, x:screenW });
    TweenLite.set(note4, {autoAlpha:0,  x:screenW });
    TweenLite.set(note5, {autoAlpha:0,  x:screenW });
    TweenLite.set(note6, {autoAlpha:0,  x:screenW });
    TweenLite.set(note7, {autoAlpha:0,  x:screenW });
    TweenLite.set(tacos, { x:screenW });
    TweenLite.set(edit, {x:screenW });
    TweenLite.set(add, {autoAlpha:1});
    TweenLite.set(recipe, {autoAlpha:0});
    TweenLite.set(recipe, {scale:0});
    TweenLite.set(reading, {autoAlpha:0});
    TweenLite.set(note1, {autoAlpha:0});
    TweenLite.set(note2, {autoAlpha:0});
    TweenLite.set(note3, {autoAlpha:0});
    TweenLite.set(note4, {autoAlpha:0});
    TweenLite.set(note5, {autoAlpha:0});
    TweenLite.set(note6, {autoAlpha:0});
    TweenLite.set(note7, {autoAlpha:0});
    


    //EVENTS
    
    $(document).on('pointermove', function(event) {
            event.preventDefault();
        });


     // SWIPe EVERNOTE BAR TO BRING IN PROFILE//
    
    evernote.on('swipestart', function(e){
            e.preventDefault();

            if(e.angle > 330 || e.angle < 30 ){

           
            TweenLite.to(evernote, .3, {autoAlpha:1, delay:.1, x:270, ease:"easeOutExpo"});
             TweenLite.to(features, .4, {autoAlpha:1, delay:.3, y:53, ease:"easeOutExpo"});
           }

    });

     //TAP ON PROFILE BAR TO HIDE//
    
     profile.on('swipestart', function(e){
            e.preventDefault();

            if(e.angle > 150 || e.angle < 210 ){
           
             TweenLite.to(evernote, .4, {autoAlpha:1, delay:.3, x:0, ease:"easeOutExpo"});
             TweenLite.to(features, .3, {autoAlpha:1, delay:.1, y:0, ease:"easeOutExpo"});
            }           

    });


    //SWIPE NOTE HEADER BACK RIGHT TO SHOW OPTIONS AND SEARCH//

    menu.on('swipestart', function(e){

            e.preventDefault();

            if(e.angle > 330 || e.angle < 30 ){
           
            TweenLite.to(menu, .3, {autoAlpha:1, delay:.1, x:271, ease:"easeOutExpo"});
            TweenLite.to(search, .5, {autoAlpha:1, delay:.3, y:54, ease:"easeOutExpo"});
            TweenLite.to(tacos, .5, {autoAlpha:1, delay:.3, y:45, ease:"easeOutExpo"});
            TweenLite.to(note, .5, {autoAlpha:1, delay:.3, y:45, ease:"easeOutExpo"});

            }

    });


     //SWIPE UP SEARCH TO CLOSE AND CLOSE OPTIONS//
    
    search.on('swipestart', function(e){
           
         e.preventDefault();


         if(e.angle > 70 && e.angle < 120 ){
             TweenLite.to(search, .3, {autoAlpha:1, delay:.1, y:0, ease:"easeOutExpo"});
             TweenLite.to(menu, .5, {autoAlpha:1, delay:.3, x:0, ease:"easeOutExpo"});
             TweenLite.to(tacos, .3, {autoAlpha:1, delay:.1, y:0, ease:"easeOutExpo"});
            TweenLite.to(note, .3, {autoAlpha:1, delay:.1, y:0, ease:"easeOutExpo"});

        }

    });




    //TAP ON WEEKLY MENU NOTE TILE TO SLIDE IN NOTE//
    
    menu.on('tap', function(e){
           
            TweenLite.to(note, .5, {autoAlpha:1, delay:.1, x:0, ease:"easeOutExpo"});
            TweenLite.to(tacos, .5, {autoAlpha:1, delay:.1, x:0, ease:"easeOutExpo"});
            TweenLite.to(edit, .8, {autoAlpha:1, delay:.1, x:0, ease:"easeOutBack"});
            TweenLite.to(add, .4, {autoAlpha:0, delay:.1, ease:"easeOutExpo"});
            TweenLite.to(menu, .6, {scale:1.105, y:-91, delay:.1, ease:"easeOutExpo"});
            TweenLite.to(options, .6, {scale:1.105, y:-91, delay:.1, ease:"easeOutExpo"});
            TweenLite.to(trash, .6, {scale:1.105, y:-91, delay:.1, ease:"easeOutExpo"});

    });


    //TAP ON TRASH REMOVES THE WEEKLY MENU NOTE AND BUMPS UP THE NEXT TWO NOTES AND ADD ANOTHER MOST FREQUENTLY USED NOTE//
    
    trash.on('tap', function(e){
           
            TweenLite.to(menu, 0.1, {delay: .3, y:35, scale:0, autoAlpha: 0});
            TweenLite.to(note, 0.1, {delay: .3, y:35, scale:0, autoAlpha: 0});
            TweenLite.to(tacos, 0.1, {delay: .3, y:35, scale:0, autoAlpha: 0});
            TweenLite.to(options, 0.1, {delay: .3, scale:0, autoAlpha: 0});
            TweenLite.to(trash, 0.1, {delay: .3, scale:0, autoAlpha: 0});
            TweenLite.to(project, 0.3, {delay: .3, y:-50, ease: "easeOutBack"});
            TweenLite.to(design, 0.4, {delay: .4, y:-50, ease: "easeOutBack"});
            TweenLite.to(reading, 0.4, {delay: .5, y:-50, autoAlpha:1, ease: "easeOutBack"});
            TweenLite.to(search, .5, {autoAlpha:1, delay:.1, y:0, ease:"easeOutExpo"});

    });


    //TAP ON PDFs CATEGORY TO STAGGER IN NOTES//
    
    pdf.on('tap', function(e){
           
            TweenLite.to(pdf, .3, {y:-149, delay:.1, ease:"easeOutQuint"});
            TweenLite.to(note1, .3, {autoAlpha:1, x:0, delay:.2, ease:"easeOutQuint"});
            TweenLite.to(note2, .3, {autoAlpha:1,x:0, delay:.3, ease:"easeOutQuint"});
            TweenLite.to(note3, .3, {autoAlpha:1,x:0, delay:.4, ease:"easeOutQuint"});
            TweenLite.to(note4, .3, {autoAlpha:1,x:0, delay:.5, ease:"easeOutQuint"});
            TweenLite.to(note5, .3, {autoAlpha:1,x:0, delay:.6, ease:"easeOutQuint"});
            TweenLite.to(note6, .3, {autoAlpha:1,x:0, delay:.7, ease:"easeOutQuint"});
            TweenLite.to(note7, .3, {autoAlpha:1,x:0, delay:.8, ease:"easeOutQuint"});

    });


    //SWIPE DOWN TO CLOSE PDF CATEGORY SCREEN AND REMOVE NOTES TO THE RIGHT//
    
    pdf.on('swipestart', function(e){
           
         e.preventDefault();

        
         if(e.angle > 210 && e.angle < 330 ){
            TweenLite.to(pdf, .2, {y:0, delay:0, ease:"easeInQuint"});
            TweenLite.to(note1, .1, {autoAlpha:0, x:270, delay:0, ease:"easeInQuint"});
            TweenLite.to(note2, .1, {autoAlpha:0, x:270, delay:0, ease:"easeInQuint"});
            TweenLite.to(note3, .1, {autoAlpha:0, x:270, delay:0, ease:"easeInQuint"});
            TweenLite.to(note4, .1, {autoAlpha:0, x:270, delay:0, ease:"easeInQuint"});
            TweenLite.to(note5, .1, {autoAlpha:0, x:270, delay:0, ease:"easeInQuint"});
            TweenLite.to(note6, .1, {autoAlpha:0, x:270, delay:0, ease:"easeInQuint"});
            TweenLite.to(note7, .1, {autoAlpha:0, x:270, delay:0, ease:"easeInQuint"});  
        }

    });


    //TAP ON TACO RECIPE TO PULL UP THE WEBPAGE//
    
    tacos.on('tap', function(e){
           
            TweenLite.to(recipe, 0.2, {delay: .3, scale:1, autoAlpha: 1});
    });


    //PINCH IN TO CLOSE WEBSITE//
    
    recipe.on('tap', function(e){
           
            TweenLite.to(recipe, 0.2, {delay: 0, scale:0, autoAlpha: 0});
    });


    //SWIPE NOTE BACK RIGHT TO GO BACK TO LANDING PAGE//
    
    note.on('swipestart', function(e){

            e.preventDefault();

            if(e.angle > 330 || e.angle < 30 ){
           
            TweenLite.to(note, .2, {autoAlpha:1, x:270, ease:"easeOutExpo"});
            TweenLite.to(tacos, .2, {autoAlpha:1, x:270, ease:"easeOutExpo"});
            TweenLite.to(edit, .5, {autoAlpha:1, delay:.1, x:270, ease:"easeOutBack"});
            TweenLite.to(add,.5, {autoAlpha:1, delay:.2, ease:"easeOutBack"});
            TweenLite.to(menu, .5, {scale:1, delay:.2, y:0, ease:"easeOutExpo"});
            TweenLite.to(options, .5, {scale:1, delay:.2, y:0, ease:"easeOutExpo"});
            TweenLite.to(trash, .5, {scale:1, delay:.2, y:0, ease:"easeOutExpo"});

            }

    });


    //SWIPE NOTE BACK RIGHT TO GO BACK TO LANDING PAGE//

    tacos.on('swipestart', function(e){

            e.preventDefault();

            if(e.angle > 330 || e.angle < 30 ){
           
            TweenLite.to(note, .2, {autoAlpha:1, delay:.1, x:270, ease:"easeOutExpo"});
            TweenLite.to(tacos, .2, {autoAlpha:1, delay:.1, x:270, ease:"easeOutExpo"});
            TweenLite.to(edit, .5, {autoAlpha:1, delay:.1, x:270, ease:"easeOutBack"});
            TweenLite.to(add,.2, {autoAlpha:1, delay:.2, ease:"easeOutExpo"});
            TweenLite.to(menu, .5, {scale:1, delay:.1, y:91, ease:"easeOutExpo"});
            TweenLite.to(options, .5, {scale:1, delay:.1, y:91, ease:"easeOutExpo"});
            TweenLite.to(trash, .5, {scale:1, delay:.1, y:91, ease:"easeOutExpo"});

            }

    });


    //SWIPE UP NOTE TO SEE OPTIONS//
    
    menu.on('swipestart', function(e){
           
         e.preventDefault();


         if(e.angle > 70 && e.angle < 120 ){
            TweenLite.to(menu, .2, {autoAlpha:1, y:-40, ease:"easeOutBack"});
        }

    });


    //SWIPE DOWN NOTE TO HIDE OPTIONS//
    
    menu.on('swipestart', function(e){
           
         e.preventDefault();


         if(e.angle > 210 && e.angle < 330 ){
            TweenLite.to(menu, .2, {autoAlpha:1, y:0, ease:"easeOutBack"}); 
        }

    });
   
    
});


    


   
