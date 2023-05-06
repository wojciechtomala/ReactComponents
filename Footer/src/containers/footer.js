import React from 'react';
import Footer from '../components/footer';

export function FooterContainer(){
    return(
    <Footer>
        <Footer.Wrapper>
            <Footer.Row>
                <Footer.Column>
                    <Footer.Title>O nas</Footer.Title>
                    <Footer.Link href="#">Kontakt</Footer.Link>
                    <Footer.Link href="#">Regulamin</Footer.Link>
                    <Footer.Link href="#">Informacje</Footer.Link>
                    <Footer.Link href="#">Logowanie</Footer.Link>
                </Footer.Column>

                <Footer.Column>
                    <Footer.Title>Oferta</Footer.Title>
                    <Footer.Link href="#">Samochody</Footer.Link>
                    <Footer.Link href="#">Szukaj</Footer.Link>
                    <Footer.Link href="#">Nowości</Footer.Link>
                    <Footer.Link href="#">Współpraca</Footer.Link>
                </Footer.Column>

                <Footer.Column>
                    <Footer.Title>Pomoc</Footer.Title>
                    <Footer.Link href="#">Telefon</Footer.Link>
                    <Footer.Link href="#">Email</Footer.Link>
                    <Footer.Link href="#">Zgłoszenia</Footer.Link>
                    <Footer.Link href="#">Formularz</Footer.Link>
                </Footer.Column>

                <Footer.Column>
                    <Footer.Title>Społeczność</Footer.Title>
                    <Footer.Link href="#">Facebook</Footer.Link>
                    <Footer.Link href="#">Instagram</Footer.Link>
                    <Footer.Link href="#">Twitter</Footer.Link>
                    <Footer.Link href="#">YouTube</Footer.Link>
                </Footer.Column>
            </Footer.Row>
        </Footer.Wrapper>
    </Footer>
    )
}