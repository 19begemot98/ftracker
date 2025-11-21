	($.$my_ftracker_workout) = class $my_ftracker_workout extends ($.$mol_page) {
		groups(){
			return [];
		}
		Groups(){
			const obj = new this.$.$mol_list();
			(obj.rows) = () => ((this.groups()));
			return obj;
		}
		title(){
			return "Выберите часть тела";
		}
		body(){
			return [(this.Groups())];
		}
		Group_page(){
			const obj = new this.$.$my_ftracker_group();
			return obj;
		}
	};
	($mol_mem(($.$my_ftracker_workout.prototype), "Groups"));
	($mol_mem(($.$my_ftracker_workout.prototype), "Group_page"));
	($.$my_ftracker_workout_group_link) = class $my_ftracker_workout_group_link extends ($.$mol_link) {
		title(){
			return (this.group_title());
		}
		uri(){
			return (this.click_uri());
		}
		group_title(next){
			if(next !== undefined) return next;
			return "";
		}
		click_uri(next){
			if(next !== undefined) return next;
			return "";
		}
	};
	($mol_mem(($.$my_ftracker_workout_group_link.prototype), "group_title"));
	($mol_mem(($.$my_ftracker_workout_group_link.prototype), "click_uri"));

//# sourceMappingURL=workout.view.tree.js.map