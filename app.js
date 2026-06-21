var firebaseConfig={

apiKey:"AIzaSyDttyEjbuC6gzHxuN0IR8yi_9fO-aFyW64",

authDomain:"studio-4914109762-6a41f.firebaseapp.com",

databaseURL:"https://studio-4914109762-6a41f-default-rtdb.firebaseio.com",

projectId:"studio-4914109762-6a41f",

storageBucket:"studio-4914109762-6a41f.firebasestorage.app",

messagingSenderId:"134781295069",

appId:"1:134781295069:web:3c020f46f8fbeaca24fe34"

};


firebase.initializeApp(firebaseConfig);


function saveLive(){


let title=document.getElementById("title").value;

let url=document.getElementById("url").value;


if(!url){

alert("ضع رابط البث");

return;

}


firebase.database()
.ref("live")
.set({

title:title || "بث مباشر",

stream:url,

status:"live",

updatedAt:Date.now()

});


document.getElementById("msg").innerHTML=
"✅ تم تحديث البث";


}
