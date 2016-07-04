var assert = require('chai').assert;
var expect = require('chai').expect;
var Task = require('../../src/task');

describe('Task', function(){


  beforeEach(function(){
    task = new Task('Ben');
  });

  it('is false by default', function(){
    expect(task.completed()).to.eql(false)
  });

  it('has a name', function(){
    expect(task.name()).to.eql('Ben')
  })
});
