declare namespace $ {

	type $mol_labeler__title_my_ftracker_1 = $mol_type_enforce<
		string
		,
		ReturnType< $mol_labeler['title'] >
	>
	type $mol_link__uri_my_ftracker_2 = $mol_type_enforce<
		ReturnType< $my_ftracker['workout_uri'] >
		,
		ReturnType< $mol_link['uri'] >
	>
	type $mol_link__sub_my_ftracker_3 = $mol_type_enforce<
		readonly(any)[]
		,
		ReturnType< $mol_link['sub'] >
	>
	type $mol_labeler__title_my_ftracker_4 = $mol_type_enforce<
		string
		,
		ReturnType< $mol_labeler['title'] >
	>
	type $mol_link__uri_my_ftracker_5 = $mol_type_enforce<
		ReturnType< $my_ftracker['history_uri'] >
		,
		ReturnType< $mol_link['uri'] >
	>
	type $mol_link__sub_my_ftracker_6 = $mol_type_enforce<
		readonly(any)[]
		,
		ReturnType< $mol_link['sub'] >
	>
	type $mol_list__rows_my_ftracker_7 = $mol_type_enforce<
		readonly(any)[]
		,
		ReturnType< $mol_list['rows'] >
	>
	export class $my_ftracker extends $mol_page {
		Workout_label( ): $mol_labeler
		Workout_link( ): $mol_link
		History_label( ): $mol_labeler
		History_link( ): $mol_link
		Nav( ): $mol_list
		history_uri( next?: string ): string
		workout_uri( next?: string ): string
		title( ): string
		body( ): readonly(any)[]
		Workout_page( ): $my_ftracker_workout
		History_page( ): $my_ftracker_history
		Exercise_page( ): $my_ftracker_exercise
	}
	
}

//# sourceMappingURL=ftracker.view.tree.d.ts.map