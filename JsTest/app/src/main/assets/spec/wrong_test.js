describe("WrongAsyncTest", function() {
    var code;

    var foo = {
        onmessage: function(e) {
            console.log("onmessage");
            code = e.data;
        }
    };

    beforeEach(function() {
        window.addEventListener('message', function(e) {
            foo.onmessage(e);
        }, false);
        jasmine.clock().install();
    });

    afterEach(function() {
        jasmine.clock().uninstall();
    });

    it('testAsyncCall', function() {
        async_call('10001');
        jasmine.clock().tick(1000);
        expect(code).toEqual('10001');
    });
});