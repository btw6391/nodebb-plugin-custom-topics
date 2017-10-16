'use strict';
/*global utils, app*/

String.prototype.capitalize = function() {
    return this.replace(/(?:^|\s)\S/g, function(a) { return a.toUpperCase(); });
};

$(window).on('action:composer.submit', function(ev, data) {
    // data.composerEl is the dom element for the composer
    // data.action can be `topics.post`, `posts.reply` or `posts.edit`
    // data.composerData is the object that will be submitted to the server.

    // lets add our new field into the data to be submitted for new topics
    if (data.action === 'topics.post') {

    	var cid = data.composerData.cid;

    	if (cid >= 19 && cid <= 30) {
			var age = data.composerEl.find('#age').val() || "None";
			var sex = data.composerEl.find('#sex').val() || "None";
			var ecog = data.composerEl.find('#ecog-ps').val() || "None";
			var abnormalFunc = data.composerEl.find('#abnormal-function').val() || "None";
			var abnormalLab = data.composerEl.find('#abnormal-labs').val() || "None";
			var mutation = data.composerEl.find('#mutation-status').val() || "None";

			var priorLines, linesArray = $('input[type=checkbox]:checked').map(function(){
	      		return $(this).val();
	    	}).get();

	    	if (linesArray.length == 0) {
			    priorLines = "None";
			}
			else {
			    priorLines = linesArray.join(', ');
			}

			var priorInterv = data.composerEl.find('#prior-intervention').val() || "None";
			var progression = data.composerEl.find('#progression-history').val() || "None";
			var questions = data.composerEl.find('#questions').val() || "None";

			data.composerData.formData = {
				age: age,
				sex: sex,
				ecog: ecog,
				abnormalFunc: abnormalFunc,
				abnormalLab: abnormalLab,
				mutation: mutation,
				priorLines: priorLines,
				priorInterv: priorInterv,
				progression: progression,
				questions: questions
			};

			data.composerData.message = `## **Question/Inquiry**
---
${questions}
## **Case Information**
---
**Age:** ${age}
**Sex:** ${sex}
**ECOG PS:** ${ecog}
**Abnormal Organ Function:** ${abnormalFunc}
**Abnormal Labs:** ${abnormalLab}
**Mutation Status:** ${mutation}
**Prior Lines of Therapy:** ${priorLines}
**Prior Intervention(s):** ${priorInterv}
**Progression History:** ${progression}
**Additional Information:** `;
												
		}

		else if (cid == 37) {
			var oncologyField = data.composerEl.find('#oncology-field').val() || "None";
			var studyType = data.composerEl.find('#study-type').val() || "None";
			var location = data.composerEl.find('#location').val() || "None";
			var sponsor = data.composerEl.find('#sponsor').val() || "None";

			var inclusionCriteria = "";
			var exclusionCriteria = "";
			var inclusionArray = data.composerEl.find('#inclusion-criteria').val().split("\\p{IsAlphabetic}+");
			var exclusionArray = data.composerEl.find('#exclusion-criteria').val().split("\\p{IsAlphabetic}+");

			if (inclusionArray.length <= 1) {
			    inclusionCriteria = "None";
			}

			else {
			    for (criteria in inclusionArray) {
			    	inclusionCriteria += "- " + inclusionArray[criteria].trim().capitalize() + `
`;
			    }
			}

			if (exclusionArray.length <= 1) {
			    exclusionCriteria = "None";
			}

			else {
			    for (criteria in exclusionArray) {
			    	exclusionCriteria += "- " + exclusionArray[criteria].trim().capitalize() + `
`;
			    }
			}

			var phase = data.composerEl.find('#phase').val() || "None";
			var contactInfo = data.composerEl.find('#contact-info').val() || "None";

			data.composerData.formData = {
				oncologyField: oncologyField,
				studyType: studyType,
				location: location,
				sponsor: sponsor,
				inclusionCriteria: inclusionCriteria,
				exclusionCriteria: exclusionCriteria,
				phase: phase,
				contactInfo: contactInfo
			};

			data.composerData.message = `## **New Clinical Trial**
---
**Tumor Type:** ${oncologyField}
**Study Type:** ${studyType}
**Phase:** ${phase}
**Inclusion Criteria:**
${inclusionCriteria}
**Exclusion Criteria:**
${exclusionCriteria}
**Sponsor:** ${sponsor}
**Location(s):** ${location}
**Contact Information:** ${contactInfo}
**Additional Information:** `;
		}

		else if ((cid >= 33 && cid <= 36) || cid == 31) {
			var oncologyField = data.composerEl.find('#oncology-field').val() || "None";

			data.composerData.formData = {
				oncologyField: oncologyField
			};

			data.composerData.message = `## **New Treatment Modality**
---
**Tumor Type:** ${oncologyField}
**Modality Information:** `;
		}
	}
});