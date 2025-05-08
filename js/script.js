document.getElementById('toggleButton').addEventListener("click", function(){
    var extralmage = document.getElementById('extraImage');
if (extralmage.style.display === 'none'){
extraImage.style.display = 'block';
this.textContent = 'Close';
} else {
extralmage.style.display = 'none';
this.textContent = 'Open';
}
})