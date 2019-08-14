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
                <Style.AppInfoSource className="source">
                    <Style.AppLinkWrapper>
                        <Style.AppLink className="footer-info" href="https://github.com/savasozcan/ticketmaster-events" target="_blank">
                            <img src="../../../images/source-code.png" />
                        </Style.AppLink>
                    </Style.AppLinkWrapper>
                </Style.AppInfoSource>
            </Style.AppWrapper>
        )
    }
}

export default Footer