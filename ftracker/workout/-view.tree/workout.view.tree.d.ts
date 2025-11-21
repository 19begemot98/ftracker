declare namespace $ {

	type $mol_list__rows_my_ftracker_workout_1 = $mol_type_enforce<
		ReturnType< $my_ftracker_workout['groups'] >
		,
		ReturnType< $mol_list['rows'] >
	>
	export class $my_ftracker_workout extends $mol_page {
		groups( ): readonly(any)[]
		Groups( ): $mol_list
		title( ): string
		body( ): readonly(any)[]
		Group_page( ): $my_ftracker_group
	}
	
	export class $my_ftracker_workout_group_link extends $mol_link {
		title( ): ReturnType< $my_ftracker_workout_group_link['group_title'] >
		uri( ): ReturnType< $my_ftracker_workout_group_link['click_uri'] >
		group_title( next?: string ): string
		click_uri( next?: string ): string
	}
	
}

//# sourceMappingURL=workout.view.tree.d.ts.map