var indexCtrl = angular.module('indexCtrl',[])

indexCtrl.controller('gridCtrl',['$scope','$http', '$location',
 function($scope,$http,$location){
	$http.get('sources/kirin.txt')
		.success(function(data){
			console.log(data);
		var rows = data.toString().split('\n');
		rows.splice(rows.length-1);
		var photos = [];
		rows.forEach(function(e){
			var doc = {};
			var splits = e.split('\t');
			doc.url = 'sources/img/'+splits[0]+'.jpg';
			if(splits[1]=="poem"){
				doc.desc = splits[2].split(',');
			}else{
				doc.desc = [splits[2]];
			}
			photos.push(doc);
		});
		console.log(photos);
		$scope.photos = photos;
	});
}])