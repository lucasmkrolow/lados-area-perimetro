function calcularLados() {
    var area = parseFloat(document.getElementById("area").value);
    var perimetro = parseFloat(document.getElementById("perimetro").value);
    var base;
    var altura;
    var delta = perimetro * perimetro - 16 * area;
    if (delta>0){
        raiz1 = (perimetro + Math.sqrt(delta) )/4;
        raiz2 = (perimetro - Math.sqrt(delta) )/4;

    }
    alert('O retângulo tem ' + raiz1.toFixed(2) + ' por ' + raiz2.toFixed(2));
    }