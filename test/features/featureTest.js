process.env.NODE_ENV = 'test';
var server = require("http-server").createServer();
var assert = require('assert');
var Browser = require('zombie');
var assert = require('chai').assert;
var expect = require('chai').expect;

describe("Interface", function() {

  
  var browser = new Browser({ site: 'http://localhost:3000'  });
  server.listen(3000);

  beforeEach(function(done){
    browser.visit('/', done);
  });
  
  it('can see title', function() {
    browser.assert.text('title', 'To Do List');
  });

  it('can submit task then display list of tasks', function() {
   
    browser.fill('task', 'Go shopping');
    browser.pressButton('Add Task', function() {
      assert.equal(browser.text('li'), 'Go shopping');
      // console.log('@@@@@@@@@@@@@@@@@@@')
    // done();
    });
  // 
  // assert.include(browser.text('ul'), 'Go shopping');
  // ;
    browser.fill('task', 'Eat chocolate');
    browser.pressButton('Add Task', function() {
      assert.include(browser.text('li'), 'Phone grandma');
      assert.include(browser.text('li'), 'Eat chocolate');
    });

    browser.fill('task', 'Phone grandma');
    browser.pressButton('Add Task', function() {
      assert.include(browser.text('ul'), 'Go shopping');
      assert.include(browser.text('ul'), 'Eat chocolate');
      assert.include(browser.text('ul'), 'Phone grandma');
    });
  });
  });