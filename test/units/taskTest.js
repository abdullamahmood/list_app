var assert = require('chai').assert;
var expect = require('chai').expect;
var Task = require('../../src/task');

describe('Task', function(){

  beforeEach(function(){
    task = new Task('Ben');
  });

  describe('#completed', function(){
    it('is false by default', function(){
      expect(task.completed()).to.eql(false);
    });
  });

  describe('#name', function(){
    it('displays the name', function(){
      expect(task.name()).to.eql('Ben');
    });
  });

  describe('#finish', function(){
    it('changes the status to finished', function(){
      task.finish();
      expect(task.completed()).to.eql(true);
    });
  });
});
