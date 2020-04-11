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
                    <Text variant="large">Voor mijn internationaar aspect van I-Talent heb ik deelgenomen aan de Bus-IT week op PXL zelf. Ik nam hier een ondersteunende rol op als "local" en helpte de andere studenten hun weg te vinden in Hasselt. We zijn met een groot deel van de groep verschillende keren op café geweest en vertelde elkaar over hoe studeren er op andere plaatsen binnen Europa aantoe gaat.</Text>
                </div>
            </div>
            <div className="portfolio-internationaal-opdracht">
                <div className="portfolio-internationaal-opdracht-left">
                    <Text variant="large">Het thema van de Bus-IT week was drones. We leerden drones aansturen via ROS (Robot Operationg System). De uiteindelijke opdracht was om de drone een lijn door een virtueel aardbeien veld te laten volgen en dan het aantal aardbeien dat aan de boom hing te tellen. Ik ben met mijn team er in geslaagd om via de camera van de drone de lijn te laten identificeren. Ook konden we aardbeien van de rest van de omgeving onderscheiden. De drone de lijn laten volgen en nagaan of we een bepaalde aardbei al geteld hadden is mijn team niet gelukt.</Text>
                    <br/>
                    <Text variant="large">Uiteindelijke mochten we onze software een echte drone laten aansturen. Hiervoor gingen we naar DronePort eerst kregen we een rondleiding doorheen de campus en nadien lunchte we daar ook. Na de middag was het zo ver het moment van de waarheid we gingen een computer onze drone laten aansturen. Eerst begonnen we met de drone te connecteren met de laptop, dit was moeilijker dan verwacht omdat het wifi signiaal van de drone erg zwak en onstabiel was waardoor de verbinding vaak onderbrak. Eens we verbonden waren konden we de software zen werk laten doen. Jammer genoeg duurde ons geluk niet lang omdat we na het comando vooruitvliegen de connectie met de drone verloren. Hierdoor bleef de drone verder vliegen omdat hij geen commando binnen kreeg om te stoppen met vooruitvliegen. Helaas is de drone toen tegen een muur van de hangaar gevlogen en was er een beschermend stuk van de drone afgebroken.</Text>
                    <br/>
                    <Text variant="large">Ik vond de Bus-IT week zeer interesant omdat dit normaal niet direct een onderwerk is waarmee ik in contact zou komen. Samenwerken met externe studenten was zeer leuk en we hebben ook veel van elkaar geleerd. Het feit dat ik de "local" student was vond ik heel fijn omdat ik andere kon helpen bij eventuele vragen buiten de ingeplande momenten.</Text>
                </div>
                <div className="portfolio-internationaal-opdracht-right">
                    <Image src={Drone} imageFit={ImageFit.cover} width={500} height={500}/>
                </div>
            </div>
        </div>
    );
};