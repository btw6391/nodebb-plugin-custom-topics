"use strict";
/*global utils, app*/

$(window).on('action:composer.submit', function(ev, data) {
    // data.composerEl is the dom element for the composer
    // data.action can be `topics.post`, `posts.reply` or `posts.edit`
    // data.composerData is the object that will be submitted to the server.

    console.log("Composer submit.");

    // lets add our new field into the data to be submitted for new topics
    if (data.action === 'topics.post') {
        data.composerData.age = data.composerEl.find('#age').val();
        console.dir(data.composerData);
        console.log("Topic posted.");
    }
});