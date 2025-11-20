namespace $.$$ {

	export class $my_ftracker_history extends $.$my_ftracker_history {

		@$mol_mem
		history_list(next?: any[]): any[] {
			if (next) return next
			const raw = localStorage.getItem('history')
			return raw ? JSON.parse(raw) : []
		}

		@$mol_mem
		history_items() {
			const data = this.history_list()

			if (!data.length) {
				return [
					$mol_labeler.make({
						title: () => 'Пока нет завершённых тренировок'
					})
				]
			}

			return data.map((item: any) =>
				$mol_labeler.make({
					title: () =>
						item.sets_done
							? `${item.date}: ${item.exercise} — ${item.sets_done} подходов (${item.duration}s)`
							: `${item.date}: ${item.exercise}`
				})
			)
		}

		@$mol_mem
		clear_history_click(next?: string) {
			if (next) return next
			localStorage.removeItem('history')
			this.history_list([])
			return '' 
		}
	}

}
