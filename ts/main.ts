namespace empresa{
    let p = new Pessoa();
    p.nome= "Juninho";
    p.anoNasc = 1945;

    document.getElementById("nome").textContent = p.nome;
    document.getElementById("ano").textContent = p.anoNasc.toString();
    document.getElementById("idade").textContent = p.calcularIdade(2025).toString();


}