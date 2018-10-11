/**
 * Created by yang on 2018/10/11.
 */
angular.module('todoApp', [])
    .controller('TodoListController', function () {
        var todoList = this;
        todoList.todos = [
            {text:'learn AngularJS', done:true},
            {text:'go to Alibaba', done:true},
        ];


        // todoList.todoText = function (e) {
        //     console.log(e);
        // };
        todoList.addTodo = function () {
            console.log(todoList.todoText);
            todoList.todos.push({text: todoList.todoText, done: false});
            todoList.todoText = '';
        }



    });