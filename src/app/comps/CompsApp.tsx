import Accordion from "./components/Accordion";
import Button from "./components/Button";

const CompsApp = () => {
    const items = [
        {
            id: 'asdxs',
            label: 'Can I use React on a project?',
            content: 'You can use React on any project you want.'
        },
        {
            id: 'zxcsd',
            label: 'Can I use Javascript on a project?',
            content: 'You can use Javascript on any project you want.'
        },
        {
            id: 'jkinb',
            label: 'Can I use CSS on a project?',
            content: 'You can use CSS on any project you want.'
        }
    ]
      

    return (
        <>
            <Button primary rounded>Test</Button>
            {/* <Accordion Items={items}/> */}
            {/* <Nested orgData={org}/> */}
        </>
    )
}

export default CompsApp;