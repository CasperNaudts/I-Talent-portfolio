import { Image, ImageFit, Text } from 'office-ui-fabric-react';
import React from 'react';
import Drone from "./images/Drone.jpg";
import GroepsFoto0 from "./images/GroepsFoto0.jpg";
import "./Internationaal.scss";

export const Internationaal: React.FC = () => {
    return (
        <div className="portfolio-internationaal">
            <div className="portfolio-internationaal-head">
                <div className="portfolio-internationaal-head-content">
                    <Image src={GroepsFoto0}/>
                    <br/>
                    <Text variant="large">Door deel te nemen aan de PXL Bus-IT week, heb ik heel wat internationale contacten opgebouwd. Ik nam hier een ondersteunende rol op als "local" en hielp de andere studenten hun weg te vinden in Hasselt. Buiten het officieel gedeelte, hadden we met een groot deel van de groep ook informele contacten op café. Daar wisselden we ervaringen uit over hoe studeren er op andere plaatsen in Europa aan toe gaat.</Text>
                </div>
            </div>
            <div className="portfolio-internationaal-opdracht">
                <div className="portfolio-internationaal-opdracht-left">
                    <Text variant="large">Het thema van de Bus-IT week was drones. We leerden drones aansturen via ROS (Robot Operating System). De uiteindelijke opdracht was om de drone een lijn door een virtueel aardbeienveld te laten volgen en dan het aantal aardbeien dat aan de struiken hing te tellen. Ons team is erin geslaagd om via de camera van de drone de lijn te laten identificeren. Ook konden we aardbeien van de rest van de omgeving onderscheiden. Het is ons niet gelukt de drone de lijn te laten volgen en na te gaan of we een bepaalde aardbei al geteld hadden.</Text>
                    <br/>
                    <Text variant="large">Uiteindelijk mochten we onze software een echte drone laten aansturen. Hiervoor gingen we naar DronePort. Eerst kregen we een rondleiding doorheen de campus en nadien lunchten we daar ook. Nadien begonnen we de drone te connecteren met de laptop. Dit was moeilijker dan verwacht omdat het signaal van de drone erg zwak en onstabiel was, waardoor de verbinding vaak onderbrak. Eens we verbonden waren, konden we de software zijn werk laten doen. Jammer genoeg duurde ons geluk niet lang omdat we na het commando vooruitvliegen de connectie met de drone verloren. Hierdoor bleef de drone verder vliegen omdat hij geen commando binnenkreeg om te stoppen met vooruitvliegen. Helaas is de drone toen tegen een muur van de hangar gevlogen en was er een beschermend stuk van de drone afgebroken.</Text>
                    <br/>
                    <Text variant="large">Ik vond de Bus-IT week zeer interessant omdat dit niet direct een onderwerp is waarmee ik in contact zou komen. Samenwerken met externe studenten was zeer leuk en we hebben ook veel van elkaar geleerd. Het feit dat ik de "local" student was vond ik heel fijn omdat ik anderen kon helpen bij eventuele vragen buiten de ingeplande momenten.</Text>
                </div>
                <div className="portfolio-internationaal-opdracht-right">
                    <Image src={Drone} imageFit={ImageFit.cover} width={500} height={500}/>
                </div>
            </div>
        </div>
    );
};