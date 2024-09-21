document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('loginButton').addEventListener('click', function() {
        alert('Button clicked!');
    });
});

function swapImage(imageFirst, imageSecond) {
    document.getElementById(imageFirst).style.display = 'none';
    document.getElementById(imageSecond).style.display = 'none';
    document.getElementById(imageFirst).style.display = 'block';
}
