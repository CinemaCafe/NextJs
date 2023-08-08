"use client";
import Button from "../components/Button";
import { GoBell, GoCloud, GoCode, GoCopilot, GoDesktopDownload } from "react-icons/go";

const ButtonPage = () => {
    const handleClick = () => {
        console.log("Click!");
    }

    return (
        <div className="container mx-auto relative">
            <h1>App</h1>
            <div>
                <Button className="mb-2" success rounded outline onClick={handleClick}>
                    <GoBell />
                    Click Me
                </Button>
            </div>
            <div>
                <Button danger outline onMouseEnter={handleClick}>
                    <GoCloud />
                    Buy Now!
                </Button>
            </div>
            <div>
                <Button warning rounded onMouseLeave={handleClick}>
                    <GoCode />
                    See Deal!
                </Button>
            </div>
            <div>
                <Button secondary rounded outline>
                    <GoCopilot />
                    Hi Ads!
                </Button>
            </div>
            <div>
                <Button primary rounded>
                    <GoDesktopDownload />
                    Something!
                </Button>
            </div>

        </div>
    )
}

export default ButtonPage;