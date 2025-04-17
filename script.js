//your JS code here. If required.
let output=document.getElementById("output")
function initialPromise(num){
	return new Promise(function(resolve){
		setTimeout(()=>{
			output.textContent=`Result: ${num}`;
			resolve(num);
		},2000)
	})
}
function secondPromise(num){
	return new Promise(function(resolve){
		setTimeout(()=>{
			num=num*2
			output.textContent=`Result: ${num}`;
			resolve(num);
		},2000)
	})
}
function thirdPromise(num){
	return new Promise(function(resolve){
		setTimeout(()=>{
			num=num-3
			output.textContent=`Result: ${num}`;
			resolve(num);
		},1000)
	})
}
function fourthPromise(num){
	return new Promise(function(resolve){
		setTimeout(()=>{
			num=num/2
			output.textContent=`Result: ${num}`;
			resolve(num);
		},1000)
	})
}
function fifthPromise(num){
	return new Promise(function(resolve){
		setTimeout(()=>{
			num=num+10;
			output.textContent=`Final Result: ${num}`;
			resolve(num);
		},1000)
	})
}

document.getElementById("btn").addEventListener("click",()=>{
let number=document.getElementById("ip").value;
	initialPromise(number).then((num)=>{
	return secondPromise(num);
}).then((num)=>{
	return thirdPromise(num);
}).then((num)=>{
	return fourthPromise(num);
}).then((num)=>{
	return fifthPromise(num);
}).catch(()=>{
	output.textContent="error";
})
})
