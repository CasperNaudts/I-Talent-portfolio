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
                        Ericson 5G
                    </Text>
                    <br/>
                    <Text variant="large">
                        Dit seminarie ging over de evolutie van het telefoon netwerk.  Het verhaal begon bij het onstaan van telefonie en de fiziek bemande telefoon centrales om mensen door te verbinden.
                    </Text>
                    <Text variant="large">
                        Hierna begon het opbouwende verhaal van G tot 5G. Zo werd er gesproken over regio gebonden gsm nummers. Waarbij je moest weten op welke regio de gsm verbonden was om je contact te kunnen contacteren.
                    </Text>
                    <Text variant="large">
                        Alle iteratie fases van de mobiele technologien werden overlopen en besproken waarom bepaalde uitbreidingen nodig waren.
                    </Text>
                </div>
            </div>
            <div className="portfolio-seminaries-row-reverse">
                <div className="portfolio-seminaries-image">
                    <Image src={Cloud}/>
                </div>
                <div className="portfolio-seminaries-text">
                    <Text variant="xxLargePlus">
                        Glue cloud introduction
                    </Text>
                    <br/>
                    <Text variant="large">
                        Dit was mijn eerste seminarie en het was er in een keer boenk op.  We mochten met de hulp van de mensen van Gluo op AWS een hoop services opzetten.
                    </Text>
                    <Text variant="large">
                        Zo gingen we van een website op een virtuele mashine draaien naar een hele cluster van webservers met loadbalancers en alles er op en er aan.
                    </Text>
                    <Text variant="large">
                        Het leuke aan dir seminarie vond ik dat het voorliep op de lesse. Op het moment van dit seminarie was AWS nog een grote onbekende doos waardoor alle info meer dan welkom was. Moest ik dit seminarie nu volgen zou al de magie weg zijn.
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
                        Tijdens dit seminarie kwam Tim Verheyden op digital @breakfast spreeken. Hij sprak over zijn reportage Facebook & ik waarin hij laat zien hoe beinvloedbaar we zijn door facebook en andere social media platformen. Ikzelf had de serie op VRT al gezien maar het was zeer interesant om hem te horen spreken over zijn ervatingen. Als ITer lijken veel van de aangehaalde zaken vanzelfsprekend waardoor we soms de impact voor de gewone mens vergeten.
                    </Text>
                    <Text variant="large">
                        Zo gingen we van een website op een virtuele mashine draaien naar een hele cluster van webservers met loadbalancers en alles er op en er aan.
                    </Text>
                    <Text variant="large">
                        Het leuke aan dir seminarie vond ik dat het voorliep op de lesse. Op het moment van dit seminarie was AWS nog een grote onbekende doos waardoor alle info meer dan welkom was. Moest ik dit seminarie nu volgen zou al de magie weg zijn.
                    </Text>
                </div>
            </div>
            <div className="portfolio-seminaries-row-reverse">
                <div className="portfolio-seminaries-image">
                    <Image src={PerformanceTesting}/>
                </div>
                <div className="portfolio-seminaries-text">
                    <Text variant="xxLargePlus">
                        Performance Testing
                    </Text>
                    <Text variant="large">
                        Text
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
                    <Text variant="large">
                        Text
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
                    <Text variant="large">
                        Text
                    </Text>
                </div>
            </div>
        </div>
    );
};