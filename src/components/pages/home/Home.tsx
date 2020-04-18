import { Image, ImageFit, Text } from 'office-ui-fabric-react';
import React from 'react';
import ReactWordcloud from "react-wordcloud";
import { Link } from '../../common/link/Link';
import './Home.scss';
import CloudClass from "./images/CloudClass.png";
import EduTech from "./images/Edu-Tech.png";
import Jibber from "./images/Jibber.png";
import Me from "./images/Me.png";
import { Options, Words } from "./Words";

export const Home: React.FC = () => {
    return(
        <div className="portfolio-home">
            <div className="portfolio-home-head">
                <Image
                    imageFit={ImageFit.cover}
                    src={Me}
                    width={250}
                    height={250}
                />
                <br/>
                <Text variant="large">
                    Hoi! Ik ben Casper Naudts. Ik ben een student toegepaste informatica aan Hogeschool PXL en heb een enorme passie voor nieuwe en innovatieve technologieën.
                </Text>
            </div>
            <div className="portfolio-home-experiences">
                <Text variant="xxLargePlus">Ervaringen</Text>
                <br/>
                <ReactWordcloud options={Options} words={Words}/>
            </div>
            <div className="portfolio-home-projects">
                <Text variant="xxLargePlus">Projecten</Text>
                <div className="portfolio-home-projects-item-reverse">
                    <div className="portfolio-home-projects-item-text">
                        <Text variant="xxLargePlus">
                            Jibber
                        </Text>
                        <br/>
                        <Text variant="large">
                            Jibber is het eerste grotere development project waar ik ooit aan begonnen ben. Samen met enkele mede-eerstejaarsstudenten zijn we begonnen aan dit platform. Het doel van het platform was om verschillende sociale media platformen samen te bundelen op een chronologische manier. Zo zou je posts van Twitter, Facebook, Instagram, ... in een chronologische tijdlijn krijgen.
                        </Text>
                        <br/>
                        <Text variant="large">
                            Twitter en Instagram kregen we redelijk snel geïntegreerd. Maar helaas bleek dit project al redelijk snel niet mogelijk te zijn door de zware extra beperkingen die Facebook had geïmplementeerd op hun API naar aanleiding van het Cambridge Analytica schandaal. Hierdoor hebben we beslist om niet verder te werken aan Jibber, omdat Facebook een essentieel platform was om te integreren.
                        </Text>
                    </div>
                    <div className="portfolio-home-projects-item-image">
                        {/* <Link to="https://jibber.it"> */}
                            <Image
                                src={Jibber}
                                width={600}
                            />
                        {/* </Link> */}
                    </div>
                </div>
                <div className="portfolio-home-projects-item">
                    <div className="portfolio-home-projects-item-text">
                        <Text variant="xxLargePlus">
                            CloudClass
                        </Text>
                        <br/>
                        <Text variant="large">
                            CloudClass is een platform voor scholen om de communicatie tussen studenten, ouders, lesgevers en directie te verbeteren. Met behulp van modules zoals evaluatie, leerlingvolgsysteem en schoolagenda willen we de communicatie van scholen stroomlijnen. Zo hoef je in CloudClass bijvoorbeeld een toets maar één keer aan te maken en dan komt deze terecht in al de gerelateerde modules. We integreren heel nauw met platformen zoals Office 365 en Gsuite, voor zowel login als data representatie. Op deze manier hoeven gebruikers van het platform niet een volledig nieuwe omgeving te leren kennen.
                        </Text>
                        <br/>
                        <Text variant="large">
                            Gezien de grote schaal van CloudClass ging ik op zoek naar andere enthousiaste studenten om mee te werken aan dit project. In het totaal hebben er 15 mensen gewerkt aan CloudClass, waaronder ook enkele als stage.
                        </Text>
                        <br/>
                        <Text variant="large">
                            Dankzij de samenwerking met Craftworks en Raccoons, heb ik de kans gekregen om tijdens mijn stage verder aan CloudClass te werken.
                        </Text>
                    </div>
                    <div className="portfolio-home-projects-item-image">
                        <Link to="https://cloudclass.be" newTab={true}>
                            <Image
                                src={CloudClass}
                                width={400}
                            />
                        </Link>
                    </div>
                </div>
                <div className="portfolio-home-projects-item-reverse">
                    <div className="portfolio-home-projects-item-text">
                        <Text variant="xxLargePlus">
                            Edu-Tech
                        </Text>
                        <br/>
                        <Text variant="large">
                            Om voorgaande projecten in het juiste legale kader te kunnen ontwikkelen, heb ik samen met Kurt Roosbeek Edu-Tech BVBA opgericht. In het verleden werkte ik al voor Edu-Tech als student. Dit was toen nog een éénmanszaak van Kurt die zich focuste op IT-Consultancy in scholen en kleine KMO's. Samen hebben we van dit bedrijf een BVBA gemaakt. We maakten CloudClass deel van Edu-Tech en breidden de consultancy tak verder uit.
                        </Text>
                        <br/>
                        <Text variant="large">
                            Samen hebben we ondertussen ook een goed draaiende CSP (Cloud Solution Provider) tak opgebouwd. Hierin verkopen we Office 365 oplossingen/licenties en Azure solutions. Ondertussen zijn we hier ook Microsoft Silver Partner voor geworden.
                        </Text>
                    </div>
                    <div className="portfolio-home-projects-item-image">
                        <Link to="https://edu-tech.be" newTab={true}>
                            <Image
                                src={EduTech}
                                height={250}
                            />
                        </Link>
                    </div>
                </div>
            </div>
            <div className="portfolio-home-split">
                <div className="portfolio-home-split-reflection">
                    <Text variant="xxLargePlus">Terugblik</Text>
                    <br/>
                    <Text variant="large">
                        Als ik terugkijk op mijn afgelopen 3 PXL-jaren, ben ik heel blij met mijn keuze voor PXL. Er zijn zeker en vast dingen die ik met meer goesting gedaan heb dan andere, maar algemeen gezien ben ik tevreden met mijn PXL-tijd. Ik apprecieerde het direct en informeel contact met directie en lesgevers. Door op kot te gaan ben ik een stuk zelfstandiger geworden. 
                    </Text>
                    <br/>
                    <Text variant="large">
                        Door in de studentencommissie te zetelen, voelde ik mij betrokken bij de Hogeschool. Ik heb kunnen bijdragen aan de kwaliteit van de opleiding door deel te nemen aan de interne kwaliteitscontrole.
                    </Text>
                    <br/>
                    <Text variant="large">
                        Bij groepswerken werd ik vaak geconfronteerd met een groot kennis- en motivatieverschil binnen de groep. Hierdoor heb ik geleerd een meer leidende en coachende rol op mij te nemen.
                    </Text>
                </div>
                <div className="portfolio-home-split-future">
                    <Text variant="xxLargePlus">Toekomst</Text>
                    <br/>
                    <Text variant="large">In de toekomst, hoop ik dat CloudClass succesvol gelanceerd wordt en dat we tevreden eindgebruikers hebben. Verder hoop ik dat Edu-Tech nog verder kan groeien en dat voornamelijk onze cloud business groter wordt.</Text>
                </div>
            </div>
        </div>
    );
};