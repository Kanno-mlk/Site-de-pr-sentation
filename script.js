function afficherSection(id) {
    // Masquer toutes les sections
    const sections = document.querySelectorAll('.section');
    sections.forEach(section => {
        section.classList.remove('active');
    });

    // Afficher la section sélectionnée
    const sectionActive = document.getElementById(id);
    if (sectionActive) {
        sectionActive.classList.add('active');
    }

    // Mettre à jour les onglets actifs
    const liens = document.querySelectorAll('.sidebar a');
    liens.forEach(lien => {
        lien.classList.remove('actif');
    });

    // Ajouter la classe actif à l’onglet cliqué
    const lienActif = document.querySelector(`.sidebar a[onclick*="${id}"]`);
    if (lienActif) {
        lienActif.classList.add('actif');
    }
}
