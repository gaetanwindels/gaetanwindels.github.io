import { Injectable } from '@angular/core';

@Injectable()
export class DataService {

    private texts: string[] = [

    // day 1
    "Coucou mon amour, je te présente ton calendrier de l'avent un peu spécial." +
    " Chaque jour une nouvelle surprise, j'espère que ça te plaira. J'en dis pas plus, tu découvriras par toi-même au fur et à mesure." +
    "<br /><br />Je t'aime<br /><br /><img src='assets/img/cat.jpg' />",
    // day 2
    "Je peux même mettre des vidéos! C'est quand même génial." +
    "<br /><br/><video controls loop><source src=assets/video/video.mp4 type=video/mp4></video>",
    // day 3
    "Déjà le troisième jour du calendrier wow! Demain je reprends le travail c'est triste. Tiens pour toi, une petite clé steam : <br/><br/><b>CXAS-HQU2-4XMY-RMGX-LKN4</b><br/><br/>" +
    "<img src='assets/img/yeah.jpg' />",
    // day 4
    "Ca y est je reprends le travail, il faut bien. Je sais que tu n'as certainement pas envie dy aller non plus mais pour te motiver j'ai caché " +
    "des petits trucs dans l'appart. Notamment sous ton bureau mouhahaha t'avais ça juste à côté de toi et t'as même pas vu (en vrai au moment où je tape ça je sais pas comment" +
    " je vais faire mais ça va être bien).<br /><br /><img src='assets/img/enfant.jpg' />",
    // day 5
    "Regarde dans Steam! Devrait y avoir un truc qui est apparu.<br/><br />Je t'aime!",
    // day 6
    "Allez qui dirais-tu d'une petite \"énigme\"?<br /><img src='assets/img/raclette.jpg' /><br /><br />" +
    "C'est l'histoire de Jean-Christophe Latruite qui mange une raclette avec ses amis. Alors qu'il <b>regarde</b> avec envie son fromage fondre <b>dans</b> sa coupelle, ses pensées s'égarent et " +
    "et ils se posent des questions exsistentielles sur le sens de la vie. Toujours voyageant dans <b>les tiroirs</b> de son cerveau, il entend les bruits en fond de ses compagnons de table sans" +
    " pour autant qu'il puisse en comprendre le sens. Il pourrait s'agir <b>de</b> n'importe quelle discussion, cela ne lui importait guère, il n'en avait que faire des dernières vacances de Marie Lesau<b>mon</b> ou des " +
    "aventures au <b>bureau</b> de Marcel Carpe. Soudain, une phrase capta cependant son attention car elle lui était déstinée. En effet, d'un ton appuyé et franc il pouvait entendre son voisin de droite lui dire : " +
    "<br><br>\"Jean-Christophe, ne penses-tu pas que le gras c'est la vie?\"",
    // day 7
    "Clique sur le cadeau : <br />" +
    "<img onclick='this.src=\"assets/img/fuck.png\"' src='assets/img/present.jpg' /><br /><br />lolilol (je t'aime)",
    // day 8
    "Bon je sens que la dernière surprise ne t'as pas satisfaite à 100%, du coup voici une autre petite clé steam. Wahou!<br/><br/><b>GBW6-MS6L-CFCR-ZXGX-LNL8</b><br/><br/><img src='assets/img/success.jpg' />",
    // day 9
    "Bon je vais te raconter une histoire.<br /><br /><img src='assets/img/reading.jpg' /><br />" +
    "Alors <b>ça</b> commence ainsi. C'est l'histoire d'une fille qui lisait une histoire. Une fois la lecture commencée, elle se dit : \"Dois-je continuer à lire, à quoi bon, à quoi ça <b>sert</b>?<br />" +
    "Cependant, sa curiosité la pousse <b>à</b> continuer à lire, et <b>rien</b> ne l'empêchera <b>de</b> finir de <b>lire</b> cette histoire. Dans une frénésie soudaine, elle se met à lire de plus en plus vite " +
    " et <b>les mots</b> virevoltent tel un torrent. La fin de l'histoire approchant, elle marque un temps d'arrêt et prend une profonde inspiration. Tout en réalisant ce qui est <b>en</b> train de se passer, elle dit :<br/><br/>" +
    "\"Je me suis fait avoir, quelle in<b>grat!</b>\"<br/><br/><img src='assets/img/218.png' />",
    // day 10
    "Allez encore une clé steam! <br /><br /><b>https://store.steampowered.com/account/ackgift/B6D71093E495D902?redeemer=</b><br />Il pleut des clés steam!<br /><br /><img src='assets/img/rain.jpg' />",
    // day 11
    "Je pense que ce soir tu vas être fatigué après une dure journée de boulot. Je mets donc à te disposition ce bon à faire valoir ce soir ou un autre jour dans un salon GW." +
    "<br /><br />Les salons GW allient détente et calme pour des massages de haute qualité dans une ambiance qui ravira les amateurs de douceur et de tendresse.<br /><br/>" +
    "Nos prestations font preuve de 100% de satisfaction auprès de nos clientes, nous vous donnont donc rendez-vous très bientôt!" +
    "<br/><br/>Le bon (ne pas découper l'écran merci) :<br/>" +
    "<div class='bon'>Bon pour un massage \"caliente\"</div>",
    // day 12
    "<video controls loop><source src=assets/video/video2.mp4 type=video/mp4></video>",
    // day 13
    "Clique sur le cadeau (n'aie pas peur) : <br /><div onclick='this.innerHTML=\"<br />Encore une clé steam wahou!<br/><b>ADEE-Q9XQ-779R-HHJD-Q4N7</b><br/>\"'><img  src='assets/img/present.jpg' /></div>",
    // day 14
    "Aujourd'hui est un jour spécial et tu le sais, si tu ne le sais pas je vais te le rappeler mais je te laisse une dernière chance de te rappeler." +
    "<br/><br /> T'as trouvé?<br /><br />" +
    "Je parle bien évidemment du norvégien Roald Amundsen qui, a 39 ans, est le premier homme à avoir atteint le pôle sud. Je sais que c'est incroyable et si tu veux en savoir plus " +
    "je t'invite à visiter ce lien <a href='https://www.herodote.net/14_decembre_1911-evenement-19111214.php'>Lien vers l'article</a>" +
    "<br /><br /> Et c'est aussi nos 1 ans et deux mois!!! <br /><br />Je t'aime ma petite chérie d'amour en sucre roux.<br/><img src='assets/img/capitole.jpg' />",
    // day 15
    "Bon rien de spécial pour ce jour-ci. Juste un petit mot pour te dire que je t'aime plus que tout. Aujourd'hui c'est vendredi et comme tous les vendredis ça va passer leeeeentement. <br/>" +
    "Mais ce soir c'est le week-end! J'écris ça en avance mais en théorie on devrait aller chez mes parents pour s'occuper de Neptune (le pauvre).<br /><img src='assets/img/chattriste.jpg' /> <br/>" +
    "Je suis sûr qu'on va passer un super week-end dans tous les cas, parce qu'on va passer tout le samedi et dimanche ensemble, et ça c'est bien.<br/><img src='assets/img/excited.png' />",
    // day 16
    "Bon le chat a sûrement perdu sa virilité (ou va bientôt) si j'ai bien lu dans le futur. J'espère qu'il va guérir vite notre petit chat adoré.<br/><br/><img src='assets/img/neptune.jpg' />",
    // day 17
    "Petite vidéo d'archive de quand Neptune avait encore des testicules." +
    "<br /><br/><video controls loop><source src=assets/video/cat.mp4 type=video/mp4></video>",
    // day 18
    "Les fêtes approchant, je te donne la possibilité d'activer le mode bourré sur le calendrier.<br/><br/>" +
    "<img onclick=\"alert('Nous vous rappelons que l’alcool est dangereux pour la santé...'); document.body.style.filter='blur(2px)';\" src='assets/img/pinte.jpg' />",
    // day 19
    "Coucou, pour te prouver mon amour je t'offre un bouquet de fleur virtuel. J'ai demandé à Google le plus beau!<br/><img src='assets/img/fleurs.jpg' />",
    // day 20
    "3PTK-H4ZX-T7EH-HFES-GH9C<br /><br /><br /> Qu'est ce que ça peut bien être? <br /> <br/><img src='assets/img/thinking.jpg' />",
    // day 21
    "TUMS-SAOU-LESA-VECT-CLES<br /><br /> Encore une clé steam? Ouais non mais à quoi ça sert donc? <br />Mets la clé à la fin de l'url dans le navigateur pour le découvrir. Mets également un point d'interrogation avant! (comme ceci: www.gaetanwindels.github.io/?TUMS-SAOU-LESA-VECT-CLES)",
    // day 22
    "Bon je sais que tu aimes bien casser les sites internet...mais à l'avenir j'aimerais que tu t'abstiennes de détruire ce que j'ai fait. Par exemple, tu vois ce bouton...ça serait vraiment super que tu ne cliques pas dessus...<br />" +
    "<br /><img onclick=\"alert('Je t’avais prévenu...'); document.body.style.transform='rotate(45deg)'; alert('Bravo, tu peux pas t’en empêcher...'); \" src='assets/img/red.png' />",
    // day 23
    "Bon, tu ne peux pas t'empêcher de cliquer partout hein! Bon comme tu aimes cliquer partout fais toi plasir<br /><div onclick='this.innerHTML=\"<br />Je t’aime<br/>\"'><img  src='assets/img/present.jpg' /></div>",
    // day 24
    "Demain c'est noël et on doit probablement en ce moment même être chez ta famille (ou en partance du moins). Ca va bien se passer et on va passer de bonnes fêtes! D'ailleurs pour le réveillon<br />" +
    " j'ai inventé un jeu d'alcool sympa pour se mettre bien. En fait tu cliques sur le cadeau en dessous et tu fais ce qu'il y a marqué. Quand tu en as marre tu arrêtes mais ce qui est bien ce que tu peux jouer autant de fois que tu veux!<br />" +
    "<div onclick='this.innerHTML=\"<br />Tu bois! lol<br/>\"; window.setTimeout(function() {  this.innerHTML = \"<img  src=assets/img/present.jpg />\" }.bind(this), 1500)'><img  src='assets/img/present.jpg' />",
    // day 25
    "Juste un petit mot pour te dit que je t'aimais et que tu comptais plus que tout au monde pour moi.",
    // day 26
    "",
    // day 27
    "",
    // day 28
    "",
    // day 29
    "",
    // day 30
    "La fin du calendrier et de l'année approchent, demain ça va être la fiestaaaa. <br /><img src='assets/img/fireworks.jpg' /><br /><br />" +
    "Et comme je t'aime je t'offre ce bon pour un gros calin <br/><div class='bon'>Bon pour un gros câlin</div><br/>" +
    "et comme je suis sympa c'est un bon réutilisable à l'infini qui ne s'épuise jamais.",
    // day 31
    "Wahou ce soir c'est le premier de l'an! Pour te mettre dans l'ambiance tu peux activer le mode bourré extra plus! <br />" +
    "<img onclick=\"alert('C’est la soirée ou c’est pas la soirée!!!!!!!!!!...'); document.body.style.filter='blur(3px)';\" src='assets/img/pinte.jpg' />"
  ];

  get() {
    return this.texts;
  }

}
