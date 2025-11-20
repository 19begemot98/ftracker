namespace $.$$ {
	export class $my_ftracker_workout_group_link extends $.$my_ftracker_workout_group_link {}

	export class $my_ftracker_workout extends $.$my_ftracker_workout {

		@$mol_mem
		group_id(next?: string) {
			return $mol_state_arg.value('group', next)
		}

		@$mol_mem
		groups() {
			return [
				this.Group_link('chest'),
				this.Group_link('legs'),
				this.Group_link('arms'),
				this.Group_link('back'),
				this.Group_link('abs')
			]
		}

		Group_link(id: string) {
			const title_map = {
				chest: 'Грудь',
				legs: 'Ноги',
				arms: 'Руки',
				back: 'Спина',
				abs: 'Пресс'
			}
			const title_val = title_map[id as keyof typeof title_map]
			const uri_val = $mol_state_arg.make_link({ page: 'group', group: id })
			
			return $.$my_ftracker_workout_group_link.make({
				title: $mol_const( title_val ), 
				uri: $mol_const( uri_val )
			})
		}

		@$mol_mem
		page_id() {
			return this.group_id() ? 'group' : 'list'
		}

		@$mol_mem
		sub() {
			if (this.page_id() === 'group') return [this.Group_page()]
			return [this.Groups()]
		}

		@$mol_mem
		Group_page() { return super.Group_page() }

		@$mol_mem
		Groups() { return super.Groups() }

	}
}
