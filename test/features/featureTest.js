var ToDoList = require('../../src/toDoList').ToDoList;
var Task = require('../../src/task').Task;
var assert = require('chai').assert;
var expect = require('chai').expect;
var createServer= require('http-server').createServer();
var Browser = require('zombie');


  describe('homepage', function() {

    before(function() {
      this.server = createServer.listen(3000);
      this.browser = new Browser({ site: 'http://localhost:3000' });
    });

    before(function(done) {
      this.browser.visit('/', done);
    });


    it('should show a title', function() {
      this.browser.assert.text('title', 'To Do List')
    });


    // it('should contain some tasks', function(){
    //   this.browser.fill('task', 'go shopping');
  	//   this.browser.pressButton('Add to list');
  	// 	assert.include(this.browser.text('li'), 'go shopping');
    //   // this.browser.assert.text('li', 'go shopping')
    // })
  // it('should have a form to add tasks', function() {
  //   this.browser.assert.text('')
  // })
  })
