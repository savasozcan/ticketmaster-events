// Packages
import React from 'react';

// Styles
import * as Style from "./FooterStyle.js";

class Footer extends React.Component {

    render() {
        return (
            <Style.AppWrapper>
                <Style.AppInfoWrapper>
                    <Style.AppName>
                        <Style.AppLink className="footer-info" href="https://github.com/savasozcan" target="_blank">
                            Savaş Özcan
                        </Style.AppLink>
                    </Style.AppName>
                </Style.AppInfoWrapper>
                <Style.AppInfoWrapper>
                    <Style.AppLinkWrapper>
                        <Style.AppLink className="footer-info" href="https://github.com/savasozcan/ticketmaster-events" target="_blank">
                            Ticketmaster Events
                        </Style.AppLink>
                    </Style.AppLinkWrapper>
                </Style.AppInfoWrapper>
            </Style.AppWrapper>
        )
    }
}

export default Footer