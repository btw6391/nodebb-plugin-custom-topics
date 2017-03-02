<div component="composer" class="composer<!-- IF resizable --> resizable<!-- ENDIF resizable --><!-- IF !isTopicOrMain --> reply<!-- ENDIF !isTopicOrMain -->"<!-- IF !disabled --> style="visibility: inherit;"<!-- ENDIF !disabled -->>

	<div class="composer-container">
		<div class="title-container row">
			<!-- IF showHandleInput -->
			<div class="col-sm-3 col-md-12">
				<input class="handle form-control" type="text" tabindex="1" placeholder="[[topic:composer.handle_placeholder]]" value="{handle}" />
			</div>
			<div class="<!-- IF isTopic -->col-lg-9<!-- ELSE -->col-lg-12<!-- ENDIF isTopic --> col-md-12">
				<!-- IF isTopicOrMain -->
				<input class="title form-control" type="text" tabindex="1" placeholder="[[topic:composer.title_placeholder]]" value="{topicTitle}"/>
				<!-- ELSE -->
				<span class="title">[[topic:composer.replying_to, "{topicTitle}"]]</span>
				<!-- ENDIF isTopicOrMain -->
			</div>
			<!-- ELSE -->
			<div class="<!-- IF isTopic -->col-lg-9<!-- ELSE -->col-lg-12<!-- ENDIF isTopic --> col-md-12">
				<!-- IF isTopicOrMain -->
				<input class="title form-control" type="text" tabindex="1" placeholder="[[topic:composer.title_placeholder]]" value="{topicTitle}"/>
				<!-- ELSE -->
				<span class="title">[[topic:composer.replying_to, "{topicTitle}"]]</span>
				<!-- ENDIF isTopicOrMain -->
			</div>
			<!-- ENDIF showHandleInput -->
			<!-- IF isTopic -->
			<div class="category-list-container col-lg-3 col-md-12">
				<select tabindex="3" class="form-control category-list"></select>
			</div>
			<!-- ENDIF isTopic -->
		</div>

		<div class="category-tag-row">
			<div class="btn-toolbar formatting-bar">
				<ul class="formatting-group">
					<!-- BEGIN formatting -->
						<!-- IF formatting.spacer -->
						<li class="spacer"></li>
						<!-- ELSE -->
						<!-- IF !formatting.mobile -->
						<li tabindex="-1" data-format="{formatting.name}"><i class="{formatting.className}"></i></li>
						<!-- ENDIF !formatting.mobile -->
						<!-- ENDIF formatting.spacer -->
					<!-- END formatting -->

					<!--[if gte IE 9]><!-->
						<li class="img-upload-btn hide" data-format="picture" tabindex="-1">
							<i class="fa fa-cloud-upload"></i>
						</li>
						<li class="file-upload-btn hide" data-format="upload" tabindex="-1">
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

				<div class="btn-group pull-right action-bar">
					<a href="{discardRoute}" class="btn btn-default composer-discard" data-action="discard" tabindex="-1"><i class="fa fa-times"></i> [[topic:composer.discard]]</a>

					<button class="btn btn-primary composer-submit" data-action="post" tabindex="6"><i class="fa fa-check"></i> [[topic:composer.submit]]</button>
				</div>
			</div>
		</div>

		<fieldset>
			<legend>Patient Characteristics</legend>
			<div class="row">
		   		<div class="col-md-12">
				   	<div class="row">
				   		<div class="col-md-6">
							<div>
								<label for="age">Age</label>  
							  	<div>
							  		<input type="text" id="age" class="form-control" placeholder="Patient's Age" />
							  	</div>
							</div>
						</div>
				   		<div class="col-md-6">
							<div>
								<label for="sex">Sex</label>
							  	<div>
									<select id="sex" name="sex" required="required">
								  		<option value="0">Select patient's sex</option>
								  		<option value="1">Male</option>
								  		<option value="2">Female</option>
									</select>
							  	</div>
							</div>
					   </div>
					</div>
					<div>
					  	<label for="ecog-ps">ECOG PS</label>
					  	<div>
							<select id="ecog-ps" name="ecog-ps" required="required">
						  		<option value="0">0</option>
						  		<option value="1">1</option>
						  		<option value="2">2</option>
						  		<option value="3">3</option>
						  		<option value="4">4</option>
							</select>
					  	</div>
					</div>
					<div>
					  	<label for="abnormal-function">Abnormal Organ Function</label>  
					  	<div>
					  		<input type="text" id="abnormal-function" name="abnormal-function" class="form-control" placeholder="Describe the function" />
					  	</div>
					</div>

					<div>
					  	<label for="abnormal-labs">Abnormal Labs</label>  
					  	<div>
					  		<input type="text" id="abnormal-labs" name="abnormal-labs" class="form-control" placeholder="Describe labs" />
					  	</div>
					</div>

					<div>
					  	<label for="additional-info">Additional Patient/Tumor Information</label>  
					  	<div>
					  		<input type="text" id="additional-info" name="additional-info" class="form-control" placeholder="Describe additional info" />
					  	</div>
					</div>
					
					<div>
						<label for="mutation-status">Mutation Status</label>  
						<div>
							<textarea id="mutation-status"" name="mutation-status"" placeholder="Describe mutation status"></textarea>
						</div>
					</div>
					<div>
					  	<label for="prior-lines">Prior Lines of Therapy</label>  
					  	<div>
							<label class="checkbox-inline" for="prior-lines">
						  		<input class="prior-lines" id="prior-lines-0" value="0" type="checkbox">
						  		0
							</label>
							<label class="checkbox-inline" for="prior-lines">
						  		<input class="prior-lines" id="prior-lines-1" value="1" type="checkbox">
						  		1
							</label>
							<label class="checkbox-inline" for="prior-lines">
							  	<input class="prior-lines" id="prior-lines-2" value="2" type="checkbox">
							  	2
							</label>
							<label class="checkbox-inline" for="prior-lines">
							  	<input class="prior-lines" id="prior-lines-3" value="3" type="checkbox">
							  	3
							</label>
							<label class="checkbox-inline" for="prior-lines">
							  	<input class="prior-lines" id="prior-lines-4" value=">3" type="checkbox">
							  	&gt;3
							</label>
					 	</div>
					</div>
					<div>
					  	<label for="prior-intervention">Prior Intervention(s)</label>
					  	<div>
					   		<textarea class="form-control" id="prior-intervention" name="prior-intervention" placeholder="Describe progression after each line of therapy and any other issues of concern"></textarea> 
					  	</div>
					</div>
					<div>
					  	<label for="progression-history">Progression History</label>  
					  	<div>
							<textarea class="form-control" id="progression-history" name="progression-history" placeholder="Ex. chemo/targeted therapy, surgery, radiation"></textarea>
					  	</div>
					</div>
					<div>
						<label for="questions">Question/Inquiry</label>  
						<div>
							<textarea class="form-control" id="questions" name="questions" placeholder="Ask any questions here"></textarea>
						</div>
					</div>
				</div>
			</div>				
		</fieldset>

		<div class="row write-preview-container">
			<div class="col-md-6 col-sm-12 write-container">
				<div class="help-text">
					[[modules:composer.compose]] <span class="help hidden"><i class="fa fa-question-circle"></i></span>
					<span class="toggle-preview hide">[[modules:composer.show_preview]]</span>
				</div>
				<textarea class="write" tabindex="5"></textarea>
			</div>
			<div class="col-md-6 hidden-sm hidden-xs preview-container">
				<div class="help-text">
					<span class="toggle-preview">[[modules:composer.hide_preview]]</span>
				</div>
				<div class="preview well"></div>
			</div>
		</div>
	</div>
</div>
