import React from "react";
import Navigasi from "../src/components/Navigasi";
import Footer from "../src/components/Footer";
const LayoutLanding = ({ children }) => {
    return (
        <React.Fragment>
            <html lang="en">
            <head>
                <meta charSet="UTF-8" />
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/daisyui@4.6.0/dist/full.min.css" />
                <script src="https://cdn.tailwindcss.com"></script>
                <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css" integrity="sha512-DTOQO9RWCH3ppGqcWaEA1BIZOC6xxalwEsw9c2QQeAIftl+Vegovlnee1c9QX4TctnWMn13TZye+giMm8e2LwA==" crossorigin="anonymous" referrerpolicy="no-referrer" />
            </head>
            <body>
                <Navigasi/>
                {children}
                <Footer/>
            </body>
            </html>
        </React.Fragment>
    );
}

export default LayoutLanding;
