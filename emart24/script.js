console.clear();

const swiper = new Swiper('.swiper', {
  // Optional parameters
  autoplay: {
     delay: 3500,
     disableOnInteraction: true,
   },
  
  // direction: 'horizontal',
  // loop: true,

  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

  // And if we need scrollbar
  // scrollbar: {
  //   el: '.swiper-scrollbar',
  // },
});

// $( document ).ready( function() {
//         var jbOffset = $( '.jbMenu' ).offset();
//         $( window ).scroll( function() {
//           if ( $( document ).scrollTop() > jbOffset.top ) {
//             $( '.jbMenu' ).addClass( 'jbFixed' );
//           }
//           else {
//             $( '.jbMenu' ).removeClass( 'jbFixed' );
//           }
//         });
//       } );