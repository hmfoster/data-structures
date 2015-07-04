  describe('doublylinkedList', function() {
  var bob;

  beforeEach(function() {
    bob = doublyLinkedList();
  });

  it('should have a head and tail', function() {
    expect(bob).to.have.property("head");
    expect(bob).to.have.property("tail");
  });

  it('should have methods named "addToTail", "removeHead", and "contains"', function() {
    expect(bob.addToTail).to.be.a("function");
    expect(bob.removeHead).to.be.a("function");
    expect(bob.contains).to.be.a("function");
  });

  it('should designate a new tail when new nodes are added', function(){
    bob.addToTail(4);
    expect(bob.tail.value).to.equal(4);
    bob.addToTail(5);
    expect(bob.tail.value).to.equal(5);
  });

  it('should remove the head from the list when removeHead is called', function(){
    bob.addToTail(4);
    bob.addToTail(5);
    expect(bob.head.value).to.equal(4);
    bob.removeHead();
    expect(bob.head.value).to.equal(5);
  });

  it("should return the value of the former head when removeHead is called", function(){
    bob.addToTail(4);
    expect(bob.removeHead()).to.equal(4);
  });

  it("should contain a value that was added", function(){
    bob.addToTail(4);
    bob.addToTail(5);
    expect(bob.contains(4)).to.equal(true);
    expect(bob.contains(5)).to.equal(true);
    expect(bob.contains(6)).to.equal(false);
  });

  it('should not contain a value that was removed', function(){
    bob.addToTail(4);
    bob.addToTail(5);
    bob.removeHead();
    expect(bob.contains(4)).to.equal(false);
  });

  // add more tests here to test the functionality of linkedList
});
