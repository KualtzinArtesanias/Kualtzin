function closeModal(){
   document.getElementById('modal').style= 'display: none;';
}    

function openModal(index){
	document.getElementById('modal').style= 'display: initial;';
    var products = document.getElementsByName('produc');

    var name = products[index].getElementsByTagName('H2')[0].innerHTML;
    var image = products[index].getElementsByTagName('IMG')[0].src;
    var before = products[index].getElementsByTagName('H4')[0].innerHTML;
    var now = products[index].getElementsByTagName('H3')[0].innerHTML;

    document.getElementById('product').innerHTML = name;
    document.getElementById('image').src = image;
    document.getElementById('antes').innerHTML = before;
    document.getElementById('ahora').innerHTML = now;
    
}
