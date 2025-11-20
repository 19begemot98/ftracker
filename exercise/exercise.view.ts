namespace $.$$ {

	export class $my_ftracker_exercise extends $.$my_ftracker_exercise {

		// Карта данных для упражнений
		Exercise_Data_Map = {
			'Жим лёжа': {
				description: 'Базовое упражнение для грудных мышц. Лягте на скамью, опустите штангу к груди и выжмите вверх.',
				sets: '3-4 подхода',
				reps: '8-12 повторений',
				time: '45-60 минут',
				rest: '2-3 минуты между подходами'
			},
			'Отжимания': {
				description: 'Упражнение с собственным весом для груди и трицепсов. Следите за прямой линией тела.',
				sets: '3-5 подходов',
				reps: '15-20 повторений',
				time: '10-15 минут',
				rest: '1-2 минуты между подходами'
			},
			'Сведение рук': {
				description: 'Изолирующее упражнение для груди (в тренажере или с гантелями).',
				sets: '3-4 подхода',
				reps: '12-15 повторений',
				time: '20-30 минут',
				rest: '1.5-2 минуты между подходами'
			},
			'Приседания': {
				description: 'Король упражнений. Начинайте движение с отведения таза назад, держите спину ровно.',
				sets: '4-5 подходов',
				reps: '6-10 повторений',
				time: '40-50 минут',
				rest: '3-4 минуты между подходами'
			},
			'Выпады': {
				description: 'Упражнение для ног. Отведите одну ногу назад, опускайтесь до прямого угла в коленях.',
				sets: '3-4 подхода',
				reps: '10-12 повторений на каждую ногу',
				time: '25-35 минут',
				rest: '2-3 минуты между подходами'
			},
			'Жим ногами': {
				description: 'Упражнение на тренажере, полезно для квадрицепсов и ягодиц.',
				sets: '4-5 подходов',
				reps: '10-15 повторений',
				time: '30-40 минут',
				rest: '2-3 минуты между подходами'
			},
			'Бицепс с гантелями': {
				description: 'Упражнение для развития бицепсов. Выполняйте стоя или сидя, контролируя движение.',
				sets: '3-4 подхода',
				reps: '10-12 повторений',
				time: '20-25 минут',
				rest: '1.5-2 минуты между подходами'
			},
			'Французский жим': {
				description: 'Упражнение для развития трицепсов. Выполняется лёжа или сидя.',
				sets: '3-4 подхода',
				reps: '12-15 повторений',
				time: '20-30 минут',
				rest: '1.5-2 минуты между подходами'
			},
			'Подъём штанги': {
				description: 'Базовое упражнение для бицепсов.',
				sets: '3-4 подхода',
				reps: '8-10 повторений',
				time: '25-35 минут',
				rest: '2 минуты между подходами'
			},
			'Тяга в наклоне': {
				description: 'Упражнение для широчайших мышц спины.',
				sets: '4-5 подходов',
				reps: '8-12 повторений',
				time: '35-45 минут',
				rest: '2-3 минуты между подходами'
			},
			'Подтягивания': {
				description: 'Упражнение с собственным весом для мышц спины и бицепсов.',
				sets: '3-5 подходов',
				reps: '6-10 повторений',
				time: '20-30 минут',
				rest: '2-3 минуты между подходами'
			},
			'Гиперэкстензия': {
				description: 'Упражнение для мышц поясницы и ягодиц.',
				sets: '3-4 подхода',
				reps: '15-20 повторений',
				time: '15-20 минут',
				rest: '1-1.5 минуты между подходами'
			},
			'Планка': {
				description: 'Статическое упражнение для пресса и кора. Держите тело прямым.',
				sets: '3-4 подхода',
				reps: '30-60 секунд',
				time: '10-15 минут',
				rest: '1 минута между подходами'
			},
			'Подъём ног': {
				description: 'Упражнение для нижнего пресса.',
				sets: '3-4 подхода',
				reps: '15-20 повторений',
				time: '15-20 минут',
				rest: '1 минута между подходами'
			},
			'Скручивания': {
				description: 'Классическое упражнение для верхнего пресса.',
				sets: '3-4 подхода',
				reps: '20-25 повторений',
				time: '15-20 минут',
				rest: '1 минута между подходами'
			},
		} as const

		Exercise_Image_Map = {
			'Жим лёжа': 'https://tutknow.ru/uploads/posts/2015-08/thumbs/1439220091_zhim-shtangi-lezha.jpg',
			'Отжимания': 'https://fitseven.ru/wp-content/uploads/2019/03/kak-pravilno-otjimatsya.jpg', 
			'Сведение рук': 'https://tutknow.ru/uploads/posts/2015-07/thumbs/1437572941_svedeniya-ruk-v-trenazhere.jpg',
			'Приседания': 'https://th.bing.com/th/id/R.78f7205f96b7a28d6eb98ae666959388?rik=1uyunsvuovRWiw&pid=ImgRaw&r=0',
			'Выпады': 'https://tutknow.ru/uploads/posts/2015-06/thumbs/1435241911_vypady-so-shtangoy-i-gantelyami.jpg',
			'Жим ногами': 'https://th.bing.com/th/id/R.b2f3246d335b7dc4c102cae04b770c2b?rik=R5DetJzCyhKCaw&pid=ImgRaw&r=0p',
			'Бицепс с гантелями': 'https://sportdush.ru/wp-content/uploads/2021/02/uprazhneniya-na-biceps-s-gantelyami-tehnika-vypolneniya-768x449.jpg',
			'Французский жим': 'https://stoneforest.ru/wp-content/uploads/2020/11/francuzskiy-zhim-1.jpg',
			'Подъём штанги': 'https://menscom.ru/wp-content/uploads/2023/06/Podem-pryamoj-shtangi-na-biceps.jpeg',
			'Тяга в наклоне': 'https://th.bing.com/th/id/R.e391ab889eeb1cb704c58afce6b8be96?rik=Z5r674eDecMiPQ&pid=ImgRaw&r=0',
			'Подтягивания': 'https://ss.sport-express.ru/userfiles/materials/173/1732040/volga.jpg',
			'Гиперэкстензия': 'https://fitseven.ru/wp-content/uploads/2020/02/chto-takoe-hyperexetsiya.jpg',
			'Планка': 'https://tse2.mm.bing.net/th/id/OIP.tegwk-RgTIqT-wsezjKkCwHaEm?rs=1&pid=ImgDetMain&o=7&rm=3',
			'Подъём ног': 'https://bodybuilding-and-fitness.ru/wp-content/uploads/2019/11/podem-nog-lezha-na-gorizontalnoj-poverhnosti.jpg',
			'Скручивания': 'https://fitseven.ru/wp-content/uploads/2020/01/bokovie-skruchivaniya.jpg',
		} as const
		@$mol_mem
		exercise_name(next?: string) {
			return $mol_state_arg.value('exercise') ?? ''
		}

		@$mol_mem
		exercise_title() {
			return this.exercise_name() || 'Упражнение'
		}

		@$mol_mem
		exercise_description() {
			const name = this.exercise_name()
			const data = this.Exercise_Data_Map[name as keyof typeof this.Exercise_Data_Map]
			return data?.description || 'Детали об этом упражнении не найдены.'
		}
		@$mol_mem
		exercise_sets_info() {
			const name = this.exercise_name()
			const data = this.Exercise_Data_Map[name as keyof typeof this.Exercise_Data_Map]
			return data?.sets || 'Рекомендации не указаны'
		}

		@$mol_mem
		exercise_reps_info() {
			const name = this.exercise_name()
			const data = this.Exercise_Data_Map[name as keyof typeof this.Exercise_Data_Map]
			return data?.reps || 'Рекомендации не указаны'
		}

		@$mol_mem
		exercise_time_info() {
			const name = this.exercise_name()
			const data = this.Exercise_Data_Map[name as keyof typeof this.Exercise_Data_Map]
			return data?.time || 'Рекомендации не указаны'
		}

		@$mol_mem
		exercise_rest_info() {
			const name = this.exercise_name()
			const data = this.Exercise_Data_Map[name as keyof typeof this.Exercise_Data_Map]
			return data?.rest || 'Рекомендации не указаны'
		}

		@$mol_mem
		exercise_image_uri() {
			const name = this.exercise_name()
			return this.Exercise_Image_Map[name as keyof typeof this.Exercise_Image_Map] || 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=300&h=200&fit=crop'
		}

		@$mol_mem
		timer_seconds(next?: number) {
			return next ?? 0
		}

		@$mol_mem
		timer_running(next?: boolean) {
			return next ?? false
		}

		time_display_text() {
			const sec = this.timer_seconds()
			const m = Math.floor(sec / 60).toString().padStart(2,'0')
			const s = (sec % 60).toString().padStart(2,'0')
			return `${m}:${s}`
		}

		timer_tick() {
			if (!this.timer_running()) return
			this.timer_seconds(this.timer_seconds() + 1)
			setTimeout(() => this.timer_tick(), 1000)
		}

		timer_button_title() {
			return this.timer_running() ? 'Пауза' : 'Старт'
		}

		@$mol_mem
		timer_button_click(next?: string) {
			if (next) return next
			this.timer_running(!this.timer_running())
			if (this.timer_running()) this.timer_tick()
			return ''
		}

		@$mol_mem
		timer_reset_click(next?: string) {
			if (next) return next
			this.timer_running(false)
			this.timer_seconds(0)
			return ''
		}

		@$mol_mem
		set_count(next?: number) {
			return next ?? 0
		}

		set_label_text() {
			return String(this.set_count())
		}

		@$mol_mem
		increment_set_click(next?: string) {
			if (next) return next
			this.set_count(this.set_count() + 1)
			return ''
		}

		@$mol_mem
		reset_counter_click(next?: string) {
			if (next) return next
			this.set_count(0)
			return ''
		}

		@$mol_mem
		finish_exercise_click(next?: string) {
			if (next) return next
			const name = this.exercise_name()
			const history_raw = localStorage.getItem('history')
			const history = history_raw ? JSON.parse(history_raw) : []

			history.push({
				exercise: name,
				date: new Date().toLocaleString(),
				sets_done: this.set_count(),
				duration: this.timer_seconds()
			})

			localStorage.setItem('history', JSON.stringify(history))

			this.set_count(0)
			this.timer_seconds(0)
			this.timer_running(false)

			alert(`Упражнение "${name}" завершено!`)
			return ''
		}
	}
}
