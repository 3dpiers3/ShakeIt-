(function () {

    // WebActivities
    var one = document.querySelector("#one");
    if (one) { 
        one.onclick =       var Posizione1 =[];
                                Posizione1[0] = event.alpha;
                            Posizione1[1]= event.beta;
                            Posizione1[2]= event.gamma;

                //ciclo inutile per far passare del tempo
                for (var i=0;i<100;i++){
                    }

                //Seconda posizione

                var Posizione2 =[];
                                Posizione2[0] = event.alpha;
                            Posizione2[1]= event.beta;
                            Posizione2[2]= event.gamma;


                //controllo la differenza se diversi suono, 0 altrimenti.
                if (Posizione1 != Posizione2){//suona
                var orientation = "<strong>DRIIIIIIIIIN</strong>";
                                deviceOrientationDisplay.innerHTML = orientation; 
                }
                else{
                var orientation = "<strong>DOVREI AVER FATTO QUALCOSA</strong>";
                                deviceOrientationDisplay.innerHTML = orientation; }
                        }
            };

            one.onsuccess = function () { 
                /*var img = document.createElement("img");
                img.src = window.URL.createObjectURL(this.result.blob);
                var imagePresenter = document.querySelector("#image-presenter");
                imagePresenter.appendChild(img);
                imagePresenter.style.display = "block";*/
            };

            one.onerror = function () { 
                alert("Can't view the image!");
            };
})(); 
