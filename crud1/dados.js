const animesRef = db.collection("animes");

await animesRef.doc("1").set({
    name: "Hunter x Hunter", genero: "Ação", episodios: "148",
    personagemPrincipal: "Gon"
})

await animesRef.doc("2").set({
    name: "Naruto", genero: "Fantasia", episodios: "300",
    personagemPrincipal: "Naruto"
})

await animesRef.doc("3").set({ 
    name: "One Piece", genero: "Fantasia,ação", episodos: "1017",
    personagemPrincipal: "Luffy"
})

await animesRef.doc("4").set({ 
    name: "Bleach", genero: "Fantasia, ação, magia", episodios: "350",
    personagemPrincipal: "Ichigo"
})

module.exports = 1;