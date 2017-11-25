function bake_cookie(name, value) {
  var cookie = [name, '=', JSON.stringify(value), '; domain_.', window.location.host.toString(), '; path=/;'].join('');
  document.cookie = cookie;
}

// reads a cookie according to the given name
function read_cookie(name) {
  var result = document.cookie.match(new RegExp(name + '=([^;]+)'));
  result = result != null ? JSON.parse(result[1]) : [];
  return result;
}

function delete_cookie(name) {
  document.cookie = [name, '=; expires=Thu, 01-Jan-1970 00:00:01 GMT; path=/; domain.', window.location.host.toString()].join('');
}


var app = new Vue({
	el: '#app',
	data: {
		colors: ['#fff', '#1abc9c', '#2ecc71', '#3498db', '#9b59b6', '#16a085', '#27ae60', '#2980b9', '#8e44ad', '#2c3e50'],
		note: {
			title: '',
		  text: '',
			time: '',
			color: ''
		},
		notes: read_cookie('notes')
	},
	methods: {
		onSubmit() {
			this.note.time = new Date().toLocaleString();
			this.notes.push(this.note);
			this.note = {};
			bake_cookie('notes', this.notes);
		},
		removeNote(index) {
			this.notes.splice(index,1);
			bake_cookie('notes', this.notes);
		}
	}
})