/*
    Jquery.CuitComponent
    Copyright (c) 2018 - Fernando Damian Leonardelli (fleonardelli.com)
    Version 1.0
*/
var cuit = (function(){
    var elements = {
        cuit: $('#cuit')
    }
    
    //----- Private Methods --------
    var suscribeEvents = function(){
        elements.cuit.on('change', events.validateCuit);
    };

    var events = {
        validateCuit: function(e) {
          if(!validateCuit()){
             showModal("Atención", "CUIT invalido");
             elements.cuit.val("").focus();
          }
        }
       
    };

    //------- Public methods -----
    //inicializa el objeto
    var initialize = function(e){
        suscribeEvents();
    }
    
    //devuelve el cuit limpio, sin -
    var getCleanCuit = function(){
        return elements.cuit.val().split("-").join('')
    }
    
    //valida si el cuit es correcto. Retorna true/false
    var validateCuit = function() {
    inputString = getCleanCuit().toString();
    if (inputString.length == 11) {
        var Caracters_1_2 = inputString.charAt(0) + inputString.charAt(1)
        if (Caracters_1_2 == "20" || Caracters_1_2 == "23" || Caracters_1_2 == "24" || Caracters_1_2 == "27" || Caracters_1_2 == "30" || Caracters_1_2 == "33" || Caracters_1_2 == "34") {
            var Count = inputString.charAt(0) * 5 + inputString.charAt(1) * 4 + inputString.charAt(2) * 3 + inputString.charAt(3) * 2 + inputString.charAt(4) * 7 + inputString.charAt(5) * 6 + inputString.charAt(6) * 5 + inputString.charAt(7) * 4 + inputString.charAt(8) * 3 + inputString.charAt(9) * 2 + inputString.charAt(10) * 1
            Division = Count / 11;
            if (Division == Math.floor(Division)) {
                return true
            }
        }
    }
        return false
    }

     //----- Public API --------
      return {
        init: initialize,
        validateCuit: validateCuit,
        getCleanCuit: getCleanCuit
      }
}());

cuit.init();
