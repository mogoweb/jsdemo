describe("JSONTest", function() {
    var mydata = JSON.parse(data);

    it("testProperty", function() {
         expect(mydata[0].name).toEqual("Ashwin");
         expect(mydata[0].age).toEqual("20");
         expect(mydata[1].name).toEqual("Abhinandan");
         expect(mydata[1].age).toEqual("20");
    });
});