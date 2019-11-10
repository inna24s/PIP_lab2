    //const ACCEPTED_RS = [1, 1.5, 2, 2.5, 3];
	var count=0;
	const MIN_Y = -3;
	const MAX_Y = 3;
	var s = false;
	var yText = document.getElementById('y');
	var someErr = document.getElementById('err_msg');
	var xRadio = document.querySelectorAll('input[name="x"]');
	var com = document.getElementById('comment');
	var rt=document.getElementById('send');
	var inpX = document.getElementById("inputX");

	function showError(text) {
		someErr.innerText = text;
		if (text != null) return false;
		}


	function showComment(text) {
	com.innerText = text;
	if (text != null) return false;
}
  
		
	function onSubmit(event1, event2, event3) {
			countC();
		if (!(event3 && event2 && event1)) return false;
		return true;
		}
		 
	function checkX(){
			
			for (let i = 0; i < xRadio.length; i++)
			  if (xRadio[i].checked || inpX.value.length !=0) s = true;
			  if(s==false) {
			  	showError("Нужно выбрать X!");
			  	count ++;
			  }
			  return s;
		    }

	function checkY(){
		yText.value = yText.value.trim();

		if (yText.value.length === 0) {
		  showError("Заполните поле Y!");
		  count++;
		  return false;
		}

		if (isNaN(yText.value.replace(",", "."))) {
		  showError("В поле Y должно быть число!");
		  count++
		  return false;
		}
	   else yText.value = yText.value.replace(",", ".");

		if (yText.value <= MIN_Y || yText.value >= MAX_Y) {
		 showError(`Y должен лежать в (${MIN_Y} ; ${MAX_Y})`);
		 count++;
		  return false;
		}
		return true;
	  }

	  function checkR() {
          rt.value = rt.value.trim();

          if (rt.value.length === 0) {
              showError("Выберите R!");
              count++;
              return false;
          }

		  return true;
	  }


	function countC() {
		  var image=document.getElementById('reaction');
		  var mus=document.getElementById('sound');

		  if (count == 1) {
			  image.innerText="";
			  showComment("Ошибка во вводе данных! Будь внимательнее!");
			  lion();
			  mus.innerHTML= "<audio src='im/star.mp3' autoplay='autoplay'>";
		  }

		  if (count == 2) {
			  image.innerText="";
			  showComment("Две ошибки во вводе данных! Не буди во мне зверя!");
			  image.innerHTML="<img src='im/starlion.jpg'>";
		  }

		  if (count >= 3) {
			  showComment(count + " ошибки во вводе данных! Я предупреждал!🦁")
			  image.innerText="";
			  image.innerHTML="<video poster='im/original.gif'>";
			  mus.innerHTML= "<audio src='im/lion.mp3' autoplay='autoplay'>";
			  if(document.getElementById("del")==null) {
				  var but = document.createElement('button');
				  but.innerText = "Убрать зверя";
				  but.id = "del";
				  document.body.appendChild(but);
				  but.addEventListener('click', del, false);
			  }
		  }

		  function del() {
			image.innerHTML="";
			com.innerText="";
			count=0;
			  document.body.removeChild(but);

		  }
	  }


	function lion(){
	var canvas = document.getElementById("lion");
	var ctx = canvas.getContext("2d");
	var canvasSize = 400;
	canvas.width = canvasSize;
	canvas.height = canvasSize;
	ctx.fillStyle = "#ffffff";
	ctx.beginPath();
	ctx.fillStyle = "#FFFFFF";
	ctx.strokeStyle ="#FFFFFF";
	ctx.moveTo(277,241);
	ctx.fillRect(275,236,10,10);
	ctx.lineTo(90,244);
	ctx.fillRect(90,240,10,10);
	ctx.lineTo(40,280);
	ctx.fillRect(40,275,10,10);
	ctx.lineTo(195,300);
	ctx.fillRect(195,295,10,10);
	ctx.lineTo(300,315);
	ctx.fillRect(300,310,10,10);
	ctx.lineTo(277,241);
	ctx.lineTo(264,203);
	ctx.fillRect(262,200,10,10);
	ctx.lineTo(290,134);
	ctx.fillRect(290,130,10,10);
	ctx.lineTo(333,138);
	ctx.fillRect(330,134,10,10);
	ctx.lineTo(367,125);
	ctx.fillRect(364,122,10,10);
	ctx.stroke();
}


