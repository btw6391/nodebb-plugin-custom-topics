'use strict';
/*global utils, app*/

$(window).on('action:composer.submit', function(ev, data) {
    // data.composerEl is the dom element for the composer
    // data.action can be `topics.post`, `posts.reply` or `posts.edit`
    // data.composerData is the object that will be submitted to the server.

    // lets add our new field into the data to be submitted for new topics
    if (data.action === 'topics.post') {
		var age = data.composerEl.find('#age').val();
		var sex = data.composerEl.find('#sex').val();
		var ecog = data.composerEl.find('#ecog-ps').val();
		var abnormalFunc = data.composerEl.find('#abnormal-function').val();
		var abnormalLab = data.composerEl.find('#abnormal-labs').val();
		var addInfo = data.composerEl.find('#additional-info').val();
		var mutation = data.composerEl.find('#mutation-status').val();

		var priorLines = $('input[type=checkbox]:checked').map(function(){
      		return $(this).val();
    	}).get();

		var priorInterv = data.composerEl.find('#prior-intervention').val();
		var progression = data.composerEl.find('#progression-history').val();
		var questions = data.composerEl.find('#questions').val();

		data.composerData.formData = {
			age: age,
			sex: sex,
			ecog: ecog,
			abnormalFunc: abnormalFunc,
			abnormalLab: abnormalLab,
			addInfo: addInfo,
			mutation: mutation,
			priorLines: priorLines,
			priorInterv: priorInterv,
			progression: progression,
			questions: questions
		}

		data.composerData.message = '**Patient Characteristics**<br>' +
								 	'<br>**Age:** ' + age + 
								 	'<br>**Sex:** ' + sex + 
								 	'<br>**ECOG PS:** ' + ecog + 
								 	'<br>**Abnormal Organ Function:** ' + abnormalFunc + 
								 	'<br>**Abnormal Labs:** ' + abnormalLab + 
								 	'<br>**Additional Patient/Tumor Information:** ' + addInfo + 
								 	'<br>**Mutation Status:** ' + mutation + 
								 	'<br>**Prior Lines of Therapy:** ' + priorLines + 
								 	'<br>**Prior Intervention(s):** ' + priorInterv + 
								 	'<br>**Progression History:** ' + progression + 
								 	'<br>**Question/Inquiry:** ' + questions;
	}
});

// $(window).on('action:composer.submit', function(ev, data) {

// 	if (action === 'posts.edit') {
// 		composerData = {
// 			pid: postData.pid,
// 			handle: handleEl ? handleEl.val() : undefined,
// 			content: bodyEl.val(),
// 			title: titleEl.val(),
// 			thumb: thumbEl.val() || '',
// 			tags: tags.getTags(post_uuid)
// 		};
// 	}
// });