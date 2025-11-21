	($.$my_ftracker) = class $my_ftracker extends ($.$mol_page) {
		Workout_label(){
			const obj = new this.$.$mol_labeler();
			(obj.title) = () => ("Тренировка");
			return obj;
		}
		Workout_link(){
			const obj = new this.$.$mol_link();
			(obj.uri) = () => ((this.workout_uri()));
			(obj.sub) = () => ([(this.Workout_label())]);
			return obj;
		}
		History_label(){
			const obj = new this.$.$mol_labeler();
			(obj.title) = () => ("История");
			return obj;
		}
		History_link(){
			const obj = new this.$.$mol_link();
			(obj.uri) = () => ((this.history_uri()));
			(obj.sub) = () => ([(this.History_label())]);
			return obj;
		}
		Nav(){
			const obj = new this.$.$mol_list();
			(obj.rows) = () => ([(this.Workout_link()), (this.History_link())]);
			return obj;
		}
		history_uri(next){
			if(next !== undefined) return next;
			return "";
		}
		workout_uri(next){
			if(next !== undefined) return next;
			return "";
		}
		title(){
			return "Фитнес Трекер";
		}
		body(){
			return [(this.Nav()), (this.Current_page())];
		}
		Workout_page(){
			const obj = new this.$.$my_ftracker_workout();
			return obj;
		}
		History_page(){
			const obj = new this.$.$my_ftracker_history();
			return obj;
		}
		Exercise_page(){
			const obj = new this.$.$my_ftracker_exercise();
			return obj;
		}
	};
	($mol_mem(($.$my_ftracker.prototype), "Workout_label"));
	($mol_mem(($.$my_ftracker.prototype), "Workout_link"));
	($mol_mem(($.$my_ftracker.prototype), "History_label"));
	($mol_mem(($.$my_ftracker.prototype), "History_link"));
	($mol_mem(($.$my_ftracker.prototype), "Nav"));
	($mol_mem(($.$my_ftracker.prototype), "history_uri"));
	($mol_mem(($.$my_ftracker.prototype), "workout_uri"));
	($mol_mem(($.$my_ftracker.prototype), "Workout_page"));
	($mol_mem(($.$my_ftracker.prototype), "History_page"));
	($mol_mem(($.$my_ftracker.prototype), "Exercise_page"));

//# sourceMappingURL=ftracker.view.tree.js.map