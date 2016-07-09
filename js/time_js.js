/* 方法 样式 2 */
var GintDiff = 60;//倒计时总秒数量
function timer(intDiff){
	var objTimer = window.setInterval(function(){
	var day=0,
		hour=0,
		minute=0,
		second=0;//时间默认值		
	if(intDiff > 0){
		minute = Math.floor(intDiff / 60);
		second = Math.floor(intDiff) - (minute * 60);
	}else{
		timesup();
		window.clearInterval(objTimer);
	}
	if (minute <= 9) minute = '0' + minute;
	if (second <= 9) second = '0' + second;
	$('#minute_show').html('<s></s>'+minute);
	$('#second_show').html('<s></s>'+second);
	intDiff--;
	GintDiff=intDiff;
	}, 1000);
	return objTimer;
} 