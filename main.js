function loadjson(file,callback) {
	var xhr=new XMLHttpRequest();
	xhr.overrideMimeType("application/json");
	xhr.open("GET",file,true);
	xhr.onreadystatechange=function(){
		if(xhr.readyState===4 && xhr.status===200){
			callback(xhr.responseText);
		}
};
xhr.send(null);
}
loadjson("data.json",function (text) {
	var data=JSON.parse(text);
	console.log(data);
	basics(data.details);
})
function loadjson(file){
	return new Promise((resolve,reject)=>{
		return fetch(file).then(response=>{
			if(response.ok){
				resolve(response.json());
			}else{
				reject(new Error('error'));
			}
		})
	})
}
var newfile=loadjson("data.json");
newfile.then(data=>{
	console.log(data);
	basics(data.details);
	careerinfo(data.career);
   educationdetails(data.edu);
})
var ch=document.querySelector(".child1");
function basics(det){
	var img=document.createElement("img");
	img.src="Koala.jpg";
	img.alt="Picture";
	ch.appendChild(img);
	var s=document.createElement("h1");
	s.textContent=det.Name;
	ch.appendChild(s);
	var email=document.createElement("a");
	email.href="mailto:prathyushadoddi7@gmail.com";
	email.textContent="prathyushadoddi7@gmail.com";
	ch.appendChild(email);
	var num=document.createElement("h2");
	num.textContent=det.Contact;
	ch.appendChild(num);
	var add=document.createElement("p");
	add.textContent=det.address;
	ch.appendChild(add);
}
var ch2=document.querySelector(".child2");
function careerinfo(infodata){
	var h1=document.createElement("h2");
	h1.textContent="Career Objective";
	ch2.appendChild(h1);
	var hr=document.createElement("hr");
	ch2.appendChild(hr);
	var h2=document.createElement("p");
	h2.textContent=infodata.info;
	ch2.appendChild(h1);
}
function educationdetails(edu){
	var table1=document.createElement("table");
	table1.border="1";
	ch2.appendChild(table1);

	tabledata="";
	for(i=0;i<edu[i].length();i++){
		tabledata="<tr><td>"edu[i].institute+"</td><td>"+edu[i].degree"+</td><td>"+edu[i].percentage+"</td><td>"+edu[i].passoutyear+"</td></tr>";
	}
	table1.innerHTML=tabledata;

}