let dollar= document.getElementById('dollar');
let pound= document.getElementById('pound');

dollar .onkeyup= function() {

 pound.value = dollar.value * 47;

}
pound.onkeyup= function() {
   
   dollar.value =pound.value / 47;
    
   }










   let euro= document.getElementById('euro');
let poun= document.getElementById('poun');

euro.onkeyup= function() {

 poun.value = euro.value * 51;

}
poun.onkeyup= function() {
   
   euro.value =poun.value / 51;
    
   }