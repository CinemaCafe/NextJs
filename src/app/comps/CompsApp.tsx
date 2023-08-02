import Button from "./components/Button";
import { GoBell, GoCloud, GoCode, GoCopilot, GoDesktopDownload } from "react-icons/go";

const CompsApp = () => {
    return (
        <div className="container mx-auto relative">
            <h1>App</h1>
            <div>
                <Button success rounded outline>
                    <GoBell />
                    Click Me
                </Button>
            </div>
            <div>
                <Button danger outline>
                    <GoCloud />
                    Buy Now!
                </Button>
            </div>
            <div>
                <Button warning rounded>
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

export default CompsApp;