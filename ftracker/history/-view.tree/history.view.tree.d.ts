declare namespace $ {

	type $mol_list__rows_my_ftracker_history_1 = $mol_type_enforce<
		ReturnType< $my_ftracker_history['history_items'] >
		,
		ReturnType< $mol_list['rows'] >
	>
	type $mol_button__title_my_ftracker_history_2 = $mol_type_enforce<
		string
		,
		ReturnType< $mol_button['title'] >
	>
	type $mol_button__click_my_ftracker_history_3 = $mol_type_enforce<
		ReturnType< $my_ftracker_history['clear_history_click'] >
		,
		ReturnType< $mol_button['click'] >
	>
	export class $my_ftracker_history extends $mol_page {
		history_items( ): readonly(any)[]
		History_list( ): $mol_list
		Clear_button( ): $mol_button
		clear_history_click( next?: string ): string
		title( ): string
		body( ): readonly(any)[]
	}
	
}

//# sourceMappingURL=history.view.tree.d.ts.map