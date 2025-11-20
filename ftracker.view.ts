namespace $.$$ {

	export class $my_ftracker extends $.$my_ftracker {

		@$mol_mem
		page_id(next?: string) {
			return $mol_state_arg.value('page', next) ?? 'workout'
		}

		@$mol_mem
		workout_uri() {
			return $mol_state_arg.make_link({ page: 'workout' })
		}

		@$mol_mem
		history_uri() {
			return $mol_state_arg.make_link({ page: 'history' })
		}

		@$mol_mem
		Current_page() {
			switch (this.page_id()) {
				case 'workout': return this.Workout_page()
				case 'history': return this.History_page()
				case 'exercise': return this.Exercise_page()
				default: return this.Workout_page()
			}
		}

	}

}
