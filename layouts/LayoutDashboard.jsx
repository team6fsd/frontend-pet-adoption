import React from "react";
const LayoutDashboard = ({ children }) => {
return (
<React.Fragment>
    <html lang="en">

    <head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css"
            integrity="sha512-DTOQO9RWCH3ppGqcWaEA1BIZOC6xxalwEsw9c2QQeAIftl+Vegovlnee1c9QX4TctnWMn13TZye+giMm8e2LwA=="
            crossorigin="anonymous" referrerpolicy="no-referrer" />
    </head>

    <body className="">
        
    <div className="w-full p-5">
        
        {children}
    </div>
</body>

    </html>
</React.Fragment>
);
}

export default LayoutDashboard;
