import React from 'react';
import Container from 'components/container';
import SectionSubHeader from 'components/section-subheader';
import {clients} from './data';
//import './styles.scss';
import Image from 'next/image'

const Clients: React.FC = () => {
    return (
        <section className="home-clients">
            <Container>
                <SectionSubHeader title={'Clients'} />
                <div className="home-clients__grid">
                    {clients.map(({logo, name, url}, index) => (
                        <div className="home-clients__item" key={`name-${index}`}>
                            <Image src={logo} alt={name} layout={'fill'} />
                        </div>
                    ))}
                </div>

            </Container>
        </section>
    );
};

export default Clients;
