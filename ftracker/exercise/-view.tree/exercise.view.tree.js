	($.$my_ftracker_exercise) = class $my_ftracker_exercise extends ($.$mol_page) {
		Exercise_Image(){
			const obj = new this.$.$mol_image();
			(obj.uri) = () => ((this.exercise_image_uri()));
			(obj.title) = () => ((this.exercise_title()));
			return obj;
		}
		Description_Title(){
			const obj = new this.$.$mol_labeler();
			(obj.title) = () => ("Описание");
			return obj;
		}
		Description_Text(){
			const obj = new this.$.$mol_text();
			(obj.text) = () => ((this.exercise_description()));
			return obj;
		}
		Exercise_Details(){
			const obj = new this.$.$mol_view();
			(obj.sub) = () => ([(this.Description_Title()), (this.Description_Text())]);
			return obj;
		}
		Recommendations_Title(){
			const obj = new this.$.$mol_labeler();
			(obj.title) = () => ("Рекомендации по выполнению");
			return obj;
		}
		Sets_Info_Text(){
			const obj = new this.$.$mol_text();
			(obj.text) = () => ((this.exercise_sets_info()));
			return obj;
		}
		Sets_Info(){
			const obj = new this.$.$mol_labeler();
			(obj.title) = () => ("Подходы:");
			(obj.content) = () => ([(this.Sets_Info_Text())]);
			return obj;
		}
		Reps_Info_Text(){
			const obj = new this.$.$mol_text();
			(obj.text) = () => ((this.exercise_reps_info()));
			return obj;
		}
		Reps_Info(){
			const obj = new this.$.$mol_labeler();
			(obj.title) = () => ("Повторения:");
			(obj.content) = () => ([(this.Reps_Info_Text())]);
			return obj;
		}
		Time_Info_Text(){
			const obj = new this.$.$mol_text();
			(obj.text) = () => ((this.exercise_time_info()));
			return obj;
		}
		Time_Info(){
			const obj = new this.$.$mol_labeler();
			(obj.title) = () => ("Время тренировки:");
			(obj.content) = () => ([(this.Time_Info_Text())]);
			return obj;
		}
		Rest_Info_Text(){
			const obj = new this.$.$mol_text();
			(obj.text) = () => ((this.exercise_rest_info()));
			return obj;
		}
		Rest_Info(){
			const obj = new this.$.$mol_labeler();
			(obj.title) = () => ("Отдых между подходами:");
			(obj.content) = () => ([(this.Rest_Info_Text())]);
			return obj;
		}
		Timer_title(){
			const obj = new this.$.$mol_labeler();
			(obj.title) = () => ("Таймер");
			return obj;
		}
		Timer_label(){
			const obj = new this.$.$mol_labeler();
			(obj.title) = () => ((this.time_display_text()));
			return obj;
		}
		Start_pause(){
			const obj = new this.$.$mol_button();
			(obj.title) = () => ((this.timer_button_title()));
			(obj.click) = (next) => ((this.timer_button_click()));
			return obj;
		}
		Reset_timer(){
			const obj = new this.$.$mol_button();
			(obj.title) = () => ("Сбросить");
			(obj.click) = (next) => ((this.timer_reset_click()));
			return obj;
		}
		Timer_controls(){
			const obj = new this.$.$mol_row();
			(obj.sub) = () => ([(this.Start_pause()), (this.Reset_timer())]);
			return obj;
		}
		Timer_row(){
			const obj = new this.$.$mol_row();
			(obj.sub) = () => ([(this.Timer_label()), (this.Timer_controls())]);
			return obj;
		}
		Timer_block(){
			const obj = new this.$.$mol_view();
			(obj.sub) = () => ([(this.Timer_title()), (this.Timer_row())]);
			return obj;
		}
		Counter_title(){
			const obj = new this.$.$mol_labeler();
			(obj.title) = () => ("Подходы");
			return obj;
		}
		Big_counter(){
			const obj = new this.$.$mol_labeler();
			(obj.title) = () => ((this.set_label_text()));
			return obj;
		}
		Big_plus(){
			const obj = new this.$.$mol_button();
			(obj.title) = () => ("Подход");
			(obj.click) = (next) => ((this.increment_set_click()));
			return obj;
		}
		Reset_counter(){
			const obj = new this.$.$mol_button();
			(obj.title) = () => ("Сбросить");
			(obj.click) = (next) => ((this.reset_counter_click()));
			return obj;
		}
		Counter_buttons(){
			const obj = new this.$.$mol_row();
			(obj.sub) = () => ([(this.Big_plus()), (this.Reset_counter())]);
			return obj;
		}
		Counter_row(){
			const obj = new this.$.$mol_row();
			(obj.sub) = () => ([(this.Big_counter()), (this.Counter_buttons())]);
			return obj;
		}
		Counter_block(){
			const obj = new this.$.$mol_view();
			(obj.sub) = () => ([(this.Counter_title()), (this.Counter_row())]);
			return obj;
		}
		Finish(){
			const obj = new this.$.$mol_button_major();
			(obj.title) = () => ("Завершить тренировку");
			(obj.click) = (next) => ((this.finish_exercise_click()));
			return obj;
		}
		Finish_row(){
			const obj = new this.$.$mol_row();
			(obj.sub) = () => ([(this.Finish())]);
			return obj;
		}
		finish_exercise_click(next){
			if(next !== undefined) return next;
			return "";
		}
		reset_counter_click(next){
			if(next !== undefined) return next;
			return "";
		}
		increment_set_click(next){
			if(next !== undefined) return next;
			return "";
		}
		timer_button_click(next){
			if(next !== undefined) return next;
			return "";
		}
		timer_reset_click(next){
			if(next !== undefined) return next;
			return "";
		}
		exercise_title(next){
			if(next !== undefined) return next;
			return "";
		}
		exercise_description(next){
			if(next !== undefined) return next;
			return "";
		}
		exercise_sets_info(next){
			if(next !== undefined) return next;
			return "";
		}
		exercise_reps_info(next){
			if(next !== undefined) return next;
			return "";
		}
		exercise_time_info(next){
			if(next !== undefined) return next;
			return "";
		}
		exercise_rest_info(next){
			if(next !== undefined) return next;
			return "";
		}
		exercise_image_uri(next){
			if(next !== undefined) return next;
			return "";
		}
		time_display_text(next){
			if(next !== undefined) return next;
			return "";
		}
		timer_button_title(next){
			if(next !== undefined) return next;
			return "";
		}
		set_label_text(next){
			if(next !== undefined) return next;
			return "";
		}
		title(){
			return (this.exercise_title());
		}
		body(){
			return [
				(this.Exercise_Image()), 
				(this.Exercise_Details()), 
				(this.Recommendations_Title()), 
				(this.Sets_Info()), 
				(this.Reps_Info()), 
				(this.Time_Info()), 
				(this.Rest_Info()), 
				(this.Timer_block()), 
				(this.Counter_block()), 
				(this.Finish_row())
			];
		}
	};
	($mol_mem(($.$my_ftracker_exercise.prototype), "Exercise_Image"));
	($mol_mem(($.$my_ftracker_exercise.prototype), "Description_Title"));
	($mol_mem(($.$my_ftracker_exercise.prototype), "Description_Text"));
	($mol_mem(($.$my_ftracker_exercise.prototype), "Exercise_Details"));
	($mol_mem(($.$my_ftracker_exercise.prototype), "Recommendations_Title"));
	($mol_mem(($.$my_ftracker_exercise.prototype), "Sets_Info_Text"));
	($mol_mem(($.$my_ftracker_exercise.prototype), "Sets_Info"));
	($mol_mem(($.$my_ftracker_exercise.prototype), "Reps_Info_Text"));
	($mol_mem(($.$my_ftracker_exercise.prototype), "Reps_Info"));
	($mol_mem(($.$my_ftracker_exercise.prototype), "Time_Info_Text"));
	($mol_mem(($.$my_ftracker_exercise.prototype), "Time_Info"));
	($mol_mem(($.$my_ftracker_exercise.prototype), "Rest_Info_Text"));
	($mol_mem(($.$my_ftracker_exercise.prototype), "Rest_Info"));
	($mol_mem(($.$my_ftracker_exercise.prototype), "Timer_title"));
	($mol_mem(($.$my_ftracker_exercise.prototype), "Timer_label"));
	($mol_mem(($.$my_ftracker_exercise.prototype), "Start_pause"));
	($mol_mem(($.$my_ftracker_exercise.prototype), "Reset_timer"));
	($mol_mem(($.$my_ftracker_exercise.prototype), "Timer_controls"));
	($mol_mem(($.$my_ftracker_exercise.prototype), "Timer_row"));
	($mol_mem(($.$my_ftracker_exercise.prototype), "Timer_block"));
	($mol_mem(($.$my_ftracker_exercise.prototype), "Counter_title"));
	($mol_mem(($.$my_ftracker_exercise.prototype), "Big_counter"));
	($mol_mem(($.$my_ftracker_exercise.prototype), "Big_plus"));
	($mol_mem(($.$my_ftracker_exercise.prototype), "Reset_counter"));
	($mol_mem(($.$my_ftracker_exercise.prototype), "Counter_buttons"));
	($mol_mem(($.$my_ftracker_exercise.prototype), "Counter_row"));
	($mol_mem(($.$my_ftracker_exercise.prototype), "Counter_block"));
	($mol_mem(($.$my_ftracker_exercise.prototype), "Finish"));
	($mol_mem(($.$my_ftracker_exercise.prototype), "Finish_row"));
	($mol_mem(($.$my_ftracker_exercise.prototype), "finish_exercise_click"));
	($mol_mem(($.$my_ftracker_exercise.prototype), "reset_counter_click"));
	($mol_mem(($.$my_ftracker_exercise.prototype), "increment_set_click"));
	($mol_mem(($.$my_ftracker_exercise.prototype), "timer_button_click"));
	($mol_mem(($.$my_ftracker_exercise.prototype), "timer_reset_click"));
	($mol_mem(($.$my_ftracker_exercise.prototype), "exercise_title"));
	($mol_mem(($.$my_ftracker_exercise.prototype), "exercise_description"));
	($mol_mem(($.$my_ftracker_exercise.prototype), "exercise_sets_info"));
	($mol_mem(($.$my_ftracker_exercise.prototype), "exercise_reps_info"));
	($mol_mem(($.$my_ftracker_exercise.prototype), "exercise_time_info"));
	($mol_mem(($.$my_ftracker_exercise.prototype), "exercise_rest_info"));
	($mol_mem(($.$my_ftracker_exercise.prototype), "exercise_image_uri"));
	($mol_mem(($.$my_ftracker_exercise.prototype), "time_display_text"));
	($mol_mem(($.$my_ftracker_exercise.prototype), "timer_button_title"));
	($mol_mem(($.$my_ftracker_exercise.prototype), "set_label_text"));

//# sourceMappingURL=exercise.view.tree.js.map