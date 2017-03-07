describe("long asynchronous specs", function() {
    var originalTimeout;
    beforeEach(function() {
        originalTimeout = jasmine.DEFAULT_TIMEOUT_INTERVAL;
        jasmine.DEFAULT_TIMEOUT_INTERVAL = 10000;
    });

    it("testTimeout", function(done) {
        setTimeout(function() {
            done();
        }, 9000);
    });

    afterEach(function() {
        jasmine.DEFAULT_TIMEOUT_INTERVAL = originalTimeout;
    });
});

describe("TimeOutTest", function() {
    var value = 0;

    beforeEach(function() {
        jasmine.clock().install();
    });

    afterEach(function() {
        jasmine.clock().uninstall();
    });

    it("testTimeout", function(done) {
        console.log("start testTimeout ...");
        expect(value).toEqual(0);
        setTimeout(function() {
            console.log("timeout callback");
            value++;
            done();
        }, 2000);

        console.log("after timeout");
        expect(value).toEqual(1);
    });
});

describe("TimeOutTest", function() {
    var value = 0;

    beforeEach(function() {
        jasmine.clock().install();
    });

    afterEach(function() {
        jasmine.clock().uninstall();
    });

    it("testTick", function(done) {
        console.log("start testTick ...");
        expect(value).toEqual(0);
        setTimeout(function() {
            console.log("timeout callback");
            value++;
            done();
        }, 2000);

        console.log("after timeout");
        jasmine.clock().tick(1000);
        expect(value).toEqual(1);
    });
});