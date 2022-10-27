var gettablinks = document.getElementsByClassName('tablinks'); //Html collection
var gettabpanes = document.getElementsByClassName('tab-pane');


var getbtncloses = document.querySelectorAll('.btn-close')  //Nodelist
                
                //Array pyone
var tabpanes = Array.from(gettabpanes);

function gettab(evn,linkid){
      
      // akon lone ko ayin phyout
    tabpanes.forEach(function(tabpane){
        tabpane.style.display = "none";

    });

    //looping pat
    for(var x=0 ; x < gettablinks.length; x++){
    	gettablinks[x].className = gettablinks[x].className.replace(" active", "");

    	getbtncloses[x].addEventListener('click',function(){
    		this.parentElement.style.display = "none";
    	});
    }




    document.getElementById(linkid).style.display = "block";

                        //append lote pee active htae
    evn.target.className += " active";
    // evn.target.className = evn.target.className.replace('tablinks',"tablinks active");

    // evn.currentTarget.className += " active";

    // evn.classList.add('active');
    

}

document.getElementById('autoclick').click();


