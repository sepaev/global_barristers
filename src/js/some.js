// var twitHeight = $('.news-content').height();
// console.debug(twitHeight);

// // insert twitter widget
// $(
//   '<a class="twitter-timeline" href="https://twitter.com/MitraxLawFirm?ref_src=twsrc%5Etfw" data-lang="uk">Tweets by MitraxLawFirm</a>',
// ).insertAfter('#twitter-loc');

// !(function (d, s, id) {
//   var js,
//     fjs = d.getElementsByTagName(s)[0],
//     p = /^http:/.test(d.location) ? 'http' : 'https';
//   if (!d.getElementById(id)) {
//     js = d.createElement(s);
//     js.id = id;
//     js.src = p + '://platform.twitter.com/widgets.js';
//     fjs.parentNode.insertBefore(js, fjs);
//   }
// })(document, 'script', 'twitter-wjs');

// jQuery('.some--seo_text').readmore({
//   speed: 75,
//   collapsedHeight: 290,
//   moreLink: '<a class="more" >Детальніше</a>',
//   lessLink: '<a  class="more" >Сховати</a>',
// });
// jQuery(' #hide_seo').readmore({
//   speed: 75,
//   collapsedHeight: 290,
//   moreLink: '<a class="more" >Детальніше</a>',
//   lessLink: '<a  class="more" >Сховати</a>',
// });

// document.addEventListener(
//   'wpcf7mailsent',
//   function (event) {
//     var inputs = event.detail.inputs;
//     for (var i = 0; i < inputs.length; i++) {
//       if ('your-name' == inputs[i].name) {
//         var yourname = inputs[i].value;
//       }
//       if ('your-phone' == inputs[i].name) {
//         var yourphone = inputs[i].value;
//       }
//     }

//     //form at header

//     if ('3101' == event.detail.contactFormId) {
//       dataLayer.push({
//         event: 'blog_subscribsion',
//       });
//     } else if ('4256' == event.detail.contactFormId) {
//       dataLayer.push({
//         event: 'blog_subscribsion',
//       });
//     } else if ('4335' == event.detail.contactFormId) {
//       dataLayer.push({
//         event: 'blog_subscribsion',
//       });
//     } else if ('4336' == event.detail.contactFormId) {
//       dataLayer.push({
//         event: 'blog_subscribsion',
//       });
//     } else {
//       dataLayer.push({
//         event: 'filled_form_submission',
//       });
//     }
//   },
//   false,
// );
