	($.$my_ftracker_history) = class $my_ftracker_history extends ($.$mol_page) {
		history_items(){
			return [];
		}
		History_list(){
			const obj = new this.$.$mol_list();
			(obj.rows) = () => ((this.history_items()));
			return obj;
		}
		Clear_button(){
			const obj = new this.$.$mol_button();
			(obj.title) = () => ("Очистить историю");
			(obj.click) = (next) => ((this.clear_history_click()));
			return obj;
		}
		clear_history_click(next){
			if(next !== undefined) return next;
			return "";
		}
		title(){
			return "История";
		}
		body(){
			return [(this.History_list()), (this.Clear_button())];
		}
	};
	($mol_mem(($.$my_ftracker_history.prototype), "History_list"));
	($mol_mem(($.$my_ftracker_history.prototype), "Clear_button"));
	($mol_mem(($.$my_ftracker_history.prototype), "clear_history_click"));

//# sourceMappingURL=history.view.tree.js.map