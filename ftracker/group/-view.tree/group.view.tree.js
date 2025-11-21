	($.$my_ftracker_group) = class $my_ftracker_group extends ($.$mol_page) {
		exercises(){
			return [];
		}
		Exercises(){
			const obj = new this.$.$mol_list();
			(obj.rows) = () => ((this.exercises()));
			return obj;
		}
		group_title(next){
			if(next !== undefined) return next;
			return "";
		}
		title(){
			return (this.group_title());
		}
		body(){
			return [(this.Exercises())];
		}
	};
	($mol_mem(($.$my_ftracker_group.prototype), "Exercises"));
	($mol_mem(($.$my_ftracker_group.prototype), "group_title"));
	($.$my_ftracker_group_exercise_card) = class $my_ftracker_group_exercise_card extends ($.$mol_link) {
		Title(){
			const obj = new this.$.$mol_labeler();
			(obj.title) = () => ((this.exercise_name()));
			return obj;
		}
		Card(){
			const obj = new this.$.$mol_card();
			(obj.sub) = () => ([(this.Title())]);
			return obj;
		}
		uri(){
			return (this.click_uri());
		}
		exercise_name(next){
			if(next !== undefined) return next;
			return "";
		}
		click_uri(next){
			if(next !== undefined) return next;
			return "";
		}
		sub(){
			return [(this.Card())];
		}
	};
	($mol_mem(($.$my_ftracker_group_exercise_card.prototype), "Title"));
	($mol_mem(($.$my_ftracker_group_exercise_card.prototype), "Card"));
	($mol_mem(($.$my_ftracker_group_exercise_card.prototype), "exercise_name"));
	($mol_mem(($.$my_ftracker_group_exercise_card.prototype), "click_uri"));

//# sourceMappingURL=group.view.tree.js.map