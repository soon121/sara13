let dollar= document.getElementById('dollar');
let pound= document.getElementById('pound');

dollar .onkeyup= function() {

 pound.value = dollar.value * 47;

}
pound.onkeyup= function() {
   
   dollar.value =pound.value / 47;
    
   }










   let euro= document.getElementById('euro');
let pound= document.getElementById('pound');

euro.onkeyup= function() {

 pound.value = euro.value * 51;

}
pound.onkeyup= function() {
   
   euro.value =pound.value / 51;
    
   }