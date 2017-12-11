new Vue({
    el: '.todo-app',
    data: function() {
        return {
            newTodo: '',
            todos: [ {id: 0, title: 'New Todo', completed: true }]
        }
    },
    methods: {
        addTodo(){
           this.todos.push({
               title: this.newTodo, completed: false, id: this.todos.length,
           })
            this.newTodo = '';
        },
        removeTodo(todo){
          this.todos.splice(this.todos.indexOf(todo), 1)
        }
    }
})