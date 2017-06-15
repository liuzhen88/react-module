var q = require('q');

module.exports = {
	getOrderList:function(req, res){
		var deferred = q.defer();
		console.log(req.query);
		var pageIndex = req.query.pageIndex ? req.query.pageIndex : 1;
		var data = [];
		for(let i=1;i<=10;i++){
			data.push({
				title:'苏州到盐城，3天2晚，第'+pageIndex+'页的数据',
				time:'6月7日出发，6月9日返回',
				person:'5名成人',
				status:'设计中',
				id:i
			});
		}
		deferred.resolve(data);

		return deferred.promise;
	},
	getCanlendarData:function(req, res){
		var deferred = q.defer();
		var data = {
		  "LinePirceMonthList": [
		    {
		      "Year": 2017,
		      "Month": 6,
		      "Price": 100.0,
		      "Currency": 1,
		      "HasPrice": true
		    },
		    {
		      "Year": 2017,
		      "Month": 7,
		      "Price": 100.0,
		      "Currency": 1,
		      "HasPrice": false
		    },
		    {
		      "Year": 2017,
		      "Month": 8,
		      "Price": 100.0,
		      "Currency": 1,
		      "HasPrice": true
		    },
		    {
		      "Year": 2017,
		      "Month": 9,
		      "Price": 200.0,
		      "Currency": 1,
		      "HasPrice": true
		    },
		    {
		      "Year": 2017,
		      "Month": 10,
		      "Price": 200.0,
		      "Currency": 1,
		      "HasPrice": true
		    },
		    {
		      "Year": 2017,
		      "Month": 11,
		      "Price": 200.0,
		      "Currency": 1,
		      "HasPrice": true
		    },
		    {
		      "Year": 2017,
		      "Month": 12,
		      "Price": 200.0,
		      "Currency": 1,
		      "HasPrice": true
		    },
		    {
		      "Year": 2018,
		      "Month": 1,
		      "Price": 200.0,
		      "Currency": 1,
		      "HasPrice": true
		    },
		    {
		      "Year": 2018,
		      "Month": 2,
		      "Price": 200.0,
		      "Currency": 1,
		      "HasPrice": true
		    }
		  ],
		  "LinePriceList": [
		    {
		      "SalesDate": "2017-06-09T18:57:45.4407539+08:00",
		      "SalesPrice": 100.0,
		      "IsValid": true,
		      "LegalHolidayName": "¹úÇì",
		      "Currency": 0
		    },
		    {
		      "SalesDate": "2017-06-10T18:57:45.4407539+08:00",
		      "SalesPrice": 100.0,
		      "IsValid": true,
		      "LegalHolidayName": "¹úÇì",
		      "Currency": 0
		    }
		  ],
		  "TheLastDate": "0001-01-01T00:00:00",
		  "Year":2018,
		  "Month":2,
		  "Header": null
		}

		deferred.resolve(data);
		return deferred.promise;
	}
}