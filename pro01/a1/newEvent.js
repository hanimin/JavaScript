document.addEventListener('DOMContentLoaded',()=>{
	let isConnect = false
	
	const tabbtn1 = document.querySelector(".tab-btn-1")
	const tabbtn2 = document.querySelector(".tab-btn-2")
	
	tabbtn1.addEventListener("click",()=>{
		if(isConnect === false){
			tabbtn1.addEventListener("click",)
			tabbtn1.show();
			isConnect = true
		}
	})
	tabbtn2.addEventListener("click",()=>{
		if(isConnect === ture){
			tabbtn2.addEventListener("click",)
			isConnect = false
		}
	})
})