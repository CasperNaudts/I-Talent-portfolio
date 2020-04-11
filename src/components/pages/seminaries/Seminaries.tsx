import { Image, Text } from "office-ui-fabric-react";
import React from 'react';
import Cloud from "./images/Cloud.jpg";
import CloudSecurity from "./images/CloudSecurity.jpeg";
import DevSecOps from "./images/DevSecOps.jpg";
import Ericsson from "./images/Ericsson5G.jpg";
import Facebook from "./images/Facebook&Ik.jpg";
import PerformanceTesting from "./images/PerformanceTesting.png";
import './Seminaries.scss';

export const Seminaries: React.FC = () => {
    return(
        <div className="portfolio-seminaries">
            <div className="portfolio-seminaries-row">
                <div className="portfolio-seminaries-image">
                    <Image src={Ericsson}/>
                </div>
                <div className="portfolio-seminaries-text">
                    <Text variant="xxLargePlus">
                        Ericsson 5G
                    </Text>
                    <br/>
                    <Text variant="large">
                        Dit seminarie ging over de evolutie van het telefoonnetwerk. Het verhaal begon bij het ontstaan van telefonie en de bemande telefooncentrales, waar telefoons fysiek met elkaar verbonden werden. Hierna begon het de draadloze evolutie van G tot 5G. Zo werd er gesproken over regio gebonden gsm-nummers. Daarbij moest je weten in welke regio de gsm op dat moment verbonden was om je contact te kunnen bellen. Alle fases van de mobiele technologieën werden overlopen en er werd besproken waarom bepaalde uitbreidingen nodig waren. Vanaf 2G, werd bijvoorbeeld centraal bijgehouden waar een gebruiker op dat moment aangesloten was, zodat je niet meer hoefde te weten in welke regio de ontvanger zat.
                    </Text>
                    <br/>
                    <Text variant="large">
                        Over de actuele 5G technologie, leerden we wat de hindernissen zijn voor de verdere uitrol.
                    </Text>
                    <br/>
                    <Text variant="large">
                        Ik vond dit zowat het interessantste seminarie dat we gehad hebben, omdat er ook open kaart met ons gespeeld werd waar de technologie momenteel tekort schiet.
                    </Text>
                </div>
            </div>
            <div className="portfolio-seminaries-row-reverse">
                <div className="portfolio-seminaries-image">
                    <Image src={Cloud}/>
                </div>
                <div className="portfolio-seminaries-text">
                    <Text variant="xxLargePlus">
                        Gluo cloud introduction
                    </Text>
                    <br/>
                    <Text variant="large">
                        Dit was mijn eerste seminarie en het was direct hands on met nieuwe technologie. We mochten met de hulp van de mensen van Gluo op AWS een hoop services opzetten. We maakten eenzelfde website op verschillende manieren online beschikbaar. Zo gingen we van een website op een virtuele machine draaien naar een hele cluster van webservers met loadbalancers en alles er op en eraan. We hebben het loadbalancen van de servers ook gevisualiseerd door andere inhoud op de verschildende webservers te plaatsen.
                    </Text>
                    <br/>
                    <Text variant="large">
                        Het leuke aan dit seminarie vond ik dat het voorliep op de lessen. Op het moment van het seminarie was AWS nog een grote onbekende doos, waardoor alle info meer dan welkom was. Indien ik dit seminarie nu zou volgen, zou al de magie weg zijn door de inhoud van de lessen.
                    </Text>
                </div>
            </div>
            <div className="portfolio-seminaries-row">
                <div className="portfolio-seminaries-image">
                    <Image src={Facebook}/>
                </div>
                <div className="portfolio-seminaries-text">
                    <Text variant="xxLargePlus">
                        Facebook & ik
                    </Text>
                    <br/>
                    <Text variant="large">
                        Tijdens dit seminarie kwam VRT journalist Tim Verheyden op digital@breakfast spreken. Hij stelde zijn reportage Facebook & ik voor, waarin hij laat zien hoe beinvloedbaar we zijn door targeted advertenties. Ikzelf had de serie op VRT al gezien, maar het was zeer interessant om hem te horen spreken over zijn ervaringen. Als ITer lijken veel van de aangehaalde zaken vanzelfsprekend waardoor we soms de impact voor de gewone mens vergeten.
                    </Text>
                    <br/>
                    <Text variant="large">
                        Zo vertelde hij over hun advertenties experiment. Door zeer gerichte advertenties over een bepaalde groente te maken, slaagden ze er in om in de getargete steden de verkoop van deze groenten te verdrievoudigen.
                    </Text>
                    <br/>
                    <Text variant="large">
                        Ik vond dit een zeer leuk seminarie, maar doordat ik de reportage al gezien had was de informatie niet echt nieuw voor mij.
                    </Text>
                </div>
            </div>
            <div className="portfolio-seminaries-row-reverse">
                <div className="portfolio-seminaries-image">
                    <Image src={PerformanceTesting}/>
                </div>
                <div className="portfolio-seminaries-text">
                    <Text variant="xxLargePlus">
                        Quality@speed
                    </Text>
                    <br/>
                    <Text variant="large">
                        Tijdens dit seminarie leerden we over performance testing, iets wat dikwijls vergeten wordt bij het testen van software. Simpel gezegt komt het er op neer dat je bepaalde acties op een web omgeving automatiseert en gaat meten of deze actie binnen een bepaalde tijd afrondt. Er worden ook load tests gedaan om te zien hoe het web platform reageert op hogere loads. Zo kan het bijvoorbeeld zijn dat er foute output komt eens er meer dan x aantal gebruikers op het platform zitten.
                    </Text>
                    <br/>
                    <Text variant="large">
                        Van dit seminarie onthoud ik vooral dat load tests heel leuk zijn. Het gevoel om met een computer duizenden gebruikers te kunnen simuleren voelt heel powerful. Het is wel zeker geen job waar ik me mee zou kunnen bezighouden voor langere tijd, maar af en toe kan dit wel leuk zijn.
                    </Text>
                </div>
            </div>
            <div className="portfolio-seminaries-row">
                <div className="portfolio-seminaries-image">
                    <Image src={CloudSecurity}/>
                </div>
                <div className="portfolio-seminaries-text">
                    <Text variant="xxLargePlus">
                        Secwise cloud security
                    </Text>
                    <br/>
                    <Text variant="large">
                        Dit seminarie ging over hoe we eindgebruikers veilig kunnen houden op het internet en hoe we onze omgeving kunnen beschermen zonder deze te complex te maken. Secwise vertelde over de hele security suite van Microsoft in hun cloud omgeving, zoals ATP (Advanced Tread Protection) en EMS (Enterprice Mobility Suite). Het was leuk om hun visie op deze producten te horen aangezien ik zelf hier verdeler van ben binnen Edu-Tech.
                    </Text>
                    <br/>
                    <Text variant="large">
                        Omdat Secwise en mijn stage bedrijf beide onder de Cronos groep vallen en ze nog eens in het zelfde gebouw zitten ben ik de mensen van Secwise ondertussen nog tegengekomen. Tijdens mijn stage heb ik ook deelgenomen aan een ander seminarie waarin ze dieper ingingen op cloud security.
                    </Text>
                </div>
            </div>
            <div className="portfolio-seminaries-row-reverse">
                <div className="portfolio-seminaries-image">
                    <Image src={DevSecOps}/>
                </div>
                <div className="portfolio-seminaries-text">
                    <Text variant="xxLargePlus">
                        DevSecOps
                    </Text>
                    <br/>
                    <Text variant="large">
                        Dit seminarie ging over het belang van security in de devops cycle. De hoofdboodschap van het seminarie was dat software die je vandaag ontwikkelt binnen een jaar niet meer veilig is. Daarom is het belangrijk om continu security te controleren binnen je applicatie, zelfs als er niet verder aan ontwikkeld wordt. Er werd geadviseed om een extra security stap binnen de devops cycle toe te voegen. Hierin zouden de automatische en manuele veiligheidstesten dan een plaats krijgen.
                    </Text>
                    <br/>
                    <Text variant="large">
                        Gezien mijn nevenactiviteiten in applicatieontwikkeling en mijn systemen en netwerken achtergrond, vond ik het interessant om hun strategieën en gebruik van tools te leren kennen. Er zijn zeker enkele dingen die ik hier gehoord heb die ik ondertussen zelf heb toegepast.
                    </Text>
                </div>
            </div>
        </div>
    );
};