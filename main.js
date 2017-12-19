const STORAGE_KEY = 'todo-storage';

new Vue({
    el: '.todo-app',
    data: function () {
        return {
            newTodo: '',
            todos: [{id: 0, title: 'New Todo', completed: true}],
            editedTodo: null,
            visibility: 'all',
            isAll: false,
            isActive: false,
            isCompleted: false
        }
    },
    created() {
        this.todos = JSON.parse(localStorage.getItem(STORAGE_KEY || '[]'))
    },
    computed : {
        filteredTodos(){
            if(this.visibility === 'all') {
                return this.todos;
            } else if (this.visibility === 'active') {
                return this.todos.filter(function (todo) {
                    return !todo.completed;
                })
            } else {
                return this.todos.filter(function (todo) {
                    return todo.completed;
                })
            }
        }
    },
    methods: {
        addTodo() {
            this.todos.push({
                title: this.newTodo, completed: false, id: this.todos.length,
            });
            this.newTodo = '';
            localStorage.setItem(STORAGE_KEY, JSON.stringify(this.todos));
        },
        removeTodo(todo) {
            this.todos.splice(this.todos.indexOf(todo), 1);
            localStorage.setItem(STORAGE_KEY, JSON.stringify(this.todos));
        },
        editTodo(todo) {
            this.editedTodo = todo;
        },
        doneEdit(todo) {
            if(!this.editedTodo) {
                return
            }
            this.editedTodo = null;
            todo.title = todo.title.trim();
            if(!todo.title) {
                this.removeTodo(todo)
            }
        }

    }
});