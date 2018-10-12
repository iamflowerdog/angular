/**
 * Created by yang on 2018/10/11.
 */
angular.module('todoApp', [])
    .controller('TodoListController', function() {
        var todoList = this;
        todoList.todos = [
            {text:'learn AngularJS', done:true},
            {text:'build an AngularJS app', done:false}];

        todoList.addTodo = function() {
            console.log(todoList.todoText);
            todoList.todos.push({text:todoList.todoText, done:false});
            todoList.todoText = '';
        };

        todoList.remaining = function() {
            return todoList.todos.filter((item) => {
                return item.done === false;
            }).length;
        };

        todoList.archive = function() {
            todoList.todos = todoList.todos.filter((item) => {
                return item.done === false;
            })
        };
    });