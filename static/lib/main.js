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

		var lines = [];

		if($('#prior-lines-0').prop('checked')) {
			lines.push(data.composerEl.find('#prior-lines-0').val());
		}

		if($('#prior-lines-1').prop('checked')) {
			lines.push(priorLines += data.composerEl.find('#prior-lines-1').val());
		}

		if($('#prior-lines-2').prop('checked')) {
			lines.push(priorLines += data.composerEl.find('#prior-lines-2').val());
		}

		if($('#prior-lines-3').prop('checked')) {
			lines.push(priorLines += data.composerEl.find('#prior-lines-3').val());
		}

		if($('#prior-lines-4').prop('checked')) {
			lines.push(priorLines += data.composerEl.find('#prior-lines-4').val());
		}

		var priorLines = lines.join(', ');
		
		var priorInterv = data.composerEl.find('#prior-intervention').val();
		var progression = data.composerEl.find('#progression-history').val();
		var questions = data.composerEl.find('#questions').val();

		data.composerData.form = '**Patient Characteristics**<br>' +
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