function bake_cookie(name, value) {
  var cookie = [
    name,
    "=",
    JSON.stringify(value),
    "; domain_.",
    window.location.host.toString(),
    "; path=/;"
  ].join("");
  document.cookie = cookie;
}

// reads a cookie according to the given name
function read_cookie(name) {
  var result = document.cookie.match(new RegExp(name + "=([^;]+)"));
  result = result != null ? JSON.parse(result[1]) : [];
  return result;
}

function delete_cookie(name) {
  document.cookie = [
    name,
    "=; expires=Thu, 01-Jan-1970 00:00:01 GMT; path=/; domain.",
    window.location.host.toString()
  ].join("");
}

var app = new Vue({
  el: "#app",
  data: {
    colors: [
      "#fff",
      "#f8bbd0",
      "#ff8a80",
      "#ffd180",
      "#ffff8d",
      "#ccff90",
      "#a7ffeb",
      "#80d8ff",
      "#82b1ff",
      "#b388ff",
      "#d7ccc8",
      "#cfd8dc"
    ],
    note: {
      title: "",
      text: "",
      time: "",
      color: ""
    },
    selectedColor: "",
    notes: read_cookie("notes")
  },
  methods: {
    onSubmit() {
      this.note.time = new Date().toLocaleString();
      this.note.color = this.note.color === "" ? "#FFF" : this.note.color;
      this.notes.push(this.note);
      this.note = {};
      bake_cookie("notes", this.notes);
    },
    removeNote(index) {
      this.notes.splice(index, 1);
      bake_cookie("notes", this.notes);
    }
  },
  computed: {
    filterColor: function() {
      return this.notes.filter(item => {
        if (this.selectedColor !== "") {
          return item.color.toLowerCase() === this.selectedColor.toLowerCase();
        } else {
          return true;
        }
      });
    }
  }
});
