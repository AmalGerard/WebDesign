var curr=[1,1],
	phoLimit=[8,56],
	phon=['ngswbf11/ngswbf11', 'poster11/Poster'],
	inHTMbase='<img alt="Photos from Poster session 2011" src="images/',
	inHTMend='.JPG">',
	Curr,
	Curralb=1,
	inHTM,
	HTabs=['welcome', 'about', 'highlights', 'chemistry', 'support'];
	CurrHTab=0;
	t=null;



function changealb(alb){
	curralb=document.getElementById('alb'+Curralb);
	curralb.className='normal';
	var curralb=document.getElementById('alb'+alb);
	curralb.className='current';
	Curralb=alb;
	inHTM=inHTMbase+phon[alb-1];
	Curr=curr[alb-1];
	showCurr(alb);
}


function showCurr(alb){
	var myli=document.getElementById('firstPho');
	myli.innerHTML=inHTM+(Curr-2)+inHTMend;
	myli=document.getElementById('prev');
	myli.innerHTML=inHTM+(Curr-1)+inHTMend;
	myli=document.getElementById('curr');
	myli.innerHTML=inHTM+Curr+inHTMend;
	myli=document.getElementById('next');
	myli.innerHTML=inHTM+(Curr+1)+inHTMend;
	myli=document.getElementById('lastPho');
	myli.innerHTML=inHTM+(Curr+2)+inHTMend;
	myli=document.getElementById('photoTitle');
	myli.innerHTML='<p>'+Curr+' of '+phoLimit[Curralb-1]+'<p>';
}


function slideLeft(nstep, speed){
	if (Curr<phoLimit[Curralb-1]){
		var myli=document.getElementById('firstPho');
		if (nstep>=0){
			myli.style.width=(800*(nstep)/(nstep+9))+'px';
			nstep=nstep-1;
			t=setTimeout(function(){slideLeft(nstep,speed)},speed);
			}else{
			clearTimeout(t);
			Curr=Curr+1;
			curr[Curralb-1]=Curr;
			var myul=document.getElementById('viewport');
			myul.removeChild(myli);
			myli=document.getElementById('prev');
			myli.id='firstPho';
			myli=document.getElementById('curr');
			myli.id='prev';
			myli=document.getElementById('next');
			myli.id='curr';
			myli=document.getElementById('lastPho');
			myli.id='next';
			myli=document.createElement('li');
			myli.id='lastPho';
			myli.innerHTML=inHTM+(Curr+2)+inHTMend;
			myul.appendChild(myli);
			myli=document.getElementById('photoTitle');
			myli.innerHTML='<p>'+Curr+' of '+phoLimit[Curralb-1]+'<p>';
		}
	}
}


function slideRight(nstep, speed){
	if (Curr>1){
		Curr=Curr-1;
		curr[Curralb-1]=Curr;
		var myli=document.getElementById('lastPho');
		var myul=document.getElementById('viewport');
		myul.removeChild(myli);
		myli=document.getElementById('next');
		myli.id='lastPho';
		myli=document.getElementById('curr');
		myli.id='next';
		myli=document.getElementById('prev');
		myli.id='curr'
		myli=document.getElementById('firstPho');
		myli.id='prev';
		myli=document.createElement('li');
		myli.id='firstPho';
		myli.style.width=0+'px';
		myli.innerHTML=inHTM+(Curr-2)+inHTMend;
		myul.insertBefore(myli,myul.firstChild);
		/*slide(nstep,speed);*/
		
		(function slide(nstep,speed){
			if (nstep>=0){
			myli.style.width=(800-(800*(nstep)/(nstep+9)))+'px';
			nstep=nstep-1;
			t=setTimeout(function(){slide(nstep,speed)},speed);
			}else{
			clearTimeout(t);
			myli=document.getElementById('photoTitle');
			myli.innerHTML='<p>'+Curr+' of '+phoLimit[Curralb-1]+'<p>';
			}
		})(nstep,speed);
		
	}
}


function changeHTab(tab){
	if (CurrHTab!=tab){
		var mydiv=document.getElementById(HTabs[CurrHTab]);
		document.getElementById('contentwM').style.backgroundColor = document.defaultView.getComputedStyle(mydiv, 0).backgroundColor;
		mydiv.className='hidden homeTabContent';
		mydiv=document.getElementById(HTabs[tab]);
		mydiv.className='current homeTabContent';
		var myli=document.getElementById('home'+(tab+1));
		myli.className='current homeTab';
		myli=document.getElementById('home'+(CurrHTab+1))
		myli.className='normal homeTab';
		CurrHTab=tab;
	}
}
