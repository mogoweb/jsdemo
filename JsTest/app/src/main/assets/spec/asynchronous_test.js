describe("AsyncTest", function() {
    var code;

    var foo = {
        setcode: function(e) {
            code = e.data;
        },
        onmessage: function(e) {
            console.log("onmessage");
        }
    }

    window.addEventListener('message', function(e) {
        foo.onmessage(e);
    }, false);

    beforeEach(function(done) {
        spyOn(foo, "onmessage").and.callFake(function(e) {
            foo.setcode(e);
            done();
        });

        async_call('10001');
    });

    it('testAsyncCall', function() {
        expect(foo.onmessage).toHaveBeenCalled();
        expect(code).toEqual('10001');
    });
});