
let progress=document.getElementById("bar");
let loadingBar=document.getElementById("loading");
let width=0;

let download=()=>{
	width++;
	progress.style.width=`${width}%`;
	setTimeout(()=>{
		loadingBar.innerHTML=(width===100)? `${width}% completed`:`${width}% progress`
	},1000)
}
download()

	setTimeout(()=>{
		let interId=setInterval(()=>{
			if(width===100){
				clearInterval(interId)
			} 
			else{
				download()
			}
		},100)
	},2000)