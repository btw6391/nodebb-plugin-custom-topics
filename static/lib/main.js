'use strict';
/*global utils, app*/

$(window).on('action:composer.submit', function(ev, data) {
    // data.composerEl is the dom element for the composer
    // data.action can be `topics.post`, `posts.reply` or `posts.edit`
    // data.composerData is the object that will be submitted to the server.

    // lets add our new field into the data to be submitted for new topics
    if (data.action === 'topics.post') {
        // var category = data.composerEl.find('#cancer-type').val();
		// var title = data.composerEl.find('#case-title').val();

		var age = data.composerEl.find('#age').val();
		var sex = data.composerEl.find('#sex').val();
		var ecog = data.composerEl.find('#ecog-ps').val();
		var abnormalFunc = data.composerEl.find('#abnormal-function').val();
		var abnormalLab = data.composerEl.find('#abnormal-labs').val();
		var addInfo = data.composerEl.find('#additional-info').val();
		var mutation = data.composerEl.find('#mutation-status').val();
		var priorLines = data.composerEl.find('#prior-lines').val();
		var priorInterv = data.composerEl.find('#prior-intervention').val();
		var progression = data.composerEl.find('#progression-history').val();
		var questions = data.composerEl.find('#questions').val();

		data.composerData.form = '<b>Age: </b>' + age + '<br><b>Sex: </b>' + sex + '<br><b>ECOG PS: </b>' + ecog + '<br><b>Abnormal Organ Function: </b>' + abnormalFunc + '<br><b>Abnormal Labs: </b>' + abnormalLab + '<br><b>Additional Patient/Tumor Information: </b>' + addInfo + '<br><b>Mutation Status: </b>' + mutation + '<br><b>Prior Lines of Therapy: </b>' + priorLines + '<br><b>Prior Intervention(s): </b>' + priorInterv + '<br><b>Progression History: </b>' + progression + '<br><b>Question/Inquiry: </b>' + questions + '<br>';
	}
});