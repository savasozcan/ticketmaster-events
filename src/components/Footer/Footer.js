// Packages
import React from 'react';

// Styles
import * as Style from "./FooterStyle.js";


class Footer extends React.Component {
    render() {
        return (
            <Style.AppWrapper>
                <Style.InfoWrapper>
                    <Style.Name>
                        <Style.Link className="footer-info" href="https://github.com/savasozcan" target="_blank">
                            Savaş Özcan
                        </Style.Link>
                    </Style.Name>
                </Style.InfoWrapper>
                <Style.InfoSource className="source">
                    <Style.LinkWrapper>
                        <Style.Link className="footer-info" href="https://github.com/savasozcan/ticketmaster-events" target="_blank">
                            <img src="/images/source-code.png" />
                        </Style.Link>
                    </Style.LinkWrapper>
                </Style.InfoSource>
            </Style.AppWrapper>
        )
    }
}

export default Footer
