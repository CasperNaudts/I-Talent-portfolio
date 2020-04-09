import { Image, ImageFit, Text } from 'office-ui-fabric-react';
import React from 'react';
import ReactWordcloud, { OptionsProp } from "react-wordcloud";
import './Home.scss';
import CloudClass from "./images/CloudClass.png";
import EduTech from "./images/Edu-Tech.png";
import Jibber from "./images/Jibber.png";
import Me from "./images/Me.png";
import { Words } from "./Words";

export const Home: React.FC = () => {

    const options: OptionsProp =  {
        enableTooltip: false,
        fontFamily: "impact",
        fontSizes: [24, 80],
        padding: 1,
        rotations: 3,
        transitionDuration: 2500,
        enableOptimizations: true
      };

    return(
        <div className="portfolio-home">
            <div className="portfolio-home-head">
                <Image
                    imageFit={ImageFit.cover}
                    src={Me}
                    width={250}
                    height={250}
                />
                <Text variant="large">
                    Hoi! Ik ben Casper Naudts. Ik ben een student toegepaste informatica  aan Hogeschool PXL en heb een enorme passie voor nieuwe en inovatieve technologieën.
                </Text>
            </div>
            <div className="portfolio-home-projects">
                <div className="portfolio-home-projects-item-reverse">
                    <div className="portfolio-home-projects-item-text">
                        <Text variant="xxLargePlus">
                            Jibber
                        </Text>
                        <br/>
                        <Text variant="large">
                            Jibber is het eerste grotere development project waar ik ooit aan begonnen ben. Samen met enkele mede eerstejaars studenten zijn we begonnen aan dit platform. Het doel van het platform was om verschillende sociale media platformen samen te bundelen op een chronologise manier. Zo zou je posts van twitter, facebook, instagram, ... in een chronologise tijdlijn krijgen.
                        </Text>
                        <br/>
                        <Text variant="large">
                            Helaas bleek dit project al redelijk snel niet mogelijk te zijn door de zware extra beperkingen die facebook had geimplementeerd op hun API naar aanleiding van het camebridge analytica schandaal. Hierdoor hebben we beslist om niet verder te werken aan dit product omdat facebook een essentieel platform was om mee te integreren.
                        </Text>
                    </div>
                    <div className="portfolio-home-projects-item-image">
                        <Image
                            src={Jibber}
                            width={600}
                        />
                    </div>
                </div>
                <div className="portfolio-home-projects-item">
                    <div className="portfolio-home-projects-item-text">
                        <Text variant="xxLargePlus">
                            CloudClass
                        </Text>
                        <br/>
                        <Text variant="large">
                            CloudClass is een platform voor scholen om de comunicatie tussen studenten, ouders, lesgevers en directie te verbeteren. Met behulp van modules zoals evaluatie, leerlingvolgsysteem en schoolagenda willen we de comunicatie van scholen stroomleinen. Zo hoef je in CloudClass bijvoorbeeld een toets maar 1 keer aan te maken en dan komt deze terecht in al de gerelateerde modules. We integreren heel nauw met platformen zoals Office 365 en Gsuite voor zowel login als data representatie. Op deze manier hoeven gebruikers van het platform niet een voledig nieuwe omgeving te leren kennen.
                        </Text>
                        <br/>
                        <Text variant="large">
                            Gezien de grote schaal van CloudClass ging ik opzoek naar andere enthousiaste studenten om mee te werken aan dit project. In het totaal hebben er 15 mensen meegewerkt aan CloudClass waaronder ook enkele als stage.
                        </Text>
                    </div>
                    <div className="portfolio-home-projects-item-image">
                        <Image
                            src={CloudClass}
                            width={300}
                        />
                    </div>
                </div>
                <div className="portfolio-home-projects-item-reverse">
                    <div className="portfolio-home-projects-item-text">
                        <Text variant="xxLargePlus">
                            Edu-Tech
                        </Text>
                        <br/>
                        <Text variant="large">
                            Om voorgaade projecten in het juiste legale kader te kunnen ontwikkelen heb ik Samen met Kurt Roosbeek Edu-Tech BVBA opgericht. In het verlede werkte ik al voor Edu-Tech als studenten job dit was toen nog een eenmanszaak van Kurt die zich focuste op IT-Consultancy in scholen en kleine KMO's. Samen hebben we van dit bedrijf een BVBA gemaakt en CloudClass hieronder geboegd en de Consultancy tak verder uitgebreid.
                        </Text>
                        <br/>
                        <Text variant="large">
                            Samen hebben we ook een ondertussen een goed draaiende CSP (Cloud Solution Provider) tak opgebouwd. Hierin verkopen we office 365 oplossingen/licenties en Azure solutions. Ondertussen zijn we hier ook Microsoft Silver Partner voor geworden.
                        </Text>
                    </div>
                    <div className="portfolio-home-projects-item-image">
                        <Image
                            src={EduTech}
                            height={300}
                        />
                    </div>
                </div>
            </div>
            <div className="portfolio-home-experiences">
                <Text variant="xxLargePlus">Ervaringen</Text>
                <ReactWordcloud options={options} words={Words}/>
            </div>
            <div className="portfolio-home-split">
                <div className="portfolio-home-split-future">
                    <Text variant="xxLargePlus">Toekomst</Text>
                    <br/>
                    <Text>In de toekomst hoop ik dat het product CloudClass goed gelanceerd geraakt en dat we tevreden eindgebruikers hebben. Verder hoop ik dat Edu-Tech nog verder kan groeien en dat voornamelijk onze cloud business groter wordt.</Text>
                </div>
                <div className="portfolio-home-split-reflection">
                    <Text variant="xxLargePlus">Terugblik</Text>
                    <br/>
                    <Text>Als ik terugkijk op mijn afgelopen 3 PXL jaren ben ik heel blij met mijn keuze voor PXL. Er zijn zeker en vast dingen die ik met meer goesting gedaan heb dan andere maar algemeen gezien ben ik heel blij met mijn PXL tijd. Door op kot te gaan ben ik een stuk zelfstandiger geworden en door in de studenten commissie te zetelen had ik toch een beetje mijn zegje binnen de school.</Text>
                    <br/>
                    <Text>Op groepswerken zal ik altijd met een dubbel gevoel terug kijken maar ik heb er zeker en vast ook veel uit geleerd.</Text>
                </div>
            </div>
        </div>
    );
};