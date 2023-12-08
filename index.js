function bhaskara(){
    A = document.getElementById('formula-resolutiva1').value;
    B = document.getElementById('formula-resolutiva2').value;
    C = document.getElementById('formula-resolutiva3').value;
    Delta = B * B - 4 * A * C;
    x1 = (-B + Math.sqrt(Delta)) / (2 * A);
    x2 = (-B - Math.sqrt(Delta)) / (2 * A);
    document.getElementById("resolução-1").innerHTML = x1;
    document.getElementById("resolução-1.2").innerHTML = x2;
    if(Delta<0){
        document.getElementById("resolução-1").innerHTML = "Coloque raizes reais";
        document.getElementById("resolução-1.2").innerHTML = "Coloque raizes reais";
    }
}
function teorema(){
    cat1 = document.getElementById("pitagoras1").value;
    cat2 = document.getElementById("pitagoras2").value;
    hipo = cat1 * cat1 + cat2 * cat2;
    hipo = Math.sqrt(hipo)
    document.getElementById("resolucao-2").innerHTML = hipo;
}
function raiz(){
    num = document.getElementById("raiz").value;
    num = Math.sqrt(num);
    document.getElementById("resolucao-3").innerHTML = num;
}
 
function expo(){
    expon = document.getElementById("expon").value;
    expon2 = document.getElementById("expon2").value;
    exporesult = Math.pow(expon, expon2);
    document.getElementById("resolucao-4").innerHTML = exporesult;
}
function regratresdir(){
    fir1 = document.getElementById("fir1").value;
    fir2 = document.getElementById("fir2").value;
    fir3 = document.getElementById("fir3").value;
    fir4 = (fir3*fir2)/fir1;
    fir4 = fir4.toFixed(2);
    document.getElementById("resp").innerText = fir4
}
 
function regratresind(){
    fin1 = document.getElementById("fin1").value;
    fin2 = document.getElementById("fin2").value;
    fin3 = document.getElementById("fin3").value;
    fin4 = (fin3*fin1)/fin2;
    fin4 = fin4.toFixed(2);
    document.getElementById("resp2").innerText = fin4
}
function fato(){
    let fatorial = parseInt(document.getElementById("fat").value)
    let result7 = 1;
    for(var i=1;i<=fatorial;i++){
        result7 *= i
    }
    document.getElementById("resultadof").innerHTML = result7
}
function p(){
    let N1 = document.getElementById("N1").value
    let N2 = document.getElementById("N2").value
    let N3 = (N1/100) * N2;
    N3 = N3.toFixed(2);
    document.getElementById("porc").innerHTML = N3
}
function pes(){
    let metro = parseFloat(document.getElementById('metros').value)
    const p = 0.3048;
    let pes = (metro/p);
    pes = pes.toFixed(2);
    document.getElementById('textpes').innerHTML = pes
}
