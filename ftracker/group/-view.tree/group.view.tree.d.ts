declare namespace $ {

	type $mol_list__rows_my_ftracker_group_1 = $mol_type_enforce<
		ReturnType< $my_ftracker_group['exercises'] >
		,
		ReturnType< $mol_list['rows'] >
	>
	export class $my_ftracker_group extends $mol_page {
		exercises( ): readonly(any)[]
		Exercises( ): $mol_list
		group_title( next?: string ): string
		title( ): ReturnType< $my_ftracker_group['group_title'] >
		body( ): readonly(any)[]
	}
	
	type $mol_labeler__title_my_ftracker_group_exercise_card_1 = $mol_type_enforce<
		ReturnType< $my_ftracker_group_exercise_card['exercise_name'] >
		,
		ReturnType< $mol_labeler['title'] >
	>
	type $mol_card__sub_my_ftracker_group_exercise_card_2 = $mol_type_enforce<
		readonly(any)[]
		,
		ReturnType< $mol_card['sub'] >
	>
	export class $my_ftracker_group_exercise_card extends $mol_link {
		Title( ): $mol_labeler
		Card( ): $mol_card
		uri( ): ReturnType< $my_ftracker_group_exercise_card['click_uri'] >
		exercise_name( next?: string ): string
		click_uri( next?: string ): string
		sub( ): readonly(any)[]
	}
	
}

//# sourceMappingURL=group.view.tree.d.ts.map