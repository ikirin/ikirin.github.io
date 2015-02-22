var kirin = angular.module('kirin',["indexCtrl",'akoenig.deckgrid','angular-flippy']);


kirin.directive('addLines', function () {
    return {
      restrict: 'A',
      link: function(scope,element){
      	if(scope.card){
      		element.css('top',function(){
      			return 40-(scope.card.desc.length-1)*4+'%';
      		});
      		scope.card.desc.forEach(function(e){
      		element.append('<div>'+e+'</div>');
      	});
      	}
      	
      } 
  }
});

