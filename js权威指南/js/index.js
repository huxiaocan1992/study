function abs(x){
	if(x>=0){
		alert(x);
	}else{
		alert(-x);
	}
};

function jc(n){
	var sum=1;
	while(n>0){
		sum=sum*n;
		n--;
	}
	alert(sum)
};
function jct(n){
	var i=1; 
	var sum=1;
	for(i=1;i<=n;i++){
		sum*=i;		
	}
	alert(sum);
};
