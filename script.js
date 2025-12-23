// Base de données des gouvernorats tunisiens avec toutes les informations
const governorates = {
    tunis: {
        name: "Tunis",
        surface: "346 km²",
        longueur: "15 km",
        largeur: "20 km",
        habitants: "1,056,247",
        pourcentage: "8.8%",
        plat: "Couscous au poisson, Brik à l'œuf, Fricassé",
        celebre: "Mosquée Zitouna, Médina historique (UNESCO), Avenue Habib Bourguiba",
        color: "#FFD700"
    },
    ariana: {
        name: "Ariana",
        surface: "482 km²",
        longueur: "25 km",
        largeur: "22 km",
        habitants: "576,088",
        pourcentage: "4.8%",
        plat: "Mloukhiya, Kaftaji, Tajine malsouka",
        celebre: "La Soukra, Raoued, Zone industrielle moderne",
        color: "#FFB6C1"
    },
    ben_arous: {
        name: "Ben Arous",
        surface: "761 km²",
        longueur: "35 km",
        largeur: "28 km",
        habitants: "631,842",
        pourcentage: "5.3%",
        plat: "Tajine Merguez, Lablabi, Couscous bel allouch",
        celebre: "Hammam-Lif, Radès (stade olympique), Ezzahra",
        color: "#90EE90"
    },
    manouba: {
        name: "Manouba",
        surface: "1,137 km²",
        longueur: "40 km",
        largeur: "32 km",
        habitants: "379,518",
        pourcentage: "3.2%",
        plat: "Borghol, Makroudh, Assidat zgougou",
        celebre: "Dougga (site romain UNESCO), Université de la Manouba",
        color: "#FFD700"
    },
    nabeul: {
        name: "Nabeul",
        surface: "2,788 km²",
        longueur: "85 km",
        largeur: "45 km",
        habitants: "787,920",
        pourcentage: "6.6%",
        plat: "Poisson grillé, Harissa de Nabeul, Salade mechouia",
        celebre: "Cap Bon, Plages paradisiaques, Poterie artisanale, Agrumes",
        color: "#FFD700"
    },
    zaghouan: {
        name: "Zaghouan",
        surface: "2,768 km²",
        longueur: "70 km",
        largeur: "50 km",
        habitants: "176,945",
        pourcentage: "1.5%",
        plat: "Droo, Hlalem, Couscous aux fèves",
        celebre: "Temple des Eaux (aqueduc romain), Sources naturelles",
        color: "#C0C0C0"
    },
    bizerte: {
        name: "Bizerte",
        surface: "3,685 km²",
        longueur: "95 km",
        largeur: "65 km",
        habitants: "568,219",
        pourcentage: "4.7%",
        plat: "Poisson frit, Couscous au poulpe, Charmla",
        celebre: "Vieux Port, Parc national d'Ichkeul (UNESCO), Plages",
        color: "#FF69B4"
    },
    beja: {
        name: "Béja",
        surface: "3,740 km²",
        longueur: "90 km",
        largeur: "55 km",
        habitants: "303,032",
        pourcentage: "2.5%",
        plat: "Chakchouka, Ommek houria, Couscous aux artichauts",
        celebre: "Agriculture céréalière, Forêts de chênes-lièges",
        color: "#FFD700"
    },
    jendouba: {
        name: "Jendouba",
        surface: "3,102 km²",
        longueur: "85 km",
        largeur: "48 km",
        habitants: "401,477",
        pourcentage: "3.3%",
        plat: "Frik, Hergma, Couscous aux petits pois",
        celebre: "Bulla Regia (site romain), Chemtou (marbre numide)",
        color: "#228B22"
    },
    kef: {
        name: "Le Kef",
        surface: "4,965 km²",
        longueur: "110 km",
        largeur: "70 km",
        habitants: "243,156",
        pourcentage: "2.0%",
        plat: "Chekhchoukha, Rechta, Berkoukes",
        celebre: "Kasbah historique, Table de Jugurtha, Médina",
        color: "#FF8C00"
    },
    siliana: {
        name: "Siliana",
        surface: "4,631 km²",
        longueur: "95 km",
        largeur: "65 km",
        habitants: "223,087",
        pourcentage: "1.9%",
        plat: "Mesfouf, Zgougou, Borghol",
        celebre: "Makthar (ruines romaines), Agriculture et élevage",
        color: "#C0C0C0"
    },
    sousse: {
        name: "Sousse",
        surface: "2,669 km²",
        longueur: "75 km",
        largeur: "42 km",
        habitants: "674,971",
        pourcentage: "5.6%",
        plat: "Poisson grillé, Pâtisseries orientales, Tajine",
        celebre: "Médina UNESCO, Ribat, Station balnéaire, Port El-Kantaoui",
        color: "#FFB6C1"
    },
    monastir: {
        name: "Monastir",
        surface: "1,019 km²",
        longueur: "45 km",
        largeur: "28 km",
        habitants: "548,828",
        pourcentage: "4.6%",
        plat: "Salade Mechouia, Mloukhiya, Poisson",
        celebre: "Ribat fortifié, Mausolée Bourguiba, Aéroport international",
        color: "#FFDAB9"
    },
    mahdia: {
        name: "Mahdia",
        surface: "2,966 km²",
        longueur: "80 km",
        largeur: "45 km",
        habitants: "410,812",
        pourcentage: "3.4%",
        plat: "Poisson frais, Couscous aux calamars, Hout mabkhoukh",
        celebre: "Port de pêche, Skifa Kahla, Plages dorées",
        color: "#FFA500"
    },
    sfax: {
        name: "Sfax",
        surface: "7,545 km²",
        longueur: "135 km",
        largeur: "75 km",
        habitants: "955,421",
        pourcentage: "8.0%",
        plat: "Couscous sfaxien, Droo, Gargoulette",
        celebre: "2ème ville économique, Médina, Îles Kerkennah, Industrie",
        color: "#FFD700"
    },
    kairouan: {
        name: "Kairouan",
        surface: "6,712 km²",
        longueur: "125 km",
        largeur: "68 km",
        habitants: "570,559",
        pourcentage: "4.8%",
        plat: "Makroudh, Couscous au oseban, Mloukhiya",
        celebre: "Grande Mosquée, 4ème ville sainte de l'Islam, Médina UNESCO",
        color: "#DA70D6"
    },
    kasserine: {
        name: "Kasserine",
        surface: "8,260 km²",
        longueur: "145 km",
        largeur: "85 km",
        habitants: "439,243",
        pourcentage: "3.7%",
        plat: "Berkoukech, Aïch, Couscous traditionnel",
        celebre: "Sbeitla (ruines romaines), Parc national Chambi",
        color: "#90EE90"
    },
    sidi_bouzid: {
        name: "Sidi Bouzid",
        surface: "7,405 km²",
        longueur: "130 km",
        largeur: "75 km",
        habitants: "429,912",
        pourcentage: "3.6%",
        plat: "Couscous traditionnel, Bsisa, Hlalem",
        celebre: "Berceau de la Révolution 2011, Agriculture",
        color: "#FFD700"
    },
    gafsa: {
        name: "Gafsa",
        surface: "8,990 km²",
        longueur: "155 km",
        largeur: "80 km",
        habitants: "337,331",
        pourcentage: "2.8%",
        plat: "Mermez, Chouchou, Tajine oasis",
        celebre: "Bassin minier de phosphate, Oasis, Thermes romains",
        color: "#9370DB"
    },
    tozeur: {
        name: "Tozeur",
        surface: "5,593 km²",
        longueur: "110 km",
        largeur: "65 km",
        habitants: "107,912",
        pourcentage: "0.9%",
        plat: "Dattes Deglet Nour, Tajine oasis, Pain berbère",
        celebre: "Oasis de palmeraies, Chott el-Djérid, Désert, Star Wars",
        color: "#FFD700"
    },
    kebili: {
        name: "Kébili",
        surface: "22,084 km²",
        longueur: "220 km",
        largeur: "145 km",
        habitants: "156,961",
        pourcentage: "1.3%",
        plat: "Dattes, Pain oasis, Couscous aux dattes",
        celebre: "Ksar Ghilane, Douz (porte du désert), Grand Erg Oriental",
        color: "#FFA500"
    },
    gabes: {
        name: "Gabès",
        surface: "7,166 km²",
        longueur: "130 km",
        largeur: "70 km",
        habitants: "374,300",
        pourcentage: "3.1%",
        plat: "Couscous aux légumes, Hout marka, Tajine poisson",
        celebre: "Oasis maritime unique, Marché aux épices, Industrie chimique",
        color: "#FFA500"
    },
    medenine: {
        name: "Médenine",
        surface: "8,588 km²",
        longueur: "145 km",
        largeur: "80 km",
        habitants: "479,520",
        pourcentage: "4.0%",
        plat: "Bsisa, Couscous berbère, Rougag",
        celebre: "Ksour (greniers fortifiés), Matmata, Architecture troglodyte",
        color: "#90EE90"
    },
    tataouine: {
        name: "Tataouine",
        surface: "38,889 km²",
        longueur: "280 km",
        largeur: "185 km",
        habitants: "149,453",
        pourcentage: "1.2%",
        plat: "Couscous berbère, Akolet, Rougag",
        celebre: "Chenini, Ksar Ouled Soltane, Décors Star Wars, Désert",
        color: "#90EE90"
    }
};

let selectedRegion = null;
let canvas = null;
let ctx = null;

/**
 * Initialise la carte interactive au chargement de la page
 */
function initMap() {
    const mapImage = document.getElementById('tunisiaMap');
    canvas = document.getElementById('mapCanvas');
    
    // Attendre que l'image soit chargée
    if (mapImage.complete) {
        setupCanvas();
    } else {
        mapImage.onload = setupCanvas;
    }
    
    // Configurer les zones cliquables
    setupClickableRegions();
    
    // Redimensionner le canvas lors du redimensionnement de la fenêtre
    window.addEventListener('resize', () => {
        setupCanvas();
        // Redessiner la sélection si elle existe
        const selected = document.querySelector('.region-area.selected');
        if (selected) {
            highlightRegion(selected);
        }
    });
}

/**
 * Configure le canvas pour qu'il corresponde à la taille de l'image
 */
function setupCanvas() {
    const mapContainer = document.querySelector('.map-container');
    
    canvas.width = mapContainer.offsetWidth;
    canvas.height = mapContainer.offsetHeight;
    ctx = canvas.getContext('2d');
}

/**
 * Configure les zones cliquables pour chaque gouvernorat
 */
function setupClickableRegions() {
    const regions = document.querySelectorAll('.region-area');
    
    regions.forEach(region => {
        // Événement de clic
        region.addEventListener('click', function(e) {
            e.preventDefault();
            const govKey = this.dataset.gov;
            selectGovernorate(govKey, this);
        });
        
        // Afficher le nom au survol
        region.addEventListener('mouseenter', function() {
            const govKey = this.dataset.gov;
            const gov = governorates[govKey];
            if (gov) {
                this.title = gov.name;
                // Effet visuel de surbrillance sur le canvas
                drawHoverEffect(this);
            }
        });
        
        // Effacer l'effet au départ de la souris
        region.addEventListener('mouseleave', function() {
            if (!this.classList.contains('selected')) {
                clearHoverEffect();
            }
        });
        
        // Support du clavier pour l'accessibilité
        region.setAttribute('role', 'button');
        region.setAttribute('tabindex', '0');
        region.setAttribute('aria-label', governorates[region.dataset.gov]?.name || 'Gouvernorat');
        
        region.addEventListener('keypress', function(e) {
            if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                const govKey = this.dataset.gov;
                selectGovernorate(govKey, this);
            }
        });
    });
}

/**
 * Dessine un effet de survol sur le canvas
 */
function drawHoverEffect(element) {
    if (!ctx) return;
    
    const rect = element.getBoundingClientRect();
    const containerRect = canvas.getBoundingClientRect();
    
    const x = rect.left - containerRect.left;
    const y = rect.top - containerRect.top;
    const width = rect.width;
    const height = rect.height;
    
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    
    // Effet de glow bleu pour le survol
    ctx.strokeStyle = 'rgba(59, 130, 246, 0.8)';
    ctx.lineWidth = 3;
    ctx.shadowColor = 'rgba(59, 130, 246, 0.6)';
    ctx.shadowBlur = 15;
    ctx.strokeRect(x, y, width, height);
}

/**
 * Efface l'effet de survol
 */
function clearHoverEffect() {
    if (!ctx) return;
    
    // Si une région est sélectionnée, redessiner son effet
    const selectedRegion = document.querySelector('.region-area.selected');
    if (selectedRegion) {
        highlightRegion(selectedRegion);
    } else {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
    }
}

/**
 * Sélectionne un gouvernorat et affiche ses détails
 */
function selectGovernorate(key, element) {
    const gov = governorates[key];
    
    if (!gov) {
        console.error(`Gouvernorat non trouvé: ${key}`);
        return;
    }
    
    selectedRegion = key;
    
    // Mise à jour de l'état visuel
    updateRegionStates(element);
    
    // Mise à jour du panneau de détails
    updateDetailsPanel(gov);
    
    // Animation de highlight sur le canvas
    highlightRegion(element);
}

/**
 * Met à jour l'état visuel de toutes les régions
 */
function updateRegionStates(activeElement) {
    const allRegions = document.querySelectorAll('.region-area');
    
    allRegions.forEach(region => {
        region.classList.remove('selected');
    });
    
    activeElement.classList.add('selected');
}

/**
 * Dessine un effet de highlight sur la région sélectionnée
 */
function highlightRegion(element) {
    if (!ctx) return;
    
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    
    const rect = element.getBoundingClientRect();
    const containerRect = canvas.getBoundingClientRect();
    
    const x = rect.left - containerRect.left;
    const y = rect.top - containerRect.top;
    const width = rect.width;
    const height = rect.height;
    
    // Dessiner un contour vert animé pour la sélection
    ctx.strokeStyle = 'rgba(34, 197, 94, 1)';
    ctx.lineWidth = 5;
    ctx.strokeRect(x, y, width, height);
    
    // Effet de glow vert intense
    ctx.shadowColor = 'rgba(34, 197, 94, 0.8)';
    ctx.shadowBlur = 25;
    ctx.strokeRect(x, y, width, height);
    
    // Ajouter un deuxième contour externe
    ctx.strokeStyle = 'rgba(34, 197, 94, 0.5)';
    ctx.lineWidth = 3;
    ctx.shadowBlur = 35;
    ctx.strokeRect(x - 3, y - 3, width + 6, height + 6);
    
    ctx.shadowBlur = 0;
}

/**
 * Met à jour le panneau de détails avec les informations du gouvernorat
 */
function updateDetailsPanel(gov) {
    const detailsPanel = document.getElementById('detailsPanel');
    const percentageValue = parseFloat(gov.pourcentage);
    
    detailsPanel.innerHTML = `
        <div class="details-content">
            <div class="details-header">
                <div class="gov-icon" style="background-color: ${gov.color}">
                    📍
                </div>
                <h3 class="gov-name">${gov.name}</h3>
            </div>

            <div class="info-card">
                <div class="info-label">
                    <span style="font-size: 1.2rem;">📐</span>
                    <span>Surface</span>
                </div>
                <div class="info-value">${gov.surface}</div>
            </div>

            <div class="info-card">
                <div class="info-label">
                    <span style="font-size: 1.2rem;">👥</span>
                    <span>Population</span>
                </div>
                <div class="info-value">${gov.habitants} habitants</div>
            </div>

            <div class="info-card">
                <div class="info-label">
                    <span style="font-size: 1.2rem;">📊</span>
                    <span>Concentration de la population</span>
                </div>
                <div class="info-value">${gov.pourcentage} de la population tunisienne</div>
                <div class="percentage-bar">
                    <div class="percentage-fill" style="width: ${percentageValue * 10}%">
                        ${gov.pourcentage}
                    </div>
                </div>
            </div>

            <div class="info-card">
                <div class="info-label" style="margin-bottom: 15px;">
                    <span style="font-size: 1.2rem;">📏</span>
                    <span>Dimensions</span>
                </div>
                <div class="dimensions-grid">
                    <div class="dim-item">
                        <div class="dim-label">Longueur</div>
                        <div class="dim-value">${gov.longueur}</div>
                    </div>
                    <div class="dim-item">
                        <div class="dim-label">Largeur</div>
                        <div class="dim-value">${gov.largeur}</div>
                    </div>
                </div>
            </div>

            <div class="info-card">
                <div class="info-label">
                    <span style="font-size: 1.2rem;">🍽️</span>
                    <span>Gastronomie Traditionnelle</span>
                </div>
                <div class="info-value" style="font-size: 1rem; line-height: 1.6;">
                    ${gov.plat}
                </div>
            </div>

            <div class="info-card">
                <div class="info-label">
                    <span style="font-size: 1.2rem;">🏆</span>
                    <span>Célèbre Pour</span>
                </div>
                <div class="info-value" style="font-size: 1rem; line-height: 1.6;">
                    ${gov.celebre}
                </div>
            </div>
        </div>
    `;
}

// Initialiser la carte au chargement de la page
document.addEventListener('DOMContentLoaded', initMap);