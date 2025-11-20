namespace $.$$ {

	export class $my_ftracker_group_exercise_card extends $.$my_ftracker_group_exercise_card {
		exercise_name( next?: string ) { return next ?? '' }
		click_uri( next?: string ) { return next ?? '' }
	}

	export class $my_tracker_group extends $.$my_ftracker_group {

		@$mol_mem
		group_id() {
			return $mol_state_arg.value('group') ?? ''
		}

		@$mol_mem
		group_title() {
			const titles = {
				chest: 'Грудь',
				legs: 'Ноги',
				arms: 'Руки',
				back: 'Спина',
				abs: 'Пресс',
			}
			const id = (this.group_id() || 'chest') as keyof typeof titles
			return titles[id] ?? 'Тренировка'
		}

		@$mol_mem
		exercises() {

			const map = {
				chest: ['Жим лёжа', 'Отжимания', 'Сведение рук'],
				legs: ['Приседания', 'Выпады', 'Жим ногами'],
				arms: ['Бицепс с гантелями', 'Французский жим', 'Подъём штанги'],
				back: ['Тяга в наклоне', 'Подтягивания', 'Гиперэкстензия'],
				abs: ['Планка', 'Подъём ног', 'Скручивания'],
			}

			const id = (this.group_id() || 'chest') as keyof typeof map

			return map[id].map(name =>
				$.$my_ftracker_group_exercise_card.make({
					exercise_name: $mol_const( name ),
					click_uri: $mol_const( $mol_state_arg.make_link({
						page: 'exercise',
						exercise: name,
					}) )
				})
			)
		}
	}
}
