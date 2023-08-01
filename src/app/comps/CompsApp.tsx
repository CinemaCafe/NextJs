import Button from "./components/Button";

const CompsApp = () => {
    return (
        <div className="container mx-auto relative">
            <h1>App</h1>
            <div>
                <Button success rounded outline>Click Me</Button>
            </div>
            <div>
                <Button danger>Buy Now!</Button>
            </div>
            <div>
                <Button warning>See Deal!</Button>
            </div>
            <div>
                <Button secondary rounded outline>Hi Ads!</Button>
            </div>
            <div>
                <Button primary rounded outline>Something!</Button>
            </div>

        </div>
    )
}

export default CompsApp;