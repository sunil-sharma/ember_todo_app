Todos.Router.map(function() {
  this.resource('todos', { path: '/' }, function(){
    this.route('active');
    this.route('completed');
    this.route('all');
    this.route('disabled');
    this.route('enabled');
  });
});

Todos.TodosRoute = Ember.Route.extend({
  model: function() {
    return this.store.find('todo');
  }
});

Todos.TodosAllRoute = Ember.Route.extend({
  model: function(){
    return this.store.find('todo');
  },
  renderTemplate: function(controller){
    this.render('todos/index', {controller: controller});
  }
});

Todos.TodosActiveRoute = Ember.Route.extend({
  model: function(){
    return this.store.filter('todo', function(todo) {
      return !todo.get('isCompleted');
    });
  },
  renderTemplate: function(controller) {
    this.render('todos/index', {controller: controller});
  }
});

Todos.TodosCompletedRoute = Ember.Route.extend({
  model: function(){
    return this.store.filter('todo', function(todo){
      return todo.get('isCompleted');
    });
  },
  renderTemplate: function(controller) {
    this.render('todos/index', {controller: controller})
  }
})

// Todos.TodosDisabledRoute = Ember.Route.extend({
//   model: function(){
//     return this.store.filter('todo', function(todo){
//       return todo.get('disabled');
//     });
//   },
//   renderTemplate: function(controller) {
//     this.render('todos/index', {controller: controller})
//   }
// });

// Todos.TodosEnabledRoute = Ember.Route.extend({
//   model: function(){
//     return this.store.filter('todo', function(todo){
//       return !todo.get('disabled');
//     });
//   },
//   renderTemplate: function(controller) {
//     this.render('todos/index', {controller: controller})
//   }
// });
