<div component="composer" class="composer<!-- IF resizable --> resizable<!-- ENDIF resizable --><!-- IF !isTopicOrMain --> reply<!-- ENDIF !isTopicOrMain -->">

	<div class="composer-container">
		<nav class="navbar navbar-fixed-top mobile-navbar visible-xs visible-sm">
			<div class="pull-left">
				<button class="btn btn-sm btn-primary composer-discard" data-action="discard" tabindex="-1"><i class="fa fa-times"></i></button>
			</div>
			<!-- IF isTopic -->
			<div class="category-name-container">
				<span class="category-name"></span>
			</div>
			<!-- ENDIF isTopic -->
			<div class="pull-right">
				<button class="btn btn-sm btn-primary composer-submit" data-action="post" tabindex="-1"><i class="fa fa-chevron-right"></i></button>
			</div>
			<!-- IF !isTopicOrMain -->
			<h4 class="title">[[topic:composer.replying_to, "{title}"]]</h4>
			<!-- ENDIF !isTopicOrMain -->
		</nav>
		<div class="row title-container">
			<!-- IF showHandleInput -->
			<div class="col-sm-3 col-md-12">
				<input class="handle form-control" type="text" tabindex="1" placeholder="[[topic:composer.handle_placeholder]]" value="{handle}" />
			</div>
			<!-- ENDIF showHandleInput -->
			<!-- IF isTopic -->
			<!-- IF isGeneral -->
			<div class="category-list-container col-lg-3 col-md-12 hidden-sm hidden-xs">
				<select tabindex="3" class="form-control category-list"></select>
			</div>
			<!-- ENDIF isGeneral -->
			<!-- ENDIF isTopic -->
		</div>

		<h3 style="text-align: center; padding-bottom: 15px;">Post a New Case</h3>

		<div style="overflow-x: hidden; overflow-y: scroll;">
			<!-- IF isTopicOrMain -->
			<!-- IF !isEditing -->
			<!-- IF isPatientCase -->
			<form class="ui huge form">
			   	<div class="two fields">
			   		<div class="field">
			   			<label>Post Title</label>
			   			<!-- IF isTopicOrMain -->
						<input class="title" type="text" tabindex="1" placeholder="Brief Title Description" value="{title}">
						<!-- ELSE -->
						<span class="title">[[topic:composer.replying_to, "{title}"]]</span>
						<!-- ENDIF isTopicOrMain -->
			   		</div>
			   		<div class="field">
			   			<label>Category</label>
			   			<div class="category-list-container">
							<select id="category" name="category" class="category-list ui dropdown"></select>
						</div>
			   		</div>
				</div>

				<div class="two fields">
					<div class="field">
						<label>Age</label>
					  	<input type="text" id="age" name="age" maxlength="3" placeholder="Patient's Age">
					</div>
			   		<div class="field">
						<label>Sex</label>
						<select id="sex" name="sex" class="ui dropdown">
					  		<option value="">Select patient's sex</option>
					  		<option value="Male">Male</option>
					  		<option value="Female">Female</option>
						</select>
				   	</div>
				</div>
				
				<div class="two fields">
					<div class="field">
						<label>ECOG PS</label>
						<select id="ecog-ps" name="ecog-ps" class="ui dropdown">
					  		<option value="">Select ECOG #</option>
					  		<option value="0">0</option>
					  		<option value="1">1</option>
					  		<option value="2">2</option>
					  		<option value="3">3</option>
					  		<option value="4">4</option>
						</select>
				   	</div>
					<div class="field">
					  	<label>Abnormal Organ Function</label>
					  	<input type="text" id="abnormal-function" name="abnormal-function" placeholder="Describe the function">
					</div>
				</div>

				<div class="two fields">
					<div class="field">
					  	<label>Abnormal Labs</label>
					  	<input type="text" id="abnormal-labs" name="abnormal-labs" placeholder="Describe labs">
					</div>
					<div class="field">
						<label>Mutation Status</label>  
						<input type="text" id="mutation-status"" name="mutation-status" placeholder="Describe mutation status">
					</div>
				</div>

				<div class="two fields">
					<div class="field">
						<label>Prior Lines of Therapy</label>
						<div class="form-check form-check-inline">
							<label class="form-check-label">
								<input class="form-check-input" type="checkbox" id="prior-lines-0" value="0"> 0
							</label>
						</div>
						<div class="form-check form-check-inline">
							<label class="form-check-label">
								<input class="form-check-input" type="checkbox" id="prior-lines-1" value="1"> 1
							</label>
						</div>
						<div class="form-check form-check-inline">
							<label class="form-check-label">
								<input class="form-check-input" type="checkbox" id="prior-lines-2" value="2"> 2
							</label>
						</div>
						<div class="form-check form-check-inline">
							<label class="form-check-label">
								<input class="form-check-input" type="checkbox" id="prior-lines-3" value="3"> 3
							</label>
						</div>
						<div class="form-check form-check-inline">
							<label class="form-check-label">
								<input class="form-check-input" type="checkbox" id="prior-lines-4" value=">3"> &gt;3
							</label>
						</div>
					</div>

					<div class="field">
					  	<label>Prior Intervention(s)</label>
					   	<input type="text" id="prior-intervention" name="prior-intervention" placeholder="Describe progression after each line of therapy and any other issues of concern"> 
					</div>
				</div>

				<div class="two fields">
					<div class="field">
					  	<label for="progression-history">Progression History</label>  
						<input type="text" id="progression-history" name="progression-history" placeholder="Ex. chemo/targeted therapy, surgery, radiation">
					</div>
					<div class="field">
						<label for="questions">Question/Inquiry</label>  
						<input type="text" id="questions" name="questions" placeholder="Ask any questions here">
					</div>
				</div>
			</form>
			<!-- ENDIF isPatientCase -->

			<!-- IF isNewTreatment -->
			<form class="ui huge form">
			   	<div class="two fields">
			   		<div class="field">
			   			<label>Category</label>
			   			<div class="category-list-container">
							<select id="category" name="category" class="category-list ui dropdown"></select>
						</div>
			   		</div>
				   	<div class="field">
						<label>Oncology Field</label>
						<select id="oncology-field" name="oncology-field" class="ui dropdown">
							<option value="">Select a field</option>
					  		<option value="Breast Cancer">Breast Cancer</option>
							<option value="Lung Cancer">Lung Cancer</option>
							<option value="Sarcoma">Sarcoma</option>
							<option value="Hematologic Malignancies">Hematologic Malignancies</option>
							<option value="Neuro-oncology">Neuro-oncology</option>
							<option value="Melanoma">Melanoma</option>
							<option value="Gastrointestinal Cancer">Gastrointestinal Cancer</option>
							<option value="Genitourinary Cancer">Genitourinary Cancer</option>
							<option value="Gynecologic Cancer">Gynecologic Cancer</option>
							<option value="Head and Neck Cancer">Head and Neck Cancer</option>
							<option value="Pediatric Oncology">Pediatric Oncology</option>
						</select>
				   	</div>
				</div>
			</form>
			<!-- ENDIF isNewTreatment -->
			<!-- ENDIF !isEditing -->
			<!-- ENDIF isTopicOrMain -->

			<!-- IF !isGeneral -->
			<label>Additional Information, Files, Images, etc.</label> 
			<!-- ENDIF !isGeneral -->
			<div class="row write-preview-container">
				<div class="write-container">
					<div class="help-text">
						<span class="help hidden">[[modules:composer.compose]] <i class="fa fa-question-circle"></i></span>
						<span class="toggle-preview hide">[[modules:composer.show_preview]]</span>
					</div>
					<textarea class="write" tabindex="4"></textarea>
				</div>
				<div class="hidden-sm hidden-xs preview-container">
					<div class="help-text">
						<span class="toggle-preview">[[modules:composer.hide_preview]]</span>
					</div>
					<div class="preview well"></div>
				</div>
			</div>
		</div>

		<div class="category-tag-row">
			<div class="btn-toolbar formatting-bar">
				<ul class="formatting-group">
					<!-- BEGIN formatting -->
						<!-- IF formatting.spacer -->
						<li class="spacer"></li>
						<!-- ELSE -->
						<!-- IF !formatting.mobile -->
						<li tabindex="-1" data-format="{formatting.name}" title="{formatting.title}"><i class="{formatting.className}"></i></li>
						<!-- ENDIF !formatting.mobile -->
						<!-- ENDIF formatting.spacer -->
					<!-- END formatting -->

					<!--[if gte IE 9]><!-->
						<li class="img-upload-btn hide" data-format="picture" tabindex="-1" title="[[modules:composer.upload-picture]]">
							<i class="fa fa-cloud-upload"></i>
						</li>
						<li class="file-upload-btn hide" data-format="upload" tabindex="-1" title="[[modules:composer.upload-file]]">
							<i class="fa fa-upload"></i>
						</li>
					<!--<![endif]-->

					<!-- IF allowTopicsThumbnail -->
					<li tabindex="-1">
						<i class="fa fa-th-large topic-thumb-btn topic-thumb-toggle-btn hide" title="[[topic:composer.thumb_title]]"></i>
					</li>
					<div class="topic-thumb-container center-block hide">
						<form id="thumbForm" method="post" class="topic-thumb-form form-inline" enctype="multipart/form-data">
							<img class="topic-thumb-preview"></img>
							<div class="form-group">
								<label for="topic-thumb-url">[[topic:composer.thumb_url_label]]</label>
								<input type="text" id="topic-thumb-url" class="form-control" placeholder="[[topic:composer.thumb_url_placeholder]]" />
							</div>
							<div class="form-group">
								<label for="topic-thumb-file">[[topic:composer.thumb_file_label]]</label>
								<input type="file" id="topic-thumb-file" class="form-control" />
							</div>
							<div class="form-group topic-thumb-ctrl">
								<i class="fa fa-spinner fa-spin hide topic-thumb-spinner" title="[[topic:composer.uploading]]"></i>
								<i class="fa fa-times topic-thumb-btn hide topic-thumb-clear-btn" title="[[topic:composer.thumb_remove]]"></i>
							</div>
						</form>
					</div>
					<!-- ENDIF allowTopicsThumbnail -->

					<form id="fileForm" method="post" enctype="multipart/form-data">
						<!--[if gte IE 9]><!-->
							<input type="file" id="files" name="files[]" multiple class="gte-ie9 hide"/>
						<!--<![endif]-->
						<!--[if lt IE 9]>
							<input type="file" id="files" name="files[]" class="lt-ie9 hide" value="Upload"/>
						<![endif]-->
					</form>
				</ul>

				<div class="btn-group pull-right action-bar hidden-sm hidden-xs">
					<button class="btn btn-primary composer-submit" data-action="post" tabindex="6"><i class="fa fa-check"></i> [[topic:composer.submit]]</button>

					<button class="btn btn-default composer-discard" data-action="discard" tabindex="-1"><i class="fa fa-times"></i> [[topic:composer.discard]]</button>
				</div>
			</div>
		</div>

		<!-- IF isTopic -->
		<!-- IF isGeneral -->
		<ul class="category-selector visible-xs visible-sm"></ul>
		<!-- ENDIF isGeneral -->
		<!-- ENDIF isTopic -->

		<div class="imagedrop"><div>[[topic:composer.drag_and_drop_images]]</div></div>

		<div class="resizer"><div class="trigger text-center"><i class="fa"></i></div></div>
	</div>
</div>