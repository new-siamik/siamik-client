import React from "react";
import { Helmet } from "react-helmet";

import BtnToTop from "../components/button/BtnToTop";

export default function Siamik({ title, key, desc, ogUrl, ogType, ogTitle, ogDesc, twitTitle, children}) {

    return (
        <React.Fragment>
            <Helmet>
                    <title>{title}</title>

                    <meta name="keywords" content={key}/>
                    <meta name="description" content={desc}/>
                    <meta property="og:url" content={ogUrl}/>
                    <meta property="og:type" content={ogType}/>
                    <meta property="og:title" content={ogTitle}/>
                    <meta property="og:description" content={ogDesc}/>
                    <meta name="twitter:title" content={twitTitle}/>
                    <link rel="preconnect" href="https://fonts.googleapis.com" />
                    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
                    <link href="https://fonts.googleapis.com/css?family=Lato:100,100italic,300,300italic,regular,italic,700,700italic,900,900italic" rel="stylesheet" />
                    <link href="https://fonts.googleapis.com/css?family=JetBrains+Mono:100,200,300,regular,500,600,700,800,100italic,200italic,300italic,italic,500italic,600italic,700italic,800italic" rel="stylesheet" />
                    <link href="https://fonts.googleapis.com/css?family=Inter:100,200,300,regular,500,600,700,800,900" rel="stylesheet" />

            </Helmet>
            
            {children}

            <BtnToTop />

        </React.Fragment>
    );
}

Siamik.defaultProps = {
    title: 'SIAMIK - Sistem Informasi Akademik UPN "Veteran" Jawa Timur',
    key: 'siamik, new siamik, siamik upn jatim, siamik upn veteran jatim, sistem informasi akademik upn "veteran" jatim',
    desc: 'SIAMIK (Sistem Informasi Akademik) 2022 - Adalah suatu sistem informasi utk mengelola KRS, MBKM, Presensi, KHS, Transkrip dalam penyelengaraan pendidikan di lingkungan UPN "Veteran" Jatim.',
    ogUrl: null,
    ogType: null,
    ogTitle: null,
    ogDesc: null,
    twitTitle: null,
}