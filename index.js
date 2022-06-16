const express = require("express")
const app = express()
const bodyParser = require('body-parser')

const mongoose = require("mongoose")

const { routerUser } = require("./Routes/userRoute")
const { routerArticle } = require("./Routes/articleRoute")
const { routerClient } = require("./Routes/clientRoute")
const { routerFournisseur } = require("./Routes/fournisseurRoute")
const { routerTauxTVA } = require("./Routes/tauxTVARoute")
const { routerUniteMesure } = require("./Routes/uniteMesureRoute")
const { routerModeLivraison } = require("./Routes/modeLivraisonRoute")
const { routerModeReglement } = require("./Routes/modeReglementRoute")
const { routerSousFamille } = require("./Routes/sousFamilleRoute")
const { routerCategorie } = require("./Routes/categorieRoute")
const { routerFamille } = require("./Routes/familleRoute")
const { routerSociete } = require("./Routes/societeRoute")
const { routerCategorieFamille } = require("./Routes/categorieFamilleRoute")
const { routerBonLivraison } = require("./Routes/bonLivraisonRoute")
const { routerRole } = require("./Routes/roleRoute")
const { routerMarque } = require("./Routes/marqueRoute")
const { routerModele } = require("./Routes/modeleRoute")
const { routerInventaire } = require("./Routes/inventaireRoute")
const { routerTransporteur } = require("./Routes/transporteurRoute")
const { routerReglement } = require("./Routes/reglementRoute")
const { routerReglementFournisseur } = require("./Routes/reglementFournisseurRoute")
const { routerProjet } = require("./Routes/projetRoute")
const { routerSecteur } = require("./Routes/secteurRoute")
const { routerCorrectionStock } = require("./Routes/correctionStockRouter")

const { routerCommande } = require("./Routes/commandeRoute")
const { routerDevis } = require("./Routes/devisRoute")
const { routerBonCommande } = require("./Routes/bonCommandeRoute")
const { routerBonAchat } = require("./Routes/bonAchatRoute")
const { routerBonRetourClient } = require("./Routes/bonRetourClientRoute")
const { routerBonRetourFournisseur } = require("./Routes/bonRetourFournisseurRoute")

const { routerBonTransfert } = require("./Routes/bonTransfertRoute")
const { routerOrdreEmission } = require("./Routes/ordreEmissionRoute")
const { routerUtilisateur } = require("./Routes/utilisateurRoute")
const { routerPersonnel } = require("./Routes/personnelRoute")

const { routerFrais } = require("./Routes/fraisRoute")

const { routerBonTravail } = require("./Routes/bonTravailRoute")
const { routerBonPrelevement } = require("./Routes/bonPrelevementRoute")
const { routerTypeTier } = require("./Routes/typeTierRoute")
const { routerTypeContact } = require("./Routes/typeContactRoute")
const { routerStatuOpportunite } = require("./Routes/statuOpportuniteRoute")
const { routerConditionReglement } = require("./Routes/conditionReglementRoute")
const { routerProjetInterne } = require("./Routes/projetInterneRoute")
const { routerTacheProjetInterne } = require("./Routes/tacheProjetInterneRoute")
const { routerParametres } = require("./Routes/parametresRoute")
const { routerTypeCompte } = require("./Routes/typeCompteRoute")
const { routerTypeFournisseur } = require("./Routes/typeFournisseurRoute")
const { routerVariante } = require("./Routes/varianteRoute")
const { routerChargeDirecte } = require("./Routes/chargeDirecteRoute")
const { routerExercice } = require("./Routes/exerciceRoute")
const { routerServerMail } = require("./Routes/serverMail")
const { routerHistoriqueArticleAchat } = require("./Routes/historiqueArticleAchatRoute")
const { routerHistoriqueArticleVente } = require("./Routes/historiqueArticleVenteRoute")

const { routerReception } = require("./Routes/receptionRoute")
const { routerPrixSpecifique } = require("./Routes/prixSpecifiqueRoute")
const { routerSousProduit } = require("./Routes/sousProduitRoute")
const { routerCaisse } = require("./Routes/caisseRoute")
const { routerSessionCaisse } = require("./Routes/sessionCaisseRoute")
const { routerChargeSociete } = require("./Routes/chargeSocieteRoute")
const { routerMouvementStock } = require("./Routes/mouvementStockRoute")
const { routerImportation } = require("./Routes/importationRoute")

const { routerSituationReglement } = require("./Routes/situationReglementRoute")

/* ******************* Partie Route GMAO ********************** */
const { routerCategorieMachine } = require("./Routes/GMAORoutes/categorieMachineRoute")
const { routerModeleMachine } = require("./Routes/GMAORoutes/modeleMachineRoute")
const { routerMarqueMachine } = require("./Routes/GMAORoutes/marqueMachineRoute")
const { routerOperationPreventif } = require("./Routes/GMAORoutes/operationPreventifRoute")
const { routerEnergie } = require("./Routes/GMAORoutes/energieRoute")
const { routerPlanPreventif } = require("./Routes/GMAORoutes/planPreventifRoute")
const { routerMachine } = require("./Routes/GMAORoutes/machineRoute")
const { routerPeriodicite } = require("./Routes/GMAORoutes/periodiciteRoute")
const { routerTachePreventif } = require("./Routes/GMAORoutes/tachePreventifRoute")
const { routerTechnicien } = require("./Routes/GMAORoutes/technicienRoute")
const { routerEtatTache } = require("./Routes/GMAORoutes/etatTacheRoute")
const { routerEtatCarburant } = require("./Routes/GMAORoutes/etatCarburantRoute")

const { routerMission } = require("./Routes/GMAORoutes/missionRoute")
const { routerTypeFrais } = require("./Routes/GMAORoutes/typeFraisRoute")
const { routerFraisMission } = require("./Routes/GMAORoutes/fraisMissionRoute")
const { routerPointageCompteur } = require("./Routes/GMAORoutes/pointageCompteurRoute")
const { routerVehicule } = require("./Routes/GMAORoutes/vehiculeRoute")
const { routerChauffeur } = require("./Routes/GMAORoutes/chauffeurRoute")

const { routerBonCasse } = require("./Routes/bonCasseRoute")

const { routerBonReception } = require("./Routes/bonReceptionRoute")

/* ******************* Partie Route COMPTABILITE ********************** */
const { routerClasse } = require("./Routes/COMPTABILITERoute/classeRoute")

const cors = require('cors')
const swaggerJsDoc = require("swagger-jsdoc");
const swaggerUi = require("swagger-ui-express");

const options = {
	definition: {
		openapi: "3.0.0",
		info: {
			title: "Bon Gest",
			version: "1.0.0",
			description: "A simple Express Library API",
		},
		servers: [
			{
				url: "https://bongest.herokuapp.com",
				//url: "http://localhost:5000",
			},
		],
	},
	apis: [`${__dirname}/Routes/*.js`],
	//apis: [`${__dirname}/Routes/GMAORoutes/*.js`],
};

const swaggerDocs = swaggerJsDoc(options);
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDocs));

//mongoose.connect("mongodb://localhost/shopBD", { useUnifiedTopology: true, useNewUrlParser: true })
//.then(console.log("connected to mongodb"))
//.catch(err => console.log(err))

 mongoose.connect("mongodb+srv://cluster0.jfk75.mongodb.net/bongest", { useUnifiedTopology: true, useNewUrlParser: true, username: "JR-Test", password: "test" })
 .then(console.log("connected to mongodb"))
 .catch(err => console.log(err))

app.use(express.json())

/*var allowCrossDomain = function(req, res, next) {
	console.log("Bonjour")
	res.header('Access-Control-Allow-Origin', '*');
	res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
	res.header('Access-Control-Allow-Headers', 'Content-Type');

	next();
}*/

app.use(cors());
//app.use(allowCrossDomain);

app.use('/bonReceptions',routerBonReception)
app.use('/emails',routerServerMail)
app.use('/users',routerUser)
app.use('/articles',routerArticle)
app.use('/clients',routerClient)
app.use('/fournisseurs',routerFournisseur)
app.use('/tauxTVAs',routerTauxTVA)
app.use('/uniteMesures',routerUniteMesure)
app.use('/modeLivraisons',routerModeLivraison)
app.use('/modeReglements',routerModeReglement)

app.use('/emails', routerServerMail)
app.use('/users', routerUser)
app.use('/articles', routerArticle)
app.use('/clients', routerClient)
app.use('/fournisseurs', routerFournisseur)
app.use('/tauxTVAs', routerTauxTVA)
app.use('/uniteMesures', routerUniteMesure)
app.use('/modeLivraisons', routerModeLivraison)
app.use('/modeReglements', routerModeReglement)

app.use('/sousFamilles', routerSousFamille)
app.use('/categories', routerCategorie)
app.use('/familles', routerFamille)
app.use('/societes', routerSociete)
app.use('/categorieFamilles', routerCategorieFamille)
app.use('/bonLivraisons', routerBonLivraison)
app.use('/marques', routerMarque)
app.use('/roles', routerRole)
app.use('/modeles', routerModele)
app.use('/inventaires', routerInventaire)
app.use('/transporteurs', routerTransporteur)
app.use('/reglements', routerReglement)
app.use('/reglementFournisseurs', routerReglementFournisseur)
app.use('/projets', routerProjet)
app.use('/secteurs', routerSecteur)
app.use('/correctionStocks', routerCorrectionStock)

app.use('/commandes', routerCommande)
app.use('/devis', routerDevis)
app.use('/bonCommandes', routerBonCommande)
app.use('/bonAchats', routerBonAchat)
app.use('/bonRetourClients', routerBonRetourClient)
app.use('/bonRetourFournisseurs', routerBonRetourFournisseur)


app.use('/bonTransferts', routerBonTransfert)
app.use('/ordreEmissions', routerOrdreEmission)

app.use('/utilisateurs', routerUtilisateur)

app.use('/personnels', routerPersonnel)
app.use('/bonTravails', routerBonTravail)
app.use('/bonPrelevements', routerBonPrelevement)
app.use('/typeTiers', routerTypeTier)
app.use('/typeContacts', routerTypeContact)
app.use('/statuOpportunites', routerStatuOpportunite)
app.use('/conditionReglements', routerConditionReglement)
app.use('/projetInternes', routerProjetInterne)
app.use('/tacheProjetInternes', routerTacheProjetInterne)
app.use('/fraiss', routerFrais)
app.use('/parametres', routerParametres)
app.use('/typeComptes', routerTypeCompte)
app.use('/typeFournisseurs', routerTypeFournisseur)

app.use('/variantes', routerVariante)
app.use('/chargeDirectes', routerChargeDirecte)
app.use('/historiqueArticleAchats', routerHistoriqueArticleAchat)
app.use('/historiqueArticleVentes', routerHistoriqueArticleVente)

app.use('/receptions', routerReception)

app.use('/prixSpecifiques', routerPrixSpecifique)
app.use('/sousProduits', routerSousProduit)
app.use('/caisses', routerCaisse)
app.use('/sessionCaisses', routerSessionCaisse)
app.use('/chargeSocietes', routerChargeSociete)
app.use('/mouvementStocks', routerMouvementStock)

app.use('/bonCasses', routerBonCasse)
app.use('/situationReglements', routerSituationReglement)

app.use('/importations',routerImportation)

/* ******************* Partie Route GMAO ********************** */
app.use('/categorieMachines', routerCategorieMachine)
app.use('/marqueMachines', routerMarqueMachine)
app.use('/modeleMachines', routerModeleMachine)
app.use('/operationPreventifs', routerOperationPreventif)
app.use('/energies', routerEnergie)
app.use('/planPreventifs', routerPlanPreventif)
app.use('/machines', routerMachine)
app.use('/periodicites', routerPeriodicite)
app.use('/tachePreventifs', routerTachePreventif)
app.use('/techniciens', routerTechnicien)
app.use('/etatTaches', routerEtatTache)
app.use('/etatCarburants', routerEtatCarburant)
app.use('/typeFraiss', routerTypeFrais)
app.use('/missions', routerMission)
app.use('/fraisMissions', routerFraisMission)
app.use('/pointageCompteurs', routerPointageCompteur)
app.use('/chauffeurs', routerChauffeur)
app.use('/vehicules', routerVehicule)

app.use('/exercices', routerExercice)

app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static('uploads'));

app.use('/uploads', express.static(__dirname + '/uploads/'));
app.use(express.static(__dirname + "/public"));


/* ******************* Partie Route COMPTABILITE ********************** */
app.use('/classes', routerClasse)


/*app.get("/", (req, res) => {
	res.send("hello world");
});*/

app.all('*', function (req, res) {
	res.sendFile(__dirname + "/public/index.html");
});

app.listen(process.env.PORT || 5000, () => {
	console.log("server conected to port 5000")
})
