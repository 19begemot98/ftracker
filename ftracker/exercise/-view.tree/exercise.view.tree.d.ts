declare namespace $ {

	type $mol_image__uri_my_ftracker_exercise_1 = $mol_type_enforce<
		ReturnType< $my_ftracker_exercise['exercise_image_uri'] >
		,
		ReturnType< $mol_image['uri'] >
	>
	type $mol_image__title_my_ftracker_exercise_2 = $mol_type_enforce<
		ReturnType< $my_ftracker_exercise['exercise_title'] >
		,
		ReturnType< $mol_image['title'] >
	>
	type $mol_labeler__title_my_ftracker_exercise_3 = $mol_type_enforce<
		string
		,
		ReturnType< $mol_labeler['title'] >
	>
	type $mol_text__text_my_ftracker_exercise_4 = $mol_type_enforce<
		ReturnType< $my_ftracker_exercise['exercise_description'] >
		,
		ReturnType< $mol_text['text'] >
	>
	type $mol_view__sub_my_ftracker_exercise_5 = $mol_type_enforce<
		readonly(any)[]
		,
		ReturnType< $mol_view['sub'] >
	>
	type $mol_labeler__title_my_ftracker_exercise_6 = $mol_type_enforce<
		string
		,
		ReturnType< $mol_labeler['title'] >
	>
	type $mol_text__text_my_ftracker_exercise_7 = $mol_type_enforce<
		ReturnType< $my_ftracker_exercise['exercise_sets_info'] >
		,
		ReturnType< $mol_text['text'] >
	>
	type $mol_labeler__title_my_ftracker_exercise_8 = $mol_type_enforce<
		string
		,
		ReturnType< $mol_labeler['title'] >
	>
	type $mol_labeler__content_my_ftracker_exercise_9 = $mol_type_enforce<
		readonly(any)[]
		,
		ReturnType< $mol_labeler['content'] >
	>
	type $mol_text__text_my_ftracker_exercise_10 = $mol_type_enforce<
		ReturnType< $my_ftracker_exercise['exercise_reps_info'] >
		,
		ReturnType< $mol_text['text'] >
	>
	type $mol_labeler__title_my_ftracker_exercise_11 = $mol_type_enforce<
		string
		,
		ReturnType< $mol_labeler['title'] >
	>
	type $mol_labeler__content_my_ftracker_exercise_12 = $mol_type_enforce<
		readonly(any)[]
		,
		ReturnType< $mol_labeler['content'] >
	>
	type $mol_text__text_my_ftracker_exercise_13 = $mol_type_enforce<
		ReturnType< $my_ftracker_exercise['exercise_time_info'] >
		,
		ReturnType< $mol_text['text'] >
	>
	type $mol_labeler__title_my_ftracker_exercise_14 = $mol_type_enforce<
		string
		,
		ReturnType< $mol_labeler['title'] >
	>
	type $mol_labeler__content_my_ftracker_exercise_15 = $mol_type_enforce<
		readonly(any)[]
		,
		ReturnType< $mol_labeler['content'] >
	>
	type $mol_text__text_my_ftracker_exercise_16 = $mol_type_enforce<
		ReturnType< $my_ftracker_exercise['exercise_rest_info'] >
		,
		ReturnType< $mol_text['text'] >
	>
	type $mol_labeler__title_my_ftracker_exercise_17 = $mol_type_enforce<
		string
		,
		ReturnType< $mol_labeler['title'] >
	>
	type $mol_labeler__content_my_ftracker_exercise_18 = $mol_type_enforce<
		readonly(any)[]
		,
		ReturnType< $mol_labeler['content'] >
	>
	type $mol_labeler__title_my_ftracker_exercise_19 = $mol_type_enforce<
		string
		,
		ReturnType< $mol_labeler['title'] >
	>
	type $mol_labeler__title_my_ftracker_exercise_20 = $mol_type_enforce<
		ReturnType< $my_ftracker_exercise['time_display_text'] >
		,
		ReturnType< $mol_labeler['title'] >
	>
	type $mol_button__title_my_ftracker_exercise_21 = $mol_type_enforce<
		ReturnType< $my_ftracker_exercise['timer_button_title'] >
		,
		ReturnType< $mol_button['title'] >
	>
	type $mol_button__click_my_ftracker_exercise_22 = $mol_type_enforce<
		ReturnType< $my_ftracker_exercise['timer_button_click'] >
		,
		ReturnType< $mol_button['click'] >
	>
	type $mol_button__title_my_ftracker_exercise_23 = $mol_type_enforce<
		string
		,
		ReturnType< $mol_button['title'] >
	>
	type $mol_button__click_my_ftracker_exercise_24 = $mol_type_enforce<
		ReturnType< $my_ftracker_exercise['timer_reset_click'] >
		,
		ReturnType< $mol_button['click'] >
	>
	type $mol_row__sub_my_ftracker_exercise_25 = $mol_type_enforce<
		readonly(any)[]
		,
		ReturnType< $mol_row['sub'] >
	>
	type $mol_row__sub_my_ftracker_exercise_26 = $mol_type_enforce<
		readonly(any)[]
		,
		ReturnType< $mol_row['sub'] >
	>
	type $mol_view__sub_my_ftracker_exercise_27 = $mol_type_enforce<
		readonly(any)[]
		,
		ReturnType< $mol_view['sub'] >
	>
	type $mol_labeler__title_my_ftracker_exercise_28 = $mol_type_enforce<
		string
		,
		ReturnType< $mol_labeler['title'] >
	>
	type $mol_labeler__title_my_ftracker_exercise_29 = $mol_type_enforce<
		ReturnType< $my_ftracker_exercise['set_label_text'] >
		,
		ReturnType< $mol_labeler['title'] >
	>
	type $mol_button__title_my_ftracker_exercise_30 = $mol_type_enforce<
		string
		,
		ReturnType< $mol_button['title'] >
	>
	type $mol_button__click_my_ftracker_exercise_31 = $mol_type_enforce<
		ReturnType< $my_ftracker_exercise['increment_set_click'] >
		,
		ReturnType< $mol_button['click'] >
	>
	type $mol_button__title_my_ftracker_exercise_32 = $mol_type_enforce<
		string
		,
		ReturnType< $mol_button['title'] >
	>
	type $mol_button__click_my_ftracker_exercise_33 = $mol_type_enforce<
		ReturnType< $my_ftracker_exercise['reset_counter_click'] >
		,
		ReturnType< $mol_button['click'] >
	>
	type $mol_row__sub_my_ftracker_exercise_34 = $mol_type_enforce<
		readonly(any)[]
		,
		ReturnType< $mol_row['sub'] >
	>
	type $mol_row__sub_my_ftracker_exercise_35 = $mol_type_enforce<
		readonly(any)[]
		,
		ReturnType< $mol_row['sub'] >
	>
	type $mol_view__sub_my_ftracker_exercise_36 = $mol_type_enforce<
		readonly(any)[]
		,
		ReturnType< $mol_view['sub'] >
	>
	type $mol_button_major__title_my_ftracker_exercise_37 = $mol_type_enforce<
		string
		,
		ReturnType< $mol_button_major['title'] >
	>
	type $mol_button_major__click_my_ftracker_exercise_38 = $mol_type_enforce<
		ReturnType< $my_ftracker_exercise['finish_exercise_click'] >
		,
		ReturnType< $mol_button_major['click'] >
	>
	type $mol_row__sub_my_ftracker_exercise_39 = $mol_type_enforce<
		readonly(any)[]
		,
		ReturnType< $mol_row['sub'] >
	>
	export class $my_ftracker_exercise extends $mol_page {
		Exercise_Image( ): $mol_image
		Description_Title( ): $mol_labeler
		Description_Text( ): $mol_text
		Exercise_Details( ): $mol_view
		Recommendations_Title( ): $mol_labeler
		Sets_Info_Text( ): $mol_text
		Sets_Info( ): $mol_labeler
		Reps_Info_Text( ): $mol_text
		Reps_Info( ): $mol_labeler
		Time_Info_Text( ): $mol_text
		Time_Info( ): $mol_labeler
		Rest_Info_Text( ): $mol_text
		Rest_Info( ): $mol_labeler
		Timer_title( ): $mol_labeler
		Timer_label( ): $mol_labeler
		Start_pause( ): $mol_button
		Reset_timer( ): $mol_button
		Timer_controls( ): $mol_row
		Timer_row( ): $mol_row
		Timer_block( ): $mol_view
		Counter_title( ): $mol_labeler
		Big_counter( ): $mol_labeler
		Big_plus( ): $mol_button
		Reset_counter( ): $mol_button
		Counter_buttons( ): $mol_row
		Counter_row( ): $mol_row
		Counter_block( ): $mol_view
		Finish( ): $mol_button_major
		Finish_row( ): $mol_row
		finish_exercise_click( next?: string ): string
		reset_counter_click( next?: string ): string
		increment_set_click( next?: string ): string
		timer_button_click( next?: string ): string
		timer_reset_click( next?: string ): string
		exercise_title( next?: string ): string
		exercise_description( next?: string ): string
		exercise_sets_info( next?: string ): string
		exercise_reps_info( next?: string ): string
		exercise_time_info( next?: string ): string
		exercise_rest_info( next?: string ): string
		exercise_image_uri( next?: string ): string
		time_display_text( next?: string ): string
		timer_button_title( next?: string ): string
		set_label_text( next?: string ): string
		title( ): ReturnType< $my_ftracker_exercise['exercise_title'] >
		body( ): readonly(any)[]
	}
	
}

//# sourceMappingURL=exercise.view.tree.d.ts.map