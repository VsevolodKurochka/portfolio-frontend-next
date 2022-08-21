import React from 'react';
import Particles from 'react-particles-js';
import Typed from 'react-typed';
//import './styles.scss';
import {particles} from 'helpers/particles';
import Button, {ButtonTypes} from 'components/button';
import { useRouter } from "next/router";

const Greeting: React.FC = () => {
    const history = useRouter();

    const testClick = () => {
        history.push("/contacts");
    };

    return (
        <section className="home-greeting">
            <Particles
                params={particles}
                className="home-greeting__particles"
            />
            <div className="home-greeting__content">
                <h1 className="home-greeting__title">
                    Professional development of websites and frontend <span>applications</span>
                </h1>
                <h2 className="home-greeting__subtitle">
                    I create a highly competitive product using advanced web development technologies.<br />
                    <Typed
                        strings={[
                            'You get a fast loading &amp security website',
                            'You get a user-friendly and attractive website',
                            'You get a high converting website.']}
                        typeSpeed={100}
                        backDelay={1000}
                        className={'home-greeting__typed'}
                        loop={true}
                    />
                </h2>
                <div className="home-greeting__buttons">
                    <Button
                        styleType={ButtonTypes.FILLED_BRAND}
                        onClick={testClick}>
                        Contact me
                    </Button>
                    <Button
                        styleType={ButtonTypes.FILLED_WHITE}
                        target="_blank"
                        href="https://drive.google.com/file/d/1W_8xX61BNLoktnsbLJpXE43Z2f6-AZhY/view">
                        Download resume
                    </Button>
                </div>
            </div>
        </section>
    );
};

export default Greeting;
