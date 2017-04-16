var array_estados = [];
var aceptada = false;

var Estado = (function( idEstado ){

   this.idEstado = idEstado;
   this.trans = [];

});

function init( cadena ){

   array_estados = []
   aceptada = false;
   armarEstados();

   var init_ = buscarEstado( 0 );

   console.log( siguienteTrans( init_, cadena) );


}

function siguienteTrans( estado, cadena ){

   var array_trans = estado.trans;

   for( var i = 0; i < array_trans.length; i++ ){

      var trans = array_trans[i];

      if( aceptada ){
         break;
      }

      if( cadena.length > 0 ){

         if( trans.con === 'E' ){

            console.log( "ESTADO [" + estado.idEstado + "] HACIA [" + trans.hacia + "] con " + trans.con );
            var estadoTemp = buscarEstado( trans.hacia );
            if( !siguienteTrans( estadoTemp, cadena )){
               if( aceptada ){
                  break;
               }else{
                  continue;
               }
            }
            /*else{
               break;
            }*/
         }

         if( trans.con === cadena[0] ){

            console.log( "ESTADO [" + estado.idEstado + "] HACIA [" + trans.hacia + "] con " + trans.con );

            cadena = cadena.substring(1);

            if( cadena.length == 0 && trans.final ){
               console.log( "ACEPTADA" );
               aceptada = true;
               break;
            }

            var estadoTemp = buscarEstado( trans.hacia );
            if( estadoTemp != null &&  !siguienteTrans( estadoTemp, cadena ) ){
               if( aceptada ){
                  break;
               }else{
                  continue;
               }
            }
            //break;
         }
         /*else{
            continue;
         }*/

      }else{
         /*aceptada = false;
         break;*/
         /*var estadoTemp = buscarEstado( trans.hacia );
         if( !siguienteTrans( estadoTemp, cadena )){
            if( aceptada ){
               break;
            }else{
               continue;
            }
         }*/
         continue;
      }

   }

   //console.log( estado );

   return aceptada;

}

function buscarEstado( idEstado ){

   var temp = null;
   var index = array_estados.map(function(edo){
      return edo.idEstado == idEstado ? 1 : -1;
   });

   index = index.indexOf( 1 );

   if( index > -1 ){
      temp = array_estados[index];
   }

   return temp;
}

function armarEstados(){

   /***** ESTADO 0 ******/
   var edo0 = new Estado(0);

   edo0.trans.push({
      'con': 'E',
      'hacia': 1,
      'final': false
   });
   edo0.trans.push({
      'con': 'E',
      'hacia': 8,
      'final': false
   });
   array_estados.push(edo0);

   /***** ESTADO 1 ******/
   var edo1 = new Estado(1);

   edo1.trans.push({
      'con': 'E',
      'hacia': 2,
      'final': false
   });
   edo1.trans.push({
      'con': 'E',
      'hacia': 7,
      'final': false
   });
   array_estados.push(edo1);

   /***** ESTADO 2 ******/
   var edo2 = new Estado(2);

   edo2.trans.push({
      'con': 'E',
      'hacia': 3,
      'final': false
   });
   edo2.trans.push({
      'con': 'E',
      'hacia': 5,
      'final': false
   });
   array_estados.push(edo2);

   /***** ESTADO 3 ******/
   var edo3 = new Estado(3);

   edo3.trans.push({
      'con': 'b',
      'hacia': 4,
      'final': false
   });
   array_estados.push(edo3);

   /***** ESTADO 4 ******/
   var edo4 = new Estado(4);

   edo4.trans.push({
      'con': 'E',
      'hacia': 5,
      'final': false
   });
   edo4.trans.push({
      'con': 'E',
      'hacia': 3,
      'final': false
   });
   array_estados.push(edo4);

   /***** ESTADO 5 ******/
   var edo5 = new Estado(5);

   edo5.trans.push({
      'con': 'a',
      'hacia': 6,
      'final': false
   });
   array_estados.push(edo5);

   /***** ESTADO 6 ******/
   var edo6 = new Estado(6);

   edo6.trans.push({
      'con': 'E',
      'hacia': 2,
      'final': false
   });
   edo6.trans.push({
      'con': 'E',
      'hacia': 7,
      'final': false
   });
   array_estados.push(edo6);

   /***** ESTADO 7 ******/
   var edo7 = new Estado(7);

   edo7.trans.push({
      'con': 'E',
      'hacia': 10,
      'final': false
   });
   array_estados.push(edo7);

   /***** ESTADO 8 ******/
   var edo8 = new Estado(8);

   edo8.trans.push({
      'con': 'b',
      'hacia': 9,
      'final': false
   });
   array_estados.push(edo8);

   /***** ESTADO 9 ******/
   var edo9 = new Estado(9);

   edo9.trans.push({
      'con': 'E',
      'hacia': 10,
      'final': false
   });
   array_estados.push(edo9);

   /***** ESTADO 10 ******/
   var edo10 = new Estado(10);

   edo10.trans.push({
      'con': 'a',
      'hacia': 11,
      'final': true
   });
   array_estados.push(edo10);

   console.log( array_estados );

}