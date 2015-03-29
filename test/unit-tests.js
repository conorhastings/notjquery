var assert = require("assert");
var notjquery = require("../index");
var jquery = require("jquery");

describe("notjquery", function(){
	describe("Class >>", function(){
		var div;
		beforeEach(function () {
			div = document.createElement("div");
			div.classList.add("test");
			document.body.appendChild(div);
		});
		afterEach(function () {
			div.parentElement.removeChild(div);
		});

		it("should find a class in the dom", function(){
			var results = notjquery(".test");
			assert.equal(1, results.length);
			assert.equal(div, results[0]);
		});
		it("should match jquery's class search", function(){
			var results = notjquery(".test");
			var jqueryResults = jquery(".test");

			assert.equal(jqueryResults.length, results.length);
			assert.equal(jqueryResults[0], results[0]);
		});
	});

	describe("Classes >>", function(){
		var divs = [];
		beforeEach(function () {
			for(var i = 0; i < 10; i++) {
				var div = document.createElement("div");
				div.id = "div" + i;
				div.classList.add("test");
				document.body.appendChild(div);
				divs.push(div);
			}
		});
		afterEach(function () {
			for(var i = 0; i < 10; i++) {
				var div = divs[i];
				div.parentElement.removeChild(div);
			}
			divs = [];
		});

		it("should find a class in the dom", function(){
			var results = notjquery(".test");
			assert.equal(divs.length, results.length);

			for(var i = 0; i < results.length; i++) {
				assert.equal(divs[i], results[i]);
			}
		});
		it("should match jquery's class search", function(){
			var results = notjquery(".test");
			var jqueryResults = jquery(".test");

			assert.equal(jqueryResults.length, results.length);

			for(var i = 0; i < results.length; i++) {
				assert.equal(jqueryResults[i], results[i]);
			}
		});
	});

	describe("ID >>", function(){
		var div;
		beforeEach(function () {
			div = document.createElement("div");
			div.id = "test";
			document.body.appendChild(div);
		});
		afterEach(function () {
			div.parentElement.removeChild(div);
		});

		it("should find an id in the dom", function(){
			var results = notjquery("#test");
			assert.equal(1, results.length);
			assert.equal(div, results[0]);
		});

		it("should match jquery's id search", function(){
			var results = notjquery("#test");
			var jqueryResults = jquery("#test");

			assert.equal(jqueryResults.length, results.length);
			assert.equal(jqueryResults[0], results[0]);
		});
	});
});